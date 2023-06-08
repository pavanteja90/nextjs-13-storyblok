import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import BlueSrTable from "./BlueSrTable";

const Page = ({ blok }: { blok: any }) => (
  <main className="text-center mt-4" {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok: any) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    <BlueSrTable />
  </main>
);

export default Page;
