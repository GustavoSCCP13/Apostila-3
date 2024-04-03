function calcular9(){
    var n = Number(input_numero.value);
    document.getElementById("div_frase").innerHTML = `O seu número é: ${n}, o anterior: ${n - 1} e o seguinte é: ${n + 1}`
    console.log("O anterior subtrai 1 e o seguinte soma 1")
}