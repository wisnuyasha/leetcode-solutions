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
 * @return {boolean}
 */

// dfs recursive
var isValidBST = function(root) {
    function dfs(node, min, max) {
        if(!node) return true
        if(node.val <= min || node.val >= max) return false
        
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    } 

    return dfs(root, -Infinity, Infinity)
};

// dfs iterative
var isValidBST = function(root) {
    const stack = [[root, min, max]]

    while (stack.length > 0) {
        const [node, min, max] = stack.pop()
        
        if(node.val <= min || node.val >= max) return false

        stack.push[node.left, min, node.val]
        stack.push[node.right, node.val, max]
    } 

    return dfs(root, -Infinity, Infinity)
};

// bfs tinggal ganti jadi queue, queue.shift()