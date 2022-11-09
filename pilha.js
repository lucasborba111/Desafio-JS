class Pilha {
    constructor(capacidade) {
      this.capacidade = capacidade;
      this.topo = -1;
      this.arr = [];
    }
    pilhaCheia() {
      if (this.topo === this.capacidade - 1) {
        return true;
      }
      return false;
    }
    pilhaVazia() {
      if (this.topo === -1) {
        return true;
      }
      return false;
    }
    inserirPilha(valor) {
      if (!this.pilhaCheia()) {
        this.arr.push(valor);
        this.topo++;
      } else {
        console.log("Pilha cheia");
      }
    }
    esvaziarPilha() {
      if (!this.pilhaVazia()) {
        this.arr.pop();
        this.topo--;
      } else {
        console.log("Pilha vazia");
      }
    }
    mostrarPilha() {
      console.log(this.arr);
    }
  }
  let pilha = new Pilha(5);
  pilha.inserirPilha(1);
  pilha.inserirPilha(3);
  pilha.inserirPilha(5);
  pilha.esvaziarPilha();
  pilha.esvaziarPilha();
  pilha.mostrarPilha();