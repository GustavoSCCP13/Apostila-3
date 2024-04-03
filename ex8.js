function calcular8(){
    var h = Number(input_hora.value);
    var m = (h * 60);
    document.getElementById("div_frase").innerHTML = `${h} horas em minutos é ${m} minutos`
    console.log("Multiplicar a hora por 60 para ter o resultado em minutos")
}