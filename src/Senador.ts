import Politico from "./Politico";
export default class Senador extends Politico{
    private estado: string;
    private anoEleicao: number;

    constructor(estado:string, anoEleicao:number, nome:string, partido:string, enderecoTrabalho:string, remuneracao: number, esfera:string, poder:string, localTrabalho:string){
        super(nome,partido,esfera,poder,localTrabalho,enderecoTrabalho,remuneracao);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
           getestado():string{
        return this.estado
    }

    setestado(Estado:string):void{
        if (Estado != ""){
        this.estado=Estado
        }else{
            console.log ("não aceitamos nome do estado vazio!")
        }
    }
        getanoEleicao ():number{
        return this.anoEleicao 
    }

    setanoEleicao (AnoEleicao:number):void{
        if (AnoEleicao != 0){
        this.anoEleicao =AnoEleicao
        }else{
            console.log ("não aceitamos o ano da eleição vazio!")
        }
    }
    exercerMandato(): void {
        console.log("O senador", this.getnome(), "seu mandato sabatinando e aprovando ministros do STF, Procurador-Geral da Republica e presidentes do Banco Central, legislando sobre leis federais e autorizando operacoes financeiras externas.")
    }
    autoridadesAltoEscalão():string{
        return "aprovando autoridades de alto escalão"
    }   
    julgarCrimes():string{
        return "julgando crimes"
    }
    representarInteressesEstado():string{
        return "representando interesses do estado"
    }
}