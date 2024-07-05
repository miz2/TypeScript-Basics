const User={
    name:"miz",
    email:"hdjzfb"
}
function createUser({name:string,isPaid:boolean}){

}
createUser({name:"miz",isPaid:true})
function createCourse():{}{
    // means here we need to return an object 
    return {}
}
// function createCourse():{{name:string,isPaid:boolean}{
//     // means here we need to return an object 
//     return {}
// }

type User={
    name:string;
    email:string;
    isActive:boolean;
}
// somewhat created a data type
type mystr=string;
function create(user:User){

}
create({name:"",email:"df",isActive:true})
type User2={
    readonly _id:string;
    name:string;
    email:string;
    isActive:boolean;
    // marking optional
    carddetails?:number
}
let myuser:User2={
    _id:"1234",
    name:"h",
    email:"fef",
    isActive:false
}
myuser.email="dff"
// myuser._id="fddw" gives us error

type cardDate={
    cardDate:string
}
type cardNumber={
    cardNumber:string
}
// making them as one 
type cardDetails=cardDate & cardNumber & {
    cvv:number
}
export{}