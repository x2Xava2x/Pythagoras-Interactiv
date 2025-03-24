let algebraic = false;
let s2 = false;
let s3 = false;

function algebraicProofText() {
    const text01 = document.getElementById("text-alg01");
    if (parseFloat(gamma.toFixed(2)) === 90 || parseFloat(alpha.toFixed(2)) === 90 || parseFloat(beta.toFixed(2)) === 90) {
        text01.style.display = "block";
    } else {
        text01.style.display = "none";
    }

    if(parseFloat(gamma.toFixed(2)) === 90) {
        const desc = document.getElementById("text-alg0");
        desc.innerHTML = "Gegeben: \\(\\Delta ABC\\) mit \\(\\gamma = 90^\\circ\\) und Höhenfußpunkt \\(H_C\\), so dass \\(\\Delta AH_CC\\) und \\(\\Delta H_CBC\\).";
        MathJax.typesetPromise([desc]);

        const proofText = `
            \\[
                \\begin{array}{lllll}
                    (I) & \\alpha + \\beta + \\gamma = 180^\\circ & \\iff & \\alpha + \\beta = 90^\\circ & \\text{(aus \\(\\Delta ABC\\))} \\\\
                    (II) & \\alpha + 90^\\circ + \\gamma_2 = 180^\\circ & \\iff & \\alpha = 90^\\circ - \\gamma_2 & \\text{(aus \\(\\Delta AH_CC\\))} \\\\
                    (III) & 90^\\circ + \\beta + \\gamma_1 = 180^\\circ & \\iff & \\beta = 90^\\circ - \\gamma_1 & \\text{(aus \\(\\Delta H_CBC\\))} \\\\
                \\end{array}
            \\]
        `;

        const el = document.getElementById("text-alg");
        el.innerHTML = proofText;
        //neues Rendering
         MathJax.typesetPromise([el]);
         return;
    }

    if(parseFloat(alpha.toFixed(2)) === 90) {
        const desc = document.getElementById("text-alg0");
        desc.innerHTML = "Gegeben: \\(\\Delta ABC\\) mit \\(\\alpha = 90^\\circ\\) und Höhenfußpunkt \\(H_A\\), so dass \\(\\Delta BH_AA\\) und \\(\\Delta H_ACA\\).";
        MathJax.typesetPromise([desc]);

        const proofText = `
            \\[
                \\begin{array}{lllll}
                    (I) & \\alpha + \\beta + \\gamma = 180^\\circ & \\iff & \\beta + \\gamma = 90^\\circ & \\text{(aus \\(\\Delta ABC\\))} \\\\
                    (II) & \\beta + 90^\\circ + \\alpha_2 = 180^\\circ & \\iff & \\beta = 90^\\circ - \\alpha_2 & \\text{(aus \\(\\Delta BH_AA\\))} \\\\
                    (III) & 90^\\circ + \\gamma + \\alpha_1 = 180^\\circ & \\iff & \\gamma = 90^\\circ - \\alpha_1 & \\text{(aus \\(\\Delta H_ACA\\))} \\\\
                \\end{array}
            \\]
        `;

        const el = document.getElementById("text-alg");
        el.innerHTML = proofText;
        //neues Rendering
        MathJax.typesetPromise([el]);
        return;
    }

    if(parseFloat(beta.toFixed(2)) === 90) {
        const desc = document.getElementById("text-alg0");
        desc.innerHTML = "Gegeben: \\(\\Delta ABC\\) mit \\(\\beta = 90^\\circ\\) und Höhenfußpunkt \\(H_B\\), so dass \\(\\Delta CH_BB\\) und \\(\\Delta H_BAB\\).";
        MathJax.typesetPromise([desc]);

        const proofText = `
            \\[
                \\begin{array}{lllll}
                    (I) & \\alpha + \\beta + \\gamma = 180^\\circ & \\iff & \\gamma + \\alpha = 90^\\circ & \\text{(aus \\(\\Delta ABC\\))} \\\\
                    (II) & \\gamma + 90^\\circ + \\beta_2 = 180^\\circ & \\iff & \\gamma = 90^\\circ - \\beta_2 & \\text{(aus \\(\\Delta CH_BB\\))} \\\\
                    (III) & 90^\\circ + \\beta + \\gamma_1 = 180^\\circ & \\iff & \\beta = 90^\\circ - \\gamma_1 & \\text{(aus \\(\\Delta H_BAB\\))} \\\\
                \\end{array}
            \\]
        `;

        const el = document.getElementById("text-alg");
        el.innerHTML = proofText;
        //neues Rendering
        MathJax.typesetPromise([el]);
        return;
    }

    const desc = document.getElementById("text-alg0");
    desc.innerHTML = "";
    MathJax.typesetPromise([desc]);

    const proofText = "du benörigst als erstes einen Rechten Winkel in deinem Dreieck! Der Satz des Pythagoras gilt nur in rechtwinkligen Dreiecken, nicht in allgemeinen.";
    const el = document.getElementById("text-alg");
    el.innerHTML = proofText;
    //neues Rendering
    MathJax.typesetPromise([el]);
}

