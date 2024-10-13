function dijkstra(graph, sourceNode) {  // adjacency list 
    let matrix = graph.length;
    if (matrix == 0) { // base case for no nodes
        return [];
    } 
    let dist = [];
    for (let i = 0; i < matrix; i++) {
        if (i === sourceNode) { 
            dist[i] = 0;  // source node set to 0
        } else {
            dist[i] = Infinity;  // all other nodes set to infinity 
        }
    }
    let marked = new Array(matrix).fill(0); // unmarked nodes set as 0 

     for (let i = 0; i < matrix; i++) { // runs through nodes
        let minDist = Infinity; // set node to infinity
        let minVertex = -1; // no node chosen yet so gets set to -1 

        for (let vertex = 0; vertex < matrix; vertex++) { // runs through all nodes to find unmarked mode with smallest distance
            if (marked[vertex] === 0 && dist[vertex] < minDist) { // checks if current unmarked node has a shorter distance 
                minDist = dist[vertex]; // updates new found distance
                minVertex = vertex; // updates node with new distance 
            }
        }

        if (minVertex === -1) { // stops if none found 
            return dist;
        }
        marked[minVertex] = 1; // sets marked vertex as 1 to note it was visited 

        for (let neighbor in graph[minVertex]) { // runs through neighbors 
            let edgeWeight = graph[minVertex][neighbor]; // gets cost of edge between neighbor and min vertex 
            let newDist = dist[minVertex] + edgeWeight; // computes possible new shortest distance 

            if (newDist < dist[neighbor]) { // checks if it is shorter
                dist[neighbor] = newDist; // updates it if true 
            }
        }
    }

    return dist;
}



     
