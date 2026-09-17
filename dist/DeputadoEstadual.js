"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class DeputadoEstadual extends Politico_1.default {
    estado;
    comissoes;
    constructor(estado, comissoes, nome, partido, enderecoTrabalho, remuneracao, esfera, poder, localTrabalho) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao);
        this.estado = estado;
        this.comissoes = [];
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getComissoes() {
        return this.comissoes;
    }
    adicionarComissao(comissao) {
        if (comissao !== "") {
            this.comissoes.push(comissao);
        }
        else {
            console.log("Não aceitamos comissão com nome vazio");
        }
    }
    exercerMandato() {
        console.log(`O Deputado Estadual ${this.getnome()} do Estado de 
        ${this.estado} ` + `exerce seu mandato fiscalizando o executivo e participando de 
            ${this.comissoes.length} comissões.`);
    }
    votarPPAEstadual() {
        return "Votando no PPA.";
    }
    votarLDOEstadual() {
        return "Votando na LDO.";
    }
    votarLOAEstadual() {
        return "Votando na LOA.";
    }
    proporEmendas() {
        return "Propondo emendas.";
    }
    criarCPIEEstadual() {
        return "Criando CPI Estadual.";
    }
}
exports.default = DeputadoEstadual;
//# sourceMappingURL=DeputadoEstadual.js.map