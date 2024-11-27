// Object, Array, Tuple, Enum
//! Object
// const person : {
//     firstName: string;
//     age: number;
//     xyz : {
//         address:string;
//     }
// } = {
//     firstName: "Patel",
//     age: 21,
//     xyz :{
//         address : "Mumbai"
//     }
// };
//! Array
// const person: {
//     firstName: string;
//     age: number;
//     skills: string[];
// } = {
//     firstName: "Patel",
//     age: 21,
//     skills: ["Reactjs", "Nodejs"],
// };
var favouriteLanguage1;
favouriteLanguage1 = ["Hindi", "English"];
var favouriteLanguage2; // loose ts powerfull
favouriteLanguage2 = ["Hindi", "English", 21, true];
// console.log(person);
//! Tuple
// const person : {
//     name:string;
//     age:number;
//     skills:string[];
//     product:[number , string] // fixed array of two types 0-> number, 1 -> string
// } = {
//     name:"Patel",
//     age:21,
//     skills:["React", "Node"],
//     product:[10,"Macbook M2"],
// }
// person.product = [10,"Macbook M2", "Macbook Air M2"]
// person.product[1] = 20; //  invalid
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["READ_USER_ONLY"] = 2] = "READ_USER_ONLY";
})(Role || (Role = {}));
;
var person = {
    name: "patel",
    age: 21,
    skills: ["React", "Node"],
    product: [10, "Macbook Air M2"],
    role: Role.READ_USER_ONLY
};
if (person.role === Role.AUTHOR) {
    console.log("Author");
}
else if (person.role === Role.ADMIN) {
    console.log("Admin");
}
else if (person.role === Role.READ_USER_ONLY) {
    console.log("read user only");
}
