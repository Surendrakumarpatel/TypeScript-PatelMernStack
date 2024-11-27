// let firstname : string;
// let age : number;
// firstname = "Patel"
// age = 22;
function combine(num1, num2, conversionType) {
    var result;
    if (typeof num1 === "number" && typeof num2 === "number" || conversionType === "as-number") {
        result = +num1 + +num2;
    }
    else {
        result = num1.toString() + num2.toString();
    }
    return result;
}
var sum1 = combine("10", "20", "as-number"); // 30
var sum2 = combine(10, 50, "as-number");
var combinedName = combine("Patel", " MernStack", "as-string"); // Patel MernStack
console.log(sum1, sum2, combinedName);
var user = {
    name: "Patel",
    age: 22,
    skills: ["React", "Node"]
};
function greet(user) {
    console.log("Hi, I am ".concat(user.name));
}
greet(user);
