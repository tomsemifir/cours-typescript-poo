import { Homme } from "./homme";
import { Humain } from "./humain";

export class Femme extends Humain {

    constructor(nom : string, prenom : string, age : number) {
        super(nom, prenom, age);
    }

    procreer = (homme : Homme) : Humain => {
        let enfant : Humain;
        let random : number = Math.random() * 2;

        if(random > 1) {
            enfant = new Homme(homme.nom, "Tony", 0);
        } else {
            enfant = new Femme(homme.nom, "Hannah", 0);
        }
        return enfant;
    }
}