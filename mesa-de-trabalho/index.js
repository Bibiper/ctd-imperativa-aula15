var Aluno = require('/alunos.js');

var alunoCTD = new Aluno('Paulo', 'Silva');

console.log('Nome:', alunoCTD.getName()); 

console.log('Sobrenome:', alunoCTD.getSurname()); 

console.log('Nome Completo:', alunoCTD.getCompleteName()); 