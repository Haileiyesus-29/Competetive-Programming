
/**
 * @param {number} k
 */
let a,n;
var MyCircularDeque = function(k) {
    a = []
    n = k
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
    if(a.length < n ){
        a.splice(0,0,value)
        return true
    }
    return false 
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
       if(a.length < n ){
        a.push(value)
        return true
    }
    return false 
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
    if(a.length > 0 ){
        a.splice(0,1)
        return true
    }
    return false 
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
       if(a.length > 0 ){
        a.pop()
        return true
    }
    return false 
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
    if(a.length > 0 ){
        return a[0]
    }
    return -1
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
      if(a.length > 0 ){
        return a[a.length -1]
    }
    return -1
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
    return a.length == 0
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
    return a.length  == n
};


/** 
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */
