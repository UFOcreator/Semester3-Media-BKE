# Boter, Kaas en Eieren

Een spel terug te vinden in het eeuwenoude Egypte, nu te vinden bij jou in je handen op het scherm.

# Files

Het bestand bestaat uit 3 verschillende files:
 1. index.html
 2. style.css
 3. game.js

## index.html
De index is zeer minimaal aangezien het merendeel van het spel word aangemaakt in de game.js.

    <body>
	    <div id="game"></div>
	    <div id="game2"></div>
	    <script>
		    createGame();
	    </script>
	</body>
Hier geeft de div "game" de plaats weer waar het spel wordt geplaatst.

## style.css
De style.css is makkelijk aan te passen voor andere kleuren door de .field.rood of .field.blauw aan te passen.

    .field.rood {
	    background: red;
	}
	.field.blauw {
	    background: blue;
	}

zo kan je de background veranderen naar een custom RGB kleur.

## game.js
Het JavaScript bestand is essentieel voor boter, kaas en eieren, hier worden alle tegels aangemaakt, de spelers en besloten wie er wint.

De winnaar wordt besloten door een array te doorlopen om te zien welke combinatie is behaald door welke speler.

    const  winningPatterns = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
    ];

# General
Voor eventueel contact ben ik bereikbaar op Github.
Veel speel plezier!