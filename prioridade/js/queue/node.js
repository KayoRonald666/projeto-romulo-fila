/**
 * Representa um nó em uma fila de prioridade.
 */
export class Node {
  /**
   * Cria um novo nó.
   * @param {string} nome - O nome 
   * @param {number} prioridade - A prioridade
   */
  constructor(nome, prioridade) {
    /**
     * O nome
     * @type {string}
     */
    this.nome = nome;

    /**
     * A prioridade
     * @type {number}
     */
    this.prioridade = prioridade;
  }
}