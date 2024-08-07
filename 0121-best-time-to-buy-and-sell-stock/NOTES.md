## Analysis

This problem requires :
- Find the max value difference between `price[i + 1]` and `prices[i]`
- Substracting with `price[i]` and `price[i - x]` is not allowed

## Thought process
My first approach was to use nested loops, this is the illustration since its easier to understand:

```
[7,1,5,3,6,4]
 i j

...

[7,1,5,3,6,4]
 i         j

...

[7,1,5,3,6,4]
   i j

...

[7,1,5,3,6,4]
   i       j

....
```

thats the idea, and:

### Attempt Solution 1 : Two Pointer
```js
var maxProfit = function(prices) { 
    let buy = 0
    let biggest = 0
    while(buy < (prices.length - 1)) {
        let sell = buy + 1
        while(sell < prices.length){
            profit = prices[sell] - prices[buy]
            if(prices[sell] > prices[buy] && profit > biggest){
                biggest = profit
            }
            sell++
        }
        buy++
    }
    return biggest
};
```
 
sadly, this has a time complexity of `O(N^2)` and did not pass the time limit. 
    
It took me a while to notice the core logic that maybe   lead to a solution. The idea is if the next next value is smaller, why not just replace it with the current value ? because there will no bigger solution either. So, `minPrice` is used to store the minimum price possible in the array. if the next value isnt smaller, just substract the value and compare/store the result to the `maxProfit`. With this approach, the code will run for O(N) or one iteration of the array.

### Attempt Solution 2 :    
```js
var maxProfit = function(prices) {
    let maxProfit = 0
    let minPrice = prices[0]

    for(let i = 0; i < prices.length; i++) {        
        if(prices[i] < minPrice) minPrice = prices[i]
        else {
            let profit = prices[i] - minPrice
            if(profit > maxProfit) {
                maxProfit = profit
            }
        }
    }

    return maxProfit
};
```

The time complexity is O(N) (linear time) and the space complexity is O(1) (only constant space)

## Lesson Learned

- This practice helped improve my logical thinking by forcing me to find alternative solutions.

- It encouraged me to consider different time complexities, such as O(1), O(N), and higher, to determine if a higher time complexity is necessary.