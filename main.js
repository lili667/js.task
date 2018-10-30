console.log("Starting javascript...");

var myName = "Gradur";
console.log(myName);

var age = 12;
console.log(age);

var ignasiAge = 32;
console.log(ignasiAge);

var ageDiff = age - ignasiAge;
console.log(ageDiff);

  if (age > 21) {
console.log("You are older than 21");
} else {
console.log("You are not older than 21");
}

  if (age < 21) {
console.log("Ignassi is older than you");
} else if (age > 21) {
console.log("Ignasi is younger than you");
} else {
console.log("You have the same age as Ignasi");
}

var classNames = ["Andras", "Jae", "Adam", "Socrates", "Leo"];
var classNamesInAlpha = classNames.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    return 0;
});
console.log(classNamesInAlpha);


