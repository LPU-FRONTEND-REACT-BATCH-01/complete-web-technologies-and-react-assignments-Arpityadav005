// let num=Number(prompt("Enter the number: "))
// console.log(typeof num);
// if(num>0){
//     console.log("Greater than 0");
// }
// else if(num<0){
//     console.log("less than 0");
// }
// else{
//     console.log("equal to 0");
// }

// if(num<=8){
//     for(let i=0;i<=8;i++){
//         console.log("It is "+num)
//     }
// }
// else{
//     for(let i=0;i<=num*num;i++){
//         console.log("Greater than 8: "+num)
//     }
// }

function display(name="Not Available"){
    console.log("Hello Mr.",name)
}

display("Arman")

let greet = function greeting(name="Invalid"){
    console.log(name)
}

greet("Nick");

// IIFE (Immidiate invoke function expression)

(function fetchData(){
    console.log("Data fatched")
})();

let array = (name) => { // for one paramenter we dont need ()
    return "Hello"+name;
}

let result = array("nick")
console.log(result)


// higher order and call back function -> a function which accept a fucntion as an argument

let add = (a,b) =>{
    return a+b;
}

let sub = (a,b) =>{
    return a-b;
}

function calculator(operation, a,b){
 return (operation(a,b))
}

let result2 = calculator(add,5,10)
console.log("ADDITION: "+result2)

let result3 = calculator(sub,10,5)
console.log("SUBSTRACTION: "+result3)

