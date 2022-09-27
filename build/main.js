"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shiryu_1 = require("./shiryu");
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var option = 0;
var personagem = new shiryu_1.default('Shyriu', 60, 80, 70, 60);
while (option != 9 || personagem.isDead()) {
    console.log('****************** PERSONAGEM **********************');
    console.log('|  1 Treinar Ataque                                 |');
    console.log('|  2 Treinar Defesa                                 |');
    console.log('|  3 Descansar                                      |');
    console.log('|  4 Enrar na Batalha                               |');
    // console.log('|  9 SAIR .........                                 |');
    // console.log('|  9 SAIR .........                                 |');
    console.log('|  8 Mostrar os atributos                           |');
    console.log('|  9 SAIR .........                                 |');
    console.log('****************************************************');
    option = +prompt('ESCOLHA SUA OPÇÃO: ');
    switch (option) {
        case 1:
            personagem.TreinarAtacar();
            console.log(personagem.status());
            break;
        case 2:
            personagem.treinarDefesa();
            console.log(personagem.status());
            break;
        case 3:
            var horas = +prompt('Digite a qtd de horas para descansar: ');
            personagem.descansar(horas);
            console.log(personagem.status());
            break;
        case 4:
            var rest = personagem.batalhar();
            console.log("Voc\u00EA consumiu nesta batalha ".concat(rest, " de energia"));
            console.log(personagem.status());
            break;
        case 8:
            console.log(personagem.status());
            break;
        default:
    }
}
console.log('VOCÊ ESTÁ MORTO');
