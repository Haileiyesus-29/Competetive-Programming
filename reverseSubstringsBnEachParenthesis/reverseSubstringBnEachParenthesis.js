/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(str) {
    if(str.length === 1) return s;

    let ans = '';
    let i = 0;

    const buffer = [];
    let s = str.split('');
    
    for(let i = 0; i<s.length; i++){
        if(s[i] === '('){
            buffer.push(['(', i]);
        }else if (s[i] === ')'){
            
            const prev = buffer.pop();
            
            const arr = s.slice(prev[1] + 1, i).reverse();
            for(let k = 0; k<arr.length; k++){
                s[prev[1] + 1 + k] = arr[k];
            }
            
        }
    }

    return s.filter(i => i !== ')').filter(i => i !== '(').join('');
};
