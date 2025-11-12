type role = {
    name: string;
    age?: number;
    email?: string;
}
// type role = "name" | "age"|"email"
type RequiredUser  = Required<role>;

let user3 : RequiredUser = {
    name: "Mostafa",
    age: 22,
    email: "sk@gmail.com"
}
console.log(user3)

// Record: hw: