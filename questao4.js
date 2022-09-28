/*EXERCÍCIO NÃO FINALIZADO*/

class Aluno {
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }
  //method
  nomeCompleto() {
    return this.primeiroNome + this.segundoNome;
  }
  //method
  media() {
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
  }
  //method
  situacao() {
    if(media>6){
      alert("Aluno aprovado");
    }
    else{
      alert("Aluno reprovado");
    }
  }
}

//var alunos = new Aluno;
let alunos = [new Aluno(),new Aluno(),new Aluno()];



alunos[0]=("João", "da Silva", 7, 8.5);
alunos[1]=("Fabiana", "da Silva", 10, 9);
alunos[2]=("Ricardo", "Gomes", 8, 6);

alert(alunos[0].primeiroNome);

/*for (var i=0; i<alunos.length; i++) { 

  	alert("Nome do aluno: " + alunos[i].nomeCompleto);

 }*/