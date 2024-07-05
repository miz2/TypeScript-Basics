// Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent
// , or create a set of distinct cases. TypeScript provides both numeric and string-based enums

// const AISLE=0;
// const MIDDEL=1;
// const WINDOW=2;
// if(seat==0){

// }
// can be done better by enums
const enum SeatChoice{
    // all have default values as 0 can be changed 
    AISLE=16,
    MIDDLE,
    WINDOW,
    FOURTH
    // and must be of same data type be it string or number only one is allowed 
    // but thier are some ways by which we can do 

}
// JUST TO PROVIDE MORE OPTIONS 
const hcSeat=SeatChoice.AISLE;
export{}