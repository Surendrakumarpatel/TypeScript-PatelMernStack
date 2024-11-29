//! 1. Type Guards

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: Combinable, b: Combinable) {
    // add type guards
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
// console.log(add(30,30));
// console.log(add("30", 30));


// 2.

type Admin = {
    name:string;
    privilages: string[]
}
type Employee = {
    name: string;
    startDate : Date
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Employee | Admin;

const emp1 : ElevatedEmployee = {
    name : "Patel MernStack",
    privilages: ['create-server'],
    startDate : new Date(),
}

function printEmployeeInformation(emp : UnknownEmployee){
    console.log("Name : ", emp.name);
    // console.log("Priviliges : ", emp.privilages);

    // start adding type guards

    // if (typeof emp === "object") { /// wrong code
    //     console.log(emp.privilages);
    // }

    // use in keyword that build in JS
    if('privilages' in emp){
        console.log(emp.privilages);
    }

    if('startDate' in emp){
        console.log(emp.startDate);
    }  
}

// printEmployeeInformation(emp1);
// printEmployeeInformation({name: "Aman", startDate:new Date()});



// 3. Type Guards in class

class Car {
    drive(){
        console.log("driving a car....");
    }
}

class Truck {
    drive(){
        console.log("Driving a truck...");
    }
    loadCargo(amount : number){
        console.log("Loading cargo...", amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle : Vehicle){
    vehicle.drive();
    // vehicle.loadCargo(500); 

    if('loadCargo' in vehicle){
        vehicle.loadCargo(500);
    }

    // if(vehicle instanceof Truck){
    //     vehicle.loadCargo(500);
    // }
}
// useVehicle(v1);
// useVehicle(v2);



// type casting / type assertion

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;
 
userInput.value = "Hi Patel"
