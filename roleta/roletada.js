rodada = 0
bot = 0
player = 0

function roletar(){
    numeroPlayer = Math.floor(Math.random()*10 +1);    
    numeroBot = Math.floor(Math.random()*10 +1);

    rodada+=1
    
    if(numeroPlayer>numeroBot){
        player +=1
        document.getElementById('saida1').innerHTML = `Player ganhou a rodada`
    }else if(numeroBot>numeroPlayer){
        bot +=1
        document.getElementById('saida1').innerHTML = `Bot ganhou a rodada`
    }else{
        document.getElementById('saida1').innerHTML = `A rodada empatou`
    }

    if(player === 5 || bot === 5){
        alert("O jogo acabou")
        if(player> bot){
            alert("O Player ganhou!")
        }else{
            alert("O Bot ganhou!")
        }
        rodada = 0;
        bot = 0
        player = 0
    }
    document.getElementById('saida2').innerHTML= `Player = ${player} x Bot = ${bot}`
    document.getElementById('saida3').innerHTML= `Rodada ${rodada}`
}