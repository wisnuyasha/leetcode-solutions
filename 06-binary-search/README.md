# Binary Search

## Problems todo
**Easy**
- [x] [Binary Search](https://leetcode.com/problems/binary-search/)

**Medium**
- [x] [Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)
- [x] [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [x] [Find Minimum in Rotated Sorted Array](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)
- [x] [Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [ ] [Time Based Key-Value Store](https://leetcode.com/problems/time-based-key-value-store/)

**Hard**
- [ ] [Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

## Key Concepts
- **Divide-and-conquer Paradigm** → Binary search repeatedly splits the search space in half to reduce the problem size exponentially
- **Search Space vs. Array Values** → Some problems apply binary search on indices/positions (e.g. [Search in Rotated Sorted Array](0033-search-in-rotated-sorted-array/)), while others search over a range of possible answers (e.g. [Koko Eating Bananas](0875-koko-eating-bananas/)). Understanding this is crucial
- **Loop Boundaries and Pointer Movement** → Choosing the correct loop condition (`l <= r` for exact match search, `l < r` for narrowing to one index) and applying precise pointer updates (`l = m + 1`, `r = m`) are critical for binary search correctness
- **Handling Rotated Arrays** → Even when arrays are rotated (partially sorted), binary search can be applied by identifying which side is still sorted
- **Validating Conditions Instead of Equality** → For problems like [Koko Eating Bananas](0875-koko-eating-bananas/) / [Find Minimum in Rotated Sorted Array](0153-find-minimum-in-rotated-sorted-array/), the search is not for a value match but for the minimum/maximum value that satisfies a condition


## Common Techniques & Patterns
- **Classic Binary Search**  
  Find an exact value in a sorted array using midpoint comparison.  
  Used in: [Binary Search](0704-binary-search/), [Search in Rotated Sorted Array](0033-search-in-rotated-sorted-array/).
  
- **Binary Search on Rotated Arrays**  
  Detect which half is sorted and use it to narrow the search.  
  Used in: [Search in Rotated Sorted Array](0033-search-in-rotated-sorted-array/).

- **Binary Search on Matrix (1D Simulation)**  
  Treat a 2D matrix as a flattened array and use division/modulo to map 1D index to 2D coordinates.  
  Used in: [Search a 2D Matrix](0074-search-a-2d-matrix/).

- **Binary Search on Answer (Minimum Valid Value)**  
  Use binary search to find the smallest value that satisfies a certain condition. 
  Used in: [Koko Eating Bananas](0875-koko-eating-bananas/).

- **Find Minimum in Rotated Sorted ArraySearch**  
  Instead of searching for a target, binary search is used to find the point where rotation occurs (i.e., the minimum element).  
  Used in: [Find Minimum in Rotated Sorted Array](0153-find-minimum-in-rotated-sorted-array/).

- **Trusted Half Comparison**  
  In problems without a specific target, compare mid to the end of the range to determine which side is sorted and where the answer might lie.  
  Used in: [Find Minimum in Rotated Sorted Array](0153-find-minimum-in-rotated-sorted-array/).