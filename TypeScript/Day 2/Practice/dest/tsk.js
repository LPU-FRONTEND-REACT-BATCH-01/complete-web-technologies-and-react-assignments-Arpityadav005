"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let res = yield fetch("https://dummyjson.com/products");
            if (res.ok) {
                let data = yield res.json();
                displayFilteredcat(data.products);
            }
        }
        catch (err) {
            console.log(err);
        }
    });
}
function displayFilteredcat(data) {
    let filterbypriceFive = data.filter((product) => {
        return product.price > 5;
    });
    console.log(filterbypriceFive);
    let filterbypriceTen = data.filter((product) => {
        return product.price > 10;
    });
    console.log(filterbypriceTen);
    let ascending = data.sort((a, b) => (a.title).localeCompare(b.title));
    console.log(ascending);
    let descending = [...ascending];
    //    let sortbyAscName = data.sort((a, b) => (b.title).localeCompare(a.title));
    //    console.log(sortbyAscName);
    let sortbyDescName = descending.sort((a, b) => (b.title).localeCompare(a.title));
    console.log(sortbyDescName);
    let filterfun = data.filter((product) => {
        return (product.category) == "furniture";
    });
    console.log(filterfun);
    let filterbeauty = data.filter((product) => {
        return (product.category) == "beauty";
    });
    console.log(filterbeauty);
}
let str = "HEllo";
str.localeCompare;
fetchData();
