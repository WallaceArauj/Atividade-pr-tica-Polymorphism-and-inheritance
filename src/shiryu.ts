
export default class Personagem{
    
    constructor( 
        private _nome: string, 
        private _energia: number,
        private _vida: number,
        private _ataque: number,
        private _defesa: number,
     ){}

     
     public get nome() : string {
        return this._nome;
     }
     
     public set nome(nome : string) {
        this._nome = nome;
     }
     
     public get energia() : number {
        return this._energia;
     }
     
     public set energia(energia : number) {
        this._energia = energia;
     }
     
     public get vida() : number {
        return this._vida;
     }
     
     public set vida(vida : number) {
        this.vida = vida;
     }
     
     public get ataque() : number {
        return this._ataque;
     }
     
     public set ataque(ataque : number) {
        this._ataque = ataque;
     }

     public get defesa() : number {
        return this._defesa;
     }
     
     public set defesa(defesa : number) {
        this._defesa = defesa;
     } 
     
     

    public status(): string {
     return(
        'GUERREIRO: \n'+
        '\nNOME:' + 
        this.nome +
        ('\nENERGIA: ' + this.energia.toFixed(1)) +
        ('\nATAQUE: '  + this.ataque.toFixed(1)) +
        ('\nDEFESA: '  + this.defesa.toFixed(1)) )
     }

    public TreinarAtacar(): void{
        this.ataque += this.randomizar(7);
        this.energia -=this.randomizar(10);
        if(this.energia < 0){
            console.log('Você Morreu !!!')

        }else{
            if(this.defesa > 100){
                this.defesa = 0;
            }
        }
     }

    public treinarDefesa(): void{
        this.defesa +=this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.energia < 0){
            console.log("Você Morreu !!!");   
         }else{
            if(this.defesa > 100){
                this.defesa = 0; 
            }
         }
     }


    public descansar(hora: number): void{
        this.energia += hora * this.randomizar(10);   
        if (this.energia > 100){
           this.energia = 100;
        }
     }

    public batalhar(): number{
        let desgate : number = this.randomizar(10);
        this.energia -= desgate ;
        return desgate;
     }

    public isDead(): boolean{
        return this.energia < 0;
          
     }

    randomizar(fator: number): number {
        return Math.random() * fator;
    } 
     
     

}

