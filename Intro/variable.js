"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greeting = "Hello world";
// greetings=true not allaowed in TS
console.log(greeting);
var num = 6;
console.log(num.toExponential());
var userid = 4355;
userid.toPrecision();
// boolean type
var isLoggedIn = false;
// type inference :as above is too obvious and not a good practise and can be avoided 
var loggedout = false;
// any 
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
