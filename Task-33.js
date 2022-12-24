let weight = 70;
let height = 1.70;
BMI = weight/(height*height);
var rounded = Math.round(BMI * 10) / 10
console.log(rounded)
if (rounded>30) {
    console.log("You are obese")
}
   else if (rounded>25) {
        console.log("You are overweight")
    }
       else if (rounded >18.5){
            console.log("You are healthy")
            }
            else {
                console.log("You are underweight")
            }