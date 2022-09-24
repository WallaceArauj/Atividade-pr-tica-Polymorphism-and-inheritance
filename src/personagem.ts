
export default class D{
    
    constructor( 
        public nome: string, 
        public energia: number,
        public vida: number,
        public ataque: number,
        public defesa: number,
     ){}

     status(): void{
        console.log('GUERREIRO: ');
        console.log('NOME:' , this.nome);
        console.log('ENERGIA: ' ,this.energia.toFixed(1));
        console.log('ATAQUE: ' ,this.ataque.toFixed(1));
        console.log('DEFESA: ' ,this.defesa.toFixed(1));
     }

     TreinarAtacar(): void{
        this.ataque += Math.random() * 7;
        this.energia -= Math.random() * 10;
        if(this.energia < 0){
            console.log('Você Morreu !!!')

        }else{
            if(this.defesa > 100){
                this.defesa = 0;
            }
        }
     }

     treinarDefesa(): void{
        this.defesa += Math.random() * 5;
        this.energia -= Math.random() * 10;
        if (this.energia < 0){
            console.log("Você Morreu !!!");   
         }else{
            if(this.defesa > 100){
                this.defesa = 0; 
            }
         }
     }


     descansar(): void{
        this.energia += Math.random() * 10;   
        if (this.energia > 100){
           this.energia = 100;
        }
     }

     batalhar(): void{
        this.energia -= Math.random() * 100;
        if (this.energia < 0){
           console.log("Você Morreu !!!");   
        }
     }

     isDead(): void{
        if(this.energia < 0)
            console.log('Você Morreu !!!')
     }

}

