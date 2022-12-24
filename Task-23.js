// Write a program which tells the number of days in a month considering leap year
// Here month number start from 1 for january
// By using 0 in new date we are accessing the last day of the previous month
let monthnumber = 2;
let leapyearnumber = 2020;
console.log(new Date(leapyearnumber, monthnumber, 0).getDate());
