/* Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
    - September, October or November, the season is Autumn.
    - December, January or February, the season is Winter.
    - March, April or May, the season is Spring
    - June, July or August, the season is Summer */

let monthName = "March";
let userInput = monthName.toUpperCase();
if (userInput=="JANUARY"||userInput =="FEBRUARY"||userInput =="DECEMBER") {
    console.log("Winter is here")
} else if (userInput=="SEPTEMBER"||userInput =="OCTOBER"||userInput =="NOVEMBER") {
    console.log("Season is Autumn")
} else if (userInput=="MARCH"||userInput =="APRIL"||userInput =="MAY") {
    console.log("Season is Summer")
} else if (userInput=="JUNE"||userInput =="JULY"||userInput =="AUGUST") {
    console.log("Season is Spring")
} else  {
    console.log("Not a month")
}