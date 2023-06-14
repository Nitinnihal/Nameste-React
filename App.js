import React from "react";
import ReactDOM from "react-dom/client";

// React functional components

const Title = () => (
    <div id = "title">
        <h1> Nameste React</h1>
    </div>
);


const Heading = () => (
<div id = "container">
    <Title />
    <h1 className = "heading">Nameste react from Functional component 🚀. </h1>
</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
