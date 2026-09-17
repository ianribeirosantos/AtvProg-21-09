import Politico from "./Politico";
export default class Senador extends Politico {
    private estado;
    private anoEleicao;
    constructor(estado: string, anoEleicao: number, nome: string, partido: string, enderecoTrabalho: string, remuneracao: number, esfera: string, poder: string, localTrabalho: string);
    getestado(): string;
    setestado(Estado: string): void;
    getanoEleicao(): number;
    setanoEleicao(AnoEleicao: number): void;
    exercerMandato(): void;
    autoridadesAltoEscalão(): string;
    julgarCrimes(): string;
    representarInteressesEstado(): string;
}
//# sourceMappingURL=Senador.d.ts.map