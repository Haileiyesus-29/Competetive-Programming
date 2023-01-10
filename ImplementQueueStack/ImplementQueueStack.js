
/** 
 * @param {number} x
 * @return {void}
 */


class MyQueue {
    data = [];

    constructor() {
        this.data = [];
    }

    push(element) {
        this.data.push(element);
    }

    pop() {
        const tempStack = [];

        while(this.data.length > 1) {
            tempStack.push(this.data.pop());
        }

        const poppedElement = this.data[0];
        this.data = [];
        
        while(tempStack.length) {
            this.data.push(tempStack.pop());
        }

        return poppedElement;
    }

    peek() {
        const tempStack = [];

        while(this.data.length) {
            tempStack.push(this.data.pop());
        }

        const peekedElement = tempStack[tempStack.length - 1];

        while(tempStack.length) {
            this.data.push(tempStack.pop());
        }

        return peekedElement;
    }

    empty() {
        return this.data.length === 0;
    }
}
/** 
 * Your MyQkk0ueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
