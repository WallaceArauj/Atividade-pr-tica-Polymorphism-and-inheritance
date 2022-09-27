"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Personagem = /** @class */ (function () {
    function Personagem(_nome, _energia, _vida, _ataque, _defesa) {
        this._nome = _nome;
        this._energia = _energia;
        this._vida = _vida;
        this._ataque = _ataque;
        this._defesa = _defesa;
    }
    Object.defineProperty(Personagem.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "energia", {
        get: function () {
            return this._energia;
        },
        set: function (energia) {
            this._energia = energia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "vida", {
        get: function () {
            return this._vida;
        },
        set: function (vida) {
            this.vida = vida;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "ataque", {
        get: function () {
            return this._ataque;
        },
        set: function (ataque) {
            this._ataque = ataque;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personagem.prototype, "defesa", {
        get: function () {
            return this._defesa;
        },
        set: function (defesa) {
            this._defesa = defesa;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.status = function () {
        return ('GUERREIRO: \n' +
            '\nNOME:' +
            this.nome +
            ('\nENERGIA: ' + this.energia.toFixed(1)) +
            ('\nATAQUE: ' + this.ataque.toFixed(1)) +
            ('\nDEFESA: ' + this.defesa.toFixed(1)));
    };
    Personagem.prototype.TreinarAtacar = function () {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(10);
        if (this.energia < 0) {
            console.log('Você Morreu !!!');
        }
        else {
            if (this.defesa > 100) {
                this.defesa = 0;
            }
        }
    };
    Personagem.prototype.treinarDefesa = function () {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.energia < 0) {
            console.log("Você Morreu !!!");
        }
        else {
            if (this.defesa > 100) {
                this.defesa = 0;
            }
        }
    };
    Personagem.prototype.descansar = function (hora) {
        this.energia += hora * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem.prototype.batalhar = function () {
        var desgate = this.randomizar(10);
        this.energia -= desgate;
        return desgate;
    };
    Personagem.prototype.isDead = function () {
        return this.energia < 0;
    };
    Personagem.prototype.randomizar = function (fator) {
        return Math.random() * fator;
    };
    return Personagem;
}());
exports.default = Personagem;
