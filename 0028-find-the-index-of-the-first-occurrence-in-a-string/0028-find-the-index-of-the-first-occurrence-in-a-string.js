/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === "") return 0;

    const n = haystack.length;
    const m = needle.length;

    const lps = new Array(m).fill(0);
    let len = 0;
    let i = 1;

    while (i < m) {
        if (needle[i] === needle[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    let j = 0;
    i = 0; 

    while (i < n) {
        if (needle[j] === haystack[i]) {
            i++;
            j++;
        }

        if (j === m) {
            return i - j;
        } else if (i < n && needle[j] !== haystack[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }

    return -1;
};
