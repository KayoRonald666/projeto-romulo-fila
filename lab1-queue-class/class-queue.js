export class Queue {
  
  constructor() {
    this.items = [];
  }
  
  enqueue(element) {
    this.items.push(element);
  }

  dequeue(){
    if(this.isEmpty()){
      return "Fila vazia";
    }
    return this.items.shift();
  }

  size(){
    return this.items.length;
  }

  isEmpty() {
    return this.size() === 0;
  }


  front(){
    return this.isEmpty() ? "Fila vazia" : this.items[0];
  }

  rear(){
    return this.isEmpty() ? "Fila vazia" : this.items[this.size() - 1];
  }

  clear() {
    this.items = [];
  }
}