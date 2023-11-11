const magicians = ["magician a", "magician b", "magician c"]

const show_magicians = (arr: string[]) => {
    arr.forEach((magician) => {
        console.log(magician);
    })
}

show_magicians(magicians)