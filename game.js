
// in deze variabelen staat welke speler er aan de beurt is
var currentPlayer = 'rood';

var bool = false;

var winner = 0;

// hierin slaan we op welke velden door welke speler zijn geselecteerd
var selectedFields = {};

// hierin leggen we de winnende patronen vast
// elk patroon bestaat uit drie vakjes
const winningPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

/*
deze functie maakt het spel aan.
- maak een h1-status-element aan (hierin kunnen we tonen wie er aan de beurt is)
- voeg het status element toe aan het container-element
- maak een board-div aan
- voeg hieraan 9 x een field-div toe
- voeg de board div toe aan het container-element
*/
const createGame = () => {

    // status element aanmaken + toevoegen
    var status = document.createElement('h1');
    status.id = 'stateText';
    status.innerText = 'GAME!';
    document.getElementById('game').appendChild(status);

    // board element aanmaken
    var board = document.createElement('div');
    board.className = 'board';

    // maak 9 x een veld aan
    for (i = 1; i <= 9; i++) {
        // veld aanmaken met behulp van createField functie
        var field = createField(i);
        // voeg veld toe aan board-element
        board.appendChild(field);
    }

    // board element toevoegen aan container-element
    document.getElementById('game').appendChild(board);

    // functie aanroepen die de current gamestate update
    updateStateText();
}


// functie om een field-div met meegegeven text/nummer aan te maken (functie returnt field element)
const createField = (number) => {
    // div aanmaken
    var field = document.createElement('div');
    field.className = 'field';
    field.innerText = number;
    field.id = "veld_" + number;

    // event listener toevoegen (verwijst naar functie "fieldclick")
    field.addEventListener('click', fieldClick);

    // field-div teruggeven (return)
    return field;
}

// functie die aangeroepen kan worden bij click event (in de meegegeven parameter "e" staat alle informatie over het event)
const fieldClick = (e) => {

    // checkt of er al een winnaar bekend is
    if (bool === false) {
        // checkt hoeveel classes het geklikte vakje heeft, zijn het er meer dan 1 is het vakje al eens gekozen
        var x = e.target.classList.length;
        if (x > 1) {
            alert("vak is al gekozen");
        }
        else {
            e.target.classList.add(currentPlayer);

            // opslaan welke speler op welk vakje heeft geklikt
            selectedFields[e.target.innerText] = currentPlayer;

            // controleren op winnaar
            checkWinner();

            // functie aanroepen die de currentPlayer gaat wisselen
            changePlayer();
        }
    }
}


// functie die controleert of er een winnaar is
const checkWinner = () => {
    // loop alle winnende patronenen
    for (var pattern of winningPatterns) {

        // zoek de waarde/speler op voor elk vakje (pattern[0] / pattern[1] / pattern[2]) uit het patroon
        var field1 = selectedFields[pattern[0]]
        var field2 = selectedFields[pattern[1]]
        var field3 = selectedFields[pattern[2]]

        console.log(`${field1} = ${field2} = ${field3}`)

        // controleer of de drie waardes/spelers gelijk zijn aan elkaar
        if (field1 && field1 == field2 && field1 == field3) {
            alert(`${field1} is de winnaar`)
            winner = winner + 1;
            console.log(winner);
            bool = true;
        }
    }
}

// functie die de huidige speler wisselt (rood>blauw, blauw>rood)
const changePlayer = () => {
    if (currentPlayer == 'rood') {
        currentPlayer = 'blauw'
    }
    else {
        currentPlayer = 'rood'
    }
    // functie aanroepen om current state up te daten
    updateStateText();
}


// functie die de current state update (in dit geval wie er aan de beurt is)
const updateStateText = () => {

    document.getElementById('stateText').innerText = `${currentPlayer} is aan de beurt`;
}





