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
var isBalanced = function (root) {
  let balanced = true;

  function dfs(node) {
    if (!node) return true;

    const left = dfs(node.left);
    const right = dfs(node.right);

    if (Math.abs(left - right) > 1) balanced = false;

    return 1 + Math.max(left, right);
  }

  dfs(root);

  return balanced;
};
