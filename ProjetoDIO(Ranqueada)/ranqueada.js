const prompt = require("prompt-sync")()
const classificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário","Imortal"]

function rank(wins, loses){
    let resultado = wins - loses
    return resultado 
}

let saldo = rank(vitorias = Number(prompt("Digite as vitórias: ")), 
derrotas = Number(prompt("Digite as derrotas: ")))


function setup(limite){
    let i = 0
    let mensagem
    while (i < limite){
        let nivel = classificacao [i]
        i++
        mensagem = `\nTotal vitórias: ${vitorias}\nTotal derrotas: ${derrotas}\nO Herói tem de saldo ${saldo} pontos e está no nível ${nivel}`
    }
     console.log(mensagem)
}

    if (vitorias < 10){
        setup(1)
    } else if (vitorias <= 20){
        setup(2)
    } else if(vitorias <= 50 ) {
        setup(3)
    } else if (vitorias <= 80){
        setup(4)
    } else if (vitorias <= 90){
        setup(5)
    } else if (vitorias <= 100){
        setup(6)
    } else {
        setup(7)
    }

    

        




