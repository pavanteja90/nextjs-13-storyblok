import './description.css';
import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";

const SRTopPerformer = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="sr-description">{blok.text}</h1>
    </div>
  );
};

export default SRTopPerformer;
