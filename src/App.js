import React from "react";
import './App.css'
import Main from "./main";
//import BoxShadow from './BoxShadow';
const App = () => {


  return (
    <>
      <header className="active">

        <div>
          <p>Shadow</p>
          </div>
          <div className="buttons-wrapper">
            <a href="https://best-colorpalettes.netlify.app/" className="get-color" target="_blank" rel="noreferrer">
              <span>Color-Palette</span>
            </a>
          </div>
        
      </header>
      <h1>Beautiful CSS Box-Shadow</h1>
      <p className="desc">Each shadow can be easily copied to your clipboard, allowing you to effortlessly apply the desired box shadow effect to your web projects. Explore the possibilities and enhance your website's visual appeal with creative box shadow designs.</p>
      <Main />
      
    </>
  );
};

export default App;
