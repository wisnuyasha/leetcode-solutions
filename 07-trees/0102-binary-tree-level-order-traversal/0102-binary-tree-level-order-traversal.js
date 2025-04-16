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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    const queue = [root]
    let arr = []

    while (queue.length > 0) {
        const levelSize = queue.length
        const currLevel = []
        for (let i = 1; i <= levelSize; i++) {
            const node = queue.shift()
            if (!node) continue;
            
            currLevel.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        arr.push(currLevel)
    }

    return arr
};