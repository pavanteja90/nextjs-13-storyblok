import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";

const HeaderText = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1>{blok.text}</h1>
    </div>
  );
};

export default HeaderText;
