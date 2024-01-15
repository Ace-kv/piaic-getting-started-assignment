var users = ["John", "Jimmy", "Lenny", "admin", "Dutch"];
users.forEach(function (user) {
    if (user == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again"));
    }
});
