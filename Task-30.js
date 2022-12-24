let hexcode = ["1", '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
let word = 0;
for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random()*15);
    word += hexcode[random]
}
let hexword = word.slice(1)
console.log(hexword)