import './navbar.scss';
import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const Navbar = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
        <Image
        className="navbar-desktop"
          src={blok.desktopImage.filename}
          alt="Preview of Navbar"
          width={2000}
          height={200}
          key={blok.desktopImage.id}
        />
        <Image
        className="navbar-tablet"
          src={blok.tabletImage.filename}
          alt="Preview of Navbar"
          width={2000}
          height={400}
          key={blok.tabletImage.id}
        />
    </div>
  );
};

export default Navbar;
