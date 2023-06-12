import { StoryblokComponent } from "@storyblok/react/rsc";
import StoryblokProvider from "@/providers/storyblok.provider";
import { fetchDraftStoryContent } from "@/services/fetch-data.service";

export default async function Home() {
  const storyContent = await fetchDraftStoryContent("home");
  return (
    <StoryblokProvider>
      {storyContent._uid ? (
        <StoryblokComponent blok={storyContent} key={storyContent._uid} />
      ) : (
        <h4>
          Unable to load story data. Please check if everything is configured
          properly
        </h4>
      )}
    </StoryblokProvider>
  );
}
