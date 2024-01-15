function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    options.forEach(function (_a) {
        var key = _a.key, value = _a.value;
        car[key] = value;
    });
    return car;
}
// Call the function with required information and additional properties
var myCar = createCar("Toyota", "Camry", { key: "color", value: "Blue" }, { key: "hasSunroof", value: true });
// Print the Object
console.log(myCar);
