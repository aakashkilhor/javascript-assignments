const age = Number(prompt("Enter your age", ""));
if (age >= 18 ) {
    console.log("You are old enough to drive")
} else {
    years = 18 - age
    console.log(`you have to wait for another ${years} years to drive`)
}