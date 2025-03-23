const gridSize = 20;            // Größe des Rasters
const cmPerGrid = 0.25 / 10;    // Umrechnung von Raster zu cm

let points = [];                // Array zur Speicherung der Eckpunkte des Dreiecks
let draggingPoint = null;       // Variable für den zu ziehenden Punkt
let fixAB = false;              // Gibt an, ob die Strecke AB fixiert ist
let circleCenter, circleRadius; // Variablen für Kreisbewegung der dritten Ecke
let winkel = false;             // Gibt an, ob die Winkel angezeigt werden
let alpha = 0;                  // \
let beta = 0;                   // |- JS macht keine Mehrfachzuweisungen
let gamma = 0;                  // /
let angle = false;
let triangle1;

function setup() {
    // Erstellt das Zeichenfeld und fügt es in den Container ein
    let cnv = createCanvas(600, 400);
    cnv.parent('canvas-container');
}

function draw() {
    // Kompatibilität SpiderMonkey <> V8
    // Firefox kann anscheinend nicht ohne Probleme auf squares.squarePoints zugreifen, deswegen kleiner Getter hier
    // let squarePoints = getSquarePoints();

    background(255);
    drawGrid(); // Zeichnet das Raster
    fill(0);
    textSize(14);
    textAlign(CENTER, CENTER);

    // Falls Fixierung aktiv ist, wird ein Kreis als Bewegungslimit für Punkt C definiert
    if (fixAB && points.length >= 2) {
        let midX = (points[0].x + points[1].x) / 2;
        let midY = (points[0].y + points[1].y) / 2;
        circleCenter = createVector(midX, midY);
        circleRadius = dist(points[0].x, points[0].y, points[1].x, points[1].y) / 2;
    }

    // Zeichnet Punkte und ihre Bezeichnungen (A, B, C)
    for (let i = 0; i < points.length; i++) {
        ellipse(points[i].x, points[i].y, 10, 10);
        text(String.fromCharCode(65 + i), points[i].x - 10, points[i].y - 10);
    }

    // Falls ein Dreieck definiert wurde, zeichne es
    if (points.length === 3) {
        noFill();
        stroke(0);
        triangle1 = {
            A: points[0],
            B: points[1],
            C: points[2],
            a: dist(points[1].x, points[1].y, points[2].x, points[2].y) * cmPerGrid,
            b: dist(points[0].x, points[0].y, points[2].x, points[2].y) * cmPerGrid,
            c: dist(points[0].x, points[0].y, points[1].x, points[1].y) * cmPerGrid
        };
        triangle(triangle1.A.x, triangle1.A.y, triangle1.B.x, triangle1.B.y, triangle1.C.x, triangle1.C.y);
        calculateTriangle(); // Berechnet die Seitenlängen

        if (winkel) {
            calculateTriangleAngles();
        }

        //hier gibt es massive probleme mit aber kp warum
        if (fixAB && areas) {
            drawSquares();
        }
        if (areas && (parseFloat(alpha.toFixed(2)) === 90 || parseFloat(beta.toFixed(2)) === 90 || parseFloat(gamma.toFixed(2)) === 90)) {
            drawSquares();
        }
    }
}

function drawGrid() {
    stroke(200);
    // Zeichnet das Raster in der Zeichenfläche
    for (let x = 0; x < width; x += gridSize) {
        line(x, 0, x, height);
    }
    for (let y = 0; y < height; y += gridSize) {
        line(0, y, width, y);
    }
}

function snapToGrid(value) {
    return round(value / gridSize) * gridSize; // Rundet Werte auf das nächstgelegene Rasterfeld
}

function mousePressed() {
    if (fixAB) {
        if (dist(mouseX, mouseY, triangle1.A.x, triangle1.A.y) < 10) {
            return;
        }
        if (dist(mouseX, mouseY, triangle1.B.x, triangle1.B.y) < 10) {
            return;
        }
    }
    // Prüft, ob ein existierender Punkt gezogen wird
    for (let i = 0; i < points.length; i++) {
        if (dist(mouseX, mouseY, points[i].x, points[i].y) < 10) {
            draggingPoint = i;
            return;
        }
    }
    // Falls weniger als drei Punkte existieren, füge einen neuen hinzu
    if (points.length < 3) {
        points.push(createVector(snapToGrid(mouseX), snapToGrid(mouseY)));
    }
}

