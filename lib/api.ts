const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export interface EventData {
  id: number;
  title: string;
  description: string;
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
  order: number;
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string | null;
  icon: string;
}

export interface PhotoData {
  id: number;
  image: string;
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
