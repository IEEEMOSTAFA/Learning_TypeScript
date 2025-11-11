// Ternary:


const MarriedQualifiedAge = (age: number) =>{

    const result = age >= 21 ? "you are eligible": "you are not eligible";
    return result;

}
let verify = MarriedQualifiedAge(20);
// console.log(verify);


// nullish operator: undefined value:

// const userTheme = undefined;
const userTheme = null;

let selectedTheme = userTheme ?? "Light Theme";
// console.log(selectedTheme);





// Optional chaining:
const user :{
    address:{
        city:string
        town: string;
        postalCode ?: string;
    };
    

} ={
    address:{
        city:"ctg",
        town:"oxygen",
    },

};
let postalCode = user ?.address ?.city
console.log(postalCode);