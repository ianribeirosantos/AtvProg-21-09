"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Governador extends Politico_1.default {
    qtdSecretarios;
    estado;
    constructor(qtdSecretarios, estado, nome, partido, enderecoTrabalho, remuneracao, esfera, poder, localTrabalho) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao);
        this.qtdSecretarios = qtdSecretarios;
        this.estado = estado;
    }
    getQtdSecretarios() {
        return this.qtdSecretarios;
    }
    setQtdSecretarios(qtd) {
        this.qtdSecretarios = qtd;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    exercerMandato() {
        console.log(`O Governador ${this.getnome()} do Estado de ${this.estado} 
      exerce seu mandato sancionando e vetando leis estaduais, 
      decretando estado de calamidade e enviando PECs à Assembleia Legislativa.`);
    }
    gerirPoliciaMilitar() {
        return "Gerindo a Polícia Militar do estado.";
    }
    administrarRodoviasEstaduais() {
        return "Administrando as rodovias estaduais.";
    }
    coordenarEducacaoSaude() {
        return "Coordenando os sistemas de educação e saúde estaduais.";
    }
    elaborarEnviarPPAEstadual() {
        return "Plano Plurianual (PPA) estadual elaborado e enviado.";
    }
    elaborarEnviarLDOEstadual() {
        return "Lei de Diretrizes Orçamentárias (LDO) estadual elaborada e enviada.";
    }
    elaborarEnviarLOAEstadual() {
        return "Lei Orçamentária Anual (LOA) estadual elaborada e enviada.";
    }
}
exports.default = Governador;
//# sourceMappingURL=Governador.js.map