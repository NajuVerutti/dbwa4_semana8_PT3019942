var i;
var m1;
var m2;
var soma;

var alunos = new Array;
var alunos = [];

var n1 = new Array;
var n1 = [];

var n2 = new Array;
var n2 = [];

alunos[0]="João da Silva"; n1[0]=7; n2[0]=8.5;
alunos[1]="Fabiana da Silva";n1[1]=10; n2[1]=9;
alunos[2]="Ricardo Gomes";n1[2]=8; n2[2]=6;

//alert("Alerta: Questão 3");

for (var i=0; i<alunos.length; i++) { 

  m1 = n1[i] * 0.6;
  m2 = n2[i] *0.4;
  soma = m1 + m2;

  	alert("Nome do aluno: " + alunos[i] + "\r\nNota 1: "+ n1[i] + "\r\nNota2: " + n2[i]);
  alert("Nome do aluno: " + alunos[i] + "\r\nNota final: "+ soma);
	//alert(soma);
 }




