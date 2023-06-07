import { storyblokEditable } from "@storyblok/react/rsc";
import { Converter } from "showdown";
import { renderRichText } from "@storyblok/js";


const SubText = ({ blok }: { blok: any }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div
        dangerouslySetInnerHTML={{
          __html: blok?.MdSubtext && convertMarkdownToHtml(blok.MdSubtext),
        }}
      ></div>
      <div
        dangerouslySetInnerHTML={{
          __html: blok?.RtSubtext && renderRichText(blok.RtSubtext),
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

export default SubText;
