let nickname = prompt("Qual seu nome?");
alert ("Seja bem vindo ao nosso jogo de aventura, " + nickname + "!");

let nomeHeroi = prompt("Digite o nome do seu herói");
console.log(nomeHeroi);

let numero;
do {
numero = prompt("Digite um número válido de XP para o seu herói:");
}  while(numero < 0 || numero == "" || isNaN(numero));


if (numero < 1000) {
    alert("O herói " + nomeHeroi + " é ferro")
}

    else if (numero >= 1000 && numero <= 2000) {
    alert("O herói " + nomeHeroi + " é bronze")
}

    else if (numero >= 2001 && numero <= 5000) {
    alert("O herói " + nomeHeroi + " é prata")
}

    else if (numero >= 5001 && numero <= 7000) {
    alert("O herói " + nomeHeroi + " é ouro")
}

    else if (numero >= 7001 && numero <= 8000) {
    alert("O herói " + nomeHeroi + " é platina")
}

    else if (numero >= 8001 && numero <= 9000) {
    alert("O herói " + nomeHeroi + " é ascendente")
}

    else if (numero >= 9001 && numero <= 10000) {
    alert("O herói " + nomeHeroi + " é imortal")
}

    else if (numero >= 10001) {
    alert("O herói " + nomeHeroi + " é radiante")
}

console.log("O herói " + nomeHeroi + "está no nível de " + numero)