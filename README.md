# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.


The first for loop that initializes the nodes to infinity runs(except source node)for over all the nodes(vertices) so this is (v). The second for loop also iterates over all the nodes again to make sure they have all been visited which is (v). The third for loop which finds the unvisited node with the smallest distance, for each iteration in the second loop this runs v times so this is v*v or v^2. The fourth for loop runs for the amount of edges total, which is the total neighbors which is (e). This comes out to being V + V + V^2 + E = $\Theta$(V^2 +E) as we ignore the other 2 V's being that they are smaller than V^2. 


Sources:

Chat GPT - seeing how to implement test file, as it did help specifically with comparing my result to the one that the test expects.

https://www.w3schools.com/jsref/jsref_fill.asp - explained .fill function 

https://github.com/COSC3020/dijkstra-s-algorithm-AaronATM/blob/main/code.test.js - looked at test file here as well

powerpoint slides on adjacency list 



"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
