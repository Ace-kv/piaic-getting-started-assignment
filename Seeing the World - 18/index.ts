const places = ["Switzerland", "Saudi Arabia", "Turkey", "Italy", "Bosnia"]
const alphPlaces = places.toSorted()    // toSorted gives the following error: Property 'toSorted' does not exist on type 'string[]'
                                        // I have tried a couple of solutions online but to no avail. tsc -v is 5.2.2, js executes fine.

console.log("Original Array:", places);
console.log("Alphabetically Sorted Array:", alphPlaces);
console.log("Original Array:", places);
console.log("Reversed Alphabetically Sorted Array:", alphPlaces.reverse());
// another method for line 8:
// console.log("Reversed alphabetically sorted array:", places.toSorted((a: string, b: string) => b.localeCompare(a)));
console.log("Original Array:", places);

const revOrgArr = places.reverse()
console.log("Reversed Original Array:", revOrgArr);
console.log("Reversed Reversed Original Array i.e. Original Array:", revOrgArr.reverse());

places.sort();
console.log("Original Array Now = Alphabetically Sorted Original Array:", places);

places.sort((a: string, b: string) => b.localeCompare(a))
console.log("Reversed Alphabetically Sorted Array:", places);
console.log("Original Array Now = Reversed Alphabetically Sorted Original Array:", places);