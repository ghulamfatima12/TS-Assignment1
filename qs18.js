"use strict";
let placesToVisit = [
    "Tokyo",
    "Paris",
    "Sydney",
    "New York",
    "Rome"
];
console.log("Original Order:");
console.log(placesToVisit);
let alphabeticalOrder = [placesToVisit].sort();
console.log("\nAlphabetical Order:");
console.log(alphabeticalOrder);
console.log("\nOriginal Order (still the same):");
console.log(placesToVisit);
