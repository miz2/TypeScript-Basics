"use strict";
// const AISLE=0;
// const MIDDEL=1;
// const WINDOW=2;
// if(seat==0){
Object.defineProperty(exports, "__esModule", { value: true });
// }
// can be done better by enums
var SeatChoice;
(function (SeatChoice) {
    // all have default values as 0 can be changed 
    SeatChoice[SeatChoice["AISLE"] = 16] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 17] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 18] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 19] = "FOURTH";
    // and must be of same data type be it string or number only one is allowed 
    // but thier are some ways by which we can do 
})(SeatChoice || (SeatChoice = {}));
// JUST TO PROVIDE MORE OPTIONS 
var hcSeat = SeatChoice.AISLE;
