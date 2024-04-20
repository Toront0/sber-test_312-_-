import { encoded, translations } from "./data.js";
import { decoder } from "./decoder.js";

// console.log("Let's rock");
// console.log(encoded, translations);

console.log(decoder(encoded, translations));
