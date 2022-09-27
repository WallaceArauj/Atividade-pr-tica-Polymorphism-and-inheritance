import Personagem from './shiryu'

import PromptSync from 'prompt-sync';

let prompt = PromptSync();
let option: number = 0;

let personagem = new Personagem('Shyriu', 60, 80, 70, 60);


while(option != 9  || personagem.isDead()){
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

    option = +prompt('ESCOLHA SUA OPÇÃO: ')
    
    switch(option){
    case 1: 
      personagem.TreinarAtacar();
      console.log(personagem.status());
        break;

    case 2: 
       personagem.treinarDefesa();
       console.log(personagem.status());
        break;
   
     case 3:
        let horas: number = +prompt ('Digite a qtd de horas para descansar: ')
        personagem.descansar(horas);        
        console.log(personagem.status());
         break;
    case 4:
        let rest: number = personagem.batalhar();
        console.log(`Você consumiu nesta batalha ${rest} de energia`);
        
         console.log(personagem.status());
        break;
        case 8:
            console.log(personagem.status());
        break;

        default:
    }
  
}
console.log('VOCÊ ESTÁ MORTO');


