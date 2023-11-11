var make_shirt = function (size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("The size of the shirt is:\n".concat(size, "\nAnd the message to be printed on the shirt is:\n").concat(message));
};
make_shirt();
make_shirt("Medium");
make_shirt("Medium", "Nice");
