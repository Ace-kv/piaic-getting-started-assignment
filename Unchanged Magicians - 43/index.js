var magicians = ["magician a", "magician b", "magician c"];
var show_magicians = function (arr) {
    arr.forEach(function (magician) {
        console.log(magician);
    });
};
show_magicians(magicians);
// for a regular person skilled in the sleight of hand aka "a magician" to become "great", he/she has to sell his/her soul 
// to the devil. And hence the title "The Damned One" or "The Devil Worshipper" are the most fitting. So I am going with one of em.
var make_insignificant = function (arr) {
    var modArr = arr.map(function (magician) { return "The Damned One: " + magician; });
    return modArr;
};
var newArr = make_insignificant(magicians);
show_magicians(magicians);
show_magicians(newArr);
