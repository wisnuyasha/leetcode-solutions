## Analysis

This problem requires :
- Returning `true` if there is a matching pair of open-closed brackets (of the same type)
- Returning `false` if the pair isnt the same type or isnt paired

## Thought process

with the hint :
> Use a stack of characters.

i used a stack approach to solve this, the idea is :
- if its an open bracket, push it to the stack
- if its an closed bracket :
    - check if theres any value in stack. if there isnt, return `false` (if isnt empty, continue the iteration)
    - check the value at the top of the stack with the curr value. if didnt match, return `false` (if true, just continue the iteration)
- after the iteration, return `true` if the stack is empty (if theres any element left in stack, return `false` because it means an open bracket didnt have any pair)

To check the value, i used a constant hash to easily detect the type of bracket pairs.

### Attempt Solution 1
```js
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
```

The time complexity is O(N) (linear time) and the space complexity is O(N) (only constant space)

## Lesson Learned

- Stack :
stack reduce complex and unecesary conditions / loops. particularly in this case, stack provides a straightforward way to track and validate.