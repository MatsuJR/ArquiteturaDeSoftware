// Classe que representa um contato com nome, telefone e email
class Contato {
  constructor(nome, telefone, email) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
  }

  // Método para representar o contato como uma string
  toString() {
    return `${this.nome} - ${this.telefone} - ${this.email}`;
  }
}

module.exports = Contato; // Exporta a classe para ser utilizada em outros arquivos
