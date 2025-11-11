

function add(num1:number,num2: number){
    return num1 + num2
}


const addArrow = (num1 : number,num2 : number) :number => num1 + num2

// console.log(add(2,3));


const poorUser ={
    name: "Mostafa",
    balance: 0,
    addBalance(value:number){
        return this.balance + value
    }
}

poorUser.addBalance(150000)
console.log(poorUser);


const arr: number[] = [2,3,4]
const sqrArray = arr.map((elem: number): number => elem * elem);