interface User{
    readonly dbId:number,
    email:string,
    userId:number,
    googleId?:string,
    startTrail:()=>string
    // startTrail():string
    getCoupon(couponName:string,value:number):number
}
// we can again write the same interface 
interface User{
    githubToken:string
}
// we can also do inheritance by using extends keyword 
interface Admin extends User{
    // only these values must be put 
    role:"admin"|"ta"|"leaner";
}
const jack:User={
    githubToken:"2hff",
    dbId:21,
    email:"fjheaf",
    userId:23,
    startTrail:()=>{
        return "started"
    },
    getCoupon:(name:"Bingo",off:10)=>{
        return off;
    }
}

// In interface we don't know how things happen behind the scenes 
// similar to 
// type User{
//     email:string,
//     userId:number
// }

// interface vs type is similar interface use extends to inherit 
// and type does it by intersections 
// read docs for further 

export{}