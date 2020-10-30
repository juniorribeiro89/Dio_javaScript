
var data = new Date();
alert(data);
alert(data.getHours());

//alert("Ola mundo !")
// var nome = "junior"
// var idade = 31
// console.log("seu nome é " + nome + " e sua idade é " + idade)

var frutas = ["maça", "uva", "banana"]
console.log(frutas)
console.log(frutas[2])
frutas.push("Limão") //adiciona um elemnto no fim da lista
console.log(frutas)
console.log(frutas[0])
frutas.pop() //Remove o ultimo item
console.log(frutas)
console.log(frutas.length) //Mostra o Tamano da lista
console.log(frutas.reverse()); //Mostra a lista de tras pra frente.

console.log(frutas.toString())
console.log(frutas.join(" | "))

var carro = {
    nome: "Fiat Touro",
    cor: "Preto"
}
console.log(carro.nome)

 var carros = [{
    nome: "Fiat Toro",
    cor: "Preta"
}, {
    nome: "Audi Q3 Sportback",
    cor: "Azul"
}]
console.log(carros);

// var time = prompt("Qual o seu time? ")
// if (time == "Flamengo"){
//     alert("Melhor time do Mundo")
// }else{
//     alert("Não é o Flamengo")
// };

// var count = 0;
// while(count <= 10){
//     
//     alert(count);
//     count++;
// }



// var count;
// for(count = 0; count <= 5; count++){
//     alert(count)
//     console.log(count);
// }