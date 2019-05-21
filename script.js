$(document).ready(function(){
  // Creazione array giocatori
  var lista_giocatori=[];

  //Funzione che mi generi il codice del giocatore
  function generateRandomCode(lungL,lungN) {

    var codicegen = '';
    var elencolettere = "ABCDEFGHIJKLMNOPQRSTUVYWZZ";
    for (var i = 0; i < lungL; i++) {
      var letterarandom = Math.floor(Math.random() * elencolettere.length);
      codicegen += elencolettere.substring(letterarandom, letterarandom + 1); //Metodo SubString: Mi va prendere una sottostringa di una stringa, dandp partenza e fine
    }
    for (var i = 0; i < lungN; i++) {
      var numerorandom = Math.floor(Math.random()*10);
      codicegen+= numerorandom;
    }
    return codicegen;
  }


  //Funzione che mi calcola un dato in maniera casuale
  function generatePointReboundsFauls(max){
    return Math.floor(Math.random()*(max-1+1));
  }

  //Creazione oggetto giocatore e riempimento dell'array lista_giocatori
  var i; //numero giocatori
  for (var i = 0; i < 100; i++) {

    // Controllo con il do while: Inserisci il giocatore finche la condizione (codice giocatore non sia incluso nella lista giocatori ) è vera
    do {
      var puntiFatti, rimbalzi, falli, succ2points, succ3points;
      var giocatore={
        'codiceGiocatore':generateRandomCode(3,3),
        'puntiFatti':generatePointReboundsFauls(50),
        'rimbalzi':generatePointReboundsFauls(20),
        'falli':generatePointReboundsFauls(12),
        'succ2points':generatePointReboundsFauls(52),
        'succ3points':generatePointReboundsFauls(40)
      }
    } while (lista_giocatori.includes('codiceGiocatore'))

    lista_giocatori.push(giocatore);
  }

  console.log(lista_giocatori);

  // Inserisco l'array di oggetti nella select utilizzando la i per individuare la posizione di ogni giocatore
  for (var i = 0; i < lista_giocatori.length; i++) {
    var newOption= '<option value="'+i+'">'+ lista_giocatori[i].codiceGiocatore + '</option>';
    $('#player_list').append(newOption);
  }


  // Vado a creare una funzione per individuare ogni volta il value singolo, cambiando giocatore. Si poteva usare anche click, ma nel console.log, vengono visualizzati due valori: quello della scelta e quello del cambio
  $('#player_list').change(function(){
    // Salvo l'indice in una variabile che mi servirà per individuare il giocatore scelto
    var giocatore_selezionato=($(this).val());
    console.log(lista_giocatori[giocatore_selezionato]);

    // Vado a leggere il contenuto html del template e lo salvo su una variabile
    var template_html=$('#player-template').html();
    var template_function=Handlebars.compile(template_html);

    // Vado a compilare la struttura del template e salvo la struttura completata in una variabile
    // andandola poi a stampare nell'html
    var placeholder={
      'title': lista_giocatori[giocatore_selezionato].codiceGiocatore,
      'puntifatti': lista_giocatori[giocatore_selezionato].puntiFatti,
      'rimbalzi': lista_giocatori[giocatore_selezionato].rimbalzi,
      'falli': lista_giocatori[giocatore_selezionato].falli,
      'perc2points': lista_giocatori[giocatore_selezionato].succ2points,
      'perc3points': lista_giocatori[giocatore_selezionato].succ3points
    };

    console.log(placeholder);
    var html=template_function(placeholder);
    $('#player_list').next().replaceWith(html);
  });
});
