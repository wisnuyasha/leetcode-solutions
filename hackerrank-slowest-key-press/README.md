<h2><a href="https://www.hackerrank.com/">Slowest Key Press</a></h2><hr><div>
<p>Engineers have redesigned a keypad used by ambulance drivers in urban areas. In order to determine which key takes the longest time to press, the keypad is tested by a driver. Given the results of that test, determine which key takes the longest to press.</p>
<h4>Example</h4>
<pre>
<code>keyTimes = [[0, 2], [1, 5], [0, 9], [2, 15]]</code>
</pre>
<p>Elements in <code>keyTimes[i][0]</code> represent encoded characters in the range <code>ascii[a-z]</code> where <code>a = 0, b = 1, ..., z = 25</code>. The second element, <code>keyTimes[i][1]</code> represents the time the key is pressed since the start of the test. The elements will be given in ascending time order. In the example, keys pressed, in order are <code>0102[encoded] = abac</code> at times <code>2, 5, 9, 15</code>. From the start time, it took <code>2 - 0 = 2</code> to press the first key, <code>5 - 2 = 3</code> to press the second, and so on. The longest time it took to press a key was key 2, or 'c', at <code>15 - 9 = 6</code>.
</p>
</div>
<h4>Function Description</h4>
<p>Complete the function <code>slowestKey</code> in the editor below.</p>
<pre><code>slowestKey</code> has the following parameter(s):
<pre>
<ul>
  <li><code>int keyTimes[n][2]</code>: the first column contains the encoded key pressed, the second contains the time at which it was pressed</li>
</ul>
</pre>
</pre>
<h4>Returns</h4>
<ul>
  <li><code>char</code>: the key that took the longest time to press</li>
</ul>
<h4>Constraints</h4>
<ul>
  <li><code>1 ≤ n ≤ 10^5</code></li>
  <li><code>0 ≤ keyTimes[i][0] ≤ 25 (0 ≤ i &lt; n)</code></li>
  <li><code>1 ≤ keyTimes[i][1] ≤ 10^8 (0 ≤ i &lt; n)</code></li>
  <li>There will only be one key with the worst time.</li>
  <li><code>keyTimes</code> is sorted in ascending order of <code>keyTimes[i][1]</code></li>
</ul>