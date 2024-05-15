class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque;
        switch(this.tipo){
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                console.log("");
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}


const personagem1 = new Heroi("ZéMagia",12,"mago");
const personagem2 = new Heroi("ZéEspadinha", 35, "guerreiro");
const personagem3 = new Heroi("ZéVoadora",20,"monge");
const personagem4= new Heroi("ShaolinMatadorDePorco",30,"ninja");
personagem1.atacar();
personagem2.atacar();
personagem3.atacar();
personagem4.atacar();