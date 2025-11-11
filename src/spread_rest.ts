// spread:
const schoolFriends = ["Redwan","Sabbir","Mohit","kaiser"];
const collegeFriends = ["Shakil","Addito","Prosonjit","Abir"];
const UniversityFriends = ["Abhi","Anwar","Mobin","Abir"];
collegeFriends.push(...UniversityFriends)
schoolFriends.push(...collegeFriends)

// console.log(schoolFriends);

const user = {name: "Mostafa", Phone: "01889271256"};

const otherInfo = {hobby: "outing", fabourite: "Black"};

const userInfo = {...user, ...otherInfo};
// console.log(userInfo);

// Rest :::
// const sendInvite = (friend1: string,friend2: string,friend3: string) => {
//     console.log(`Sent Invition to ${friend1}`);
//     console.log(`Sent Invition to ${friend2}`);
//     console.log(`Sent Invition to ${friend3}`);

// }
// sendInvite("Rahim","Karim","Rakib");
// console.log(sendInvite);


// Rest :::
// const sendInvite = (...friend:string[]) => {
//     friend.forEach((friend:string) => console.log(`Send Invitation to ${friend}`));
   

// }
// sendInvite("Rahim","Karim","Rakib","Sumon");
// console.log(sendInvite);

const playerInvite = (...friend:string[]) =>{
 friend.forEach((friend:string)=>{
    console.log(`Send Invitation to ${friend}`);
 })
}
playerInvite("Arif","Jahid","Emon");
console.log(playerInvite);
