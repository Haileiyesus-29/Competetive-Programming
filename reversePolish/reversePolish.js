/**
 * @param {string[]} tokens
 * @return {number}
 */

 class Stack {
    constructor()
    {
        this.items = [];
    }
    push(element)
{
    this.items.push(element);
}
    pop()
{
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}
    peek()
{
    return this.items[this.items.length - 1];
}
    isEmpty()
{
    return this.items.length == 0;
}
    printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}
}
var stack = new Stack();

var evalRPN = function(tokens) {
    for(let i=0;i<tokens.length;i++){
        let c=tokens[i]
        if(!isNaN(c)){
            stack.push(c -'0')
        }
        else{
            let num1=stack.pop();
            let num2=stack.pop();
            if(num1=="Underflow" || num2=="Underflow")
              return ("can't perform postfix operation")
              switch(c){
                  case '+':
                  stack.push(num2+num1);
                  break;
                  case '-':
                  stack.push((num2-num1));
                  break;
                  case '*':
                  stack.push(num2*num1);
                  break;
                  case '/':
                  stack.push(Math.trunc(num2/num1));
                  break;
              }
        }
    }

return stack.pop();
};
