const Contato = require("./Contato");

// Classe que implementa a estratégia de busca por nome
class BuscaNomeStrategy {
  constructor(nome) {
    this.nome = nome;
  }

  // Método para buscar contatos pelo nome
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

module.exports = BuscaNomeStrategy; // Exporta a classe para ser utilizada em outros arquivos
