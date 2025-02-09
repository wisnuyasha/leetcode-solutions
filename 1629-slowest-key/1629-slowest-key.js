/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
    let biggestIndex = 0;
    let biggestVal = releaseTimes[0]

    for(let i = 1; i < releaseTimes.length; i++) {
        let substract = releaseTimes[i] - releaseTimes[i-1]
        if(substract > biggestVal || 
        (substract == biggestVal && keysPressed[i] > keysPressed[biggestIndex])
        ) { 
            biggestVal = substract 
            biggestIndex = i
        }
    }

    return keysPressed[biggestIndex]
};