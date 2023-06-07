import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import { Converter } from "showdown";

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

const convertRichtextToHtml = (richtext) => {
  const renderedContent = renderRichText(richtext);
  console.log(renderedContent);
  return renderedContent;
};

export default SubText;
