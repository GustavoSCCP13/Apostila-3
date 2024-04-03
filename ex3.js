function calcular3(){
    
    var n1 = Number(input_numero1.value);
    var n2 = Number(input_numero2.value);
    var area = (n1 * n2);
    var p = ((2 *n1) + (2 * n2));

    document.getElementById("div_frase").innerHTML = `A área do retângulo é de ${area} e o perímetro é ${p}`;
    console.log(n1 * n2)
}