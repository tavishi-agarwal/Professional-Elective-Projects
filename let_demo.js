// let: key points about let in javaScript
// 1. no redeclaration
// 2. block scope 
// 3. not hoisted like var

// no redeclaration
let x = 100;
console.log(x); //100   
// let x = 200; //Uncaught SyntaxError: Identifier 'x' has already been declared
x = 200; //you can reassign it
console.log(x); //200

//demo code 1.3: redeclaration example 3- direct nested block scope
{
    let y= 50;
    console.log(y); //50
    {
        let z= 100; 
        let y= 200; // uncaught error if we use var here instead of let
        console.log(z); //100   
        console.log(y); //200

    }
}
//===================================================================

// block scope
if(true){
    let y = 300;
    console.log(y); //300
}   
// console.log(y); //Uncaught ReferenceError: y is not defined

//===================================================================

// not hoisted like var
// console.log(z); //Uncaught ReferenceError: Cannot access 'z' before initialization
let z = 400;
console.log(z); //400   