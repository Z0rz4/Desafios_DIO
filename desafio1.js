let personagem = ["XaulinMatadorDePorco", 10001];

switch(true) {
    case personagem[1] <= 1000:
        personagem[1] = "Ferro";
        break;

    case personagem[1] <= 2000:
        personagem[1] = "Bronze";
        break;

    case personagem[1] <= 5000:
        personagem[1] = "Prata";
        break;

    case personagem[1] <= 7000:
        personagem[1] = "Ouro";
        break;

    case personagem[1] <= 8000:
        personagem[1] = "Platina";
        break;

    case personagem[1] <= 9000:
        personagem[1] = "Ascendente";
        break;

    case personagem[1] <= 10000:
        personagem[1] = "Imortal";
        break;

    case personagem[1] >= 10001:
        personagem[1] = "Radiante";
        break;

    default:
        console.log("Erro");
}

console.log("O herói de nome " + personagem[0] + " está no nivel de " + personagem[1]);