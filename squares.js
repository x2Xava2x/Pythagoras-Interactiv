let areas = false;
let squarePoints = [];
let lines = [];
let triangle2;

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
    squarePoints.length = 0;

    if(!p1 || !p2 || !p3) return;
    console.log("p1: ", p1)
    console.log("p2: ", p2)
    console.log("p3: ", p3)
    //push p1 und p2 auf Stack

    console.log("Sp01: ", JSON.stringify(squarePoints));
    squarePoints.push({ x: p1.x, y: -p1.y });
    squarePoints.push({ x: p2.x, y: -p2.y });

    console.log("Sp02: ", JSON.stringify(squarePoints));

    //haben p1 und p2 gleichen x-Wert? (senkrechte Gerade)
    if(p1.x === p2.x) {
        //wenn p1 und p2 gleichen x-Wert haben liegt p3 links oder rechts?
        let fx = p1.x;

        //Richtungsvektor berechnen und immer in gleiche Richtung zeigen lassen
        let functionDirection = { x: p2.x - p1.x, y: p2.y - p1.y };
        console.log("f_d11: ", functionDirection)
        if(functionDirection.y < 0) {
            functionDirection.y = -functionDirection.y;
        }
        console.log("f_d12", functionDirection)

        if(fx > p3.x) {
        //wenn p1 und p2 gleichen x-Wert haben liegt p3 links
            let normal = { x: functionDirection.y, y: -functionDirection.x };
            console.log("n1: ", normal)
            let t = { x: p1.x + normal.x, y: (-p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: (-p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp1: ", JSON.stringify(squarePoints));
            return;
        }

        if(fx < p3.x) {
        //wenn p1 und p2 gleichen x-Wert haben liegt p3 rechts
            let normal = { x: -functionDirection.y, y: functionDirection.x };
            console.log("n2: ", normal)
            let t = { x: p1.x + normal.x, y: (-p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: (-p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp2: ", JSON.stringify(squarePoints));
            return;
        }
    }
    //haben p1 und p2 gleichen y-Wert? (wagerechte Gerade)
    if(p1.y === p2.y) {
        //wenn p1 und p2 gleichen y-Wert haben liegt p3 drüber oder drunter?
        let fy = p1.y;

        //Richtungsvektor berechnen und immer in gleiche richtung zeigen lassen
        let functionDirection = { x: p2.x - p1.x, y: p2.y - p1.y };
        console.log("f_d21", functionDirection)
        if(functionDirection.x < 0) {
            functionDirection.x = -functionDirection.x;
        }
        console.log("f_d21", functionDirection)

        if(fy > p3.y) {
        //wenn p1 und p2 gleichen y-Wert haben liegt p3 drunter
            let normal = { x: functionDirection.y, y: -functionDirection.x };
            console.log("n3: ", normal)
            let t = { x: p1.x + normal.x, y: (-p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: (-p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp3: ", JSON.stringify(squarePoints));
            return;
        }

        if(fy < p3.y) {
        //wenn p1 und p2 gleichen y-Wert haben liegt p3 drüber
            let normal = { x: -functionDirection.y , y: functionDirection.x };
            console.log("n4: ", normal)
            let t = { x: p1.x + normal.x, y: (-p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: (-p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp4: ", JSON.stringify(squarePoints));
            return;
        }

    }
    //für die Strecken, welche keine gleichen x- oder y-Werte an den Endpunkten haben.
    let m = (p2.y - p1.y) / (p2.x - p1.x);                          //Anstieg der Gerade durch p1p2
    console.log("m: ", m)
    let n = p1.y - (m * p1.x);                                      //y-Achsenabschnitt g_p1p2
    fx = (p3.y - n) / m;                                            //x-Wert für p3 auf gerade p1p2
    let functionDirection = { x: p2.x - p1.x, y: p2.y - p1.y };     //Richtungsvektor von p1p2
    console.log("f_d31: ", functionDirection)
    if(functionDirection.x < 0 && functionDirection.y < 0){
        functionDirection.x = -functionDirection.x;
        functionDirection.y = -functionDirection.y;
    }else if(functionDirection.x < 0 && functionDirection.y > 0) {
        functionDirection.x = -functionDirection.x;
        functionDirection.y = -functionDirection.y;
    }
    console.log("f_d32: ", functionDirection)
    //Wenn anstieg positiv ist dann berechne wie folgt:
    if(m > 0) {
        //wenn fx > p3.x dann liegt p3 über g_p1p2
        if(fx > p3.x) {
            let normal = { x: functionDirection.y, y: -functionDirection.x };
            console.log("n5: ", normal)
            let t = { x: p1.x + normal.x, y: -(p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: -(p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp5: ", JSON.stringify(squarePoints));
            return;
        }
        //wenn fx < p3.x dann liegt p3 unter g_p1p2
        if(fx < p3.x) {
            let normal = { x: -functionDirection.y, y: functionDirection.x };
            console.log("n6: ", normal)
            let t = { x: p1.x + normal.x, y: -(p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: -(p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp6: ", JSON.stringify(squarePoints));
            return;
        }
    }
    //wenn Anstieg negativ ist dann berechen wie folgt:
    if(m < 0) {
        //wenn fx > p3.x dann liegt p3 unter g_p1p2
        if(fx > p3.x) {
            let normal = { x: -functionDirection.y, y: functionDirection.x };
            console.log("n7: ", normal)
            let t = { x: p1.x + normal.x, y: -(p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: -(p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp7: ", JSON.stringify(squarePoints));
            return;
        }
        //wenn fx > p3.x dann liegt p3 über g_p1p2
        if(fx < p3.x) {
            let normal = { x: functionDirection.y, y: -functionDirection.x};
            console.log("n8: ", normal)
            let t = { x: p1.x + normal.x, y: -(p1.y + normal.y) };
            squarePoints.push(t);
            t = { x: p2.x + normal.x, y: -(p2.y + normal.y) };
            squarePoints.push(t);
            console.log("Sp8: ", JSON.stringify(squarePoints));
            return;
        }
    }
}

function drawSquares() {
    triangle2 = {
        A: { x: triangle1.A.x, y: -triangle1.A.y },
        B: { x: triangle1.B.x, y: -triangle1.B.y },
        C: { x: triangle1.C.x, y: -triangle1.C.y }
    };
    console.log("A: ", triangle2.A)
    console.log("B: ", triangle2.B)
    console.log("C: ", triangle2.C)

    //erstes Quadrat erstellen (AB)
    //squarePoints.length = 0;
    calculateSquarePointPosition(triangle2.A, triangle2.B, triangle2.C);
    quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[3].x,squarePoints[3].y,squarePoints[2].x,squarePoints[2].y);

    //zweites Quadrat erstellen (BC)
    //squarePoints.length = 0;
    calculateSquarePointPosition(triangle2.B, triangle2.C, triangle2.A);
    quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[3].x,squarePoints[3].y,squarePoints[2].x,squarePoints[2].y);

    //drittes Quadrat erstellen (AC)
    //squarePoints.length = 0;
    calculateSquarePointPosition(triangle2.A, triangle2.C, triangle2.B);
    quad(squarePoints[0].x,squarePoints[0].y,squarePoints[1].x,squarePoints[1].y,squarePoints[3].x,squarePoints[3].y,squarePoints[2].x,squarePoints[2].y);

}