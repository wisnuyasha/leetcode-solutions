/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    // const arr = s.split("")
    
//     while(i < s.length) {
//         if ((s[i] === "{" && s[i + 1] === "}") || 
//             (s[i] === "(" && s[i + 1] === ")") || 
//             (s[i] === "[" && s[i + 1] === "]")) {
//             i += 2;
//             continue;
//         }
        
//         if ((s[i] === "{" && (s[i + 1] === "]" || s[i + 1] === ")")) || 
//             (s[i] === "[" && (s[i + 1] === "}" || s[i + 1] === ")")) || 
//             (s[i] === "(" && (s[i + 1] === "}" || s[i + 1] === "]"))) {
//             console.log(`Unexpected closing bracket at position ${i + 1}`);
//         }            
//         i += 2
//     }
    
    // return true
    
    const valid = {
        '}': '{',
        ']': '[',
        ')': '('
    }
    
    for(let char of s) {
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char)
        } else {
            if(stack.length == 0 || stack.pop() !== valid[char]) {
                return false
            }
        }
    }
    
    if(stack.length === 0) {
        return true
    } else {
        return false
    }
    
//     for(let i = 0; i < s.length; i++) {
//         if(s[i] === "(" && s[i] === "{"  && s[i] === "[") {
//             stack.push(s[i])
//         }
        
//         if(s[i] === ")" && arr[0] === "(" ) {
//             stack.pop()
//         } else if() {
//             return false
//         }
        
//         if(){
//            return false
//         }
        
//         return true
//     }
    
    // if()
};