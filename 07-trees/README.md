# Trees
(comeback later)

## Problems todo
**Easy**
- [x] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [x] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [x] [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
- [x] [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [x] [Same Tree](https://leetcode.com/problems/same-tree/)
- [x] [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

**Medium**
- [x] [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [x] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [x] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
<!-- - [ ] [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) -->
- [x] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [x] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/) (comeback later)
<!-- - [ ] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) -->

**Hard**
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
<!-- - [ ] [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) -->

## Key Concepts
- **Tree Structure** → A tree is a hierarchical data structure where each node has at most two children (left and right in binary trees). It's naturally recursive in structure.

- **DFS vs BFS** → DFS goes deep before backtracking (good when you want to process/combine nodes from bottom-up), BFS processes nodes level-by-level (level-order) (better for problems where layers matters, like getting max depth)

- **Binary Tree vs. Binary Search Tree (BST)** → in a regular binary tree, there's no value ordering. in a BST, all values in the left subtree are less than the current node, and all values in the right subtree are greater.

- **In-order, Pre-order, Post-order Traversals**  
  These are fundamental ways to traverse binary trees:
  - In-order (Left → Root → Right): Returns sorted values in BST.
  - Pre-order (Root → Left → Right): Useful to reconstruct trees.
  - Post-order (Left → Right → Root): Good for bottom-up computations.

- **Height vs Depth**  
  - Height = longest path from a node **down** to a leaf.  
  - Depth = distance from root **down** to a node.

- **Leaf vs Internal Node** → Leaf = node with no children. Internal node = node with at least one child. Used in logic like balanced/diameter tree problems.

- **Subtrees** → Any node in a tree can be the root of its own subtree. Many problems (like `isSubtree`, `validateBST`, `diameter`) rely on processing subtrees recursively.

- **Recursive Nature** → Trees are naturally recursive. Most problems are solved by solving smaller versions of the problem on left/right subtrees and combining the result.

- **Levels in Trees** → Each "layer" in a tree is a level. BFS (queue) processes nodes level by level — this matters for problems like `right side view`, `level order traversal`.

- **Base Case Thinking** → Tree recursion always hits a base case when the current node is `null`. Forgetting to return at base case is the top source of bugs.


## Common Techniques & Patterns
- **Recursive DFS**  
  classic/clean that used when visiting all nodes & solving subtrees before combining results  
  Used in: [Invert Binary Tree](0226-invert-binary-tree/), [Maximum Depth of Binary Tree](0104-maximum-depth-of-binary-tree/), [Same Tree](0100-same-tree/), [Same Tree](0100-same-tree/)

- **Iterative DFS**  
  a manual version of recursion using a stack, useful when we want more control or to avoid call stack limits
  Used in: [Invert Binary Tree](0226-invert-binary-tree/), [Same Tree](0100-same-tree/)

- **BFS (queue-based level order)**  
  goes layer by layer, usefull when we want to process the tree horizontally. 
  Used in: [Invert Binary Tree](0226-invert-binary-tree/), [Maximum Depth of Binary Tree](0104-maximum-depth-of-binary-tree/)

- **DFS with Depth Tracking**  
  returns depth/height and computes info during backtracking.  
  Used in: [Invert Binary Tree](0226-invert-binary-tree/), [Maximum Depth of Binary Tree](0104-maximum-depth-of-binary-tree/), [Diameter of Binary Tree](0543-diameter-of-binary-tree/), [Balanced Binary Tree](0110-balanced-binary-tree/)

- **DFS Tree Equality Check**  
  recursively compare structure and values of two trees  
  Used in: [Same Tree](0100-same-tree/), [Subtree of Another Tree](0572-subtree-of-another-tree/)

- **Early Return in Recursive DFS**  
  exit the traversal early once the answer is found  
  Used in: [Kth Smallest Element in a BST](0230-kth-smallest-element-in-a-bst/)

- **Last-in-Level Capture (Right Side View)**  
  in BFS, take the last node of each level  
  Used in: [Binary Tree Right Side View](0199-binary-tree-right-side-view/)

- **BST Directional Logic (Go Left/Right)**  
  utilize BST property: left < node < right. useful for efficient search  
  Used in: [Lowest Common Ancestor of a Binary Search Tree](0235-lowest-common-ancestor-of-a-binary-search-tree/), [Validate Binary Search Tree](0098-validate-binary-search-tree/)

- **In-order Traversal in BST**  
  when values need to be processed in ascending order (BST)  
  Used in: [Kth Smallest Element in a BST](0230-kth-smallest-element-in-a-bst/), [Validate Binary Search Tree](0098-validate-binary-search-tree/)

## self-notes
- Most tree problems can be solved using recursive DFS, iterative DFS (stack), or BFS (queue) but there’s often a best practice depending on the problem.
- Don’t forget to handle base case scenarios when using recursion — it’s where most tree bugs come from!