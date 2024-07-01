const readline = require("readline");
const Contato = require("./Contato");
const GrupoContatos = require("./GrupoContatos");
const GerenciadorContatos = require("./GerenciadorContatos");
const BuscaNomeStrategy = require("./BuscaNomeStrategy");

const gerenciador = new GerenciadorContatos();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para mostrar o menu de opções
function mostrarMenu() {
  console.log("\nEscolha uma opção:");
  console.log("1 - Adicionar Contato");
  console.log("2 - Remover Contato");
  console.log("3 - Listar Contatos");
  console.log("4 - Buscar Contato por Nome");
  console.log("0 - Sair");
}

// Função para adicionar um contato
function adicionarContato() {
  rl.question("Nome: ", (nome) => {
    rl.question("Telefone: ", (telefone) => {
      rl.question("Email: ", (email) => {
        gerenciador.adicionarContato(new Contato(nome, telefone, email));
        console.log("Contato adicionado com sucesso!");
        mostrarMenu();
        selecionarOpcao();
      });
    });
  });
}
// Função para remover um contato
function removerContato() {
  rl.question("Digite o nome do contato a ser removido: ", (nome) => {
    const contato = gerenciador.contatos.find((c) => c.nome === nome);
    if (contato) {
      gerenciador.removerContato(contato);
      console.log("Contato removido com sucesso!");
    } else {
      console.log("Contato não encontrado.");
    }
    mostrarMenu();
    selecionarOpcao();
  });
}

// Função para listar todos os contatos
function listarContatos() {
  console.log("\nContatos:");
  console.log(gerenciador.listarContatos().join("\n"));
  mostrarMenu();
  selecionarOpcao();
}

// Função para buscar um contato por nome
function buscarContatoPorNome() {
  rl.question("Nome do Contato a ser buscado: ", (nome) => {
    const buscaStrategy = new BuscaNomeStrategy(nome);
    const contatosEncontrados = gerenciador.buscarContatos(buscaStrategy);
    if (contatosEncontrados.length > 0) {
      console.log("\nContatos encontrados:");
      console.log(contatosEncontrados.join("\n"));
    } else {
      console.log("\nNenhum contato encontrado com esse nome.");
    }
    mostrarMenu();
    selecionarOpcao();
  });
}

// Função para selecionar uma opção do menu
function selecionarOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        adicionarContato();
        break;
      case "2":
        removerContato();
        break;
      case "3":
        listarContatos();
        break;
      case "4":
        buscarContatoPorNome();
        break;
      case "0":
        rl.close();
        break;
      default:
        console.log("Opção inválida.");
        mostrarMenu();
        selecionarOpcao();
        break;
    }
  });
}

// Inicia a aplicação mostrando o menu
mostrarMenu();
// Aguarda a seleção de uma opção
selecionarOpcao();