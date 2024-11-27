// number, string, boolean 

function add(num1 : number, num2 : number, printResult : boolean, someText : string){
    // if(typeof num1 === "number" && typeof num2 === "number"){
    //     return num1+num2;
    // }else{
    //     return +num1 + num2
    // }
    if(printResult){
        console.log(`${someText} ${num1+num2}`);  
    } else{
        return num1 + num2
    }
}

const n1 = 20; // number
const n2 = 200; // number

const printResult = true;
const someText = "Sum of two numbers is = "

add(n1, n2, printResult, someText);
// console.log(ans);
