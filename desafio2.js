let vitorias = 101;
let derrotas = 10;
const {Total, nivel} = Vitorias_E_Derrotas(vitorias, derrotas);


function Vitorias_E_Derrotas(vitorias, derrotas){
let Total = vitorias - derrotas;
let nivel;
if(Total <= 10){
    nivel = "ferro";
} else if(Total <= 20){
    nivel = "bronze";
} else if(Total <= 50){
    nivel = "prata";
} else if(Total <= 80){
    nivel = "ouro";
} else if(Total <= 90){
    nivel = "Platina";
} else if(Total <= 100){
    nivel = "lendário";
} else if(Total > 100){
    nivel = "Imortal";
} else {
    console.log("Erro");
}

return {Total, nivel};
}

console.log(`O heroi tem saldo de ${Total} e seu nivel está em ${nivel}`);
