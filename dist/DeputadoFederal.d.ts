import Politico from "./Politico";
export default class DeputadoFederal extends Politico {
    private bancada;
    constructor(bancada: string, nome: string, partido: string, enderecoTrabalho: string, remuneracao: number, esfera: string, poder: string, localTrabalho: string);
    getbancada(): string;
    setbancada(Bancada: string): void;
    exercerMandato(): void;
    votarPECs(): string;
    criarCPINacional(): string;
    votarPPA(): string;
    votarLDO(): string;
    votarLOA(): string;
    proporLeisComplementares(): string;
}
//# sourceMappingURL=DeputadoFederal.d.ts.map