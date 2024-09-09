function sortear(){

    numeros = ``

    for(i=0;i<6;i++){
        n = Math.floor(Math.random()*60 +1);
        
        numeros += `${n}, `
    }

    document.getElementById('saida').innerHTML = `Os números sorteados são:<br> ${numeros}`
}