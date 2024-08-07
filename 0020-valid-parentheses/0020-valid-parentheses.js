/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    const closing = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    
    for(let char of s) {
        if(char in closing) {
            if(stack.length == 0 || stack.pop() !== closing[char]) {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    
    return stack.length === 0
};