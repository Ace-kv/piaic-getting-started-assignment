let car: string = 'subaru';
let arr: string[] = ["A", "B", "C"]

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is car.length > 6? I predict False.");
console.log(car.length > 6);

console.log("Is car.length < 7? I predict True.");
console.log(car.length < 7);

console.log("Is car.length <= 3? I predict False.");
console.log(car.length <= 3);

console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6);

console.log("Is car.length >= 6 and car.length < 7? I predict True.");
console.log(car.length >= 6 && car.length < 7);

console.log("Is car.length >= 6 and car.length < 5? I predict False.");
console.log(car.length >= 6 && car.length < 5);

console.log("Is car.length >= 6 or car.length > 70? I predict True.");
console.log(car.length >= 6 || car.length > 70);

console.log("Is car.length < 6 or car.length > 70? I predict False.");
console.log(car.length < 6 || car.length > 70);

console.log("Is A in arr? I predict True.");
console.log(arr.includes("A"));

console.log("Is D in arr? I predict False.");
console.log(arr.includes("D"));

console.log("Is car.toLowerCase() === 'subaru'? I predict True.");
console.log(car.toLowerCase() === 'subaru');

console.log("Is car.toLowerCase() === 'Subaru'? I predict False.");
console.log(car.toLowerCase() === 'Subaru');
