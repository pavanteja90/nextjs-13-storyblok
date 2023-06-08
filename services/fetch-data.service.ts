import { Story, StoryContent, StoryInfo } from "@/models/Story.model";

export async function fetchDraftStoryContent(
  slug: string
): Promise<StoryContent | void> {
  const story = await fetchDraftStory(slug);
  return story?.content;
}

export async function fetchDraftStory(slug: string): Promise<StoryInfo | void> {
  // Load the draft version
  const sbParams = { version: "draft" };
  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${sbParams.version}&token=${process.env.STORYBLOK_API_TOKEN}`,
    { cache: "no-store" }
  ).then(
    (response) => {
      const resp: Promise<Story> = response.json();
      return resp;
    },
    (error) => {
      console.error("Unable to fetch draft story info", error);
      return undefined;
    }
  );
  return response?.story;
}
