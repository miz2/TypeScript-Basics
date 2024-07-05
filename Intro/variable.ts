let greeting: string="Hello world"
// greetings=true not allaowed in TS
console.log(greeting);
let num=6;
console.log(num.toExponential());
let userid:number=4355
userid.toPrecision()
// boolean type
let isLoggedIn:boolean=false
// type inference :as above is too obvious and not a good practise and can be avoided 
let loggedout=false;

// any :must not use this as breaks consistency
// let hero;
// function getHero(){
//     return "thor"
// }
// hero=getHero();
// any is a marker which turns off the type checking 
let hero: string;
function getHero(){
    return "thor"
}
hero=getHero();
export {}
