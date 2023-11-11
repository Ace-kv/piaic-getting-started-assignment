const magicians = ["magician a", "magician b", "magician c"]

const show_magicians = (arr: string[]) => {
    arr.forEach((magician) => {
        console.log(magician);
    })
}

show_magicians(magicians)

// for a regular person skilled in the sleight of hand aka "a magician" to become "great", he/she has to sell his/her soul 
// to the devil. And hence the title "The Damned One" or "The Devil Worshipper" are the most fitting. So I am going with one of em.

const make_insignificant = (arr: string[]) => {
    let modArr = arr.map((magician) => "The Damned One: " + magician)
    return modArr
}

let newArr = make_insignificant(magicians);

show_magicians(magicians)
show_magicians(newArr)