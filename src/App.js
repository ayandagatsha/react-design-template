
import './App.css';
import { useState } from 'react';

function App() {



  const styles = {
    style: "App-red", style2: "App-after-click", text: "hello world",
    
};

//  Inside the function
const [style, setStyle] = useState("App-red");

//  Inside the click function.
function clickHandler() { 
setStyle("App-after-click");
} 



 
  return(

    <div className="App">
      <header className="App-header">
       
      <h1 id="heading" onClick={clickHandler} className={style}>{styles.text}</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
        
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );

 
}

export default App;
