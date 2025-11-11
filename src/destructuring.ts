
// Object Destructuring:
const user ={
    id: 2354,
    name:{
        firstName:"Md",
        middleName: "Al",
        lastName:"Mostafa"

    },
    gender: "Male",
    FavouriteColour: "ProtianBlue"

}

const myfavouriteColour = user.FavouriteColour;
let myMiddleName = user.name.middleName;

const {FavouriteColour,name:{middleName:MyMiddleName}} = user;
// console.log(FavouriteColour,MyMiddleName);


// Array Destructuring:

const friends = ["Rahim","Karim","Hafiz"];
//  way -1:
// let bestfriend = friends[2];
//  way -2:
// const [,bestfriend] = friends;
// const [bestfriend] = friends;
const [,,bestfriend] = friends;
console.log(bestfriend);