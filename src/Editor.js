import EditorNavigation from "./EditorNavigation";
import TextArea from "./TextArea";

/**
 * Here you add Markdown syntax to the text to indicate which words and phrases should look different.
 * @returns Textarea field to paste text, and navigation buttons, that allows marking text quickly.
 */
export default function Editor() {
  return (
    <div id="editor">
       <div id="editor-title">EDITOR</div>
      <EditorNavigation />
      <TextArea />
    </div>
  )
}
