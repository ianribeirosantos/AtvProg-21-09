"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Senador extends Politico_1.default {
    estado;
    anoEleicao;
    constructor(estado, anoEleicao, nome, partido, enderecoTrabalho, remuneracao, esfera, poder, localTrabalho) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao);
        this.estado = estado;
        this.anoEleicao = anoEleicao;
    }
    getestado() {
        return this.estado;
    }
    setestado(Estado) {
        if (Estado != "") {
            this.estado = Estado;
        }
        else {
            console.log("não aceitamos nome do estado vazio!");
        }
    }
    getanoEleicao() {
        return this.anoEleicao;
    }
    setanoEleicao(AnoEleicao) {
        if (AnoEleicao != 0) {
            this.anoEleicao = AnoEleicao;
        }
        else {
            console.log("não aceitamos o ano da eleição vazio!");
        }
    }
    exercerMandato() {
        console.log("O senador", this.getnome(), "exerceu que ...");
    }
    autoridadesAltoEscalão() {
        return "autoridades de alto escalão";
    }
    julgarCrimes() {
        return "julgando crimes";
    }
    representarInteressesEstado() {
        return "representando interesses do estado";
    }
}
exports.default = Senador;
//# sourceMappingURL=Senador.js.map