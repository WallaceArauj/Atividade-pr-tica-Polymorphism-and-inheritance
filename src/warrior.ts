import { Guerreiro } from "../../../src/classpersonagem"
import { Util } from "../../../src/Util"


export Class Warrior extends Guerreiro {

    private _forca: number;
    private _agilidade: number;

    constructor(nome:string){
        
        super(nome)

        this._vidaOn = 100;
        this._agilidade = Util.randomizar(100, 10_000);
        this._forca = Util.randomizar(100, 10_000);
        this._armadura = Util.randomizar(10_000);
    }

}