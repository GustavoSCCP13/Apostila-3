function calcular5(){
    var f = Number(input_temperatura.value);
    var c = ((f - 32) / 1.8);
    
    document.getElementById("div_frase").innerHTML = `A temperatura em Graus Centígrados é ${c}`
    console.log(`A temperatura em Graus Centígrados é ${c}`)
}