function khSätze() {
    const text2 = document.getElementById("text-alg2");
    if (parseFloat(gamma.toFixed(2)) === 90 || parseFloat(alpha.toFixed(2)) === 90 || parseFloat(beta.toFixed(2)) === 90) {
        text2.style.display = "block";
    } else {
        text2.style.display = "none";
    }

    if(parseFloat(gamma.toFixed(2)) === 90) {
        const proofText2 = `
            \\[
                \\begin{array}{lllll}
                    (I) & \\frac{c}{b} = \\frac{b}{p} & \\iff & b^2 = c \\cdot p & (Kathetensatz)\\\\
                    (II) & \\frac{c}{a} = \\frac{a}{q} & \\iff & a^2 = c \\cdot q & (Kathetensatz)\\\\
                    (III) & \\frac{p}{h_C} = \\frac{h_C}{q} & \\iff & h_C^2 = p \\cdot q & (Höhensatz)\\\\
                \\end{array}
            \\]
        `;
        const ell = document.getElementById("text-alg3");
        ell.innerHTML = proofText2;
        //neues Rendering
        MathJax.typesetPromise([ell]);
        return;
    }
    if(parseFloat(beta.toFixed(2)) === 90) {
        const proofText2 = `
            \\[
                \\begin{array}{lllll}
                    (I) & \\frac{b}{a} = \\frac{a}{p} & \\iff & a^2 = b \\cdot p & (Kathetensatz)\\\\
                    (II) & \\frac{b}{c} = \\frac{c}{q} & \\iff & c^2 = b \\cdot q & (Kathetensatz)\\\\
                    (III) & \\frac{p}{h_B} = \\frac{h_B}{q} & \\iff & h_B^2 = p \\cdot q & (Höhensatz)\\\\
                \\end{array}
            \\]
        `;
        const ell = document.getElementById("text-alg3");
        ell.innerHTML = proofText2;
        //neues Rendering
        MathJax.typesetPromise([ell]);
        return;
    }
    if(parseFloat(alpha.toFixed(2)) === 90) {
        const proofText2 = `
            \\[
                \\begin{array}{lllll}
                    (I) & \\frac{a}{c} = \\frac{c}{p} & \\iff & c^2 = c \\cdot p & (Kathetensatz)\\\\
                    (II) & \\frac{a}{b} = \\frac{b}{q} & \\iff & b^2 = c \\cdot q & (Kathetensatz)\\\\
                    (III) & \\frac{p}{h_A} = \\frac{h_A}{q} & \\iff & h_A^2 = p \\cdot q & (Höhensatz)\\\\
                \\end{array}
            \\]
        `;
        const ell = document.getElementById("text-alg3");
        ell.innerHTML = proofText2;
        //neues Rendering
        MathJax.typesetPromise([ell]);
        return;
    }

    const ell = document.getElementById("text-alg3");
    ell.innerHTML = "";
    //neues Rendering
    MathJax.typesetPromise([ell]);
    return;
}

