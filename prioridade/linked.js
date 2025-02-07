class Node {
  constructor(value, priority, next = null) {
    this.value = value;
    this.priority = priority;
    this.next = next;
  }
}


class PriorityQueue{
	constructor(){
		this._front = null
		this._tail = null
		this._size = 0
	}


	isEmpty(){
		return this._size === 0
	}

	size() {
    return this._size();
  }

	dequeue(){
		if (this.isEmpty()){
			return "A fila está vazia"
		}

		const value = this.front.value
		this._front = this._front.next
		this._size--
		return value
	}


	front(){
		if(this.isEmpty()){
			return "Fila vazia"
		}
		return this._front.value
	}

	enqueue(value, priority){
		const node = new Node(value, priority)

		if(this.isEmpty()){
			this._front = node
			this._tail = node
		}else if(node.priority < this._front.priority){
			node.next = this._front
			this._front = node

		}else{
			let temp = this._front
			
			while (temp !== null && temp.next.priority <= node.priority) {
				temp = temp.next
			}
			node.next = temp.next
			temp.next = node
			if(node.next === null){
				this._tail = node
			}
		}
		this._size++
	}


	print(){
		let temp = this._front
			
			while (temp !== null) {
				console.log(temp)
				temp = temp.next
			}
	}
}

const q = new PriorityQueue()


q.enqueue("Maria", 0)
q.enqueue("Jão", 0)
q.enqueue("Jão", 2)
q.enqueue("Jão", 2)
q.enqueue("Jão", 2)
q.enqueue("Jão", 2)
q.print()