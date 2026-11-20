
let totalTestes = 0;
let testesPassaram = 0;
let testesFalharam = 0;

function executarTeste(nome, resultadoEsperado, resultadoObtido) {
    totalTestes++;

    if (resultadoEsperado === resultadoObtido) {
        testesPassaram++;
        console.log(`✅ PASSOU: ${nome}`);
    } else {
        testesFalharam++;
        console.log(`❌ FALHOU: ${nome}`);
        console.log(`Esperado: ${resultadoEsperado}`);
        console.log(`Obtido: ${resultadoObtido}`);
    }
}

function exibirResumo() {
    console.log("\n========== RESUMO DOS TESTES ==========");
    console.log(`Total: ${totalTestes}`);
    console.log(`Aprovados: ${testesPassaram}`);
    console.log(`Reprovados: ${testesFalharam}`);
}

let batalhaNaval = null;

try {
    batalhaNaval = require("./batalha-naval.js");
} catch (erro) {
    console.log("Implementação da Batalha Naval ainda não encontrada.");
}

function obterResultado(funcao, ...argumentos) {
    if (!batalhaNaval || typeof batalhaNaval[funcao] !== "function") {
        return `FUNCAO_NAO_IMPLEMENTADA: ${funcao}`;
    }

    return batalhaNaval[funcao](...argumentos);
}

// TABULEIRO E DIMENSÕES

executarTeste(
    "BN01 - Validar dimensões de um tabuleiro 10x10",
    true,
    obterResultado("validarDimensoes", 10, 10)
);


executarTeste(
    "BN02 - Rejeitar tabuleiro com menos de 10 linhas",
    false,
    obterResultado("validarDimensoes", 9, 10)
);

executarTeste(
    "BN03 - Rejeitar tabuleiro com mais de 10 linhas",
    false,
    obterResultado("validarDimensoes", 11, 10)
);

executarTeste(
    "BN04 - Rejeitar tabuleiro com menos de 10 colunas",
    false,
    obterResultado("validarDimensoes", 10, 9)
);

executarTeste(
    "BN05 - Rejeitar tabuleiro com mais de 10 colunas",
    false,
    obterResultado("validarDimensoes", 10, 11)
);

executarTeste(
    "BN06 - Rejeitar tabuleiro sem linhas",
    false,
    obterResultado("validarDimensoes", 0, 10)
);

executarTeste(
    "BN07 - Rejeitar dimensões negativas",
    false,
    obterResultado("validarDimensoes", -1, 10)
);

executarTeste(
    "BN08 - Rejeitar tabuleiro com zero colunas",
    false,
    obterResultado("validarDimensoes", 10, 0)
);

executarTeste(
    "BN09 - Rejeitar tabuleiro com colunas negativas",
    false,
    obterResultado("validarDimensoes", 10, -1)
);


// POSICIONAMENTO DOS NAVIOS

executarTeste(
    "BN10 - Aceitar porta-aviões com tamanho e orientação corretos",
    true,
    obterResultado("validarPosicionamento", "porta-avioes", 5, "horizontal")
);

executarTeste(
    "BN11 - Aceitar encouraçado com tamanho e orientação corretos",
    true,
    obterResultado("validarPosicionamento", "encouracado", 4, "vertical")
);

executarTeste(
    "BN12 - Aceitar submarino com tamanho e orientação corretos",
    true,
    obterResultado("validarPosicionamento", "submarino", 3, "horizontal")
);

executarTeste(
    "BN13 - Aceitar destróier com tamanho e orientação corretos",
    true,
    obterResultado("validarPosicionamento", "destroier", 2, "vertical")
);

executarTeste(
    "BN14 - Rejeitar navio com quantidade incorreta de casas",
    false,
    obterResultado("validarPosicionamento", "porta-avioes", 4, "horizontal")
);

executarTeste(
    "BN15 - Rejeitar navio com orientação inválida",
    false,
    obterResultado("validarPosicionamento", "submarino", 3, "diagonal")
);

executarTeste(
    "BN16 - Rejeitar tipo de navio inexistente",
    false,
    obterResultado("validarPosicionamento", "cruzador", 3, "horizontal")
);


// LIMITES E SOBREPOSIÇÃO DOS NAVIOS

executarTeste(
    "BN17 - Aceitar navio posicionado dentro dos limites do tabuleiro",
    true,
    obterResultado("validarLimitesNavio", 0, 0, 5, "horizontal")
);

executarTeste(
    "BN18 - Rejeitar navio que ultrapassa a última coluna",
    false,
    obterResultado("validarLimitesNavio", 8, 7, 5, "horizontal")
);

