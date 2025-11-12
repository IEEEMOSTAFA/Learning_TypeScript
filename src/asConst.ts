const Role = {
    Admin: "ADMIN",
    User: "User"
} as const;

type RoleType = typeof Role[keyof typeof Role];
console.log(Role.Admin);