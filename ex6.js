function calcular6(){
    var c = Number(input_temperatura.value);
    var f = ((1.8 * c) + 32);
    
    document.getElementById("div_frase").innerHTML = `A temperatura ${c}Cº em Graus Fahrenheit é ${f}`
    console.log(`A temperatura ${c}Cº em Graus Fahrenheit é ${f}`)
}