//var myName = 'lili';
//console.log(myName);
//var age = 20;
//console.log(age);
//var ignasiAge = 32;
//var ageDiff =
//    console.log(age - ignasiAge);
//
//if (age > 21) {
//    console.log("your older");
//} else {
//    console.log("youre younger");
//}
//
//var classNam = ["lili", "sabrina", "jcvd"];
//
//var alpha;
//
//var myClass = ["Adam", "Pol" , "Jaehyun", "Ioannis" , "Mari", "Socrates", "Apet", "Leo"];
//var alphabeticalOrder 
//
//function alphabeticallyOrderIt(){
//    for (var i = 0; i < myClass.length; i++) { 
//       for (var j = i + 1; j < myClass.length; j++){
//          if(myClass[i].charAt(0) > myClass[j].charAt(0)){
//                myClass[i] = myClass[j];
//                myClass[j] = alphabeticalOrder;
//          }
//      } 
//    
//}return myClass;  
//
//}
//alphabeticallyOrderIt(myClass)
//console.log(alphabeticallyOrderIt(myClass));
////
//
//var ageMyClass = [33,23,28,30,23,19,30,33];
//var i = 0;
//var evenAge = [];

var myName = 'Lili';
console.log(myName)

var age = 21;
console.log(age);

var ignasiAge = 32;
console.log(ignasiAge);

var agediff = age - 32;
console.log(agediff);

if (age < 21) {
    console.log("your bad,boy")
} else if (age > 21) {
    console.log("jacqui")
} else {
    console.log("cous")
}

var myClass = ["Adam", "Pol", "Jaehyun", "Ioannis", "Mari", "Socrates", "Apet", "Leo"];
var alphabeticalOrder = [];

function alphabeticallyOrderIt() {
    for (var i = 0; i < myClass.length; i++) {
        for (var j = i + 1; j < myClass.length; j++) {
            if (myClass[i].charAt(0) > myClass[j].charAt(0)) {

                alphabeticalOrder.push(myClass[i]);
                console.log(alphabeticalOrder)
                myClass[j] = alphabeticalOrder;
                myClass[i] = myClass[j];
            }
        }


    }
    return myClass;

}


alphabeticallyOrderIt(myClass)
console.log(alphabeticallyOrderIt(myClass));
console.log(alphabeticalOrder)




var numbers = [19, 22, 22, 67, 999, 8];

var evens = numbers.filter(function (x) {
    if (x % 2 === 0) {
        return x;
    }
})

console.log(evens);


sort();

function sort() {
    var evenN = [];
    for (var i = 0; i < numbers.length; i++) {

        if (numbers[i] % 2 === 0) {
            evenN.push(numbers[i])
        }
    }
    console.log(evenN)
}









//
//while (i < numbers.length) {
//    console.log(numbers[i]);
//    i++;
//}
//function () {
//    
//}
////console.log(numbers[i])
//


var arr = [4, 5, 7, 8, 8, 14, 45, 76];

function even(a) {
    return a.filter(function (val) {
        return val % 2 === 0
    })
}
