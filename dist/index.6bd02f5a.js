/**
 * lkjkjl
 * <div id="parent">
        <div id="child">
            <h1></h1>
        </div>
        <div id="child2">
            <h1></h1>
        </div>
    </div>
 * 
 */ // import React from "react";
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "child2"
    }, React.createElement("h3", {}, "I am t3 tag"))
]);
const heading = React.createElement("h1", {
    id: "heading"
}, "Hello World from React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
