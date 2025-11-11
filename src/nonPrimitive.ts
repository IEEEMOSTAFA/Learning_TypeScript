let bazarList = ['egg','milk','sugar'];
bazarList.push("cocoPowder");
// console.log(bazarList);

let mixedArr:(string | number) [] = ["sugar",120,"butter",80,"Beef",800];

let MostafaNumber:[string,Number] = ["Mostafa",66,"Rihan",34,"Abir",10];

let destination:[string,string,number] = ["Dhaka","Ctg",6];


// Reference Type: Object:

// let user:{
//     firstName: string,
//     middleName ?: string,
//     lastName: string,
//     isMarried: Boolean,
//     organization: "Brain Station 23"
// } = {
//     firstName: "Md",
//     middleName: "Al",
//     lastName: "Mostafa",
//     isMarried: false,
//     organization: "Brain Station 23"
// }





// New Method:

let user:{
    firstName: string,
    middleName ?: string,
    lastName: string,
    isMarried: Boolean,
 readonly   organization: "Brain Station 23"  // Access Modifier:
} = {
    firstName: "Md",
    middleName: "Al",
    lastName: "Mostafa",
    isMarried: false,
    organization: "Brain Station 23"
}

// user.organization = "Programming Hero";

console.log(user);
