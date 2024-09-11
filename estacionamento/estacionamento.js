function calcular() {
    preço = 0

    Entrada = document.getElementById("Entrada").value;
    Saida = document.getElementById("Saida").value;

    entradaD = new Date(Entrada).getDate();
    entradaH = new Date(Entrada).getHours();
    entradaM = new Date(Entrada).getMinutes();

    saidaD = new Date(Saida).getDate();
    saidaH = new Date(Saida).getHours();
    saidaM = new Date(Saida).getMinutes();

    if (saidaD === entradaD) {
        diferença = (saidaH - entradaH)
    } else if (saidaD !== entradaD) {
        diferença = (saidaD - entradaD) * 24
        if (saidaH <= entradaH) {
            diferença -= (entradaH - saidaH)
        } else {
            diferença += (saidaH - entradaH)
        }

    }

    preço = diferença * 15

    if (saidaM - entradaM > 0) {
        preço += 15
        diferença += 1
    }

    document.getElementById('saida').innerHTML = `O preço após ${diferença} horas é de: ${preço}R$`

}