import './title.scss';
import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";

const SRTitle = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="sr-title">{blok.text}</h1>
    </div>
  );
};

export default SRTitle;
