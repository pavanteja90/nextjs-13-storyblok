import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }: { blok: Block }) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
  </div>
);

export default Feature;
