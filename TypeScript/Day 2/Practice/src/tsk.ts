async function fetchData() {
    try {
        let res = await fetch("https://dummyjson.com/products");

        if (res.ok) {
            let data = await res.json();
            displayFilteredcat(data.products);
        }
    } catch (err) {
        console.log(err);
    }
}

function displayFilteredcat(data) {
    
    let filterbypriceFive = data.filter((product)=>{
        return product.price>5;
    })

    console.log(filterbypriceFive);

     let filterbypriceTen = data.filter((product)=>{
        return product.price>10;
    })

    console.log(filterbypriceTen);


    let ascending = data.sort((a,b)=>(a.title).localeCompare(b.title))
    console.log(ascending);
    let descending=[...ascending];
    

//    let sortbyAscName = data.sort((a, b) => (b.title).localeCompare(a.title));
//    console.log(sortbyAscName);

   let sortbyDescName = descending.sort((a, b) => (b.title).localeCompare(a.title));
   console.log(sortbyDescName);
   
   let filterfun = data.filter((product)=>{
    return (product.category)=="furniture";
   })
   console.log(filterfun);

   let filterbeauty = data.filter((product)=>{
    return (product.category)=="beauty";
   })
   console.log(filterbeauty);

   
   


}

let str = "HEllo"
str.localeCompare

fetchData();