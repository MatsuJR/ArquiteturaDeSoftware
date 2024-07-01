const EstrategiaBusca = require("./EstrategiaBusca");
const Contato = require("./Contato");

class BuscaNomeStrategy extends EstrategiaBusca {
  constructor(nome) {
    super();
    this.nome = nome;
  }

  buscar(contatos) {
    return contatos
      .filter(
        (contato) =>
          contato instanceof Contato &&
          contato.nome &&
          contato.nome.toLowerCase().includes(this.nome.toLowerCase())
      )
      .map((contato) => contato.toString());
  }
}

module.exports = BuscaNomeStrategy;