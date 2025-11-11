type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) =>{
 if(role === 'admin'){
    return "Admin DashBoard";
 }
 else if(role === "user"){
    return "User DashBoard"
 }
 else{
    return "Guest DashBoard"
 }
}





//  Intersection Tye
type Employee = {
    id: string
    name: string;
    PhoneNo: string;
}

type Manager = {
    designation: string,
    teamSize : number
}

type EmployeeManager = Employee & Manager;

const chowDuryShab:EmployeeManager = {
    id: "345",
    name: "Imrul",
    PhoneNo:"01889271256",
    designation:"Senior Lead",
    teamSize : 20
}
