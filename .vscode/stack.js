class Node {

    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null
    }
    push(value){
	    let newNode = Node(value)
	    newNode.next = this.top
	    this.top = newNode
    }
    pop(){  
        if(!this.top){
            return null
        } 
        let poppedValue = this. top.value
        this.top = this.top.next
        return poppedValue
    }
    showTop(){
        if(!this.top){
            return null
        }else{
            return this.top.value
        }
    }
    isEmpty(){
        if(!this.top){
            return null
        }
    }
}

