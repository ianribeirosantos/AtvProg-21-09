import Politico from "./Politico";

export default class DeputadoEstadual extends Politico{
    private estado: string;
    private comissoes: string[];

    constructor(estado:string, comissoes:string[], nome:string, partido:string, enderecoTrabalho:string, remuneracao: number, esfera:string, poder:string, localTrabalho:string){
        super(nome,partido,esfera,poder,localTrabalho,enderecoTrabalho,remuneracao);
        this.estado = estado;
        this.comissoes = [];

    }
    getEstado():string{
        return this.estado;
    }

    setEstado(estado: string): void {
        this.estado = estado;
    }

    getComissoes():string[]{
        return this.comissoes;
    }

   adicionarComissao(comissao: string): void {
        if (comissao !== "") {
            this.comissoes.push(comissao);
        } else {
            console.log("Não aceitamos comissão com nome vazio");
        }
    }

    exercerMandato(): void {
        console.log( `O Deputado Estadual ${this.getnome()} do Estado de 
        ${this.estado} ` + `exerce seu mandato fiscalizando o executivo e participando de 
            ${this.comissoes.length} comissões.`);

    }

    votarPPAEstadual(): string {
        return "Votando no PPA.";
    }

    votarLDOEstadual(): string {
        return "Votando na LDO.";
    }

    votarLOAEstadual(): string {
        return "Votando na LOA.";
    }

    proporEmendas(): string {
        return "Propondo emendas a constituicao estadual.";
    }

    criarCPIEEstadual(): string {
        return "Criando CPI Estadual.";
    }
}