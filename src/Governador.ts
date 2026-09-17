import Politico from "./Politico";

export default class Governador extends Politico{
    private qtdSecretarios:number;
    private estado: string;

    constructor(qtdSecretarios:number, estado:string, nome:string, partido:string, enderecoTrabalho:string, remuneracao: number, esfera:string, poder:string, localTrabalho:string){
        super(nome,partido,esfera,poder,localTrabalho,enderecoTrabalho,remuneracao);
        this.qtdSecretarios = qtdSecretarios;
        this.estado = estado;

    }
    getQtdSecretarios():number{
        return this.qtdSecretarios;
    }

    setQtdSecretarios(qtd: number): void {
        this.qtdSecretarios = qtd;
    }

    getEstado():string{
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }
    exercerMandato(): void {
        console.log(
      `O Governador ${this.getnome()} do Estado de ${this.estado} 
      exerce seu mandato sancionando e vetando leis estaduais, 
      decretando estado de calamidade e enviando PECs à Assembleia Legislativa.`
    );
  }
  gerirPoliciaMilitar(): string {
        return "Gerindo a Polícia Militar do estado.";
    }

     administrarRodoviasEstaduais(): string {
        return "Administrando as rodovias estaduais.";
    }

     coordenarEducacaoSaude(): string {
        return "Coordenando os sistemas de educação e saúde estaduais.";
    }

     elaborarEnviarPPAEstadual(): string {
        return "Elaborando e enviando a Assembleia Legislativa o Plano Plurianual estadual (PPA).";
    }

     elaborarEnviarLDOEstadual(): string {
        return "Elaborando e enviando a Assembleia Legislativa a Lei de Diretrizes Orcamentarias estadual (LDO).";
    }

     elaborarEnviarLOAEstadual(): string {
        return "Elaborando e enviando a Assembleia Legislativa a proposta de Lei Orcamentaria Anual estadual (LOA).";
    }
}
