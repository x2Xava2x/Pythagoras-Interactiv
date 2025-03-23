let algebraic = false;
let s2 = false;
let s3 = false;

function showAlgebraicProof() {
    if(geometric === true){
        algebraic = false;
        return;
    }
    algebraic = !algebraic;
    document.getElementById("algebraic").innerText = algebraic ? "Ähnlichkeitsbeweis: AN" : "Ähnlichkeitsbeweis: AUS";

    document.getElementById("algebraic-proof-area").style.display = algebraic ? "block" : "none";

    document.getElementById("hr1-alg").style.display = algebraic ? "block" : "none";
}

function s2alg() {
    s2 = !s2;
    document.getElementById("b2-alg").style.display = s2 ? "block" : "none";

    document.getElementById("hr2-alg").style.display = s2 ? "block" : "none";
}

function s3alg(){
    s3 = !s3;
    document.getElementById("hr3-alg").style.display = s3 ? "block" : "none";
}

/*if (points.length === 3) {
          let c = dist(points[0].x, points[0].y, points[1].x, points[1].y) * cmPerGrid;
          let a = dist(points[1].x, points[1].y, points[2].x, points[2].y) * cmPerGrid;
          let b = dist(points[2].x, points[2].y, points[0].x, points[0].y) * cmPerGrid;
          document.getElementById('proof-area').innerHTML = `<p>Rechnerischer Beweis: a² + b² = c² <br> ${a.toFixed(2)}² + ${b.toFixed(2)}² = ${c.toFixed(2)}²</p>`;
      } else {
          document.getElementById('proof-area').innerText = 'Bitte erst ein Dreieck zeichnen!';
      }
*/