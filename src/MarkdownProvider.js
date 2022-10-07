import React, { createContext, useState } from "react";
import { placeholder } from "./placeHolderText";

/**
 * Context is created to store state data in a single location, so there is no need to pass that data through a bunch of components.
 */
export const MarkdownContext = createContext();

/**
 * The component that will be used to wrap the App with the provider.
 */
export default function MarkdownProvider({children}) {
  const [ input, setInput ] = useState(placeholder);
  const [ selected, setSelected ] = useState(null);

  /**
   * The function tracks the changes in a Textarea field.
   */
  function handleChange(event) {
    setInput(event.target.value);
  }

  /**
   * The function tracks the text that a user selects.
   */
  function selectText(event) {
    setSelected(event.target.value.substring(event.target.selectionStart, event.target.selectionEnd));
  }

  /**
   * The function changes the text that the user selects with specific syntax and updates the input (editor) field according to it.
   * If there is no text selected, an alert window appears.
   * @param {*} oldSelected- a text that the user selects to mark with tags or punctuation characters.
   * @param {*} newSelected - a text that is already marked appropriately.
   */
  function updateSelectedText(newSelected, oldSelected) {
    if(selected) {
      setSelected(newSelected);
      setInput(input.replace(oldSelected, newSelected));
    } else {
      alert('Select text and then press the button');
    }
  }

  /**
   * The function triggers the functionality to update selected text and clears the 'selected' state after it (so that no text is selected).
   */
  function makeMarkdownButton(newSelected) {
    const oldSelected = selected;
    updateSelectedText(newSelected, oldSelected);
    setSelected(null);
  }

/**
 * Each method is called on a specific button and sets the syntax to modify the text that a user selects.
 */
// #region Button methods
  function insertH1() {
    const textToEdit = '# ' + selected;
    makeMarkdownButton(textToEdit);
  }

  function insertH2() {
    const textToEdit =  '## ' + selected;
    makeMarkdownButton(textToEdit);
  }

  function insertLink() {
    const textToEdit = `[${selected}](insert link here)`;
    makeMarkdownButton(textToEdit);
  }

  function insertCode() {
    // eslint-disable-next-line no-useless-concat
    const textToEdit = '`' + selected + '`' + '\n';
    makeMarkdownButton(textToEdit);
  }

  function insertListOl() {
    const textToEdit = selected.split('\n').map((item, i) => `${i+1}. ${item}`).join('\n');
    makeMarkdownButton(textToEdit);
  }

  function insertListUl() {
    const textToEdit = '- ' + selected.split('\n').join('\n- ');
    makeMarkdownButton(textToEdit);
  }

  function insertQuote() {
    const textToEdit = '> ' + selected;
    makeMarkdownButton(textToEdit);
  }

  function insertImg() {
    const textToEdit = `![${selected}](insert image link here)`;
    makeMarkdownButton(textToEdit);
  }

  function makeBold() {
    const textToEdit = '**' + selected + '**';
    makeMarkdownButton(textToEdit);
  }

  function makeItalics() {
    const textToEdit = '*' + selected + '*';
    makeMarkdownButton(textToEdit);
  }

  function makeStrikethrough() {
    const textToEdit = '~~' + selected + '~~';
    makeMarkdownButton(textToEdit);
  }
  //#endregion

  /**
   * The Provider is the App component’s parent, and it’s providing values in context. The App component’s children can obtain these values directly on their own.
   */
  return (
    <MarkdownContext.Provider value={{ input, handleChange, insertH1, insertH2, insertLink, insertCode, insertListOl, insertListUl, insertQuote, insertImg, makeBold, makeItalics, makeStrikethrough, selectText }}> 
      {children}
    </MarkdownContext.Provider>
  )
}