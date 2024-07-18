//refrence type
//non-primitive data
//changeable

let newArray: string[] = ["Taha"];
newArray.push("Nimra");

let otherArray = newArray;

otherArray.push("Hira");
//console.log(newArray);

let thirdArray: string[] = ["Ahmed"];
//console.log(thirdArray);

thirdArray = newArray;
console.log(thirdArray);
