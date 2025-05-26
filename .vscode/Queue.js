class Node {
    constructor(value) {
        this.value = value
        this.anterior = null
        this.next = null
    }
}

class Queue {
    constructor() {
        	this. front = null
        	this. rear = null
        	this.size = 0
    }

    enqueue(value){
        let newNode = new Node(value)
        if(this.rear){
            this.rear.next = newNode
        }

        this.rear = newNode

        if(!this.front){
            this.front = newNode
        }
        this.size++
    }
    dequeue(){
        if(this.top){
            if(this.top == this.rear){
                this.top = null
                this.rear = null
                this.size--
            }
            this.top = this.top.next
            this.size--
        }else{
            return null
        }
    }
}