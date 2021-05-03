import { Femme } from "./models/humains/femme";
import { Homme } from "./models/humains/homme";
import { Humain } from "./models/humains/humain";

let h1 : Homme = new Homme("Desaegher", "Thomas", 12);
let h2 : Femme = new Femme("Roberts", "Julia", 12);


let procreation : Humain = h2.procreer(h1);
console.log(procreation);

let procreation1 : Humain = h2.procreer(h1);
console.log(procreation1);

let procreation2 : Humain = h2.procreer(h1);
console.log(procreation2);

let procreation3 : Humain = h2.procreer(h1);
console.log(procreation3);


