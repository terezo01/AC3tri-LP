function calcular() {
    Entrada = parseInt(document.getElementById("hrEntrada").value);
    Saida = parseInt(document.getElementById("hrSaida").value);

    diferença = Saida - Entrada

    precoFinal = diferença * 15

    document.getElementById('saida').innerHTML = `O preço após ${diferença} horas é de: ${precoFinal}R$`

}