// payment task

type payops = "UPI" | "Card" | "COD" | "Netbanking"

function payment(modeOfPayment:payops, price:number): number | string{
    if(modeOfPayment === "UPI"){
        return price*0.01;
    }
    else if(modeOfPayment === "Card"){
        return price*0.05;
    }
    else if(modeOfPayment === "COD"){
        return `Your mode is ${modeOfPayment} final price is: `+ (price-50);
    }
    else{
        return price;
    }
}

console.log(payment("COD",5000));
