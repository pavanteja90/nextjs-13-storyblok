import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";

const Teaser = ({ blok }: { blok: Block }) => {
  return (
    <h2 className="text-2xl mb-10" {...storyblokEditable(blok)}>
      {blok.headline}
    </h2>
  );
};

export default Teaser;
