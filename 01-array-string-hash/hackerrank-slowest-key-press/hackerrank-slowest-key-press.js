function slowestKey(keyTimes) {
    const char = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let biggestIndex = 0;

    for(let i = 0; i < keyTimes.length; i++) {
        if(i > 0) {
            let total = keyTimes[i][1] - keyTimes[i - 1][1]

            if(total > currMax) {
                currMax = total
                biggestIndex = i
            }
        } else {
            currMax = keyTimes[0][1]
        }
    }

    return char[keyTimes[biggestIndex][0]]
}