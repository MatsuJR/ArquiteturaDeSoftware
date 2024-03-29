const Contato = require("./Contato");

// Classe que atua como a fachada para o sistema de gerenciamento de contatos
class GerenciadorContatos {
  constructor() {
    this.contatos = [];
  }

  // Método para adicionar um contato ou grupo de contatos
  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  // Método para remover um contato ou grupo de contatos
  removerContato(contato) {
    const index = this.contatos.indexOf(contato);
    if (index !== -1) {
      this.contatos.splice(index, 1);
    }
  }

  // Método para listar todos os contatos, incluindo contatos dentro de grupos
  listarContatos() {
    let listaContatos = [];
    this.contatos.forEach((contato) => {
      if (contato instanceof Contato) {
        listaContatos.push(contato.toString());
      } else if (contato instanceof GrupoContatos) {
        listaContatos.push(`Grupo: ${contato.nome}`);
        listaContatos.push(...contato.listarContatos());
      }
    });
    return listaContatos;
  }

  // Método para buscar contatos utilizando uma estratégia específica
  buscarContatos(strategy) {
    return strategy.buscar(this.contatos);
  }
}

module.exports = GerenciadorContatos; // Exporta a classe para ser utilizada em outros arquivos
