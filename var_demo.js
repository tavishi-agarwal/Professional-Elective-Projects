//when u declare a variable with var you can redeclare it 
var a = 10;
console.log(a); //10

var a = 20;
console.log(a); //20
//function scope example
//===========================
function demoFunction(){
    var funcVar = 30;
    console.log(funcVar); //30
}
demoFunction();
//console.log(funcVar); //Uncaught ReferenceError: funcVar is not defined
 //when u declare a variable with let you cannot redeclare it

let b = 30;
console.log(b); //30    
//let b = 40; //Uncaught SyntaxError: Identifier 'b' has already been declared
b = 40; //you can reassign it
console.log(b); //40
//when u declare a variable with const you cannot redeclare or reassign it
const c = 50;
console.log(c); //50
//const c = 60; //Uncaught SyntaxError: Identifier 'c' has already been declared
//c = 60; //Uncaught TypeError: Assignment to constant variable.    
