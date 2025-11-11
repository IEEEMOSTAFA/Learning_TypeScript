// function showInfo<T>(obj:T):T{
//     return obj;
// }

function showInfo<T>(obj:T):T{
    return obj;

}

let user = showInfo({name:"Mostafa",age:22});
console.log(user.name);