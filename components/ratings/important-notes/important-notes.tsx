'use client';
import './important-notes.css';
import { Block } from "@/models/Story.model";
import { storyblokEditable, renderRichText } from "@storyblok/react/rsc";
import { useState } from 'react';

const SRImportantNotes = ({ blok }: { blok: Block }) => {
  const showText = 'Show Important Notes*†';
  const hideText = 'Hide Important Notes*†';

  const [isShowing, setIsShowing] = useState(false);
  const [noteTitle, setTitle] = useState(showText);

  const toggle = () => {
    setIsShowing(!isShowing);
    !isShowing ? setTitle(hideText) : setTitle(showText);
  };
  
  return (
    <div className="sr-note-container">
      <button className='sr-note-button'
        onClick={toggle}
        type="button"
      >
        <p className="pl-3">{noteTitle}</p>
      </button>
      <div className='p-3'
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
