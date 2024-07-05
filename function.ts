function addtwo(num:number){
    return num+2
}
// how to specify return types 
function addThree(num:number):number{
    return num+3
}
function getUpperCase(val:string){
    return val.toUpperCase()
}
function signupUser(name:string,email:string,idPaid:boolean){

}
// putting some default values 
let isSignIn=(name:string,email:string,isPaid:boolean=false)=>{
if(isPaid===void 0)
{
    isPaid=false;
}

}
isSignIn("mi","ff")
addtwo(56)
getUpperCase("de")
const getHello=(s:string):string=>{
    return "he"
}
// list
const heros=["thor","spiderman"]
// this part is not necessary to specify explicitly and done by ts implictly
heros.map((hero:string)=>{
    return `hero is ${hero}`
})

function consoleError(errmsg:string):void{
    console.log(errmsg);   
}
function handleError(errmsg:string):void{
    throw new Error(errmsg);   
}
// never type repersents alues which are never observed . this means that the function
// never throws an exception or terminates execution of the program 

export{}