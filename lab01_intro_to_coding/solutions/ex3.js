/*
  Exercise 3
  DOM manipulation with vanilla JS
*/


// Task
// Select HTML elements
const viz = document.body.querySelector(".viz");
const button = document.body.querySelector("#button");

// This function creates a new div as a "child" of the viz element
// it is called from the function drawIrisData
const addChildToViz = (len) => {
  const newChild = document.createElement("div");
  newChild.className = "rectangle";
  newChild.style.height = len * 10 + "px";
  viz.appendChild(newChild);
};

// Task
// Modify index.html to make this event listener work
button.addEventListener("click", addChildToViz);

// fetches iris data
// runs through data and creates one rectangle per petal item
function drawIrisData() {
  window
    .fetch("./iris_json.json")
    .then(data => data.json())
    .then(data => {
      data.forEach(e => {
        addChildToViz(e.petallength);
      });
    });
}

drawIrisData();

// Task
// Modify the code above to visualize the Iris dataset in the preview of index.html.