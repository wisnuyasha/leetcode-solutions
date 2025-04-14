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
 * @return {TreeNode}
 */
// DFS
var invertTree = function(root) {
    const curr = root

    function swap(curr) {
        if(!curr) return 
        [curr.left, curr.right] = [curr.right, curr.left]
        swap(curr.right)
        swap(curr.left)
    }

    swap(curr)
    return root
};

/// BFS
var invertTree = function(root) {
    if (!root) return null;

    const queue = [root]

    while(queue.length > 0) {
        const node = queue.shift()
        
        if (!node) continue;
        [node.left, node.right] = [node.right, node.left];

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

    return root
};