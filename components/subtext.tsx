import { Block } from "@/models/Story.model";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import { Converter } from "showdown";

const SubText = ({ blok }: { blok: Block }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div
        dangerouslySetInnerHTML={{
          __html: blok?.MdSubtext && convertMarkdownToHtml(blok.MdSubtext),
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: blok?.MdSubtext && convertRichtextToHtml(blok.RtSubtext),
        }}
      ></div>
    </div>
  );
};

const convertMarkdownToHtml = (markdown: string) => {
  const converter = new Converter();
  const html = converter.makeHtml(markdown);
  return html;
};

const convertRichtextToHtml = (richtext: any) => {
  const renderedContent = renderRichText(richtext);
  return renderedContent;
};

export default SubText;
