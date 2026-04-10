// console.log("This is message")
// alert("Hello")
// confirm("Are u above 18: ")
// var naam = prompt("Enter your name")
// console.log("User is",naam)

// - premmitive 
//     - Number, String, Boolean, undefined, null, Symbol, NaN
// - Reference
//  -Array, Object , function

// reduce

// let arr  = [
//     {
//         id:1,
//         name:"Watch",
//         price:"2999",
//         quantity:2
//     },
//     {
//         id:2,
//         name: "shoes",
//         price: 199,
//         quantity:3
//     },
//     {
//         id:3,
//         name:"ak47",
//         price:99999999,
//         quantity:3
//     }

// ]

// let total_price=arr.reduce((inital_value,arr_object)=>{
//     console.log(arr_object.price*arr_object.quantity);
//     return inital_value+arr_object.price*arr_object.quantity;
// },0);
// console.log("Total Price: "+total_price);


// let arr = [1,23,63,25,73,5,3]
// arr.sort((a,b)=>a-b)
// console.log(arr)

// arr.sort((a,b)=>b-a)
// console.log(arr)

// let arr = [1,23,63,25,73,5,3]

// let filtered_array = arr.filter((ele)=>{
//     return ele>20
// })

// console.log(filtered_array)

let arr  = [
    {
        id:1,
        name:"watch",
        price:2999,
        quantity:2
    },
    {
        id:2,
        name: "shoes",
        price: 199,
        quantity:3
    },
    {
        id:3,
        name:"ak47",
        price:99999999,
        quantity:3
    }
]

let sorted_name = arr.sort((a,b)=>a.name.localeCompare(b.name));
console.log(sorted_name)
let sorted_price = arr.sort((a,b)=>a.price-b.price);
console.log(sorted_price)
