function calcular11(){
    var n = Number(input_numero.value);
    var valorAumento = n - (n * (10/ 100));
    document.getElementById("div_frase").innerHTML = `${valorAumento}`
    console.log(`O número ${n} - 10% fica ${valorAumento}`)
}