let sumeven = 0
let sumodd = 0
for(let i=0; i<=100; i++){
if (i%2 == 0) {
    sumeven = sumeven + i
} else {
    sumodd = sumodd + i
}
}
console.log(sumeven)
console.log(sumodd)