import { Block } from "@/models/Story.model";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Grid = ({ blok }: { blok: Block }) => {
  return (
    <div className="grid grid-cols-3" {...storyblokEditable(blok)}>
      {blok.columns?.map((nestedBlok: Block) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Grid;
