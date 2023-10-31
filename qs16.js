"use strict";
let guests = ["Ayesha", "hina", "komal", "faiza", "kashaf", "sana"];
// Print the original list of guests
console.log("Original list of guests:");
for (let guest of guests) {
    console.log(`- ${guest}`);
}
// Inform that a bigger dinner table is available
console.log("Good news! We found a bigger dinner table.");
let newgustbigning = "khansa";
// Add a new guest to the beginning of the array
guests.unshift(newgustbigning);
// Add a new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
const newGuestMiddle = "Fiza";
guests.splice(middleIndex, 0, newGuestMiddle);
const newGuestEnd = "Aan Awan";
guests.push(newGuestEnd);
console.log("\nUpdated invitation messages:");
for (let guest of guests) {
    console.log(`Dear ${guest}, please join us for dinner.`);
}
