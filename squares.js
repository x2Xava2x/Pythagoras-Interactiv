let areas = false;
let squarePoints = [];
let lines = [];


function toggleAreas() {
    calculateTriangleAngles();
    if (fixAB) {
        areas = !areas;
        document.getElementById("areas").innerText = areas ? "Pythagoras: AN" : "Pythagoras: AUS";
        return; //gehe an und aus
    }
    if (parseFloat(alpha.toFixed(2)) === 90 || parseFloat(beta.toFixed(2)) === 90 || parseFloat(gamma.toFixed(2)) === 90) {
        areas = !areas; // Schaltet nur um, wenn ein rechter Winkel existiert
        document.getElementById("areas").innerText = "Pythagoras: AN";
    } else {
        areas = false; // Falls kein rechter Winkel da ist, bleibt es AUS
        document.getElementById("areas").innerText = "Pythagoras: AUS";
    }
}

function calculateSquarePointPosition(p1, p2, p3) {
    if(!p1 || !p2 || !p3) return;

    squarePoints.push(p1,p2);

    if(p1.x === p2.x) { //Sonderfall bei gleichem X-Wert
        if(p1.y > p2.y) {
            let tp = p1;
            p1 = p2;
            p2 = tp;
        }

        let fy = p1.x;
        let functionDirection = { x: p2.y - p1.y, y: 0};
        if(fy > p3.x) { //wenn fy > p3.x liegt p3 links von gerade p1p2 -> Square muss rechts davon erzeugt werden
            let normal = { x: functionDirection.x, y: 0 };
            let t = { x: p1.x + normal.x, y: p1.y + normal.y };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y };
            squarePoints.push(t);
            return;
        }
        if(fy < p3.x) { // wenn fy < p3.x liegt p3 rechts von gerade p1p2 -> Square muss links davon erzeugt werden
            let normal = { x: -(functionDirection.x), y: 0 };
            let t = { x: p1.x + normal.x, y: p1.y + normal.y};
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y};
            squarePoints.push(t);
            return;
        }
    }
    if(p1.y === p2.y) {
    //Sonderfall bei gleichem y-Wert
        let fy = p1.y;
        let functionDirection = { x: 0, y: p1.x - p2.x};
        if(fy < p3.y){ //wenn fy > p3.y liegt p3 unterhalb von gerade p1p2 -> Square muss drüber erzeugt werden
            let normal = { x: functionDirection.x, y: functionDirection.y};
            let t = { x: p1.x + normal.x, y: p1.y + normal.y};
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y};
            squarePoints.push(t);
            return;
        }
        if(fy > p3.y){ //wenn fy < p3.y liegt p3 oberhalb von gerade p1p2 -> Square muss drunter erzeugt werden
            let normal = {x: functionDirection.x, y: -(functionDirection.y)};
            let t = { x: p1.x + normal.x, y: p1.y + normal.y};
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y};
            squarePoints.push(t);
            return;
        }
    }
    //Berechnung der Geraden von p1&p2 sowie Richtungsvektor
    if(p1.x > p2.x){
        let tp = p1;
        p1 = p2;
        p2 = tp;
    }
    let m = (p2.y - p1.y) / (p2.x - p1.x);

    if(m > 0) {
        let n = p1.y - (m * p1.x);
        //y = m * x + n
        //let fy = m * p3.x + n;
        let fx = (p3.y - n)/m
        let functionDirection = { x: p1.x - p2.x, y: p1.y - p2.y };
        if(fx < p3.x) { //wenn fy > p3.y liegt p3 rechts von Gerade p1p2 -> Square muss links davon erzeugt werden
            let normal = { x: functionDirection.y, y: -(functionDirection.x) };
            let t = { x: p1.x + normal.x, y: p1.y + normal.y };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y };
            squarePoints.push(t);
            return;
        }
        if(fx > p3.x) { //wenn fy > p3.y liegt p3 links von Gerade p1p2 -> Square muss rechts davon erzeugt werden
            let normal = { x: -(functionDirection.y), y: functionDirection.x };
            let t = { x: p1.x + normal.x, y: p1.y + normal.y };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y };
            squarePoints.push(t);
            return;
        }
    }
    if(m < 0) {
        fy = p1.y - (m * p1.x);
        let functionDirection = { x: p1.x - p2.x, y: p1.y - p2.y };
        if(fy > p3.y) { //wenn fy > p3.y liegt p3 links von Gerade p1p2 -> Square muss rechts davon erzeugt werden
            let normal = createVector(-functionDirection.y, functionDirection.x);
            let t = { x: p1.x + normal.x, y: p1.y + normal.y };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y };
            squarePoints.push(t);
            return;
        }
        if(fy < p3.y) { //wenn fy > p3.y liegt p3 rechts von Gerade p1p2 -> Square muss links davon erzeugt werden
            let normal = { x: -(functionDirection.y), y: functionDirection.x };
            let t = { x: p1.x + normal.x, y: p1.y + normal.y };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: p2.y + normal.y };
            squarePoints.push(t);
            return;
        }
    }
}

function drawSquares() {
    //erstes Quadrat erstellen (AB)
    squarePoints.length = 0;
    calculateSquarePointPosition(triangle1.A, triangle1.B, triangle1.C);
    if(triangle1.B.x < triangle1.A.x){
        quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[2].x,squarePoints[2].y,squarePoints[3].x,squarePoints[3].y);
    }else{
        quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[3].x,squarePoints[3].y,squarePoints[2].x,squarePoints[2].y);
    }


    //zweites Quadrat erstellen (BC)
    squarePoints.length = 0;
    calculateSquarePointPosition(triangle1.B, triangle1.C, triangle1.A);
    if(triangle1.C.y < triangle1.B.y){//Sonderfall
        quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[2].x,squarePoints[2].y,squarePoints[3].x,squarePoints[3].y);
    }else{
        quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[3].x,squarePoints[3].y,squarePoints[2].x,squarePoints[2].y);
    }

    //drittes Quadrat erstellen (AC)
    squarePoints.length = 0;
    calculateSquarePointPosition(triangle1.A, triangle1.C, triangle1.B);
    if(triangle1.C.y < triangle1.A.y){//Sonderfall
        quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[2].x,squarePoints[2].y,squarePoints[3].x,squarePoints[3].y);
    }else{
        quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[3].x,squarePoints[3].y,squarePoints[2].x,squarePoints[2].y);
    }

}