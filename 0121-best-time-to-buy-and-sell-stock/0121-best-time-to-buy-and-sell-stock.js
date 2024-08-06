/**
 * @param {number[]} prices
 * @return {number}
 */
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