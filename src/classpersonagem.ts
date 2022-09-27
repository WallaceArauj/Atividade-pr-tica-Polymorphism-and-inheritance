import { Util } from "./Util";

export class Guerreiro{
    protected _nomee: string;
    protected _armadura: number;
    protected _vidamaxima: number;
    protected _vidaOn: number;

    constructor(nome:string){
        this._nomee = nome;
        this._armadura = Util.randomizar(1_000)
        this._vidamaxima = Util.randomizar(10_000)
        this._vidaOn = Util.randomizar(100)
    }
}