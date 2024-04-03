"use strict";

var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Carlos',
  nota: 4
}];
var alunosAprovados = alunos.filter(function (aluno) {
  return aluno.nota >= 6;
});
console.log(alunosAprovados);