function khPythagoras() {
    if(parseFloat(gamma.toFixed(2)) === 90) {
        const proofText3 = `
            \\[
                \\begin{array}{ll}
                    (I)+(II) & a^2+b^2 = c \\cdot q + c \\cdot p = c (p + q) = c \\cdot c = c^2\\\\
                    (I)+(II) & ${triangle1.a.toFixed(2)}^2 + ${triangle1.b.toFixed(2)}^2 = ${triangle1.c.toFixed(2)} \\cdot ${q.toFixed(2)} + ${triangle1.c.toFixed(2)} \\cdot ${p.toFixed(2)} = ${triangle1.c.toFixed(2)}(${p.toFixed(2)} + ${q.toFixed(2)}) = ${triangle1.c.toFixed(2)}^2
                \\end{array}
            \\]
        `;
        const elll = document.getElementById("text-alg4");
        elll.innerHTML = proofText3;
        //neues Rendering
        MathJax.typesetPromise([elll]);
        return;
    }
    if(parseFloat(alpha.toFixed(2)) === 90) {
        const proofText3 = `
            \\[
                \\begin{array}{ll}
                    (I)+(II) & b^2+c^2 = a \\cdot q + a \\cdot p = a (p + q) = a \\cdot a = a^2\\\\
                    (I)+(II) & ${triangle1.b.toFixed(2)}^2 + ${triangle1.c.toFixed(2)}^2 = ${triangle1.a.toFixed(2)} \\cdot ${q.toFixed(2)} + ${triangle1.a.toFixed(2)} \\cdot ${p.toFixed(2)} = ${triangle1.a.toFixed(2)}(${p.toFixed(2)} + ${q.toFixed(2)}) = ${triangle1.a.toFixed(2)}^2
                \\end{array}
            \\]
        `;
        const elll = document.getElementById("text-alg4");
        elll.innerHTML = proofText3;
        //neues Rendering
        MathJax.typesetPromise([elll]);
        return;
    }
    if(parseFloat(beta.toFixed(2)) === 90) {
        const proofText3 = `
            \\[
                \\begin{array}{ll}
                    (I)+(II) & c^2+a^2 = b \\cdot q + b \\cdot p = b (p + q) = b \\cdot b = b^2\\\\
                    (I)+(II) & ${triangle1.c.toFixed(2)}^2 + ${triangle1.a.toFixed(2)}^2 = ${triangle1.b.toFixed(2)} \\cdot ${q.toFixed(2)} + ${triangle1.b.toFixed(2)} \\cdot ${p.toFixed(2)} = ${triangle1.b.toFixed(2)}(${p.toFixed(2)} + ${q.toFixed(2)}) = ${triangle1.b.toFixed(2)}^2
                \\end{array}
            \\]
        `;
        const elll = document.getElementById("text-alg4");
        elll.innerHTML = proofText3;
        //neues Rendering
        MathJax.typesetPromise([elll]);
        return;
    }

    const elll = document.getElementById("text-alg4");
    elll.innerHTML = "";
    //neues Rendering
    MathJax.typesetPromise([elll]);
    return;
}

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

    document.getElementById("text-alg2").style.display = s2 ? "block" : "none";

    document.getElementById("text-alg3").style.display = s2 ? "block" : "none";

    document.getElementById("hr2-alg").style.display = s2 ? "block" : "none";
}

function s3alg(){
    s3 = !s3;
    document.getElementById("hr3-alg").style.display = s3 ? "block" : "none";

    document.getElementById("text-alg4").style.display = s3 ? "block" : "none";

}
