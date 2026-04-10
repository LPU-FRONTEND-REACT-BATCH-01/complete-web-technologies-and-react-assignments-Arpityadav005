
let user_name = prompt("Enter the user name: ");
let password = prompt("Enter the password: ");
let email = prompt("Enter the email: ");

function objfunc(user_name, password, email){

     let obj = {
        user_name : `${user_name}`,
        password : `${password}`,
        email : `${email}`

    }

    return obj;
}

console.log(objfunc(user_name,password,email))