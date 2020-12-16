import React from "react";
import ReactDOM from "react-dom";


const Book = (props) => {
  return <div>
     <h2>{props.name}</h2>
     <p>{props.year}</p>
     <p>{props.price}</p>
  </div>
  
//   React.createElement("div", {}, [
//     React.createElement("h2", {}, props.name),
//     React.createElement("p", {}, props.year),
//     React.createElement("p", {}, props.price)
//   ]);
};

const App = () => {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );
};


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement
);
