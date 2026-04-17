let input:unknown = "arpit";

if(typeof input==="number"){
   console.log(input+=100);
}
else if(typeof input === "boolean"){
    console.log(!input);
   
}
else if(typeof input === "string"){

    console.log(input.charAt(0).toUpperCase()+input.substring(1))
}