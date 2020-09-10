var wrapperEle =document.body.querySelector(".wrapper");
var buttonEle =document.body.querySelector(".editButton");

var miles = Number(prompt("Enter the number of miles per year:"));
var cost = Number(prompt("Enter the cost of gallon:"))

function Cost(miles,cost,rating){
   return (miles*cost)/rating; 
}

document.write("To drive a car with an MPG rating of 12 for "+miles+" at $"+cost+" per gallon would cost "+Cost(miles, cost, 12));

document.write("<br>To drive a car with an MPG rating of 17 for "+miles+" at $"+cost+" per gallon would cost "+Cost(miles, cost, 17));

document.write("<br>To drive a car with an MPG rating of 26 for "+miles+" at $"+cost+" per gallon would cost "+Cost(miles, cost, 26));

document.write("<br>To drive a car with an MPG rating of 29 for "+miles+" at $"+cost+" per gallon would cost "+Cost(miles, cost, 29));

buttonEle.addEventListener("click", function(){
  Cost();
})