import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Navbar = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
        <Image
          src={blok.navbarImage.filename}
          alt="Preview of Navbar"
          width={1870}
          height={200}
          key={blok.navbarImage.id}
        />
    </div>
  );
};

export default Navbar;
