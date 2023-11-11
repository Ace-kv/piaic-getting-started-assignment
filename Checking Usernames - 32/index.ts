let current_users: string[] = ["John", "Jimmy", "Lenny", "admin", "Dutch"]
let new_users: string[] = ["Boah", "Sameul", "Lenny", "Wazowski", "Dutch"]

new_users.forEach((user) => {
    if (current_users.includes(user.charAt(0).toUpperCase() + user.slice(1).toLowerCase())) {
        console.log("Username already exists. Choose a different username.");
    } else {
        console.log("Username is available");
    }
})