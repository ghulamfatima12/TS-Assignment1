let current_users: string[] = ["Imran", "Rehan", "Faiz", "Test", "Unknown"];
let new_users: string[] = ["Raafay", "rehan", "NameB", "USER", "Faiz"];
let k: number;
for (k = 0; k <= 4; k++) {
  for (let j = 0; j <= 4; j++) {
    if (current_users[i].toLowerCase() === new_users[j].toLowerCase()) {
      console.log(`User '${current_users[k]}' Already Exists try some other name`);
    } else {
      console.log(`${new_users[j]} User name is avaiable`);
    }
  }
}