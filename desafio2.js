let vitorias = 100;
let derrotas = 9;
let Kda = Vitorias_E_Derrotas(vitorias,derrotas);
let nivel = Calculanivel(Kda);
function Calculanivel(Total){
    let nivel;
    switch(true) {
        case Total <= 10:
            nivel = "ferro";
            break;
        case Total <= 20:
            nivel = "bronze";
            break;
        case Total <= 50:
            nivel = "prata";
            break;
        case Total <= 80:
            nivel = "ouro";
            break;
        case Total <= 90:
            nivel = "Platina";
            break;
        case Total <= 100:
            nivel = "lendário";
            break;
        case Total > 100:
            nivel = "Imortal";
            break;
        default:
            console.log("Erro");
    }
    return nivel;
}

function Vitorias_E_Derrotas(vitorias,derrotas){
    let total = vitorias - derrotas;
    return total;
}

console.log(`O heroi tem saldo de ${Kda} e seu nivel está em ${nivel}`);
