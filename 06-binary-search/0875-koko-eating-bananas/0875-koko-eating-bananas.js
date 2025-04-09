/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    let kmin = 1, kmax = Math.max(...piles)

    while(kmin <= kmax) {
        let kmid = Math.floor((kmin + kmax) / 2)

        let tot = 0
        for (let i = 0; i <= piles.length - 1; i++) {
            tot += Math.ceil(piles[i] / kmid)
        }

         if(tot <= h) {
            kmax = kmid - 1
        } else {
            kmin = kmid + 1
        }
    }

    return kmin
};