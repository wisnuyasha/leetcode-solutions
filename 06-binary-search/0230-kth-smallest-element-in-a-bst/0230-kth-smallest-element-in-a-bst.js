/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let counter = 0
    
    function dfs(node) {
        if(!node) return
        
        // go to the last value
        const left = dfs(node.left)
        if(left !== undefined) return left;

        // start counting from the bottom left 
        counter++
        // until the count equals to k, return node
        if(k === counter) return node.val
        
        // slide to right
        return dfs(node.right)
    }

    return dfs(root)
};

// stack
var kthSmallest = function(root, k) {
    const stack = []
    // use pointer to get current node
    let node = root
    let count = 0

    while(stack.length > 0 || node !== null) {
        // go to last left value
        while(node !== null) {
            stack.push(node);
            node = node.left
        }
        // get the node
        node = stack.pop()

        // start counting from the bottom left 
        count++
        // until the count equals to k, return node
        if(count === k) return node.val

        // slide to right
        node = node.right
    }
};