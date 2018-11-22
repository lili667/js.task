console.log("Hello")

//String
var nameOfMentor = "Mari";
console.log(nameOfMentor)
nameOfMentor = "pol";
console.log(nameOfMentor)

//Numbers
var myAge = 28;
console.log(myAge)
var polAge = 23;
console.log(myAge + polAge)
console.log(nameOfMentor + polAge)

//Booleans 
var codingIsFun = false;
console.log(codingIsFun)

//Undefined

var noValueYet = null;
console.log(noValueYet)

//Null 

//Arrays - collection/list
//Zero-indexed

var classNames = ["Andras", "Jae", "Adam", "Socrates", "Leo"]
console.log(classNames)
console.log(classNames[0])
console.log(classNames[5])
console.log(classNames.length)

//Objects key-value pairs

var mari = {
    name: "Mari",
    age: 28,
    isTall: true
}

console.log(mari)
console.log(mari.isTall)
console.log(mari["isTall"])

var arrayOfObjects = [
    {
        name: "Mari",
        age: 28,
        isTall: true
    },
    {
        name: "Pol",
        age: 23,
        isTall: false
    }
]

var newArray = ["Mari", 28, true]
console.log(newArray)

console.log(arrayOfObjects)
console.log(arrayOfObjects[1])

//Condition
// if(condition){code to execute}
myAge = "30";
polAge = 30;

if (polAge < myAge) {
    console.log("He is younger than you!")
} else if (polAge > myAge) {
    console.log("He is older than you!")
} else {
    console.log("He is the same age as you")
}
// = 
// == value
// === type and value


//Loops 
// for (statement1; statement 2; statement 3) {code to execute}
// i = i + 1

for (var i = 0; i < 5; i++) {
    console.log("Hello")
}

for (var i = 0; i < classNames.length; i++) {
    //    console.log(classNames[i])
}

// functions 

// call it

function printAllTheNames() {
    for (var i = 0; i < classNames.length; i++) {
        console.log(classNames[i])
    }
}

printAllTheNames();

//parameters

var newArray = [1, 2, 3, 4, 5];
var colors = ["blue", "red", "yellow"]

printAll(newArray)
printAll(colors)

function printAll (array) {
    for ( var i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

//camelCase

var button = document.getElementById("button");

button.addEventListener("click", function() {
    button.style.backgroundColor = "blue"
})



