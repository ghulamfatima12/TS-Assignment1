let guest: string[] = ["ayesha", "hina", "kashaf", "rimsha", "komal"];

console.log(`${guest[0]}, please come to dinner.`);
console.log(`${guest[1]}, please come to dinner.`);
console.log(`${guest[2]}, please come to dinner.`);
console.log(`${guest[3]}, please come to dinner.`);
console.log(`${guest[4]}, please come to dinner.`);
console.log(`\nSorry, ${guest[1]} can't make it to dinner.`);
// Imran can't make it! Let's invite Atif Mahar instead.

delete guest[2];
guest.splice(2, 1, "komal janii");

// Print the invitations again.
console.log(`\n${guest[0]}, please come to dinner.`);
console.log(`\n${guest[1]}, please come to dinner.`);
console.log(`\n${guest[2]}, please come to dinner.`);
console.log(`\n${guest[3]}, please come to dinner.`);
console.log(`\n${guest[4]}, please come to dinner.`);








