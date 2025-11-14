class Person {
    name: string;
    age:number;
    address:string

    constructor(name:string,age: number,address: string){
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getSleep(numOFhours: number){
        console.log(`${this.name} is sleep ${numOFhours} around`);
    }
}

class Student extends Person{
    rollNo : number;

    constructor(name: string,age:number,address: string,rollNo: number){
        super(name,age,address)
        this.rollNo = rollNo;
    }
}

const student1 = new Student(`Mostafa`,22,`Bakolia`,2003);
// student1.getSleep;

class Teacher extends Person{
    designation:string;

    constructor(name:string,age:number,address:string,designation:string){
        super(name,age,address)
        this.designation = designation;
    }
    takeClass(numOFclass: number){
        console.log(`${this.name} ${numOFclass} gonta class nei`)
    }
}

let teacher1 = new Teacher(
    "Mostafa sir",
    22,
    "Bakolia",
    "Jr. Software Engg"
);

console.log(teacher1.designation)