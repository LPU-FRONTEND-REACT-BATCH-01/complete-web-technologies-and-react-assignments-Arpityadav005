// console.log("This is message")
// alert("Hello")
// confirm("Are u above 18: ")
// var naam = prompt("Enter your name")
// console.log("User is",naam)

// - premmitive 
//     - Number, String, Boolean, undefined, null, Symbol, NaN
// - Reference
//  -Array, Object , function

// Array

// var a = [10,'sarthak',30,'chabi',40]
// console.log(a[3]);

var arr = [10,20,30,40,50]
console.log(arr)
arr.push(100)
console.log(arr)
arr.pop()
console.log(arr)
console.log(arr.length);

arr.forEach(function(){
    console.log("hello")
})

var obj = {
    user:"Harsh",   
}

console.log