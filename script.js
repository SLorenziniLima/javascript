// Algoritmo 

//  OK  1. Pegar os valores dos inputs (função receberValores)
//  OK  2. Fazer o Cálculo da idade -> valorIdade( função calcularIdade) com base no dia, mês e ano
//  OK   3. Gerar a faixa etária -> clasificacaoFaixaetaria
//    4. Organizar o objeto para salvar na lista ( função organizarPessoa)
//    5. Cadastrar a pessoa  na lista ( salvar no localStorange)
//    6. Função para carregar as pessoas (localStorange), chamar ao carregar a página
//    7. Renderizar o conteúdo da tabela com os usuários cadastrados
//    8. Botão para limpar os registros (localStorange)


function calcular(event) {

    event.preventDefault() //previne o recarregar da pagina

    console.log

    let usuario = receberValores()

    let idadecalculada = calcularIdade(usuario.ano)

    let faixaEtaria = classificarFaixaEtaria(idadecalculada)

    console.log(faixaEtaria)

    usuario = organizarDados(usuario, idadecalculada, faixaEtaria)

}



function receberValores() {
    let nomeUsuario = document.getElementById("nome").string
    let anoNascimento = document.getElementById("ano-nascimento").value.trim()
    let mesNascimento = document.getElementById("mes-nascimento").value
    let diaNascimento = document.getElementById("dia-nascimento").value

    let dadosUsuarios = {

        nome: nomeUsuario,
        ano: anoNascimento,
        mes: mesNascimento,
        dia: diaNascimento

    }
    console.log(dadosUsuarios)

    return dadosUsuarios

}

function calcularIdade(ano) {

    // Criar uma instância para o ano atual 
    const dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();

    let idade = anoAtual - ano

    console.log(idade)

    return idade

}

function classificarFaixaEtaria(idade) {

    /*
    Gerar a faixa etária
 
    Resultado            Faixa
    0 à 12                Criança
    13 à 17               Adolescente
    18 à 65               Adulto
     Acima de 65          Idoso
    
    */

    if (idade <= 12) {

        return "Criança"

    } else if (idade >= 13 && idade <= 17) {

        return "Adolescente"

    } else if (idade >= 18 && idade <= 65) {

        return "Adulto"

    } else {

        return "Idoso"
    }


}

function organizarDados(dadosUsuario, idade, classificarFaixaEtaria) {
    // Pegar a data atual do usuario 
    let dataHoraAtual = new Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now())

    console.log(dataHoraAtual);

    // Organizando o objeto para salvar
    let dadosUsuarioAtualizado = {
        ...dadosUsuario,
        idade: idadecalculada,
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioAtualizado;
}

function cadastrarUsuario(dadosUsuario) {
    let listaUsuarios = []

    // Se houver uma lista de usuarios no localStorage, carregar isso para a variavel listaUsuarios
    if (localStorage.getItem("usuariosCadastrados") != null) {
        listaUsuarios = JSON.parse( localStorage.getItem("usuariosCadastrados") )
    }

 }