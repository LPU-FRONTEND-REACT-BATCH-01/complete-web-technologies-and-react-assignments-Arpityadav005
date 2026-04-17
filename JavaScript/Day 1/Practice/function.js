let a = Number(prompt("Enter the price: "));
fun(a);
function fun(a){
    let f_price=0;
    if(a>2000){
        f_price = a-(a*0.15);
        console.log("final price with discount 15% "+f_price)
    }
    else if(a>6000){
        f_price = a-(a*0.25);
        console.log("final price with discount 25% "+f_price)
    }
    else if(a<2000){
        f_price=a;
        console.log("final price with discount 0% "+f_price)
    }
}
