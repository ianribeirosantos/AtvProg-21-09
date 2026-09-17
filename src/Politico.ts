export default abstract class Politico {
    private nome: string;
    private partido: string;
    private esfera: string; 
    private poder: string;  
    private localTrabalho: string;
    private enderecoTrabalho: string;
    private remuneracao: number;
    private projetos: string[];

    constructor(nome: string, partido: string, esfera: string, poder: string, localTrabalho: string, enderecoTrabalho: string, remuneracao: number) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [];
    }
        getnome():string{
        return this.nome
    }

    public setnome(Nome:string):void{
        if (Nome != ""){
        this.nome=Nome
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
        getpartido():string{
        return this.partido
    }

    setpartido(Partido:string):void{
        if (Partido != ""){
        this.partido=Partido
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
        getesfera():string{
        return this.esfera
    }

    setesfera(Esfera:string):void{
        if (Esfera != ""){
        this.esfera=Esfera
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
        getpoder():string{
        return this.poder
    }

    setpoder(Poder:string):void{
        if (Poder != ""){
        this.poder=Poder
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
        getLocalTrabalho():string{
        return this.localTrabalho
    }

    setLocalTrabalho(LocalTrabalho:string):void{
        if (LocalTrabalho != ""){
        this.localTrabalho=LocalTrabalho
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
            getenderecoTrabalho():string{
        return this.enderecoTrabalho
    }

    setenderecoTrabalho(EnderecoTrabalho:string):void{
        if (EnderecoTrabalho != ""){
        this.enderecoTrabalho=EnderecoTrabalho
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
        getremuneracao():number{
        return this.remuneracao
    }

    setremuneracao(Remuneracao:number):void{
        if (Remuneracao != 0){
        this.remuneracao=Remuneracao
        }else{
            console.log ("não aceitamos nome vazio!")
        }
    }
    getprojetos():string[]{
        return this.projetos
    }
    adicionarProjeto(projeto: string): void {
        this.projetos.push(projeto);
    }
    public abstract exercerMandato(): void;
}