/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    // let buy = 0
    let maxProfit = 0
    let minSell = prices[0]
    
//     while(buy < (prices.length - 1)) {
//         let sell = buy + 1
//         while(sell < prices.length){
//             profit = prices[sell] - prices[buy]
//             if(prices[sell] > prices[buy] && profit > maxProfit){
//                 maxProfit = profit
//             }
//             sell++
//         }
        
//         buy++
//     }
    
    for(let i = 0; i < prices.length; i++) {
//         prices[i] === minSell ---> continue
        
//         prices[i] < minSell ---> minSell = prices[i]
        
//         prices[i] > minSell  ---> 
//             prices[i] - minSell > maxProfit ---> maxProfit = prices[i] - minSell
//             prices[i] - minSell < maxProfit ---> continue
    
        if(prices[i] === minSell) continue
        
        if(prices[i] < minSell) minSell = prices[i]
        
        if(prices[i] > minSell) {
            let profit = prices[i] - minSell
            if(profit > maxProfit) {
                maxProfit = profit
            } else {
                continue
            }
        }
    }
    
    return maxProfit

};