import { RendaFixa } from "../pages/renda-fixa/models/renda-fixa.types";

const rendaFixaListaMock: RendaFixa[] = [
    {
      id: 1,
      descricao: "CDB XPTO",
      dataValidade: new Date("2026-01-01"),
      investimentoMinimo: 1500.00,
      tipoProdutoId: 1,
      tipoProduto: {
        id: 1,
        nome: "CDB"
      },
      indexadorId: 1,
      indexador: {
        id: 1,
        nome: "CDI"
      }
    },{
        "id": 20000,
        "descricao": "DEBÊNTURE - SOUZA - OLIVEIRA",
        "dataValidade": new Date("2036-09-23"),
        "investimentoMinimo": 2385,
        "tipoProdutoId": 2,
        "tipoProduto": {
            "id": 2,
            "nome": "Debênture"
        },
        "indexadorId": 4,
        "indexador": {
            "id": 4,
            "nome": "Pós fixado"
        }
    },
    {
        "id": 19999,
        "descricao": "TESOURO DIRETO - NOGUEIRA - SANTOS",
        "dataValidade": new Date("2037-09-23"),
        "investimentoMinimo": 3469,
        "tipoProdutoId": 3,
        "tipoProduto": {
            "id": 3,
            "nome": "Tesouro direto"
        },
        "indexadorId": 4,
        "indexador": {
            "id": 4,
            "nome": "Pós fixado"
        }
    },
    {
        "id": 19998,
        "descricao": "TESOURO DIRETO - BRAGA - SILVA",
        "dataValidade": new Date("2039-09-23"),
        "investimentoMinimo": 3548,
        "tipoProdutoId": 3,
        "tipoProduto": {
            "id": 3,
            "nome": "Tesouro direto"
        },
        "indexadorId": 1,
        "indexador": {
            "id": 1,
            "nome": "CDI"
        }
    },
    {
        "id": 19997,
        "descricao": "TESOURO DIRETO - REIS E ASSOCIADOS",
        "dataValidade": new Date("2032-09-23"),
        "investimentoMinimo": 3186,
        "tipoProdutoId": 3,
        "tipoProduto": {
            "id": 3,
            "nome": "Tesouro direto"
        },
        "indexadorId": 2,
        "indexador": {
            "id": 2,
            "nome": "SELIC"
        }
    },
    {
        "id": 19996,
        "descricao": "DEBÊNTURE - SOUZA COMÉRCIO",
        "dataValidade": new Date("2029-09-23"),
        "investimentoMinimo": 3723,
        "tipoProdutoId": 2,
        "tipoProduto": {
            "id": 2,
            "nome": "Debênture"
        },
        "indexadorId": 3,
        "indexador": {
            "id": 3,
            "nome": "IPCA +"
        }
    },
  ];
  

  export default rendaFixaListaMock;