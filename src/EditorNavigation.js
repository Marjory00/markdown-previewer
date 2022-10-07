import { useContext } from "react";
import { MarkdownContext } from "./MarkdownProvider";
import { FaBold, FaCode, FaItalic, FaListOl, FaListUl,  FaLink, FaQuoteRight, FaStrikethrough, FaImage, FaTable } from 'react-icons/fa';
 

/**
 * The Component is responsible for adding Markdown formatting elements to plain text.
 * @returns buttons, that cover plain text with a corresponding Markdown syntax.
 */

export default function EditorNavigation() {
  const { insertH1, insertH2, insertLink, insertCode, insertListOl, insertListUl, insertQuote, insertTable, insertImg, makeBold, makeItalics, makeStrikethrough } = useContext(MarkdownContext);
  return (
    <div id="editor-nav">
      <button className="nav-button header-button btn btn-light" onClick={insertH1} type="button">H1</button>
      <button className="nav-button h2-button btn btn-light" onClick={insertH2} type="button">H2</button>
      <button className="nav-button link-button btn btn-light" onClick={insertLink} type="button"><FaLink /></button>
      <button className="nav-button code-button btn btn-light" onClick={insertCode} type="button"><FaCode /></button>
      <button className="nav-button list-ol-button btn btn-light" onClick={insertListOl} type="button"><FaListOl /></button>

      <button className="nav-button list-ol-button btn btn-light" onClick={insertTable} type="button"><FaTable /></button>
      <button className="nav-button list-ul-button btn btn-light" onClick={insertListUl} type="button"><FaListUl /></button>
      <button className="nav-button quote-button btn btn-light" onClick={insertQuote} type="button"><FaQuoteRight /></button>
      <button className="nav-button img-button btn btn-light" onClick={insertImg} type="button"><FaImage /></button>
      <button className="nav-button bold-text-button btn btn-light" onClick={makeBold} type="button"><FaBold /></button>
      <button className="nav-button italics-text-button btn btn-light" onClick={makeItalics} type="button"><FaItalic /></button>
      <button className="nav-button strikethrough-text-button btn btn-light" onClick={makeStrikethrough} type="button"><FaStrikethrough /></button>
    </div>
  )
}