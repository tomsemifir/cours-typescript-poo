"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Humain = void 0;
var Humain = /** @class */ (function () {
    function Humain(nom, prenom, age) {
        this.direBonjour = function ( /*params*/) {
            console.log("On vous dit BONJOUR !");
        };
        this.calculerSomme = function (a, b) {
            var result;
            result = a + b;
            return result;
        };
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
    }
    Object.defineProperty(Humain.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        set: function (nom) {
            this._nom = nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Humain.prototype, "prenom", {
        get: function () {
            return this._prenom;
        },
        set: function (prenom) {
            this._prenom = prenom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Humain.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Humain;
}());
exports.Humain = Humain;
//# sourceMappingURL=humain.js.map