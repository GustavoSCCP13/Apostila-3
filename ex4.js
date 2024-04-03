function calcular4(){
    var atual = Number(input_salario_atual.value);
    var aumento = Number(input_aumento.value);
    var valorAumento = atual + (atual * (aumento/ 100))

    document.getElementById("div_frase").innerHTML = `O seu salário atual é de ${atual}, com o aumento de ${aumento} terá o valor total de ${valorAumento}`
    console.log(`O seu salário atual é de ${atual}, com o aumento de ${aumento} terá o valor total de ${valorAumento}`)
}