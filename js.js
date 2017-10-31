var firstName = document.getElementById("first-name"),
lastName = document.getElementById("last-name"),
id = document.getElementById("id"),
email = document.getElementById("email"),
addButton = document.getElementById("add-button"),
clearButton = document.getElementById("clear-button"),
displayDiv = document.getElementById("customer-list"),
nextId = 0,
customerList = [];

phrases1 = ["Once upon a time",
"In a small village by the sea",
"Long ago and far away",
"In a world",
"A long time ago, in a galaxy far, far away"],
phrases2 = ["lived someone named",
"there lived a person called",
"a mad scientist created a hideous monster called",
"lived a beautiful beast named",
"existed an ancient alien who went by the odd name of"],
phrases3 = [
"who ate",
"who was eaten by",
"who fell in love with",
"who was betrayed by",
"who loved to play quietly with",
"who killed"],

phrases4 = [
"an apple",
"a  dragon",
"a scary ghost",
"a beautiful young woman",
"a handome young man",
"Superman",
"a puzzle with a picture of a lovely river",
"a horrifying gorgon"];

var points = [id, firstName, lastName, email];
points.sort(function(a, b){return a - b});

var getPhrase = function getPhrase(wordList){
var randy = getRandomNumber(0, wordList.length - 1);
return wordList[randy];
}

makeButton.addEventListener("click", function(){
var results = getPhrase(phrases1);
results += " " + getPhrase(phrases2); 
results += " " + userName.value;
results += " " + getPhrase(phrases3);
results += " " + getPhrase(phrases4);
results += ".";

resultsArea.innerHTML += '<p class="random-sentence">' + results + "</p>"; 
});

clearButton.addEventListener("click", function(){
resultsArea.innerHTML = "";
userName.value = "";
});

var getRandomNumber = function getRandomNumber(min, max){
min = Math.ceil(min);
max = Math.floor(max);
var randy = Math.random();

return Math.floor(randy * (max - min + 1) + min);
}

var Customer = function Customer(firstName, lastName, salutation){
this.firstName = firstName;
this.lastName = lastName;
this.salutation = salutation;
this.id = nextId++;

this.greetFormally = function greetFormally(){
    var greetString = "Greetings ";

    if(this.salutation == ""){
        greetString += this.firstName + " " + this.lastName;
    } else {
        greetString += this.salutation + " " + this.lastName;
    }

    return greetString;
    } 
}

var renderCustomers = function renderCustomers(){
displayDiv.innerHTML = " ";

for(var i = 0; i < customerList.length; i++){
    var curCustomer = customerList[i];
    displayDiv.innerHTML += i + " : " + curCustomer.greetFormally() + "<br>";
}
};

var clearInputs = function clearInputs(){
firstName.value = " ";
lastName.value = " ";
salutation.value = " ";
};

addButton.addEventListener("click", function(){
if(firstName.value == " " || lastName.value == " ")
{
    alert("Hey! You didn't enter a first name or last name!");
    return;
}
var newCustomer = new Customer(firstName.value,
    lastName.value, salutation.value);

customerList.push(newCustomer);

clearInputs();
renderCustomers();
});

clearButton.addEventListener("click", function(){
customerList = [];

renderCustomers();
clearInputs();
});
