const prompt = require("prompt-sync")()

const nome = prompt("Digite seu nome, heroi: ")

const xp = Number(prompt(`Digite a quantidade de XP atual, ${nome}: `))

const classificacao = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascedente", "Imortal", "Radiante"]

let nivelHeroi

function buscarNivel(limite){
    for(let i = 0; i < limite; i++){
        nivelHeroi = classificacao[i]
        
    }
}
 
        
        switch (true){
            case xp < 1000 :
                buscarNivel(1)
            break;      
            case xp <= 2000:
                 buscarNivel(2)
            break;     
            case xp <= 5000:
                buscarNivel(3)
            break;     
            case xp <= 7000:
                buscarNivel(4)    
            break;    
            case xp <= 8000:
                buscarNivel(5)
            break;
            case xp <= 9000:
                buscarNivel(6)
            break;
            case xp <= 10000:
                buscarNivel(7)
            break;
            default:
                buscarNivel(8)      
        }
    
        
    


console.log(`O héroi de nome ${nome} está no nível ${nivelHeroi}`)


