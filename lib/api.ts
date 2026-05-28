const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://sira-backend-7zre.onrender.com/api';

export interface EventData {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  image_small?: string;
  image_medium?: string;
  date: string;
  time: string;
  location: string;
  category: string;
  status: string;
}

export interface PostData {
  id: number;
  title: string;
  slug: string;
  content: string;
  summary: string;
  published_at: string;
  status: string;
}

export interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  image_small?: string;
  image_medium?: string;
  order: number;
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string | null;
  image_small?: string;
  image_medium?: string;
  icon: string;
}

export interface PhotoData {
  id: number;
  image: string;
  image_small?: string;
  image_medium?: string;
  legend: string | null;
  date: string | null;
  facebook_url: string | null;
  is_active: boolean;
}

export async function getEvents(): Promise<EventData[]> {
  try {
    const res = await fetch(`${API_URL}/events`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<EventData | null> {
  try {
    const res = await fetch(`${API_URL}/events?slug=${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const events = await res.json();
    return events.find((e: EventData) => e.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching event by slug:', error);
    return null;
  }
}

export async function getPosts(): Promise<PostData[]> {
  try {
    const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  try {
    const res = await fetch(`${API_URL}/posts?slug=${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts.find((p: PostData) => p.slug === slug) || null;
  } catch (error) {
    console.error('Error fetching post by slug:', error);
    return null;
  }
}

export async function getTeamMembers(): Promise<TeamMemberData[]> {
  try {
    const res = await fetch(`${API_URL}/team-members`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}

export async function getServices(): Promise<ServiceData[]> {
  try {
    const res = await fetch(`${API_URL}/services`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

export async function getPhotos(): Promise<PhotoData[]> {
  try {
    const res = await fetch(`${API_URL}/photos`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
}

// ─── Page / Block Builder types ────────────────────────────────────────────

export interface HeroBlockData {
  title: string;
  subtitle: string;
  btn1_text?: string;
  btn1_link?: string;
  btn2_text?: string;
  btn2_link?: string;
}

export interface TextBlockData {
  content: string;
}

export interface ServicesGridBlockData {
  heading: string;
  description: string;
}

export interface EventsBlockData {
  heading: string;
  count: number;
}

export interface CtaBlockData {
  title: string;
  subtitle: string;
  btn_text?: string;
  link?: string;
}

export interface GalleryGridBlockData {
  heading: string;
}

export interface TeamGridBlockData {
  heading: string;
}

export interface LatestPostsBlockData {
  heading: string;
  count: number;
}

export interface InfoGridBlockData {
  items: {
    title: string;
    content: string;
    icon?: string;
  }[];
}

export interface MapBlockData {
  title?: string;
  embed_url: string;
}

export interface InfoImageBlockData {
  title: string;
  content: string;
  image: string;
  image_small?: string;
  image_medium?: string;
  image_alt?: string;
}

export interface ContactFormBlockData {
  heading?: string;
  description?: string;
}

export type PageBlock =
  | { type: 'hero'; data: HeroBlockData }
  | { type: 'text'; data: TextBlockData }
  | { type: 'services_grid'; data: ServicesGridBlockData }
  | { type: 'events'; data: EventsBlockData }
  | { type: 'cta'; data: CtaBlockData }
  | { type: 'gallery_grid'; data: GalleryGridBlockData }
  | { type: 'team_grid'; data: TeamGridBlockData }
  | { type: 'latest_posts'; data: LatestPostsBlockData }
  | { type: 'info_grid'; data: InfoGridBlockData }
  | { type: 'map'; data: MapBlockData }
  | { type: 'info_image'; data: InfoImageBlockData }
  | { type: 'contact_form'; data: ContactFormBlockData };



export interface PageData {
  id: number;
  title: string;
  slug: string;
  content: PageBlock[];
  is_published: boolean;
  updated_at: string;
}

export async function getPages(): Promise<{ id: number; title: string; slug: string }[]> {
  try {
    const res = await fetch(`${API_URL}/pages`, { next: { revalidate: 60 } });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPage(slug: string): Promise<PageData | null> {
  try {
    const res = await fetch(`${API_URL}/pages/${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error(`Error fetching page "${slug}":`, error);
    return null;
  }
}

/**
 * Helper to get a resized image URL based on naming convention.
 * Backend creates {name}_small.{ext} and {name}_medium.{ext}
 */
export function getResizedImageUrl(path: string | null | undefined, size: 'small' | 'medium'): string {
  if (!path) return '';

  // If it's already a full URL, we can't easily guess the resized version unless we know the pattern
  // But for our local storage paths (e.g. "photos/abc.jpg")
  if (path.startsWith('http')) {
    // If it's from our own API, it might already have the suffix if passed from virtual attributes
    // But for blocks, we might need to inject it.
    if (path.includes('_small.') || path.includes('_medium.')) return path;

    const parts = path.split('.');
    const ext = parts.pop();
    return `${parts.join('.')}_${size}.${ext}`;
  }

  const parts = path.split('.');
  const ext = parts.pop();
  const base = parts.join('.');

  return `/storage/${base}_${size}.${ext}`;
}

