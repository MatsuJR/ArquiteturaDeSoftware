const readline = require("readline");
const Contato = require("./Contato");
const GerenciadorContatos = require("./GerenciadorContatos");
const AdicionarContato = require("./AdicionarContato");
const RemoverContato = require("./RemoverContato");
const ListarContatos = require("./ListarContatos");
const BuscarContatoPorNome = require("./BuscarContatoPorNome");

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

// Função para selecionar uma opção do menu
function selecionarOpcao() {
  rl.question("Opção: ", (opcao) => {
    switch (opcao) {
      case "1":
        new AdicionarContato(gerenciador, rl).executar();
        break;
      case "2":
        new RemoverContato(gerenciador, rl).executar();
        break;
      case "3":
        new ListarContatos(gerenciador, rl).executar();
        break;
      case "4":
        new BuscarContatoPorNome(gerenciador, rl).executar();
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