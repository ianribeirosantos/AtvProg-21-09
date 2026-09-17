export default abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private localTrabalho;
    private enderecoTrabalho;
    private remuneracao;
    private projetos;
    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number);
    getnome(): string;
    setnome(Nome: string): void;
    getpartido(): string;
    setpartido(Partido: string): void;
    getesfera(): string;
    setesfera(Esfera: string): void;
    getpoder(): string;
    setpoder(Poder: string): void;
    getLocalTrabalho(): string;
    setLocalTrabalho(LocalTrabalho: string): void;
    getenderecoTrabalho(): string;
    setenderecoTrabalho(EnderecoTrabalho: string): void;
    getremuneracao(): number;
    setremuneracao(Remuneracao: number): void;
    getprojetos(): string[];
    adicionarProjeto(projeto: string): void;
    abstract exercerMandato(): void;
}
//# sourceMappingURL=Politico.d.ts.map