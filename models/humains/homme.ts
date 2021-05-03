import { Humain } from "./humain";

export class Homme extends Humain {

    constructor(nom : string, prenom : string, age : number) {
        super(nom, prenom, age);
    }
}