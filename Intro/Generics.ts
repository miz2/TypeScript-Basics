const score:Array<number> =[]
const names:Array<string> =[]
function identityOne(val:boolean|number):boolean|number{
return val;
}
function identity<Type>(val:Type):Type{
    return val;
}
// we can use T in place of Type as it is a generic 
identity("true")
identity(true)
interface Bottle {
    brand: string;
    type: number;
}

function identityFour<T extends Bottle>(item: T): T {
    return item;
}

// Example usage:
const myBottle: Bottle = { brand: "CocaCola", type: 1 };
const result = identityFour(myBottle);

console.log(result); // Output: { brand: "CocaCola", type: 1 }

function getSearchProduct<T>(products: T[]): T {
    // Do some database operations here

    // Ensure the index is within the bounds of the array
    const idx = 3;
    if (products.length > idx) {
        return products[idx];
    } else {
        throw new Error("Index out of bounds");
    }
}
// can also done with arrow functions
const getSearchProduct2 = <T>(products: T[]): T => {
    // Do some database operations here

    // Ensure the index is within the bounds of the array
    const idx = 3;
    if (products.length > idx) {
        return products[idx];
    } else {
        throw new Error("Index out of bounds");
    }
}
interface DB{
    connection:string,
    username:string,
    password:string
}
function another<T,U extends DB>(valOne:T,valTwo:U):object{
    return {
        valOne,valTwo
    }
}
interface Quiz{
    name :string,
    type:string
}
interface Course{
    name: string,
    author:string,
    sub:string
}
class Sellable<T>{
    public cart:T[]=[]
    addtocart(products:T){
        this.cart.push(products);
    }
}