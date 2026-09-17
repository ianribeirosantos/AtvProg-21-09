import Politico from "./Politico";
export default class DeputadoEstadual extends Politico {
    private estado;
    private comissoes;
    constructor(estado: string, comissoes: string[], nome: string, partido: string, enderecoTrabalho: string, remuneracao: number, esfera: string, poder: string, localTrabalho: string);
    getEstado(): string;
    setEstado(estado: string): void;
    getComissoes(): string[];
    adicionarComissao(comissao: string): void;
    exercerMandato(): void;
    votarPPAEstadual(): string;
    votarLDOEstadual(): string;
    votarLOAEstadual(): string;
    proporEmendas(): string;
    criarCPIEEstadual(): string;
}
//# sourceMappingURL=DeputadoEstadual.d.ts.map