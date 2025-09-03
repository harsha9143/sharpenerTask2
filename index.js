// Write your code below:
const mainHeading = document.getElementById("main-heading");

mainHeading.innerText = "Fruit World";
mainHeading.style.color = "orange";

const header = document.getElementById("header");
header.style.backgroundColor = "green";
header.style.borderBottom = "5px solid orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

const thanks = document.getElementById("thanks");

thanks.innerHtml = "<p>Please visit us again</p>";
console.log(thanks.innerHtml);

const fruits = document.getElementsByClassName("fruit");

fruits[2].style.backgroundColor = "yellow";

for (let i = 0; i < fruits.length; i++) {
  fruits[i].style.fontWeight = "bold";
}

const fruitsList = document.getElementsByTagName("li");

fruitsList[4].style.color = "blue";

for (let i = 0; i < fruitsList.length; i++) {
  fruitsList[i].style.fontStyle = "italic";
}

// Write the code as shown in the video below:

const mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "center";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

const basketHeading = document.querySelector("h2");
basketHeading.style.marginLeft = "30px";

const fruitsList = document.querySelectorAll(".fruit");

fruitsList.forEach((fruit) => {
  fruit.style.backgroundColor = "white";
  fruit.style.padding = "10px";
  fruit.style.margin = "10px";
  fruit.style.borderRadius = "5px";
});

const oddFruitsList = document.querySelectorAll(".fruit:nth-child(odd)");

oddFruitsList.forEach((fruit) => {
  fruit.style.backgroundColor = "lightgray";
});

// Write answer to the questions asked below:

const basketHeading2 = document.querySelector("#basket-heading");

basketHeading2.style.color = "brown";

const evenFruitsList = document.querySelectorAll(".fruit:nth-child(even)");

evenFruitsList.forEach((fruit) => {
  fruit.style.color = "white";
  fruit.style.backgroundColor = "red";
});
