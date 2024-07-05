"use strict";
class TakePhoto {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    // Non-abstract method in the parent class
    getDetails() {
        return `Mode: ${this.cameraMode}, Filter: ${this.filter}, Burst: ${this.burst}`;
    }
}
class Instag extends TakePhoto {
    constructor(cameraMode, filter, burst, resolution) {
        // Calling the parent class constructor
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.resolution = resolution;
    }
    // Implementing the abstract method
    getSepia() {
        console.log("Sepia filter applied");
    }
    // Overriding a method from the parent class
    getDetails() {
        // Calling the parent class method
        const parentDetails = super.getDetails();
        return `${parentDetails}, Resolution: ${this.resolution}`;
    }
}
// Usage example
const instaPhoto = new Instag("portrait", "vivid", 3, "1080p");
console.log(instaPhoto.cameraMode); // Outputs: portrait
console.log(instaPhoto.filter); // Outputs: vivid
console.log(instaPhoto.burst); // Outputs: 3
console.log(instaPhoto.getDetails()); // Outputs: Mode: portrait, Filter: vivid, Burst: 3, Resolution: 1080p
instaPhoto.getSepia(); // Outputs: Sepia filter applied
