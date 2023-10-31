let gests = ["minahil","rimsha","sana","kashaf","mehwish","hina","ayesha","faiza","sumaira"]
console.log("our complete list of gusts how are invited on dinner");
for(let gest of gests)
{
    console.log(`${gest}`);
}
//Inform that only two people can be invited
console.log("\nUnfortunately, the dinner table won't arrive in time, and we can only invite two people for dinner.");

while(gests.length > 2)
{
    let removedguests=gests.pop();
    console.log(`sorry ${removedguests} we can't invite you to dinner.`)
}

// Print messages to the two people still on the list
console.log(`\n${gests[0]}, you're still invited to dinner.`);
console.log(`${gests[1]}, you're still invited to dinner.`);


// Remove the last two names from the list
gests.pop();
gests.pop();
// Print the updated list (should be empty)
console.log("\nUpdated list of guests:");
for (let gest of gests) {
    console.log(`- ${gest}`);
}
