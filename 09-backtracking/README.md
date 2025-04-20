## Backtracking

### Problems todo
**Medium**
- [x] [Subsets](https://leetcode.com/problems/subsets/)
- [x] [Combination Sum](https://leetcode.com/problems/combination-sum/)
- [ ] [Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
- [ ] [Permutations](https://leetcode.com/problems/permutations/)
- [ ] [Subsets II](https://leetcode.com/problems/subsets-ii/)
- [ ] [Word Search](https://leetcode.com/problems/word-search/)
- [ ] [Palindrome Partitioning](https://leetcode.com/problems/palindrome-partitioning/)
- [ ] [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

**Hard**
- [ ] [N Queens](https://leetcode.com/problems/n-queens/)

## Key Concepts
- **Backtracking as DFS**  
  backtracking is a depth-first search (DFS) where we explore possible solutions one by one, and "backtrack" once we determine the current path is invalid or complete. unlike brute-force, backtracking only explores **valid paths**, making it more efficient and structured.

- **Subset vs Combination Search**  
  subsets aim to explore all inclusion/exclusion combinations, combination Sum focuses on building numeric combinations that sum to a target using elements multiple times — thus needs careful control of index movement and pruning.

- **Path Management**  
  backtracking often uses a `path` array to store current decisions. each recursive call explores further decisions, and we `pop()` to undo the last decision after returning.

## Common Techniques & Patterns
- **For-Loop Backtracking**  
  use a `for` loop from start to end to iterate through candidates, useful for exploring combinations or subsets without repetition. Advancing `start` ensures no duplicates and maintains order.  
  Used in: [Subsets](0078-subsets/), [Combination Sum](0039-combination-sum/)

- **Early Stopping (Pruning)**  
  stop the recursion early if the current total exceeds the target to avoids unnecessary recursive calls.  
  Used in: [Combination Sum](0039-combination-sum/)

- **Start Index to Avoid Duplicates**  
  pass a `start` index into recursion to only explore elements at or after the current position, preventing reversed duplicates like [3,2] and [2,3].  
  Used in: [Subsets](0078-subsets/), [Combination Sum](0039-combination-sum/)

- **Allowing Reuse of Elements**  
  to allow using the same number multiple times (e.g. [2,2,3]), call `backtrack(i, ...)` instead of `backtrack(i + 1, ...)` (allow reuse element like [Subsets](0078-subsets/)).  
  Used in: [Combination Sum](0039-combination-sum/)

## reminder
- **Snapshot Copying with [...path]**  
  always push a **copy** of the current path to the result (`res.push([...path])`) (avoid mutation bugs caused by shared references)
  Used in: [Subsets](0078-subsets/), [Combination Sum](0039-combination-sum/)


[Subsets](0078-subsets/)
[Combination Sum](0039-combination-sum/)
[Combination Sum II](0040-combination-sum-ii/)
[Permutations](0046-permutations/)
[Subsets II](0090-subsets-ii/)
[Word Search](0079-word-search/)
[Palindrome Partitioning](0131-palindrome-partitioning/)
[Letter Combinations of a Phone Number](0017-letter-combinations-of-a-phone-number/)
[N Queens](0051-n-queens/)