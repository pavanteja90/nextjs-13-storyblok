export default interface Story {
  id: string;
  story: StoryData;
  cv?: number;
  rels?: any[];
  links?: any[];
}

interface StoryData {
  name: string;
  created_at: Date;
  published_at?: Date;
  id: number;
  uuid: string;
  content: any;
  slug: string;
  full_slug: string;
  sort_by_date?: Date;
  position: number;
  tag_list: any[];
  is_startpage: boolean;
  parent_id: number;
  meta_data?: any;
  group_id: string;
  first_published_at?: Date;
  release_id: any;
  lang: string;
  path: string;
  alternates?: any[];
  default_full_slug?: string;
  translated_slugs?: string;
}
