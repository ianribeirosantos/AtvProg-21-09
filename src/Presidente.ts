import Politico from "./Politico";
export default class Presidente extends Politico{
    private qtdMinistros:number;

    constructor(qtdMinistros:number, nome:string, partido:string, projetos: string[], enderecoTrabalho:string, remuneracao: number, esfera:string, poder:string, localTrabalho:string){
        super(nome,partido,esfera,poder,localTrabalho,enderecoTrabalho,remuneracao);
        this.qtdMinistros = qtdMinistros;
    }   
    getqtdMinistros():number{
        return this.qtdMinistros
    }

    setqtdMinistros(Remuneracao:number):void{
        if (Remuneracao != 0){
        this.qtdMinistros=Remuneracao
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
    exercerMandato(): void {
        console.log("O predisente", this.getnome(), "exerce seu mandato propondo, sancionando e vetando leis, alem de editar medidas provisorias.")
    }
    nomearExonerarMinistros(): string {
        return 'Nomeando e exonerando Ministros de Estado.';
    }
    comandarForcasArmadas(): string {
       return 'Comandando as Forcas Armadas.';
    }
    representarPaisInternacional():string{
        return 'Representando o pais em eventos internacionais.';
    }
    elaborarEnviarPPA(): string {
        return 'Elaborando e enviando ao congresso o Plano Plurianual nacional (PPA).';
}

    elaborarEnviarLDO(): string {
        return 'Elaborando e enviando ao congresso a Lei de Diretrizes Orcamentarias nacional (LDO).';
    }
    elaborarEnviarLOA(): string {
return 'Elaborando e enviando ao congresso a proposta de Lei Orcamentaria Anual nacional (LOA).';
    }
}
