/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  function bst(node) {
    if (!node) return null;

    if (p.val < node.val && q.val < node.val) {
      return bst(node.left);
    } else if (p.val > node.val && q.val > node.val) {
      return bst(node.right);
    }

    return node;
  }

  return bst(root);
};
