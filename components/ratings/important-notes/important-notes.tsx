'use client';
import './important-notes.css';
import { Block } from "@/models/Story.model";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import { useState } from 'react';

const SRImportantNotes = ({ blok }: { blok: Block }) => {
  const showContent = {
    text: "Show Important Notes*†",
    icon: "https://a.storyblok.com/f/233862/9x5/681dce0f9c/caret-down.png",
  }

  const hideContent = {
    text: "Hide Important Notes*†",
    icon: "https://a.storyblok.com/f/233862/9x5/26e9846036/caret-up.png",
  }

  const [isShowing, setIsShowing] = useState(false);
  const [noteTitle, setTitle] = useState(showContent.text);
  const [noteIcon, setIcon] = useState(showContent.icon);


  const toggle = () => {
    setIsShowing((prevState) => !prevState);

    let text = showContent.text;
    let icon = showContent.icon;

    !isShowing ? (text = hideContent.text, icon = hideContent.icon) : null;
    setTitle(text);
    setIcon(icon);

  };
  
  return (
    <div {...storyblokEditable(blok)} className="sr-note-container">
      <button className='sr-note-button'
        onClick={toggle}
        type="button"
      >
        <p className="px-3 py-2 text-sm">{noteTitle}</p>
        <img className="sr-caret-icon" src={noteIcon} alt="caret-icon" />
      </button>

      <div className='p-3 text-sm'
        style={{ display: isShowing ? "block" : "none" }}
        dangerouslySetInnerHTML={{
          __html: blok?.notes && convertRichtextToHtml(blok.notes),
        }}
      />
    </div>
  );
};

const convertRichtextToHtml = (richtext: any) => {
  const renderedContent = renderRichText(richtext);
  return renderedContent;
};

export default SRImportantNotes;
