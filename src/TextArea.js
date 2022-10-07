import { useContext } from "react";
import { MarkdownContext } from "./MarkdownProvider";

/**
 * The component accepts any markup that is covered or not covered by Markdown’s syntax. Here you can add, delete and edit your text.
 * @returns Textarea that tracks changes and memorizes the text a user selects.
 */
export default function TextArea() {
  const { input, handleChange, selectText } = useContext(MarkdownContext);
  return (
    <textarea id="editor-text" value={input}
       onChange={handleChange} onSelect={selectText}>
    </textarea>
  )
}