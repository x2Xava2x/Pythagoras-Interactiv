# Devlog

## 21.03. / 23.10, Simko

### 1. JS Imports

Sollte die Seite nicht richtig laden, füge nochmal die Imports neu ein. Ich hatte das Problem auch - kommt von Github.
```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>
<script defer src="squares.js"></script>
<script defer src="SteckeAB_Winkel_Grid.js"></script>
```

### 2. SquarePoints

File: `squares.js:22`

Segment: `function calculateSquarePointPosition(...)`

```js
if (p1.x === p2.x) {
    // Sonderfall bei gleichem X-Wert
    return;
}
```
Liegen $p_1$ und $p_2$ vertikal auf einer Gerade beendet die Funktion und
```js
let squarePoints = [];
```
enthält dann nur 2 Punkte.
```js
function drawSquares() { ... }
```
erwartet aber genau 4 Punkte. Das gefällt `p5JS` aber nicht.

Mehr dann am Sonntag. Oder morgen schon wenn ich nicht vom Bücher schleppen kaputt bin :)

## 22.03 / 14.30 Mako
Ich habe mal die Sonderfälle mit eingefügt müsste aber nochaml überprüfen, wenn die Vierecke gezeichnet werden, ob die auch auf der richtigen seite liegen... ist nur ein Minuszeichen mehr oder weniger.

sonst gibt es in `StreckenAB_Winkel_Grid.js` massive probleme mit den if befehlen da diese die möglichkeit des Bewegens der Punkte blockieren warum auch immer, weil areas eigentlich gleich false ist.

```js
if (fixAB && areas) {
            drawSquares();
            quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[2].x,squarePoints[2].y,squarePoints[3].x,squarePoints[3].y);
        }
        if (areas && (parseFloat(alpha.toFixed(2)) === 90 || parseFloat(beta.toFixed(2)) === 90 || parseFloat(gamma.toFixed(2)) === 90)) {
            //drawSquares();
        }
```
wenn man den code löscht kann man die punkte nach aktivierung von winkel diese wenigstens wieder bewegen.
Bücherschleppen gut überstanden? :) 

***
