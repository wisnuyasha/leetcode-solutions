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
// dfs recursive
var maxDepth = function(root) {
    if(!root) return 0

    const left = maxDepth(root.left) 
    const right = maxDepth(root.right)

    return 1 + Math.max(left, right);
};

// dfs stack manual
var maxDepth = function(root) {
    if (!root) return 0;
  
    const stack = [[root, 1]];
    let maxDepth = 0;
  
    while (stack.length > 0) {
      const [node, depth] = stack.pop();
      if (node) {
        maxDepth = Math.max(maxDepth, depth);
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }
  
    return maxDepth;
  };

// bfs queue manual
var maxDepth = function(root) {
    if (!root) return 0;
  
    const queue = [root];
    let depth = 0;
  
    while (queue.length > 0) {
      let size = queue.length;
  
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
  
      depth++; 
    }
  
    return depth;
  };