let input = `
    C;V;can of coke
    S;M;sweatTea()
    S;V;epsonPrinter
    C;M;santa claus
    C;C;mirror
`;


function separacao(tipo, palavra) {
    let resultados = null
    switch (tipo) {

        case "M":
            resultados = separacaometodo(palavra);
            break;
        case "C":
            resultados = separacaoclasses(palavra);
            break;
        case "V":
            resultados = separacaovariavel(palavra);
            break;
    }
    if (resultados != null) {
        console.log(resultados)
    }

}
function combinacao(tipo, palavra) {
    let resultados = null;
    switch (tipo) {
        case "M":
            resultados = combinacaometodo(palavra);
            break;
        case "C":
            resultados = combinacaoclasse(palavra);
            break;
        case "V":
            resultados = combinacaovariavel(palavra);
            break;
    }

    if (resultados != null) {
        console.log(resultados)
    }

}
// funcoes de separacao
function separacaometodo(palavra) {
    let modificacao = palavra.split(/(?=[A-Z])/)
    let modificacao2 = modificacao[1].replace("()", "")
    let formatacao
    modificacao[1] = modificacao2
    formatacao = modificacao.join().replace(",", " ").toLowerCase()

    return formatacao
}

function separacaoclasses(palavra) {
    let modificacao = palavra.split(/(?=[A-Z])/)
    let formatacao = modificacao.join(" ").toLowerCase().trim()

    return formatacao

}
function separacaovariavel(palavra) {
    let modificacao = palavra.replace(/[A-Z]/g, " $&")
    let formatacao = modificacao.toLowerCase().trim()
    return formatacao;
}

//funcoes de combinacao 
function combinacaometodo(palavra) {
    let texto = palavra
    let textoModificado = texto.replace(/(\s)([a-z])/g, function (match, space, letra) {
        return space + letra.toUpperCase();
    });
    return textoModificado.replaceAll(" ", "").concat("()").trim()
}

function combinacaoclasse(palavra) {
    let modificacao
    let teste = palavra;
    teste = teste.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });

    modificacao = teste.replaceAll(" ", "").trim()

    return modificacao



}

function combinacaovariavel(palavra) {
    let texto = palavra
    let textoModificado = texto.replace(/(\s)([a-z])/g, function(match, space, letra) {
     return space + letra.toUpperCase();
    
    });

    return textoModificado.replaceAll(" " , "").trim()

}






function camelcase(input) {
    let linhaspalavra = input.trim().split("\n")

    for (let linhas of linhaspalavra) {
        let ops = linhas.split(";")
        let operacao = ops[0].trim()
        let tipos = ops[1].trim()
        let palavras = ops[2].trim()

        if (operacao === "S") {
            separacao(tipos, palavras)
        } else if (operacao === "C") {
            combinacao(tipos, palavras)
        }
    }
}



camelcase(input)