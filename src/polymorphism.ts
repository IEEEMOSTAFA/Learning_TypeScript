class Person {
    getSleep() {
        console.log(`I am a Normal Happy Person.I sleep for 8 hours`);
    }
}

class Student extends Person {
    getSleep() {
        console.log(`I am a student. I sleep  7 hours`);
    }
}

class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a coder. I workin around  7 hours`);
    }
}

let getSleepingHours = (param: Person) =>{
     param.getSleep();
};
getSleepingHours(new Student);
getSleepingHours(new NextLevelDeveloper);