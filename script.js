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

//Funzione che mi calcola un dato in maniera casuale
function generatePointReboundsFauls(max){
  return Math.floor(Math.random()*(max-1+1));
}

//Creazione oggetto giocatore e riempimento dell'array lista_giocatori
for (var i = 0; i < 101; i++) {
  var puntiFatti, rimbalzi, falli, succ2points, succ3points;
  var giocatore={
    'codiceGiocatore':generateRandomCode(3,3),
    'puntiFatti':generatePointReboundsFauls(50),
    'rimbalzi':generatePointReboundsFauls(20),
    'falli':generatePointReboundsFauls(12),
    'succ2points':generatePointReboundsFauls(52),
    'succ3points':generatePointReboundsFauls(40)
  }
  lista_giocatori.push(giocatore);

}
console.log(lista_giocatori);
