let button, quebralinha, jogada = 1, vencedor = 0
let tabuleiro = new Array(3)
for (i=0; i < tabuleiro.length; i++){
    tabuleiro[i] = new Array(3)
}
for (i=0; i < tabuleiro.length; i++){
    quebralinha = document.createElement('br')
    document.body.append(quebralinha)
    for(let j = 0; j < tabuleiro[i].length; j++){
        button = document.createElement('button')
        button.setAttribute('type', 'button')
        button.setAttribute('id', 'bt' + i + "" + j)
        button.setAttribute('onclick', "marca(" + i + "," + j + ")")
        button.setAttribute("class", 'btjogo' + i)
        button.append(document.createTextNode(""))
        document.body.append(button)
    }
}