function mouseDragged() {
    if (!fixAB){
        if (parseFloat(alpha.toFixed(2)) !== 90 || parseFloat(beta.toFixed(2)) !== 90 || parseFloat(gamma.toFixed(2)) !== 90) {
            areas = false;
            document.getElementById("areas").innerText = "Pythagoras: AUS";
        }
    }
    if (draggingPoint !== null) {
        // Falls Fixierung aktiv ist, bewegt sich Punkt C nur entlang eines Kreises
        if (fixAB && draggingPoint === 2) {
            let angle = atan2(mouseY - circleCenter.y, mouseX - circleCenter.x);
            points[2].x = circleCenter.x + cos(angle) * circleRadius;
            points[2].y = circleCenter.y + sin(angle) * circleRadius;
        } else {
            // Punkt wird am Raster ausgerichtet verschoben
            points[draggingPoint].x = snapToGrid(mouseX);
            points[draggingPoint].y = snapToGrid(mouseY);
        }
    }
}

function mouseReleased() {
    draggingPoint = null; // Setzt den Ziehmodus zurück
}

function calculateTriangle() {
    // zeigt Seitenlängen an
    document.getElementById('triangle-info').innerText = `Seitenlängen: a = ${triangle1.a.toFixed(2)} cm, b = ${triangle1.b.toFixed(2)} cm, c = ${triangle1.c.toFixed(2)} cm`;
}

function calculateTriangleAngles() {
    if (points.length !== 3) return;

    function distance(p1, p2) {
        return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
    }

    function toDegrees(radians) {
        return radians * (180 / Math.PI);
    }

    alpha = toDegrees(Math.acos(Math.min(1, Math.max(-1, (triangle1.b * triangle1.b + triangle1.c * triangle1.c - triangle1.a * triangle1.a) / (2 * triangle1.b * triangle1.c)))));
    beta = toDegrees(Math.acos(Math.min(1, Math.max(-1, (triangle1.a * triangle1.a + triangle1.c * triangle1.c - triangle1.b * triangle1.b) / (2 * triangle1.a * triangle1.c)))));
    gamma = 180 - alpha - beta;

    let angleText = document.getElementById('triangle-winkel');
    if (winkel) {
        angleText.innerText = `Winkel: α = ${alpha.toFixed(2)}°, β = ${beta.toFixed(2)}°, γ = ${gamma.toFixed(2)}°`;
        angleText.style.display = "block";
    } else {
        angleText.innerText = "";
        angleText.style.display = "none";
    }
}

function toggleWinkel() {
    winkel = !winkel;
    document.getElementById("winkel").innerText = winkel ? "Winkel: AN" : "Winkel: AUS";
    calculateTriangleAngles(); // Stelle sicher, dass die Anzeige aktualisiert wird
}

function toggleFixAB() {
    fixAB = !fixAB;
    document.getElementById("fixAB").innerText = fixAB ? "Fix AB: AN" : "Fix AB: AUS";
}

//muss alles überarbeitet werden
function showGeometricProof() {
    document.getElementById('proof-area').innerHTML = '<p>Geometrischer Beweis: Die Flächen der Kathetenquadrate ergeben zusammen die Fläche des Hypotenusenquadrats.</p>';
}

function showAlgebraicProof() {
    if (points.length === 3) {
        let c = dist(points[0].x, points[0].y, points[1].x, points[1].y) * cmPerGrid;
        let a = dist(points[1].x, points[1].y, points[2].x, points[2].y) * cmPerGrid;
        let b = dist(points[2].x, points[2].y, points[0].x, points[0].y) * cmPerGrid;
        document.getElementById('proof-area').innerHTML = `<p>Rechnerischer Beweis: a² + b² = c² <br> ${a.toFixed(2)}² + ${b.toFixed(2)}² = ${c.toFixed(2)}²</p>`;
    } else {
        document.getElementById('proof-area').innerText = 'Bitte erst ein Dreieck zeichnen!';
    }
}
