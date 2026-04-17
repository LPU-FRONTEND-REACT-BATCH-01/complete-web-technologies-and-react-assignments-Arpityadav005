
let user_name = prompt("Enter the user name: ");
let email = prompt("Enter the email: ");
let password = prompt("Enter the password");

function stringfun(user_name,email,password){

    console.log(user_name.trim().toLowerCase());
    console.log(email.toLowerCase().split("@"));
    if(password.length>=8 && password.includes('@') && password.includes('*') && password.includes('/')){
        console.log("Password is valid")
    }
    else{
        console.log("Password is invalid")
    }


}

stringfun(user_name,email,password);