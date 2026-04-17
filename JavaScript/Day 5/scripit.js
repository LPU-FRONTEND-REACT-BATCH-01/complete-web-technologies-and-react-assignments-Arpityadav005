let users = {
    id:1,
    username:"Nick",
    userLocation:{
        city:"Jalandhar",
        state:"Punjab"
    },
    phone:"23y4242341",
    skills:{
        frontend:["react","html","css"],
        backend:["java","springboot"]
    }

};

let {id,username,userLocation:{city,state},phone,skills:{frontend:[react,html,css],backend:[java,springboot]}} = users
console.log(id,username,react,html,css,city,state,phone)
