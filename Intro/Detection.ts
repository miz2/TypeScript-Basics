function detect(val:number|string){
    if(typeof val=="string"){
    return val.toLowerCase()
}
else{
    return val+3;
}
}
function provideId(id:string|null){
    if(!id){
        console.log("give id");
        return
    }
    id.toLowerCase()
}
function printAll(strs:string|string[]|null){
    if(strs){

    
    if(typeof strs==="object"){
        for(const s of strs){
            console.log(s)
        }
    }
    else if(typeof strs==="string"){
        console.log(strs);
        
    }}
}
// JS has an operator for determining if an object has a property with name the in operator 
// takes account as a way to narrow down the potential types 
interface Use{
    name:string,
    email:string
}
interface Admin{
    name:string,
    email:string,
    isAdmin:boolean
}
function isAdmin(account:Use|Admin){
    if("isAdmin" in account){
        return account.isAdmin;
    }
}
// instance of narrowing :anything that is made with new 
// like arrays 
// checks for whether an object is an instance of a class 
function logVlaue(x:Date|string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }
    else{
        console.log(x.toUpperCase());
        
    }
}

type Fish={swim:()=>void};
type Bird={fly:()=>void};
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}
function getFood(pet:Fish|Bird){
    if(isFish(pet)){
        pet 
        return"fish food";
    }
    else{
        pet
        return "bird food"
    }
}
// discrminated unions and exhaustiveness and never type
interface Circle{
    kind:"circle",
    radius:number
}
interface Square{
    kind:"square",
    side:number
}
interface Rectange{
    kind:"rect",
    length:number,
    width:number
}
type Shape=Circle|Square

function getTrueShape(shape:Shape)
{
    if(shape.kind==="circle"){
        return Math.PI*shape.radius**2;
    }
    else{
        return shape.side*shape.side
    }
}
function getTrueShape2(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        default:
           const _defaultforshape:never=shape
           return _defaultforshape;
    }
}