var users = [];
if (users.length !== 0) {
    users.forEach(function (user) {
        if (user == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thank you for logging in again"));
        }
    });
}
else {
    console.log("We need to find some users!");
}
