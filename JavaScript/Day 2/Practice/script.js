
// let arr  = [
//     {
//         id:1,
//         name:"Watch",
//         price:"2999",
//         quantity:2
// //     },
// //     {
// //         id:2,
// //         name: "shoes",
// //         price: 199,
// //         quantity:3
// //     },
// //     {
// //         id:3,
// //         name:"ak47",
// //         price:99999999,
// //         quantity:3
// //     }

// // ]

// // let total_price=arr.reduce((inital_value,arr_object)=>{
// //     console.log(arr_object.price*arr_object.quantity);
// //     return inital_value+arr_object.price*arr_object.quantity;
// // },0);
// // console.log("Total Price: "+total_price);


// // let arr = [1,23,63,25,73,5,3]
// // arr.sort((a,b)=>a-b)
// // console.log(arr)

// // arr.sort((a,b)=>b-a)
// // console.log(arr)

// // let arr = [1,23,63,25,73,5,3]

// // let filtered_array = arr.filter((ele)=>{
// //     return ele>20
// // })

// // console.log(filtered_array)

// // let arr  = [
// //     {
// //         id:1,
// //         name:"watch",
// //         price:2999,
// //         quantity:2
// //     },
// //     {
// //         id:2,
// //         name: "shoes",
// //         price: 199,
// //         quantity:3
// //     },
// //     {
// //         id:3,
// //         name:"ak47",
// //         price:99999999,
// //         quantity:3
// //     }
// // ]

// // let sorted_name = arr.sort((a,b)=>a.name.localeCompare(b.name));
// // console.log(sorted_name)
// // let sorted_price = arr.sort((a,b)=>a.price-b.price);
// // console.log(sorted_price)

// // let arr_fruit = ["Apple","Mango","Kiwi","Banana"]

// // let results = arr_fruit.some(ele=>ele=='Apple')
// // console.log(results)

// let users = [
//     {
//     id:1,
//     username:"Arman",
//     password:"armani"
//     },
//     {
//     id:2,
//     username:"Sushant",
//     password:"someone"
//     },
//     {
//         id:3,
//         username:"Yashvanth",
//         password:"Yashvi"
//     }
// ]

// let inputdata = {
//     username:"Arman",
//     password:"arman"
// }

// let results = users.find(ele=>ele.username===inputdata.username)

// if(r ){
//     if(users.some(ele=>ele.password==inputdata.password)){
//         console.log("Welcome to HomePage")
//     }else{
//         console.log("Wrong password")
//     }
// }else{
//     console.log("User is not registered")
// }


function openmac(fun){
    setTimeout(()=>{
        console.log("Mac is opening");
        fun();
    },2000)
}

function code(){
    setTimeout(() => {
        console.log("Code is runing");
    }, 1000);  
}

openmac(()=>{
    code();
})

