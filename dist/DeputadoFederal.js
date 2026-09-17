"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class DeputadoFederal extends Politico_1.default {
    bancada;
    constructor(bancada, nome, partido, enderecoTrabalho, remuneracao, esfera, poder, localTrabalho) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao);
        this.bancada = bancada;
    }
    getbancada() {
        return this.bancada;
    }
    setbancada(Bancada) {
        if (Bancada != "") {
            this.bancada = Bancada;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    exercerMandato() {
        console.log("O deputado federal", this.getnome(), "exerceu que ...");
    }
    votarPECs() {
        return "votando em PECs";
    }
    criarCPINacional() {
        return "criando CPI nacional";
    }
    votarPPA() {
        return "votando no plano plurianual";
    }
    votarLDO() {
        return "votando na lei de diretrizes orçamentarias";
    }
    votarLOA() {
        return "votando na lei orçamentaria anual";
    }
    proporLeisComplementares() {
        return "propondo leis complementares";
    }
}
exports.default = DeputadoFederal;
//# sourceMappingURL=DeputadoFederal.js.map