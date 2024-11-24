import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "head", xyz: "abc" },
  "Hello World by React!"
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(heading1);
console.log(heading1); // return object

/* HTML content
              <div id="parent">
                  <div id="child1">
                      <h1>I'm in c1h1 tag</h1>
                      <h2>I'm in c1h2 tag</h2>
                  </div>
                  <div id="child2">
                      <h1>I'm in c2h1 tag</h1>
                      <h2>I'm in c2h2 tag</h2>
                  </div>
              </div> 
              */

// Above html content is created by REACT below

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm in c1h1 tag 🚀"),
    React.createElement("h2", {}, "I'm in c1h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm in c2h1 tag"),
    React.createElement("h2", {}, "I'm in c2h2 tag"),
  ]),
]);

root1.render(parent);
console.log(parent);

// JSX - HTML-like or XML-like syntax
// JSX (transpiled before it raches the JS Engine by Parcel) (Parcel has babel in 'node_modules' who do this)
// If we write JSX in multiple line then we have to use '()' for the scope of that JSX code

// React Element
const jsxHeading = (
  <h1 id="heading" className="heading">
    Namaste React using JSX 🚀
  </h1>
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);

// React Component (1-Class based components 2-Functional component)
const Heading = () => <h1 className="heading">Functional Component</h1>;
root.render(<Heading/>);

// Component Composition
const ComponentHeading = () => (
  <div>
    <Heading />
    <h1 className="comHeading">Composition Component</h1>
  </div>
);
root.render(<ComponentHeading/>);

const value = 1000;
const Test = () => (
  <div>
    {value}
    <b>{30 + 90}</b>
    
    /* all the 3 are same */
    {Heading()}
    <Heading/>
    <Heading></Heading>
    
    <h1 className="test">This is test</h1>;
  </div>
);
root.render(<Test/>);

