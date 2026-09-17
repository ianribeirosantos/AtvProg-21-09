"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Politico_1 = __importDefault(require("./Politico"));
class Presidente extends Politico_1.default {
    qtdMinistros;
    constructor(qtdMinistros, nome, partido, projetos, enderecoTrabalho, remuneracao, esfera, poder, localTrabalho) {
        super(nome, partido, esfera, poder, localTrabalho, enderecoTrabalho, remuneracao);
        this.qtdMinistros = qtdMinistros;
    }
    getqtdMinistros() {
        return this.qtdMinistros;
    }
    setqtdMinistros(Remuneracao) {
        if (Remuneracao != 0) {
            this.qtdMinistros = Remuneracao;
        }
        else {
            console.log("não aceitamos nome vazio!");
        }
    }
    exercerMandato() {
        console.log("O predisente", this.getnome(), "exerceu que (alguma coisa ;-;)");
    }
    nomearExonerarMinistros() {
        return "(exonerando)";
    }
    comandarForcasArmadas() {
        return "decreto que as forças armadas devem...";
    }
    representarPaisInternacional() {
        return "representando o país em eventos internacionais";
    }
    elaborarEnviarPPA() {
        return "plano plurianual elaborado";
    }
    elaborarEnviarLDO() {
        return "lei de diretrizes orçamentárias elaborada";
    }
    elaborarEnviarLOA() {
        return "lei orçamentária anual elaborada";
    }
}
exports.default = Presidente;
//# sourceMappingURL=Presidente.js.map