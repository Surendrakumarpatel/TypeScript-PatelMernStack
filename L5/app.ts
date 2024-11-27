let userInput : unknown;
// let userInput : any;
let userName : string;

userInput = 10;
userInput = "Patel";

// userName = userInput;
if(typeof userInput === "string"){
    userName = userInput;
}

// never return type

function generateError(message: string, code : number) : never {
    throw {message: message, statusCode:code}
}
const res = generateError("Internal server error", 500);
console.log(res);



