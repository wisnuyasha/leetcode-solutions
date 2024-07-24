## Analysis

My first attempt at this was bad and not clean code. I used map (because i used map A LOT but many say that a map is not good for this case and better for mutating the array) and kind of "brute force"-ing. I did this because I thought the substraction had too many cases; for example, what if "IC" "XD" "XC" etc? In the end, the rules of Roman numerals are not like that; it must be written from big to small numbers, except that six cases.

The logic is I reversed the array and used conditional statements for the "six cases" to store the value manually in hashmap. This was also bad (storing manually), I should've just stored the value of the Roman numerals on object (hashmap) and accessed it with the index (Roman string)

### Attempt Solution 1
```js
var romanToInt = function (s) {
  let arr = s.split("");
  arr.reverse();
  let h = {};

  arr.map((s, i) => {
    if (s === "I") {
      if (h[i - 1] === 5) {
        h[i] = 4;
        h[i - 1] = 0;
      } else if (h[i - 1] === 10) {
        h[i] = 9;
        h[i - 1] = 0;
      } else {
        h[i] = 1;
      }
    } else if (s === "V") {
      h[i] = 5;
    } else if (s === "X") {
      if (h[i - 1] === 50) {
        h[i] = 40;
        h[i - 1] = 0;
      } else if (h[i - 1] === 100) {
        h[i] = 90;
        h[i - 1] = 0;
      } else {
        h[i] = 10;
      }
    } else if (s === "L") {
      h[i] = 50;
    } else if (s === "C") {
      if (h[i - 1] === 500) {
        h[i] = 400;
        h[i - 1] = 0;
      } else if (h[i - 1] === 1000) {
        h[i] = 900;
        h[i - 1] = 0;
      } else {
        h[i] = 100;
      }
    } else if (s === "D") {
      h[i] = 500;
    } else {
      h[i] = 1000;
    }
  });

  return Object.values(h).reduce((acc, cur) => acc + cur);
};
```

After I realized the Roman numeral rules and all of my mistakes, I came up with different approach. I store the Roman numerals in a hashmap and applied 'if else' statements logic. Inside the loop, the logic is to check the previous index, If its one of the six case, just substract it with the previous value times 2. Why `*2` ? Because the previous value is already added, it must be substracted twice.

### Attempt Solution 2
```js
var romanToInt = function (s) {
  const h = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let val = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === 0 || h[s[i]] <= h[s[i - 1]]) {
      val += h[s[i]];
    } else {
      val += h[s[i]] - h[s[i - 1]] * 2;
    }
  }

  return val;
};
```


But what if I just check the next item ? I realized that it can be done simply (not much math like before); if the next item is bigger, just substract the value. finally :

### Attempt Solution 3
```js
var romanToInt = function (s) {
  const h = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let val = 0;

  for (let i = 0; i < s.length; i++) {
    if (h[s[i]] < h[s[i + 1]]) {
      val -= h[s[i]];
    } else {
      val += h[s[i]];
    }
  }

  return val;
};
```
Time complexity for this solution is `O(N)`, because it only need to iterate through one loops. Space complexity is `O(1)`, because the hashmap for Roman numerals is fixed-size and it not depends on the input.

## Lesson Learned

1. Use FOR loops
Using `for` loops can make the code more readable and following the best practices

2. Understand the problem carefully
Almost all of my mistakes and time wasted were because i didnt really understand the problem. With a better understanding, i would be able to solve the problem more efficiently.

3. Optimize space usage
In my first attempt, i used a hashmap to store values and an reversed array, and others. This resulted in a lot of unnecessary memory and reduced performance. Instead, try to store values in variables and think of solution that minimize space usage.