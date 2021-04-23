//Import React and ReactDOM libraries 
import React from 'react'; // assigns react library to the object React 
import ReactDOM from 'react-dom';

const name = 'Nuriman Tjiptarto';

//Create a Basic React Component
const App = () => {
    return <ul className="list" style={{backgroundColor: 'black ', color:'white'}}>
        <label htmlFor="some">Label text</label>
        <li>{ name }</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul>;
};

//Render Component into DOM 
ReactDOM.render( 
    <App />, 
    document.querySelector('#root')

);