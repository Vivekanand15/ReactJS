// import react and reactDom
import React from "react"
import ReactDOM from "react-dom";

//  Create a react Component
function getTime(){
    return (new Date()).toLocaleTimeString();
}
function getEl(){
    return 'clikc over Me!';
}
const App=() =>{
    const button={text:'cick me',ar:'blik'};
    return (
    <div>
    <label htmlfor="inp" className="cls">Enter Name:</label>
    <input type="text" id="inp" />
  <button style={{backgroundColor: 'green', color:'white'}}>
      {getTime()}
      </button>
  </div>
    )
};

//  take a react component and render it on the screen

ReactDOM.render(<App />, document.querySelector('#root'));