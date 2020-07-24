const tinify = require("tinify");
const fs = require('fs');

tinify.key = 'LyNfnTWGSzFzwmHnDjhc64QVlnHHVwLh';

tinify.fromUrl("./demo/wallhaven.png").toFile("optimized.png")
