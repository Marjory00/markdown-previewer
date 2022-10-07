import { useContext } from "react";
import { MarkdownContext } from "./MarkdownProvider";
import Markdown from 'marked-react'; 


/**
 * The component used to preview the text written in markdown language. Changes are reflected in real-time as you edit.
 * @returns a Markdown component that converts the Markdown string into an HTML string.
 */
export default function Previewer() {
  const { input } = useContext(MarkdownContext);
  return (
    <div id="previewer">
     
      <div id="preview-text">
        <Markdown>{input}</Markdown>
      </div>
    </div>
  )
}