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
