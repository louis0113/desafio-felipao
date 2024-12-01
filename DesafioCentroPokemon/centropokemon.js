
let dadosPokemon = [
["Poochyena", 2, "M", 13, false],
["Zigzagoon", 2 , "F", 13, false],
["Dragonite", 5, "M", 25, true],
["Dragonite", 5, "F", 24, true],
["Dragonite", 5, "F", 24, true],
["Poochyena", 3, "F", 15, false],
["Wurple", 2, "M", 14, false ]
]

const mensagemCadastro = " Cadastrado com Sucesso\n"

for(let i = 6; i >= 0; i--){
    console.log(dadosPokemon [i] [0].toUpperCase() + mensagemCadastro)
}




