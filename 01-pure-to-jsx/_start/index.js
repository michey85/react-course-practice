import React from "react";
import ReactDOM from "react-dom";

// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}
const Book = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.year),
    React.createElement("p", {}, props.price)
  ]);
};

const App = () => {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );

  // React.createElement("div", {}, [
  //   React.createElement(
  //     "h1",
  //     { id: "hello", className: "class1" },
  //     "Hello from React"
  //   ),
  //   React.createElement(Book, {
  //     name: "JS for beginners",
  //     year: 2018,
  //     price: 1000
  //   }),
  //   React.createElement(Book, { name: "React", year: 2020, price: 1200 }),
  //   React.createElement(Book, { name: "Vue JS", year: 2019, price: 1100 })
  // ]);
};


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement
);
