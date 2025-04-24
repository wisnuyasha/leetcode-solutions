## Dynamic Programming

### Problems todo
**Easy**
- [x] [Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
- [x] [Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/)

**Medium**
- [x] [House Robber](https://leetcode.com/problems/house-robber/)
- [x] [House Robber II](https://leetcode.com/problems/house-robber-ii/)
- [x] [Longest Palindromic Substring](https://leetcode.com/problems/longest-palindromic-substring/) (comeback later)
- [x] [Palindromic Substrings](https://leetcode.com/problems/palindromic-substrings/)
- [x] [Decode Ways](https://leetcode.com/problems/decode-ways/) (comeback later)
- [x] [Coin Change](https://leetcode.com/problems/coin-change/) (comeback later)
- [x] [Maximum Product Subarray](https://leetcode.com/problems/maximum-product-subarray/) (comeback later)
- [ ] [Word Break](https://leetcode.com/problems/word-break/)
- [ ] [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)

## Key Concepts
- **Dynamic Programming State Definition** → define `dp[i]` as the optimal result (count, cost, max product, etcs) for subproblem ending or summing to index `i`.

- **Bottom-Up vs Top-Down**
  - bottom-up builds the solution from base to final result usually with a loop (tabulation)
  - top-down uses recursion + memo to avoid recomputation (memoization)

- **State Compression `O(1)` Space** → when only last one/two states are needed, we can remove the dp array and track em with variables.

## Common Techniques & Patterns
- **Fib style DP**  
  each state depends on previous 2 for ex (`dp[i] = dp[i-1] + dp[i-2]`), usually can be optimized into 2 variables (state compression).
  Used in: [Climbing Stairs](0070-climbing-stairs/), [Min Cost Climbing Stairs](0746-min-cost-climbing-stairs/), [Fibonacci](0509-fibonacci-number)

- **Min/Max Cost Rolling Window**  
  compute min/max up to step `i` by looking back one/two steps, used in cost / product tracking probs.
  Used in: [Min Cost Climbing Stairs](0746-min-cost-climbing-stairs/), [Maximum Product Subarray](0152-maximum-product-subarray/)

- **Include or Exclude Choice**  
  at each index choose to take current or skip, for ex (`dp[i] = min/max(dp[i-1], dp[i-2] + val[i])`)
  Used in: [House Robber](0198-house-robber/), [House Robber II](0213-house-robber-ii/)

- **Circular DP / Split Case**  
  when first and last are connected (e.g. House Robber II), solve 2 subproblems: exclude first or exclude last, then take max.  
  Used in: [House Robber II](0213-house-robber-ii/)

- **Index-Jump DP (1 or 2 step)**  
  choose between moving 1 or 2 steps forward based on valid condition (e.g., valid digit range).  
  Used in: [Decode Ways](0091-decode-ways/)

- **Bottom-Up Count Building**  
  use loop to build `dp[i]` as sum of `dp[i - coin]` over all coins, best practices to count number of combinations.  
  Used in: [Coin Change](0322-coin-change/)

- **Track Max & Min in Subarray**  
  needed when sign flips affect result at each step track both max and min product ending at that index.  
  Used in: [Maximum Product Subarray](0152-maximum-product-subarray/)

## self-notes
- always try drawing the **recursive tree** first to visualize how the problem breaks down.
- identify the **subproblem** and how it relates to the full problem.
- start with **recursive (top-down)** version first, then convert to **bottom-up**.
- watch out for overlapping subproblems, usually can be solved with dp
- dry run the test cases