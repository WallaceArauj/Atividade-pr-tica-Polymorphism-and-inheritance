"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var classpersonagem_1 = require("../../../src/classpersonagem");
var Util_1 = require("../../../src/Util");
Class;
Warrior;
classpersonagem_1.Guerreiro;
{
    _forca: number;
    _agilidade: number;
    constructor(nome, string);
    {
        _this = _super.call(this, nome) || this;
        this._vidaOn = 100;
        this._agilidade = Util_1.Util.randomizar(100, 10000);
        this._forca = Util_1.Util.randomizar(100, 10000);
        this._armadura = Util_1.Util.randomizar(10000);
    }
}
