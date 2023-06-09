import "./top-performer.css";
import { Block } from "@/models/Story.model";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";

const SRTopPerformer = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="card">
        <Image
          src={blok.canstarAward.filename}
          alt="Preview of Navbar"
          width={200}
          height={200}
          key={blok.canstarAward.id}
        />
        <section className="performer-info">
          <p className="title">{blok.title}</p>
          <p className="provider">{blok.providerName}</p>
          <p className="description">{blok.description}</p>
        </section>
        <Image
          src={blok.providerLogo.filename}
          alt="Preview of Navbar"
          width={250}
          height={200}
          key={blok.providerLogo.id}
        />
      </div>
    </div>
  );
};

export default SRTopPerformer;
