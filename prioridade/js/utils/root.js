import { PriorityQueue } from "../queue/index.js";


/**
 * Uma instância de PriorityQueue usada para gerenciar elementos com prioridade.
 * 
 * Esta fila permite que os elementos sejam enfileirados com um nível de prioridade,
 * garantindo que os elementos com maior prioridade sejam desenfileirados antes
 * dos elementos com menor prioridade.
 * 
 * @type {PriorityQueue}
 */
const fila_com_prioridade = new PriorityQueue();

export { fila_com_prioridade };