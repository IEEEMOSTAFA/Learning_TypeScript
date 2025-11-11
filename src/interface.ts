type user = {
    name:string,
    age: number
}
type Role = {
    role : 'isAdmin' | 'user'

}
type UserWithRole = user & Role;

interface IUser {
    name: string,
    age: number
}




interface IUserWithRole extends  IUser{
    role: 'Admin' | 'User';
}

// Interface Array:

interface IFriends {
    [index: number]:string
}
const friends : IFriends = ["A","B","C"]
