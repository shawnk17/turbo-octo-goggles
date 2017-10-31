var firstName = document.getElementById("first-name"),
lastName = document.getElementById("last-name"),
id = document.getElementById("id"),
email = document.getElementById("email"),
addButton = document.getElementById("add-button"),
clearButton = document.getElementById("clear-button"),
displayDiv = document.getElementById("customer-list"),
nextId = 0,
customerList = [];

phrases1 = [" ",
" ",
" ",
" ",
" "],
phrases2 = [" ",
" ",
" ",
" ",
" "],
phrases3 = [
" ",
" ",
" ",
" ",
" ",
" "],

phrases4 = [
" ",
" ",
" ",
" ",
" ",
" ",
" ",
" "];

var points = [id, firstName, lastName, email];
points.sort(function(a, b, c, d){return a - b, c-d});

var getPhrase = function getPhrase(wordList){
var shawn = getRandomNumber(0, wordList.length - 1);
return wordList[shawn];
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

var Customer = function Customer(firstName, lastName, id, semial){
this.firstName = firstName;
this.lastName = lastName;
this.id = id;
this.email = email;
this.id = nextId++;

this.greetFormally = function greetFormally(){
    var greetString = "Greetings ";

    if(this.id == ""){
        greetString += this.firstName + " " + this.lastName;
    } else {
        greetString += this.id + " " + this.lastName;
        greetString += this.email + " " + this.lastName;
    }

    return greetString;
     

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
id.value = " ";
email.value = " ";
};

var newCustomer = new Customer(firstName.value,
    lastName.value, id.value, email.value);

customerList.push(newCustomer);

clearButton.addEventListener("click", function(){
customerList = [];

renderCustomers();
clearInputs();
});