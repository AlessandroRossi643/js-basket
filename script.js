// Creazione array giocatori
var lista_giocatori=[];

//Funzione che mi generi il codice del giocatore
  function generateRandomCode(lungL,lungN) {
    var codicegen = '';
    var elencolettere = "ABCDEFGHIJKLMNOPQRSTUVYWZZ";
    for (var i = 0; i < lungL; i++) {
      var letterarandom = Math.floor(Math.random() * elencolettere.length);
      codicegen += elencolettere.substring(letterarandom, letterarandom + 1);
    }
    for (var i = 0; i < lungN; i++) {
      var numerorandom = Math.floor(Math.random()*10);
      codicegen+= numerorandom;
    }
    return codicegen;
  }

  var codiceGiocatore=generateRandomCode(3,3);
  console.log(codiceGiocatore);
