
let gusts: string[] = ['shiza', 'faiza', 'hina'];

console.log(`${gusts[0]}, please come to dinner.`);
console.log(`${gusts[1]}, please come to dinner.`);
console.log(`${gusts[2]}, please come to dinner.`);
console.log(`\nSorry, ${gusts[1]} can't make it to dinner.`);

// Jack can't make it! Let's invite Gary instead

delete gusts[1];
gusts.splice(1, 1, "fatima");

console.log(`\n${gusts[0]}, please come to dinner.`);
console.log(`${gusts[1]}, please come to dinner.`);
console.log(`${gusts[2]}, please come to dinner.`);

// We got a bigger table! Let's add some more people to the list.

console.log(`\nWe got a bigger table!`);

gusts.splice(0, 1, "kashaf");
gusts.splice(1, 2, "mehvish");
gusts.splice(2, 2, "tuba");
gusts.splice(3, 3, "taiba");
gusts.splice(4, 4, "amina");

// Add Elizabeth Peratrovich

gusts.push("elizabeth peratrovich");

console.log(`${gusts[0]}, please come to dinner.`);
console.log(`${gusts[1]}, please come to dinner.`);
console.log(`${gusts[2]}, please come to dinner.`);
console.log(`${gusts[3]}, please come to dinner.`);
console.log(`${gusts[4]}, please come to dinner.`);
console.log(`${gusts[5]}, please come to dinner.`);


  