executarTeste(
    "BN19 - Rejeitar navio que ultrapassa a última linha",
    false,
    obterResultado("validarLimitesNavio", 7, 8, 4, "vertical")
);

executarTeste(
    "BN20 - Rejeitar navio com coordenada inicial negativa",
    false,
    obterResultado("validarLimitesNavio", -1, 0, 3, "horizontal")
);

executarTeste(
    "BN21 - Rejeitar navio com coordenada inicial fora do tabuleiro",
    false,
    obterResultado("validarLimitesNavio", 10, 0, 2, "horizontal")
);

executarTeste(
    "BN22 - Aceitar posicionamento sem sobreposição",
    true,
    obterResultado("validarSobreposicao", [[0, 0], [0, 1]], [[1, 0], [1, 1]])
);

executarTeste(
    "BN23 - Rejeitar posicionamento com sobreposição",
    false,
    obterResultado("validarSobreposicao", [[0, 0], [0, 1]], [[0, 1], [0, 2]])
);

// DISPAROS E ACERTOS

executarTeste(
    "BN24 - Aceitar disparo em coordenada válida",
    true,
    obterResultado("validarDisparo", 0, 0)
);

executarTeste(
    "BN25 - Rejeitar disparo em linha fora do tabuleiro",
    false,
    obterResultado("validarDisparo", 10, 0)
);

executarTeste(
    "BN26 - Rejeitar disparo em coluna fora do tabuleiro",
    false,
    obterResultado("validarDisparo", 0, 10)
);

executarTeste(
    "BN27 - Rejeitar disparo com coordenada negativa",
    false,
    obterResultado("validarDisparo", -1, 0)
);

executarTeste(
    "BN28 - Identificar disparo que atinge um navio",
    "acerto",
    obterResultado("realizarDisparo", 2, 3, [[2, 3], [2, 4]])
);

executarTeste(
    "BN29 - Identificar disparo que atinge água",
    "agua",
    obterResultado("realizarDisparo", 5, 5, [[2, 3], [2, 4]])
);

executarTeste(
    "BN30 - Impedir disparo repetido na mesma coordenada",
    false,
    obterResultado("validarDisparoRepetido", 2, 3, [[2, 3]])
);

// AFUNDAMENTO E VITÓRIA

executarTeste(
    "BN31 - Identificar navio de 2 casas completamente atingido",
    true,
    obterResultado("verificarNavioAfundado", [true, true])
);

executarTeste(
    "BN32 - Identificar navio ainda não afundado",
    false,
    obterResultado("verificarNavioAfundado", [true, false])
);

executarTeste(
    "BN33 - Identificar porta-aviões completamente atingido",
    true,
    obterResultado("verificarNavioAfundado", [true, true, true, true, true])
);

executarTeste(
    "BN34 - Identificar que ainda existem navios no tabuleiro",
    false,
    obterResultado("verificarVitoria", [true, false, true, true])
);

executarTeste(
    "BN35 - Identificar vitória após todos os navios serem afundados",
    true,
    obterResultado("verificarVitoria", [true, true, true, true])
);

executarTeste(
    "BN36 - Não declarar vitória com tabuleiro sem navios cadastrados",
    false,
    obterResultado("verificarVitoria", [])
);

// REGRAS DA FROTA

executarTeste(
    "BN37 - Aceitar frota com os quatro navios obrigatórios",
    true,
    obterResultado("validarFrota", [
        "porta-avioes",
        "encouracado",
        "submarino",
        "destroier"
    ])
);

executarTeste(
    "BN38 - Rejeitar frota sem um dos navios obrigatórios",
    false,
    obterResultado("validarFrota", [
        "porta-avioes",
        "encouracado",
        "submarino"
    ])
);

executarTeste(
    "BN39 - Rejeitar frota com navio duplicado",
    false,
    obterResultado("validarFrota", [
        "porta-avioes",
        "porta-avioes",
        "submarino",
        "destroier"
    ])
);

// REGRAS COMPLEMENTARES

executarTeste(
    "BN40 - Rejeitar coordenadas decimais no disparo",
    false,
    obterResultado("validarDisparo", 2.5, 3)
);

executarTeste(
    "BN41 - Rejeitar disparo com coordenada não numérica",
    false,
    obterResultado("validarDisparo", "A", 3)
);

executarTeste(
    "BN42 - Rejeitar orientação desconhecida",
    false,
    obterResultado("validarPosicionamento", "submarino", 3, "diagonal")
);

exibirResumo();
