import { Block } from "@/models/Story.model";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Page = ({ blok }: { blok: Block }) => (
  <main className="mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: Block) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
