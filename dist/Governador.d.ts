import Politico from "./Politico";
export default class Governador extends Politico {
    private qtdSecretarios;
    private estado;
    constructor(qtdSecretarios: number, estado: string, nome: string, partido: string, enderecoTrabalho: string, remuneracao: number, esfera: string, poder: string, localTrabalho: string);
    getQtdSecretarios(): number;
    setQtdSecretarios(qtd: number): void;
    getEstado(): string;
    setEstado(estado: string): void;
    exercerMandato(): void;
    gerirPoliciaMilitar(): string;
    administrarRodoviasEstaduais(): string;
    coordenarEducacaoSaude(): string;
    elaborarEnviarPPAEstadual(): string;
    elaborarEnviarLDOEstadual(): string;
    elaborarEnviarLOAEstadual(): string;
}
//# sourceMappingURL=Governador.d.ts.map