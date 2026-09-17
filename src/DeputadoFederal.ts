import Politico from "./Politico";
export default class DeputadoFederal extends Politico{
    private bancada:string;

    constructor(bancada:string, nome:string, partido:string, enderecoTrabalho:string, remuneracao: number, esfera:string, poder:string, localTrabalho:string){
        super(nome,partido,esfera,poder,localTrabalho,enderecoTrabalho,remuneracao);
        this.bancada = bancada;
    }
     getbancada():string{
        return this.bancada
    }

    setbancada(Bancada:string):void{
        if (Bancada != ""){
        this.bancada=Bancada
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
    exercerMandato(): void {
        console.log("O deputado federal", this.getnome(), "exerce seu mandato legislando sobre o codigo penal, sobre o codigo tributario e sobre as leis trabalhistas e fiscalizando o presidente da republica.")
    }
    votarPECs():string{
        return "votando em PECs"
    }
    criarCPINacional():string{
        return "criando CPI nacional"
    }   
    votarPPA():string{
        return "votando no plano plurianual"
    }
    votarLDO():string{
        return "votando na lei de diretrizes orçamentarias"
    }
    votarLOA():string{
        return "votando na lei orçamentaria anual"
    }
    proporLeisComplementares():string{
        return "propondo leis complementares"
    }
}