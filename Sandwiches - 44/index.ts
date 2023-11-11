const makeSandwich = (...items: string[]) => {
    console.log("Sandwich Order Summary:");
    console.log("Bread + " + items.join(" + ") + " + Bread");
}

makeSandwich("Chicken", "Cheese", "Lettuce");
makeSandwich("Turkey", "Tomato");
makeSandwich("Lettuce");
