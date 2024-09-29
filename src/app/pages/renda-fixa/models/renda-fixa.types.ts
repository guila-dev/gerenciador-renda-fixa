export type RendaFixa = {
    id: number,
    descricao: string,
    dataValidade: Date,
    investimentoMinimo: number,
    tipoProdutoId: number,
    indexadorId: number,
    tipoProduto: TipoProduto,
    indexador: Indexador
}

export type RendaFixaFilter = Partial<Pick<RendaFixa,
 "id" | "descricao" | "tipoProdutoId" | "indexadorId" >>

export type TipoProduto = {
    id: number,
    nome: string
}


export type Indexador = {
    id: number,
    nome: string
}

type Nome = "CDB" | "Debenture"| "Tesouro Direto"| "LCA"