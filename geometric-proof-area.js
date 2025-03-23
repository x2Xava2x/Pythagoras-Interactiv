let geometric = false;



function showGeometricProof() {
    if(algebraic === true){
        geometric = false;
        return;
    }
    geometric = !geometric;

    document.getElementById('geometric').innerText = geometric ? "Geometrischer Beweis: AN" : "Geometrischer Beweis: AUS" ;
}

