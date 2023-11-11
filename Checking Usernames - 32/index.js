var current_users = ["John", "Jimmy", "Lenny", "admin", "Dutch"];
var new_users = ["Boah", "Sameul", "Lenny", "Wazowski", "Dutch"];
new_users.forEach(function (user) {
    if (current_users.includes(user.charAt(0).toUpperCase() + user.slice(1).toLowerCase())) {
        console.log("Username already exists. Choose a different username.");
    }
    else {
        console.log("Username is available");
    }
});
