interface ApiResponse<T>{
    status:number;
    message: string;
    data: T;
}

const userResponse: ApiResponse<{name:string,age: number}>={
    status: 200,
    message:"University",
    data:{name:"Mostafa",age:22}
}
let result = userResponse.data.age;
// console.log(result);

// Dynamic interface

interface DataMap<T>{
    [key:string]: T
}

let users: DataMap<string> ={
    name:"Mostafa",
    age: "ten"

}

let users1: DataMap<number> ={
    name: 45,
    age: 35
}

let test1 = users1.name;
console.log(test1);