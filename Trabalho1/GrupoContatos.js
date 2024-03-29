// Classe que representa um grupo de contatos
class GrupoContatos {
  constructor(nome) {
    this.nome = nome;
    this.contatos = [];
  }

  // Método para adicionar um contato ao grupo
  adicionarContato(contato) {
    this.contatos.push(contato);
  }

  // Método para remover um contato do grupo
  removerContato(contato) {
    const index = this.contatos.indexOf(contato);
    if (index !== -1) {
      this.contatos.splice(index, 1);
    }
  }

  // Método para listar todos os contatos do grupo, incluindo contatos dentro de outros grupos
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
}

module.exports = GrupoContatos; // Exporta a classe para ser utilizada em outros arquivos
