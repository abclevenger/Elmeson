import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

/** Canonical URL format: no trailing slash. Redirect /path/ → /path (301). */
function redirectTrailingSlash(request: NextRequest): NextResponse | null {
  const pathname = request.nextUrl.pathname;
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const canonical = pathname.slice(0, -1);
    const url = request.nextUrl.clone();
    url.pathname = canonical;
    return NextResponse.redirect(url, 301);
  }
  return null;
}

export async function middleware(request: NextRequest) {
  // SEO: Consolidate duplicate URLs — 301 redirect trailing slash to canonical (no slash)
  const trailingRedirect = redirectTrailingSlash(request);
  if (trailingRedirect) return trailingRedirect;

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    return response;
  }

  const supabase = createServerClient(
    supabaseUrl,
    supabaseAnonKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  // Protect admin routes (except login and invite complete)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login' && pathname !== '/admin/invite/complete') {
    if (!user) {
      const url = request.nextUrl.clone();
      url.pathname = '/admin/login';
      return NextResponse.redirect(url);
    }

    // Check role for specific routes
    if (pathname.startsWith('/admin/users')) {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (!profile || profile.role !== 'admin') {
        const url = request.nextUrl.clone();
        url.pathname = '/admin/blog';
        return NextResponse.redirect(url);
      }
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Run on page routes for trailing-slash redirect; exclude static assets
    '/((?!_next|api|images|favicon|sitemap|robots).*)',
  ],
};
