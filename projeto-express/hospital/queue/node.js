import { randomUUID }  from 'node:crypto';

export class Node {
  /**
   * Cria um novo nó.
   * @param {string} nome - O nome 
   * @param {number} prioridade - A prioridade
   */
  constructor(nome, prioridade) {
    this.id = randomUUID();
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