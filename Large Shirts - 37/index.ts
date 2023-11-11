const make_shirt = (size: string = "Large", message: string = "I love Typescript") => {
    console.log(`The size of the shirt is:\n${size}\nAnd the message to be printed on the shirt is:\n${message}`);
}

make_shirt()
make_shirt("Medium")
make_shirt("Medium", "Nice")