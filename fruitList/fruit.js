const form = document.querySelector("form");
const fruits = document.querySelector(".fruits");

const inp = document.createElement("input");
inp.setAttribute("type", "text");
inp.setAttribute("id", "description");
form.insertBefore(inp, document.querySelector("button"));

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fruitName = document.querySelector("#fruit-to-add").value;
  const fruitDesc = document.querySelector("#description").value;

  const newFruit = document.createElement("li");
  newFruit.appendChild(document.createTextNode(fruitName));
  const para = document.createElement("p");
  para.appendChild(document.createTextNode(fruitDesc));
  para.style.fontStyle = "italic";
  newFruit.appendChild(para);

  const del = document.createElement("button");
  del.setAttribute("class", "delete-btn");
  del.appendChild(document.createTextNode("x"));
  newFruit.appendChild(del);

  fruits.appendChild(newFruit);
});

const filter = document.querySelector("#filter");

filter.addEventListener("keyup", (event) => {
  const val = event.target.value.toLowerCase();
  const fruitsList = document.querySelectorAll(".fruit");
  fruitsList.forEach((fruit) => {
    if (fruit.firstChild.textContent.toLowerCase().includes(val)) {
      fruit.style.display = "";
    } else if (
      fruit.querySelector("p") &&
      fruit.querySelector("p").textContent.toLowerCase().includes(val)
    ) {
      fruit.style.display = "";
    } else {
      fruit.style.display = "none";
    }
  });
});
