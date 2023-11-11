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
    arr.forEach((magician, index, array) => {
        array[index] = "The Damned One: " + magician
    })
    // for (let i = 0; i < magicians.length; i++) {
    //     magicians[i] = "The Damned One " + magicians[i];
    // }
}

make_insignificant(magicians)
show_magicians(magicians)