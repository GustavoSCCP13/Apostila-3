function calcular7(){
    var n = Number(input_numero.value);
    var valorAumento = n + (n * (20/ 100));
    document.getElementById("div_frase").innerHTML = `${valorAumento}`
    console.log(`O número ${n} + 20% fica ${valorAumento}`)
}