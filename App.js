import React from "react";
import ReactDOM from "react-dom/client";

// React functional components

// const Title = function(){
//     return(
//         <h1>hello Nameste React🚀</h1>
//     )
// };

const elem = (
    <sapn>(by akshay saini)</sapn>
);

const Title = () => (
    <div id = "title">
        <h1>{elem}Nameste React</h1>
    </div>
);


const Heading = () => (
    <>
     {/* <React.Fragment> */}
<div id = "container">
    <Title></Title>
    <Title />
   { Title() }
    <h1 className = "heading">Nameste react from Functional component 🚀. </h1>
</div>
<div id = "container-2"></div>
      {/* </React.Fragment> */}
</>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
