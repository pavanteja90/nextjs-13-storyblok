import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const SRDivider = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
        <Image
          src={blok.divider.filename}
          alt="Divider"
          width={2000}
          height={200}
          key={blok.divider.id}
        />
    </div>
  );
};

export default SRDivider;