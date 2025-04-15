/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// first try
var isSameTree = function (p, q) {
  if (!p && !q) return true;
  const currP = p;
  const currQ = q;
  let bool = true;

  function dfs(p, q) {
    if (!p && !q) return;

    if (p?.val !== q?.val) {
      bool = false;
      return;
    }

    dfs(p?.left, q?.left);
    dfs(p?.right, q?.right);
  }

  dfs(currP, currQ);
  return bool;
};

// clean ver (dfs recusive)
var isSameTree = function (p, q) {
  // base case: keduanya null
  if (!p && !q) return true;

  // salah satu null atau value beda
  if (!p || !q || p.val !== q.val) return false;

  // rekursif ke kiri dan kanan
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// dfs iterative
var isSameTree = function (p, q) {
  const stack = [[p, q]];

  while (stack.length > 0) {
    const [p, q] = queue.pop();

    // kalo sama" null skip 1 iterasi
    if (!p && !q) continue;
    // kalo struktur beda ato value beda itu false
    if (!p || !q || p.val !== q.val) return false;

    stack.push([p.left, q.left]);
    stack.push([p.left, q.left]);
  }
};

// bfs
var isSameTree = function (p, q) {
  const queue = [[p, q]];

  while (queue.length > 0) {
    const [p, q] = queue.shift();

    // kalo sama" null skip 1 iterasi
    if (!p && !q) continue;
    // kalo struktur beda ato value beda itu false
    if (!p || !q || p.val !== q.val) return false;

    queue.push([p.left, q.left]);
    queue.push([p.right, q.right]);
  }

  return true;
};
