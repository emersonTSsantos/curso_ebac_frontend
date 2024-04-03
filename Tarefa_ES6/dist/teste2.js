"use strict";

var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 7
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Carlos',
  nota: 4
}];
function alunosAprovados(arrAlunos) {
  return arrAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);