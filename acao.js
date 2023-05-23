var nomes = [];
var txtNomes = document.querySelector("#nomes");
var btn = document.querySelector("#iniciar");
var pontuacao = 0;
var rodada = 1;

btn.addEventListener("click", function() {
    var valores = txtNomes.value;
    nomes = valores.split(" ");
    txtNomes.value = "";
    txtNomes.disabled = true;
    btn.disabled = true;
  
    setTimeout(function() {
      jogar(0, iniciarCallback);
    }, 0);
  });
  
  function jogar(rodadaAtual, callback) {
    var numeroAleatorio = Math.floor(Math.random() * nomes.length) + 1;
    var palpite = prompt(`Digite o ${numeroAleatorio}º nome da lista:`);
  
    var nomeCorreto = nomes[numeroAleatorio - 1];
    var mensagem;
  
    if (palpite === nomeCorreto) {
      pontuacao++;
      mensagem = "Parabéns, você acertou!";
    } else {
      pontuacao--;
      mensagem = `Ops, você errou! O nome correto era ${nomeCorreto}.`;
    }
    if(pontuacao<0){
        pontuacao=0
    }
  
    alert(mensagem + ` Sua pontuação é ${pontuacao}.`);
  
    if (rodadaAtual <= 5) {
      setTimeout(function() {
        jogar(rodadaAtual + 1, callback);
      }, 0);
    } else {
      setTimeout(callback, 0);
    }
  }
  
  function iniciarCallback() {
    alert(`Fim de jogo! Sua pontuação final é ${pontuacao}.`);
    txtNomes.disabled = false;
    btn.disabled = false;
    pontuacao = 0;
  }