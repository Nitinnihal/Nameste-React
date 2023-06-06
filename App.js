import React from "react";
import ReactDOM from "react-dom/client"




// const heading = React.createElement("h1" , {id:"heading"} , "hello world from React.");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);



// 1/*
//    <div id = "parent">
//         <div id = "child">
//             <h1>
//             I'm inside h1 tag.
//             </h1>
//         </div>
//     </div>


// */

// // const parent = React.createElement("div" , {id:"parent"} , 
// //     React.createElement("div" , {id:"child"} , 
// //         React.createElement("h1" , {} , "I'm inside h1 tag.")
// //     )
// // )
// // console.log(parent);
// // const root = ReactDOM.createRoot(document.getElementById("root"));

// // root.render(parent);



// /*2
//     <div id = "parent">
//         <div id = "child">
//             <h1>I'm inside h1 tag!</h1>
//             <h2>I'm sibling of h1 tag</h2>
//         </div>
//     </div>

// */

// const parent = React.createElement("div" , {id:"parent"} , 
//     React.createElement("div" , {id:"child"} , 
//         [
//             React.createElement("h1" , {} , "I'm  inside h1 tag !"),
//             React.createElement("h2" , {} , "I'm sibling of h1 tag !!")
//         ]
//     )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);




/*3

    <div id = "parent">
       <div id = "child1">
            <h1>I'm inside h1 tag!</h1>
             <h2>I'm sibling of h1 tag</h2>
         </div>
         <div id = "child2">
            <h1>I'm inside h1 tag!</h1>
             <h2>I'm sibling of h1 tag</h2>
         </div>
     </div>
*/ 


const parent = React.createElement("div" , {id:"parent"} , 

    [
        React.createElement("div" , {id:"child1"} , 
            [
                React.createElement("h1" , {} , "this is nameste react !") , 
                React.createElement("h2" , {} , "I'm sibling of h1 tag!")
            ]
        ) , 
        React.createElement("div" , {id:"child2"} , 
            [
                React.createElement("h1" , {} , "I'm inside h1 tag!") , 
                React.createElement("h2" , {} , "I'm sibling of h1 tag!")

            ]
        )
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);