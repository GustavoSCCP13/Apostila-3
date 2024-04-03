function calcular10(){
    var n = Number(input_valor.value);
    document.getElementById("div_frase").innerHTML = `Cada parcela terá o valor de R$${n / 4}`
    console.log(`Cada parcela terá o valor de R$${n / 4}`)
}