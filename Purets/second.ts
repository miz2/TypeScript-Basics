interface TakePhoto2 {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Story {
    createStory(): void;
}

class Instagram implements TakePhoto2 {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class YouTube implements TakePhoto2, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public watch: number
    ) {}

    createStory(): void {
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
