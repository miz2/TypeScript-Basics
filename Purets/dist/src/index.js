"use strict";
class User {
    constructor(email, name) {
        this.coursecount = 1;
        this.city = "";
        this.email = email;
        this.name = name;
    }
    // Getters
    get getName() {
        return `apple ${this.name}`;
    }
    get getCourseCount() {
        return this.coursecount;
    }
    // Setters
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count must be greater than 1");
        }
        this.coursecount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
}
const harry = new User("jzfvzjf@example.com", "jzf");
harry.city = "Dehradun";
// Using getters
console.log(harry.getName); // Outputs: apple jzf
console.log(harry.getCourseCount); // Outputs: 1
// we also have protected 
// theyare called as access modifiers 
// harry.email is not accessible because it is private
