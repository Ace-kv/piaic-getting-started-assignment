interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: string | number | boolean;
}

function createCar(manufacturer: string, modelName: string, ...options: Array<{ key: string; value: string | number | boolean }>): Car {
    const car: Car = {
        manufacturer,
        modelName,
    };

    options.forEach(({ key, value }) => {
        car[key] = value;
    });

    return car;
}

// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", { key: "color", value: "Blue" }, { key: "hasSunroof", value: true });

// Print the Object
console.log(myCar);

