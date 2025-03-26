# Algebraic and Geometric Area Proof – Interactive Visualization

Dieses Projekt wurde im Rahmen einer Hausarbeit an der Universität Potsdam im Modul **Stoffdidaktik der Mathematik** von **Martin Kauter** entwickelt. Ziel ist es, die Herleitung und den Beweis der Flächenformel für rechtwinklige Dreiecke sowohl **algebraisch** als auch **geometrisch** interaktiv darzustellen. Dabei werden dynamische Grafiken, Formeln und Benutzerinteraktionen kombiniert, um mathematische Zusammenhänge verständlich zu machen.

## Überblick

Das Programm stellt ein rechtwinkliges Dreieck dar, bei dem die Benutzer:innen Punkte verschieben und verschiedene Beweisformen einblenden können. Unterstützt werden:

- **Algebraischer Beweis** der Flächenformel
- **Geometrischer Beweis**
- **Veranschaulichung des Satzes von Pythagoras**
- **Dynamische Winkel- und Flächenanzeige**

---

## Dateien und ihre Funktion

### `algebraic-proof-area.js`
- Zeigt den **algebraischen Beweis** der Flächenformel.
- Nutzt MathJax zur Darstellung mathematischer Formeln.
- Wird aktiviert, wenn im Dreieck ein rechter Winkel erkannt wird.
- Formuliert die Flächeninhalte mit Höhen und Seitenlängen.

### `geometric-proof-area.js`
- Steuert die Anzeige des **geometrischen Beweises**.
- Verhindert gleichzeitige Darstellung mit dem algebraischen Beweis.
- Schaltet den Modus per Button.

### `squares.js`
- Visualisiert die **Quadrate über den Seiten des Dreiecks**.
- Dient zur interaktiven **Herleitung des Satzes des Pythagoras**.
- Berechnet abhängig vom Winkel, ob die Visualisierung aktiviert wird.
- Bezieht sich auf rechtwinklige Dreiecke.

### `SteckeAB_Winkel_Grid.js`
- Zentrale Datei für die **interaktive Geometrie**.
- Zeichnet das Dreieck auf einem Raster.
- Ermöglicht Drag-and-Drop der Eckpunkte.
- Berechnet Winkel α, β und γ live.
- Zeigt ein Raster sowie optional Winkel und Hilfselemente an.

---

## Verwendung

1. Öffne das HTML-Dokument, das diese Dateien einbindet.
2. Bewege die Punkte, um verschiedene Dreiecksformen zu erzeugen.
3. Aktiviere per Buttons:
    - Den algebraischen Beweis
    - Den geometrischen Beweis
    - Die Flächen der Quadrate (Pythagoras)

---

## Lizenz

Dieses Projekt wurde ausschließlich für didaktische Zwecke im Rahmen einer universitären Lehrveranstaltung entwickelt und unterliegt der MIT Lizenz.

MIT-License

Copyright (c) 2024 x2Xava2x

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
