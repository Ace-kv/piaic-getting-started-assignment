var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.forEach(function (num) {
    var numStr = num.toString();
    if (numStr == "1") {
        numStr = numStr + "st";
        console.log(numStr);
    }
    else if (numStr == "2") {
        numStr = numStr + "nd";
        console.log(numStr);
    }
    else if (numStr == "3") {
        numStr = numStr + "rd";
        console.log(numStr);
    }
    else {
        numStr = numStr + "th";
        console.log(numStr);
    }
});
