function printData<T>(data:T):T{
    return data;
}
let test1 = printData<string>("Mostafa");
let test2 = printData<number>(67);
// console.log(test1,test2);

// way - 02:

let createArrayWithTouple = (param1: string,param2: string) =>[
    param1,param2
];

let createArrayWithGeneric =<X,Y> (param1: X, param2 : Y) =>[
    param1,param2
]
let reslult2 = createArrayWithGeneric("mostafa",false);
// console.log(reslult2);


let addstudentToCourse = <T>(studentInfo:T) =>{
    return {
        course: "NextLevel",
        ...studentInfo
    }
}
let student1 = {
    id:123,
    name:"Mostafa",
    hasPen:true
};
let student2 ={
    id: 321,
    name:"Jankar vai",
    hasPern:true,
    isMarried: true
}


let reslult = addstudentToCourse(student2);
console.log(reslult);