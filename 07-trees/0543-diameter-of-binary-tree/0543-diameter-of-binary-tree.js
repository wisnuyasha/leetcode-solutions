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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxD = 0

    function dfs(node) {
        if (!node) return 0

        const leftH = dfs(node.left)
        const rightH = dfs(node.right)
        maxD = Math.max(maxD, leftH + rightH)

        return 1 + Math.max(leftH, rightH)
    }

    dfs(root)

    return maxD
};