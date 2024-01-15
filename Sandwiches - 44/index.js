var makeSandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order Summary:");
    console.log("Bread + " + items.join(" + ") + " + Bread");
};
makeSandwich("Chicken", "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich("Lettuce");
