import { Story, StoryContent, StoryInfo } from "@/models/Story.model";

export async function fetchDraftStoryContent(
  slug: string
): Promise<StoryContent> {
  try{
    const story = await fetchDraftStory(slug);
    return story?.content;
  } catch (error) {
    throw new Error(`Unable to fetch draft story content: ${error}`);
  }
}

export async function fetchDraftStory(slug: string): Promise<StoryInfo> {
  try {
    // Load the draft version
    const sbParams = { version: "draft" };
    const response = await fetch(
      `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${sbParams.version}&token=${process.env.STORYBLOK_API_TOKEN}`,
      { cache: "no-store" }
    );
    const story: Promise<Story> = response.json();
    return (await story).story;
  } catch (error) {
    throw new Error(`Unable to fetch draft story info: ${error}`);
  }
}
