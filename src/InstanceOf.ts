

class Person{
    name : string;

    constructor(name:string) {
        this.name = name;
    }

    getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
  }
}

class Student extends Person{
    constructor(name:string) {
        super(name);
        
    }

      doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study koe`);
  }
}

// Function Guard:

class Teacher extends Person{
    constructor(name: string){
        super(name);
    }
    takeClass(numOfhours: number){
        console.log(`${this.name} is ${numOfhours} gonta Gumai`);
    }
}

const isStudent = (user:Person) =>{
    return user instanceof Student;
}

const isTeacher = (user: Person) =>{
    return user instanceof Teacher;
}

const getUserInfo =(user: Person) =>{
 if(isStudent(user)){
    user.doStudy(10);
 }
 else if(isTeacher(user)){
    user.takeClass(5);
 }
 else{
    user.getSleep(7);
 }
};

let person1 = new Person("Mostafa");
getUserInfo(person1);