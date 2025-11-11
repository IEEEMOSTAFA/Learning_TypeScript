type User = {
    id:number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female',
    contactNo:Number,
    address:{
        division: string;
        city: string
    }
} 


const user1 : User= {
    id:123,
    name:{
        firstName:"Md",
        lastName: "Al Mostafa"
    },
    gender: "male",
    contactNo: 8843488,
    address:{
        division:"Dhaka",
        city: "Mohakali"
    }
};
const user2 :User = {
    id:223,
    name:{
        firstName:"Ms",
        lastName: " .Mostafa"
    },
    gender: "female",
    contactNo: 3488,
    address:{
        division:"ctg",
        city: "Oxygen"
    }
};

// Use typeAlias In Arrow Function:
type AddFunc = (num1: number,num2: number) => number;

let add : AddFunc = (num1,num2) => num1 + num2;