export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: string;
          excerpt: string | null;
          author: string;
          date: string;
          modified: string;
          featured_image: string | null;
          post_status: 'publish' | 'draft';
          post_type: string;
          categories: string[];
          tags: string[];
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content: string;
          excerpt?: string | null;
          author: string;
          date?: string;
          modified?: string;
          featured_image?: string | null;
          post_status?: 'publish' | 'draft';
          post_type?: string;
          categories?: string[];
          tags?: string[];
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: string;
          excerpt?: string | null;
          author?: string;
          date?: string;
          modified?: string;
          featured_image?: string | null;
          post_status?: 'publish' | 'draft';
          post_type?: string;
          categories?: string[];
          tags?: string[];
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          email: string;
          role: 'admin' | 'author';
          created_at: string;
        };
        Insert: {
          id: string;
          email: string;
          role: 'admin' | 'author';
          created_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role?: 'admin' | 'author';
          created_at?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
