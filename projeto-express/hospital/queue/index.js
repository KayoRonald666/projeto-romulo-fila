import { Node } from "./node.js";

/**
 *  Representa uma fila de prioridade.
 *
 * - A fila de prioridade é uma fila onde cada elemento tem uma prioridade associada.
 * - Os elementos são adicionados à fila com base em sua prioridade.
 *
 */
export class PriorityQueue {
  constructor() {
    this.items = [];
  }

  /**
   *  Método para adicionar
   *
   * - Adiciona um novo item (nó) à fila com prioridade.
   * - Verfica a prioridade do item e o adiciona na posição correta na fila.
   *
   * @param {string} nome - O nome do paciente.
   * @param {number} prioridade - A prioridade do paciente.
   *
   * @returns {void}
   */
  enqueue(nome, prioridade) {
    const novoNode = new Node(nome, prioridade);
  
    if (this.isEmpty()) {
      this.items.push(novoNode);
    } else {
      let adicionado = false;
      for (let i = 1; i < this.size(); i++) {
        if (novoNode.prioridade > this.items[i].prioridade) {
          this.items.splice(i, 0, novoNode);
          adicionado = true;
          break;
        }
      }
      if (!adicionado) {
        this.items.push(novoNode);
      }
    }
    this.print();

    return {
      novoNode,
      prioridade: novoNode.prior
    }
  }
  

  /**
   *  Método para remover o primeiro item da fila.
   *
   * - Remove o primeiro item da fila.
   * - Se a fila estiver vazia, retorna uma mensagem de erro.
   *
   * @returns {string|Node} - O primeiro item da fila ou uma mensagem de erro.
   */
  dequeue() {
    return this.isEmpty() ? "Fila está vazia" : this.items.shift();
  }

  /**
   *  Método para visualizar o primeiro item da fila.
   *
   * - Retorna o primeiro item da fila.
   * - Se a fila estiver vazia, retorna uma mensagem de erro.
   *
   *  @returns {string|Node} - O primeiro item da fila ou uma mensagem de erro.
   */
  front() {
    return this.isEmpty() ? "Fila está vazia" : this.items[0];
  }

  /**
   *  Método para verificar se a fila está vazia.
   *
   * - Verifica se a fila está vazia.
   *
   * @returns {boolean} - Retorna true se a fila estiver vazia, caso contrário, retorna false.
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   *  Método para verificar o tamanho da fila.
   *
   * - Retorna o tamanho da fila.
   *
   * @returns {number} - O tamanho da fila.
   */
  size() {
    return this.items.length;
  }

  print() {
    while (!this.isEmpty()) {
      console.log(this.dequeue());
    }
  }

  /**
   * Retorna o último elemento da fila.
   * 
   * @returns {string|*} O último elemento da fila ou "Fila vazia" se a fila estiver vazia.
   */
  rear(){
    return this.isEmpty() ? "Fila vazia" : this.items[this.size() - 1];
  }
 
  /**
   * Imprime todos os elementos da fila.
   * Enquanto a fila não estiver vazia
   */
  print() {
    for (let i = 0; i < this.size(); i++) {
      console.log(this.items[i]);
    }
  }

  /**
   *  Método para limpar a fila.
   *
   * - Remove todos os itens da fila.
   *
   * @returns {void}
   */
  clear() {
    this.items = [];
  }
}
