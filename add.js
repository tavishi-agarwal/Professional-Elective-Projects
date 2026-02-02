/*let a = 5, b = 6;
console.log(a+b);


console.log(typeof a);
console.log(typeof b);  
let arr=[1,2,3,4,5];
console.log(typeof arr);
console.log(Array.isArray(arr));

let add = (x,y) => x+y;
console.log(add(10,20));

function subtract(a,b){
    return a-b;}
console.log(subtract(a,b));
*/
/*
let arr = [1,2,3,4,5,6,7,8,9,10];
let i = 0;
let n=arr.length; 
for(i=0;i<n;i++){
    if(arr[i]%2==0){
        console.log(arr[i]);
    }
} 

const person = {key: "hello"};
console.log(person.key);
person.key="bye";
console.log(person.key);
//const variables can be mutable but cannot be reassigned 

const arr=["html","css","js"];
console.log(arr);
arr.push("python");
console.log(arr); 

const sales = 'toyota';
function carType(name){
    return name==="Honda"? name: "sorry we dont sell this car";
}   
const car = {carn: 'City', getCar : carType("toyota"), Special: sales}
console.log(car.carn)
console.log(car.getCar)
console.log(car.Special) */

const color = ["red","black","blue"];
//for(const i of color);
//var i;
color.forEach((i)=>console.log(i))

const  numbers=[1,2,3,4,5,6,7,8];

//numbers.forEach((val,idx)=>numbers[idx]=val+3)
for (const i in color){
    console.log(i,color[i]);
}
console.log(numbers)