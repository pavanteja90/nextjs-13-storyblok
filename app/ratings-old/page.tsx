import { fetchDraftStoryContent } from "@/services/fetch-data.service";
import { StoryblokComponent } from "@storyblok/react/rsc";
import SRSbProvider from "./ratings-sb.provider";
import { Block } from "@/models/Story.model";

export default async function StarRatings() {
  const storyContent = await fetchDraftStoryContent("ratings-old");
  return (
    <SRSbProvider>
      {storyContent._uid ? (
        storyContent.body.map((nestedBlok: Block) => (
          <section
            key={nestedBlok._uid}
            style={{ margin: nestedBlok.component != "navbar" ? '2.5rem 0' : 0 }}
          >
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          </section>
        ))
      ) : (
        <h4>
          Unable to load story data. Please check if everything is configured
          properly
        </h4>
      )}
    </SRSbProvider>
  );
}
