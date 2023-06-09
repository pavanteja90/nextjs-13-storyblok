import './important-notes.css';
import { Block } from "@/models/Story.model";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";

const SRImportantNotes = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
      {/* TEST */}
      <div
        dangerouslySetInnerHTML={{
          __html: blok?.notes && convertRichtextToHtml(blok.notes),
        }}
      ></div>
    </div>
  );
};

const convertRichtextToHtml = (richtext: any) => {
  const renderedContent = renderRichText(richtext);
  return renderedContent;
};

export default SRImportantNotes;
