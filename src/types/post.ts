export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  author: string;
  date: string;
  modified: string;
  featured_image?: string | null;
  post_status: 'publish' | 'draft';
  post_type: string;
  categories: string[];
  tags: string[];
}

export interface PostInsert {
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  author: string;
  featured_image?: string | null;
  post_status?: 'publish' | 'draft';
  post_type?: string;
  categories?: string[];
  tags?: string[];
}

export interface PostUpdate {
  title?: string;
  slug?: string;
  content?: string;
  excerpt?: string | null;
  author?: string;
  featured_image?: string | null;
  post_status?: 'publish' | 'draft';
  post_type?: string;
  categories?: string[];
  tags?: string[];
}
