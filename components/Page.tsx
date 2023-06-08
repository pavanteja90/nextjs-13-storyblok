import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import BlueSrTable from "./BlueSrTable";

const Page = async ({ blok }: { blok: any }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    {await BlueSrTable()}
  </main>
);

export default Page;
