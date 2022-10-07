import React, { useState } from "react";
import "./app.css";
import "./index.css";
import { marked } from "marked";
import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Footer";
import EditorNavigation from "./EditorNavigation";
import MarkdownProvider from "./MarkdownProvider";


function App() {

  const initialState =  
    `# React Markdown Previewer!
  ## React (Hooks) x JavaScript
  [React](https://reactjs.org/)
  ### This is examples:
  
  I place all the **_JSX_** between \`<div></div>\`.
  \`\`\`

  // this is multi-line code:
  
  function App() {
    const initialState = "";
    const [editorText, setEditorText] = useState(initialState);
    return (
      <div className="App">
        <Editor />
        <Previewer />
      </div>
    );
  }
export default App;
  function anotherExample(firstLine, lastLine) {
    if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
      return multiLineCode;

    }
  }


  \`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
----------- | ------------ | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

  > And of course there are lists.
 <ul>
<li> Some are bulleted.</li>
<li> With different indentation levels.</li>
<li> That look like this.</li>
 </ul>
 <br>

> Also ...
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`
;
  

  const initialStateMarked = marked(initialState);
  const [editorText, setEditorText] = useState(initialState);
  const [formatted, setFormatted] = useState(initialStateMarked);

  const handleTextChange = (e) => {
    const texts = e.target.value;
    const html = marked(texts);
    setEditorText(texts);
    setFormatted(html);
    console.log(marked(`# hello
    
    ## world  
    
    `, {gfm: true, breaks: true}));
  };
  
    function createMarkup() {
    return { __html: formatted };
  }

  return (
    <div className="App">
    <div className="container-fluid">
    <div className="header-content header">
    <div id="header" className="header header-title">
      <h1>Markdown Previewer</h1>
      </div>
      </div>
      </div>
      <br></br>
   

  <div className="row">
  <div className="col-6 d-flex flex-column">
      <div className="container editor">
        <div className="Editor">
        <h2 className="text-center my-3">EDITOR</h2>
        <div className="flex-grow-1 d-flex flex-column">
        <MarkdownProvider>
       <EditorNavigation/>
       </MarkdownProvider>
       </div>
       </div>
        <textarea id="editor" className="editor flex-grow-1" onChange={handleTextChange} value={editorText} />
      </div>
      </div>

      <div className="col-6 d-flex flex-column">
      <div className="container preview">
        <h2 className="text-center my-3">PREVIEW</h2>
        <div class="bg-light p-3">
      <div className="topbar previewer">
      <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
    </div>
    </div>
    </div>
   
  
    <footer>
    Made by <span>{" "}</span>
        <a href="https://github.com/Marjory00" target="noopener" >
           Marjory D Marquez
        </a>    
        <Footer/>
        </footer>
        </div>
    
  );
}

export default App;