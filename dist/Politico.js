"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Politico {
    nome;
    partido;
    esfera;
    poder;
    localTrabalho;
    enderecoTrabalho;
    remuneracao;
    projetos;
    constructor(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localTrabalho = localTrabalho;
        this.enderecoTrabalho = enderecoTrabalho;
        this.remuneracao = remuneracao;
        this.projetos = [];
    }
    getnome() {
        return this.nome;
    }
    setnome(Nome) {
        if (Nome != "") {
            this.nome = Nome;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getpartido() {
        return this.partido;
    }
    setpartido(Partido) {
        if (Partido != "") {
            this.partido = Partido;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getesfera() {
        return this.esfera;
    }
    setesfera(Esfera) {
        if (Esfera != "") {
            this.esfera = Esfera;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getpoder() {
        return this.poder;
    }
    setpoder(Poder) {
        if (Poder != "") {
            this.poder = Poder;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getLocalTrabalho() {
        return this.localTrabalho;
    }
    setLocalTrabalho(LocalTrabalho) {
        if (LocalTrabalho != "") {
            this.localTrabalho = LocalTrabalho;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getenderecoTrabalho() {
        return this.enderecoTrabalho;
    }
    setenderecoTrabalho(EnderecoTrabalho) {
        if (EnderecoTrabalho != "") {
            this.enderecoTrabalho = EnderecoTrabalho;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getremuneracao() {
        return this.remuneracao;
    }
    setremuneracao(Remuneracao) {
        if (Remuneracao != 0) {
            this.remuneracao = Remuneracao;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    getprojetos() {
        return this.projetos;
    }
    adicionarProjeto(projeto) {
        this.projetos.push(projeto);
    }
}
exports.default = Politico;
//# sourceMappingURL=Politico.js.map