const fileSystem = require('fs');

const banco = fileSystem.readFileSync(__dirname + '/alunos.json', 'utf-8');

const bancoObj = JSON.parse(banco);


function Aluno (nomeAluno, sobrenomeAluno) {

    var nome = nomeAluno;
    var sobrenome = sobrenomeAluno;

    this.getName = function() {
        return nome;
    };

    this.getSurname = function() {
        return sobrenome;
    };

    this.getCompleteName = function() {
        return `${nome} ${sobrenome}`; 
    };

    /*this.defineName = function(novoNome) {
        nome = novoNome;
        return nome;
    }

    this.defineSurname = function(novoSobrenome) {
        sobrenome = novoSobrenome;
        return sobrenome;
    } */

    function validarSeOValorEhUmaString() {
        var naoEstaVazio = (nome && sobrenome);
        var ehUmaString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string');      
        return (naoEstaVazio && ehUmaString);
    };
    
    function salvarNoBancoDeDados() {

        if(validarSeOValorEhUmaString()) {

            bancoObj.push({
                nome,
                sobrenome
            });
            const bancoSTR = JSON.stringify(bancoObj);
            fileSystem.writeFileSync(__dirname + '/alunos.json', bancoSTR);
        } 
        else {
            return 'Não é um nome válido.';
        };
    };

        
    salvarNoBancoDeDados();

};      

module.exports = Aluno;