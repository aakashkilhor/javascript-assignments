// Write a program which tells the number of days in a month
// Here month number start from 1 for january
// By using 0 in new date we are accessing the last day of the previous month
let monthnumber = 2;
let yearnumber = 2022
console.log(new Date(yearnumber, monthnumber, 0).getDate());
