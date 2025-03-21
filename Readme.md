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

***