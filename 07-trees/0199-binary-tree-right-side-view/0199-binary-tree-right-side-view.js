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
 * @return {number[]}
 */
var rightSideView = function(root) {
    if(!root) return []
    let arr = []
    let queue = [root]

    while(queue.length > 0) {
        const levelSize = queue.length
        for(let i = 0; i <= levelSize - 1; i++) {
            const node = queue.shift();
            if(!node) continue;

            if(i === levelSize - 1) arr.push(node.val)

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
        }
    }

    return arr
};