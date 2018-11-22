console.log("Hello")

//logging

//var name = value;

//Strings

var myName = "Mari";
console.log(myName)
myName = "Pol";
console.log(myName)

//Numbers

var myAge = 30;
var polAge = 30;
console.log(myAge)
console.log(myAge + polAge)
console.log(myName + myAge)

//Booleans - true/false

var codingIsFun = true;
console.log(codingIsFun)

//CamelCase

//Undefined 
//null

//Arrays


var allOurNames = ["Leo", "Tobias", "Marijn", "Mari"];
console.log(allOurNames)
console.log(allOurNames[4])
console.log(allOurNames.length)


//Objects 

var mari = {
    name: "Mari",
    age: 28,
    isTall: true,
};
console.log(mari)
console.log(mari.name)
console.log(mari["name"])


//Array of objects

var arrayOfObjects = [
    {
        name: "Mari",
        age: 28,
        isTall: true,
    },
    {
        name: "Pol",
        age: 23,
        isTall: false,
    }
]

console.log(arrayOfObjects)
console.log(arrayOfObjects[1].name)


//Conditions
//if(condition) {code to be executed}

if (polAge < myAge) {
    console.log("He is younger than you")
} else if (polAge == myAge) {
    console.log("Same age")
} else {
    console.log("He is older than you")
}

// Loops
//for(statement 1; statement 2; statement 3) {code to be executed}
// i = i + 1

for (var i = 0; i < 5; i++) {
    console.log("hi")
}

for (var i = 0; i < 4; i++){
    console.log(allOurNames[i])
}

//functions 
//Remember to call a function - write the name!!


printNames();
printNames();
printNames();
function printNames () {
    for (var i = 0; i < allOurNames.length; i++){
        console.log(allOurNames[i])
    }
}

var newArray = [1,2,3,4,5,6,7];
//parameters

printTheArray(allOurNames);


function printTheArray (array){
    for(var i = 0; i < array.length; i++){
        console.log(array[i])
    }
}
document.getElementById("test").addEventListener("click", function() {
    printTheArray(allOurNames);     
})

