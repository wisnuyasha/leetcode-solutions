# Trees

## Problems todo
**Easy**
- [x] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [x] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
<!-- - [ ] [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
- [ ] [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/) -->
- [x] [Same Tree](https://leetcode.com/problems/same-tree/)
<!-- - [ ] [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) -->

**Medium**
<!-- - [ ] [Lowest Common Ancestor of a Binary Search Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [ ] [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
- [ ] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
- [ ] [Count Good Nodes in Binary Tree](https://leetcode.com/problems/count-good-nodes-in-binary-tree/) -->
- [ ] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
<!-- - [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [ ] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/) -->

**Hard**
- [ ] [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)
<!-- - [ ] [Serialize and Deserialize Binary Tree](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/) -->

## Key Concepts
- **DFS vs BFS** → DFS goes deep before backtracking (good when you want to process/combine nodes from bottom-up), BFS processes nodes level-by-level (level-order) (better for problems where layers matters, like getting max depth)

- **Recursive Traversal** → most of tree probs are naturally recursive, we break tree into subtrees and solve them traversals order logic depends on the probs.

- **Post-Order for Bottom-Up Problems** → when solving smth like depth, post-order is usually the go-to / best practice since we need childs results before processing the parents

- **Null Checks & Base Cases Matter** → lot of bugs come from forgetting what to do when a node is `null`, handle these properly and early.

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


## self-notes
- Most tree problems can be solved using recursive DFS, iterative DFS (stack), or BFS (queue) but there’s often a best practice depending on the problem.
- Don’t forget to handle base case scenarios when using recursion — it’s where most tree bugs come from!


[Invert Binary Tree](0226-invert-binary-tree/)
[Maximum Depth of Binary Tree](0104-maximum-depth-of-binary-tree/)
[Diameter of Binary Tree](0543-diameter-of-binary-tree/)
[Balanced Binary Tree](0110-balanced-binary-tree/)
[Same Tree](0100-same-tree/)
[Subtree of Another Tree](0572-subtree-of-another-tree/)
[Lowest Common Ancestor of a Binary Search Tree](0235-lowest-common-ancestor-of-a-binary-search-tree/)
[Binary Tree Level Order Traversal](0102-binary-tree-level-order-traversal/)
[Binary Tree Right Side View](0199-binary-tree-right-side-view/)
[Count Good Nodes in Binary Tree](1448-count-good-nodes-in-binary-tree/)
[Validate Binary Search Tree](0098-validate-binary-search-tree/)
[Kth Smallest Element in a BST](0230-kth-smallest-element-in-a-bst/)
[Construct Binary Tree from Preorder and Inorder Traversal](0105-construct-binary-tree-from-preorder-and-inorder-traversal/)
[Binary Tree Maximum Path Sum](0124-binary-tree-maximum-path-sum/)
[Serialize and Deserialize Binary Tree](0297-serialize-and-deserialize-binary-tree/)