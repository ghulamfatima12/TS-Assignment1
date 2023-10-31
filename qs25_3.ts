let alineColor: string[] = ["green", "yellow", "red"];

for (let i = 0; i <= alineColor.length; i++) {
  if (alineColor[i] === "green") {
    console.log("the player just earned 5 points");
  } else if (alineColor[i] === "yellow") {
    console.log("the player just earned 10 points");
  } else if (alineColor[i] === "red") {
    console.log("the player just earned 15 points");
  } else {
    console.log("the player just earned No points");
  }
}
