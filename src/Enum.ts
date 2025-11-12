enum UserRoles{
    Admin = "ad",
    Editor = "Roki",
    Viewer = " odd follower"
}

let canEdit = (role: UserRoles) =>{
    if(role === UserRoles.Admin || role === UserRoles.Viewer){
        return true;
    }
    else{
        return false;
    }
}
canEdit(UserRoles.Admin);