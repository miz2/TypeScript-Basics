class User {
    private coursecount: number = 1;
    private email: string;
    public name: string;
    public city: string = "";

    constructor(email: string, name: string) {
        this.email = email;
        this.name = name;
    }

    // Getters
    get getName(): string {
        return `apple ${this.name}`;
    }

    get getCourseCount(): number {
        return this.coursecount;
    }

    // Setters
    set setCourseCount(courseNum: number) {
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than 1");
        }
        this.coursecount = courseNum;
    }
}
class SubUser extends User{
    isFamily:boolean=true
}
const harry = new User("jzfvzjf@example.com", "jzf");
harry.city = "Dehradun";

// Using getters
console.log(harry.getName); // Outputs: apple jzf
console.log(harry.getCourseCount); // Outputs: 1
// we also have protected 
// theyare called as access modifiers 



// harry.email is not accessible because it is private
