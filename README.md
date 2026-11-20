# Batalha Naval – Testes de Software

## Descrição

Projeto desenvolvido para a disciplina de Teste de Software, com o objetivo de criar casos de teste para o jogo Batalha Naval utilizando JavaScript puro.

Os testes foram elaborados considerando as regras clássicas do jogo e as especificações definidas para a atividade.

## Regras do jogo

- Tabuleiro de 10 × 10.
- 1 porta-aviões, ocupando 5 casas.
- 1 encouraçado, ocupando 4 casas.
- 1 submarino, ocupando 3 casas.
- 1 destróier, ocupando 2 casas.
- Os navios devem ser posicionados horizontalmente ou verticalmente.
- Não é permitido posicionar navios fora dos limites do tabuleiro ou sobrepostos.
- Os disparos devem respeitar as coordenadas do tabuleiro.
- Não é permitido disparar repetidamente na mesma posição.
- A vitória ocorre quando todos os navios adversários são afundados.

## Tecnologias utilizadas

- JavaScript
- Node.js

## Estrutura do projeto

```text
desafio_teste_batalha_naval/
│
└── batalha-naval.test.js
```

## Como executar os testes

É necessário ter o Node.js instalado.

No terminal, dentro da pasta do projeto, execute:

```bash
node batalha-naval.test.js
```

## Casos de teste

O projeto contém **42 casos de teste**, organizados para verificar:

1. Validação das dimensões do tabuleiro.
2. Validação dos tipos, tamanhos e orientações dos navios.
3. Verificação dos limites do tabuleiro.
4. Prevenção de sobreposição de navios.
5. Validação dos disparos.
6. Identificação de acertos e disparos na água.
7. Prevenção de disparos repetidos.
8. Verificação de navios afundados.
9. Verificação da condição de vitória.
10. Validação da composição da frota.
11. Rejeição de coordenadas e orientações inválidas.

## Resultado dos testes

**Última execução:**

- Total de testes: 42
- Aprovados: 0
- Reprovados: 42

Os testes foram executados corretamente. As reprovações ocorreram porque a implementação do jogo ainda não foi desenvolvida. O objetivo desta atividade é elaborar os casos de teste, sem implementar as funcionalidades da Batalha Naval.

## Colaborador

- **Guilherme Paschoal Luvizutto RA 24244079-2**
