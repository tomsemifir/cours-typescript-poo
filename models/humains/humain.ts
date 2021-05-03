export class Humain {

    private _nom : string;
    private _prenom : string;
    private _age : number;

    constructor(nom : string, prenom : string, age : number) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
    }

    direBonjour = (/*params*/) : void => {
        console.log(`On vous dit BONJOUR !`);
    }

    calculerSomme = (a : number , b : number) : number => {
        let result : number;
        result = a + b;
        return result;
    }

    get nom() {
        return this._nom;
    }

    set nom(nom : string) {
        this._nom = nom;
    }

    get prenom() {
        return this._prenom;
    }

    set prenom(prenom : string) {
        this._prenom = prenom;
    }

    get age() {
        return this._age;
    }

    set age(age : number) {
        this._age = age;
    }
}