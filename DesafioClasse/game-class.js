const prompt = require("prompt-sync")()

const tiposClasses = ["Guerreiro", "Mago", "Monge", "Ninja"]

console.log("Crie seu herói para enfrentar o mal emergente!\n\nAbaixo estão as classes válidas: \n")

for (i = 0; i < tiposClasses.length; i++) {
    console.log((i + 1) + "º Classe: " + tiposClasses[i] + "\n")
}

const name = prompt("Digite seu nome: ")

const age = Number(prompt("Digite sua idade: "))

const classe = prompt("Digite sua classe: (Digite a classe da mesma forma apresentada nas opções)")

class hero {
    constructor(nome, idade, tipo) {

        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let mensagem = "atacou usando"
        let confirmar = tiposClasses.includes(this.tipo)
        if (confirmar && this.tipo === "Guerreiro") {
            console.log(`O ${this.tipo}, ${this.nome}, ${mensagem} espada\n`)
        } else if (confirmar && this.tipo === "Mago") {
            console.log(`O ${this.tipo}, ${this.nome},  ${mensagem} magia\n`)
        } else if (confirmar && this.tipo === "Monge") {
            console.log(`O ${this.tipo}, ${this.nome},  ${mensagem} artes marciais\n`)

        } else if (confirmar && this.tipo === "Ninja") {
            console.log(`O ${this.tipo}, ${this.nome},  ${mensagem} shuriken\n`)
        } else {
            console.log("\nPor favor selecione uma classe válida")
        }
    }
}

let heroi = new hero(name, age, classe)

function encontro() {
    if (tiposClasses.includes(classe) === false) {
        heroi.atacar()
    } else {
        console.log("\nUm monstro hediondo atacou o herói " + name + "\n")
        opcao = prompt("Você quer ataca-lo? (S/N)\n")
        if (opcao === "S") {
            heroi.atacar()
            console.log("Voce ganhou do monstro e a missão foi um sucesso :)")

        } else {
            console.log("Você morreu " + name + "!")
        }

    }

}

encontro()


