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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  function dfs(a, b) {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;
    return dfs(a.left, b.left) && dfs(a.right, b.right);
  }

  return (
    dfs(root, subRoot) || dfs(root.left, subRoot) || dfs(root.right, subRoot)
  );
};
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  if (!root) return false;

  function dfs(a, b) {
    if (!a && !b) return true;
    if (!a || !b || a.val !== b.val) return false;
    return dfs(a.left, b.left) && dfs(a.right, b.right);
  }

  return (
    dfs(root, subRoot) || dfs(root.left, subRoot) || dfs(root.right, subRoot)
  );
};
