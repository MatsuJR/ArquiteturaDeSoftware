const Turma = require("./Turma");

class TurmaPresencial extends Turma {
  constructor(codigo, nota, frequencia) {
    this.codigo = codigo;
    this.nota = nota;
    this.frequencia = frequencia;
  }

  aprovado() {}
}

module.exports = TurmaPresencial;
