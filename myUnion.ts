let score:number|string=33
// we are using union here but not a very good practise 
type User={
    name:string;
    id:number;
}
type Admin={
    username:string;
    id:number
}
let miz:User|Admin={name:"hitesh",id:223}

// can e also used with function
function getDBID(id:number|string){
    if(typeof id==="string"){
        id.toLowerCase()
    }
    console.log(`db id is ${id}`);
}
getDBID("3")
getDBID(3)
// we will be allowed with this but may cause issues while we manipulate data

// arrays 
const data1:number[]=[1,23,45,7]
const data2:string[]=["1","2","4"]
// but we can have mix match and will get error so either of number or string only 
// const data3:string[]|number[]=[1,23,45,7,"6"]
// to resolve this issue 
const data3:(string|number|boolean)[]=[1,23,45,7,"6",true]
// let pi:3.14=3.14
// pi=3.145

export{}