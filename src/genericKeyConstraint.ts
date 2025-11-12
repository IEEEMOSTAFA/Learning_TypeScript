
// key Constraints
type RicePeopleVehicle = {
    car: string,
   bike: string,
   cng: string,
}
type vehicle1 = "bike" | "car" | "Cng";
type vehicle2 = keyof RicePeopleVehicle;

let myvehicle: vehicle2 = "bike";


//  Key Of Constraints:

type Person = {
    name: string,
    age: number,
    country: string
}
function getValue<T,K extends keyof T>(obj:T,key:K){
    return obj[key];
}

let person: Person = {name:"Mostafa",age:22,country:"Bangladesh"};
let reslult =getValue(person,"country");
console.log(reslult);