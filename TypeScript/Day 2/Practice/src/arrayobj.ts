interface arrT{
    id:number,
    title:string
}

let obj1 = {
    id: 1,
    title: "Play Game"
}

let obj2 = {
    id:2,
    title:"Its break time"
}

let arr:arrT[]=[obj1,obj2]

arr.push({
    id:3,
    title:"arp"
})