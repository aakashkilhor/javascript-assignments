// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25]
ages.sort();
let minage = ages[0];
let maxage = ages[ages.length-1];
if (ages.length%2 == 0) {
 let value = Math.floor(Math.abs(ages.length/2))
 let median = (ages[value]+ages[value+1])/2
 console.log(median);
} 
else {
let median = ages[Math.floor((ages.length)/2)]
console.log(median)
}

let sum = 0;
ages.forEach(element => {
    sum += element
});
let average = (sum/ages.length);
console.log(average);

let range = maxage - minage;
console.log(range)

let compare = (Math.abs(minage-average)===Math.abs(maxage-average));
console.log(compare)