

type student = { id: number, name: string };

let addstudentToCourse = <T extends student>(studentInfo: T) => {
    return {
        course: "NextLevel",
        ...studentInfo
    }
}
let student1 = {
    id: 123,
    name: "Mostafa",
    hasPen: true
};
let student2 = {
    id: 321,
    name: "Jankar vai",
    hasPern: true,
    isMarried: true
}


let reslult = addstudentToCourse(student2);
console.log(reslult);