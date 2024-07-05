abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    // Abstract method to be implemented by derived classes
    abstract getSepia(): void;

    // Non-abstract method in the parent class
    getDetails(): string {
        return `Mode: ${this.cameraMode}, Filter: ${this.filter}, Burst: ${this.burst}`;
    }
}

class Instag extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public resolution: string
    ) {
        // Calling the parent class constructor
        super(cameraMode, filter, burst);
    }

    // Implementing the abstract method
    getSepia(): void {
        console.log("Sepia filter applied");
    }

    // Overriding a method from the parent class
    getDetails(): string {
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
