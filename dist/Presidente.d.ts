import Politico from "./Politico";
export default class Presidente extends Politico {
    private qtdMinistros;
    constructor(qtdMinistros: number, nome: string, partido: string, projetos: string[], enderecoTrabalho: string, remuneracao: number, esfera: string, poder: string, localTrabalho: string);
    getqtdMinistros(): number;
    setqtdMinistros(Remuneracao: number): void;
    exercerMandato(): void;
    nomearExonerarMinistros(): string;
    comandarForcasArmadas(): string;
    representarPaisInternacional(): string;
    elaborarEnviarPPA(): string;
    elaborarEnviarLDO(): string;
    elaborarEnviarLOA(): string;
}
//# sourceMappingURL=Presidente.d.ts.map