

interface User {
    name: string;
    age: number;
}

let response:any = {name:"Rahim", age: 25}

let user = response as User;
console.log(user.name);
