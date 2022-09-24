import Personagem from './personagem'

import PromptSync from 'prompt-sync';

let prompt = PromptSync();
let option: number = 0;

let personagem = new Personagem('Shyriu', 60, 80, 70, 60);


while(option != 9){
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
       personagem.status();
        break;

    case 2: 
       personagem.treinarDefesa();
       personagem.status();  
        break;
   
     case 3:
         personagem.energia += Math.random() * 10;   
         if (personagem.energia > 100){
            personagem.energia = 100;
         }
         personagem.status()
         break;
    case 4:
         personagem.energia -= Math.random() * 100;
         if (personagem.energia < 0){
            console.log("Você Morreu !!!");   
         }

         personagem.status()
        break;
        case 8:
           personagem.status(); 
        break;

        default:
    }
  
}


