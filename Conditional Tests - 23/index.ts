let car: string = 'subaru';

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car === 'Subaru'? I predict False.");
console.log(car === 'Subaru');

console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');

console.log("Is car.length === 0? I predict False.");
console.log(car.length === 0);

console.log("Is car.length >= 6? I predict True.");
console.log(car.length >= 6);

console.log("Is car.endsWith('ru') === false? I predict False.");
console.log(car.endsWith('ru') === false);

console.log("Is car.startsWith('sub')? I predict True.");
console.log(car.startsWith('sub'));

console.log("Is car.includes('beru')? I predict False.");
console.log(car.includes('beru'));

console.log("Is car.includes('bar') === false? I predict True.");
console.log(car.includes('bar') === true);

console.log("Is car.toLowerCase() === 'Subaru'? I predict False.");
console.log(car.toLowerCase() === 'Subaru');
