type Alphaneumeric = number | string;

let add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2;
    }
    else{
        num1.toString() + num2.toString();
    }
};

// console.log(add(2,2));
// console.log(add(3,"3"));

type NormalUser = {
    name:string;
};

type AdminUser = {
    name: string;
    role: "Admin";
};

let getUserInfo = (user: NormalUser | AdminUser) => {
    if("role" in user){
        console.log(`${user.name} and his role ${user.role}`)
    }
    else{
        console.log(`${user.name}`)
    }
}
getUserInfo({name:"Normal", role:"Admin"});