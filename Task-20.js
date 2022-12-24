// Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let score = 45;
if (score >= 80) {
    let grade = "A"
    console.log(`Your grade is ${grade}`)    
        } else if (score >= 70) {
            let grade = "B"
            console.log(`Your grade is ${grade}`)    
            } 
                else if (score >= 60) {
                let grade = "C"
                console.log(`Your grade is ${grade}`)    
                } 
                    else if (score >= 50) {
                    let grade = "D"
                    console.log(`Your grade is ${grade}`)    
                    }
                    else {
                    let grade = "F"
                    console.log(`Your grade is ${grade}`)
                        }   