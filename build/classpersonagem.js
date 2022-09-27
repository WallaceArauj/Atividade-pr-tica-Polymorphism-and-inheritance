"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Util_1 = require("./Util");
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome) {
        this._nomee = nome;
        this._armadura = Util_1.Util.randomizar(1000);
        this._vidamaxima = Util_1.Util.randomizar(10000);
        this._vidaOn = Util_1.Util.randomizar(100);
    }
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
