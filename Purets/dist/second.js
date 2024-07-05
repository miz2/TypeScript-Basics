"use strict";
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, watch) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.watch = watch;
    }
    createStory() {
        console.log("Story created");
    }
}
// Usage examples
const instagram = new Instagram("portrait", "vivid", 3);
console.log(instagram.cameraMode); // Outputs: portrait
console.log(instagram.filter); // Outputs: vivid
console.log(instagram.burst); // Outputs: 3
const youtube = new YouTube("landscape", "monochrome", 5, 100);
console.log(youtube.cameraMode); // Outputs: landscape
console.log(youtube.filter); // Outputs: monochrome
console.log(youtube.burst); // Outputs: 5
console.log(youtube.watch); // Outputs: 100
youtube.createStory(); // Outputs: Story created
