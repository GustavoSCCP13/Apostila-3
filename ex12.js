function calcular12(){
    var n1 = Number(input_nota1.value);
    var n2 = Number(input_nota2.value);
    var n3 = Number(input_nota3.value);
    var nome = (input_nome.value);
    var m = ((n1 + n2 + n3) / 3)
    document.getElementById("div_frase").innerHTML = `A média do aluno ${nome} é de ${m}`
    console.log(`Somar as 3 notas e dividir por 3, que é ${m}`)
}