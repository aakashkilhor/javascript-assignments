let varDate = new Date();
console.log(`${varDate.getFullYear()}-${varDate.getMonth()+1}-${varDate.getDay()} ${varDate.getHours()}:${varDate.getMinutes()}`);
console.log(`${varDate.getDay()}-${varDate.getMonth()+1}-${varDate.getFullYear()} ${varDate.getHours()}:${varDate.getMinutes()}`);
console.log(`${varDate.getDay()}/${varDate.getMonth()+1}/${varDate.getFullYear()} ${varDate.getHours()}:${varDate.getMinutes()}`);

// // What is the year today
// console.log(varDate.getFullYear());
// // What is the month today as a number
// console.log(varDate.getMonth());
// //  What is the date today
// console.log(varDate.getDate());
// //  What is the day today as a number
// console.log(varDate.getDay());
// //  What is the hours now
// console.log(varDate.getHours());
// //  What is the minutes now
// console.log(varDate.getMinutes());
// //  The number of milliseconds elapsed from 1 Jan 1970 to now
// console.log(Date.now())