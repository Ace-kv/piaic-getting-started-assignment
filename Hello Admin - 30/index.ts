let users: string[] = ["John", "Jimmy", "Lenny", "admin", "Dutch"]

users.forEach((user) => {
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${user}, thank you for logging in again`);
    }
})