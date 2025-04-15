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

// maxDepth(3)
// ├── maxDepth(9)
// │   ├── maxDepth(null) → 0
// │   └── maxDepth(null) → 0
// │   → return 1 + max(0, 0) = 1
// ├── maxDepth(20)
// │   ├── maxDepth(15)
// │   │   ├── maxDepth(null) → 0
// │   │   └── maxDepth(null) → 0
// │   │   → return 1 + max(0, 0) = 1
// │   └── maxDepth(7)
// │       ├── maxDepth(null) → 0
// │       └── maxDepth(null) → 0
// │       → return 1 + max(0, 0) = 1
// │   → return 1 + max(1, 1) = 2
// → return 1 + max(1, 2) = 3

// dfs stack manual
var maxDepth = function(root) {
    if (!root) return 0;
  
    const stack = [[root, 1]];
    let level = 0;
  
    while (stack.length > 0) {
      const [node, depth] = stack.pop();
      if (node) {
        level = Math.max(level, depth);
        // disini disini depth kepake buat ngecek 
        stack.push([node.left, depth + 1]);
        stack.push([node.right, depth + 1]);
      }
    }
  
    return level;
  };

// bfs queue manual
var maxDepth = function(root) {
    if (!root) return 0;
  
    const queue = [root];
    let level = 0;
  
    while (queue.length > 0) {
      // 1 level iterasi
      let size = queue.length;
  
      // abisin 1 level
      for (let i = 0; i < size; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }

      level++; 
    }
  
    return level;
  };