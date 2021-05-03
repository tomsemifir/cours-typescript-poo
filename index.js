"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var femme_1 = require("./models/humains/femme");
var homme_1 = require("./models/humains/homme");
var h1 = new homme_1.Homme("Desaegher", "Thomas", 12);
var h2 = new femme_1.Femme("Roberts", "Julia", 12);
var procreation = h2.procreer(h1);
console.log(procreation);
var procreation1 = h2.procreer(h1);
console.log(procreation1);
var procreation2 = h2.procreer(h1);
console.log(procreation2);
var procreation3 = h2.procreer(h1);
console.log(procreation3);
//# sourceMappingURL=index.js.map