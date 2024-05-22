// Part 1: Data Structure Implementations

// 1. Stack
// A Stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle.
// It has two main operations: push (adding an element to the top) and pop (removing the top element).
class Stack {
    constructor() {
      this.items = []; // Array to store the stack elements
    }
  
    // Push an element to the top of the stack
    push(item) {
      this.items.push(item);
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Underflow"; // Return an error message if the stack is empty
      } else {
        return this.items.pop(); // Remove and return the top element
      }
    }
  
    // Return the top element without removing it
    peek() {
      return this.items[this.items.length - 1];
    }
  
    // Check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Print the stack elements as a string
    printStack() {
      let str = "";
      for (let item of this.items) {
        str += item + " ";
      }
      return str;
    }
  }
  
  // 2. Queue
  // A Queue is a linear data structure that follows the First-In-First-Out (FIFO) principle.
  // It has two main operations: enqueue (adding an element to the rear) and dequeue (removing the front element).
  class Queue {
    constructor() {
      this.items = []; // Array to store the queue elements
    }
  
    // Add an element to the rear of the queue
    enqueue(item) {
      this.items.push(item);
    }
  
    // Remove and return the front element from the queue
    dequeue() {
      if (this.isEmpty()) {
        return "Underflow"; // Return an error message if the queue is empty
      } else {
        return this.items.shift(); // Remove and return the front element
      }
    }
  
    // Return the front element without removing it
    peek() {
      if (this.isEmpty()) {
        return "Underflow"; // Return an error message if the queue is empty
      } else {
        return this.items[0];
      }
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Print the queue elements as a string
    printQueue() {
      let str = "";
      for (let item of this.items) {
        str += item + " ";
      }
      return str;
    }
  }
  
  // 3. Binary Tree
  // A Binary Tree is a tree data structure where each node has at most two children (left and right).
  // It is commonly used for searching, sorting, and traversal operations.
  class BinaryTree {
    constructor() {
      this.root = null; // Root node of the binary tree
    }
  
    // Insert a new node with the given value into the binary tree
    insertNode(value) {
      const newNode = new Node(value);
      if (!this.root) {
        this.root = newNode;
      } else {
        this.insertNodeHelper(this.root, newNode);
      }
    }
  
    // Helper function to insert a new node recursively
    insertNodeHelper(root, newNode) {
      if (newNode.value < root.value) {
        if (!root.left) {
          root.left = newNode;
        } else {
          this.insertNodeHelper(root.left, newNode);
        }
      } else {
        if (!root.right) {
          root.right = newNode;
        } else {
          this.insertNodeHelper(root.right, newNode);
        }
      }
    }
  
    // Search for a node with the given value in the binary tree
    searchNode(value) {
      return this.searchNodeHelper(this.root, value);
    }
  
    // Helper function to search for a node recursively
    searchNodeHelper(root, value) {
      if (!root) {
        return null;
      }
      if (value === root.value) {
        return root;
      } else if (value < root.value) {
        return this.searchNodeHelper(root.left, value);
      } else {
        return this.searchNodeHelper(root.right, value);
      }
    }
  
    // Traverse the binary tree in-order (left, root, right)
    traverseInOrder() {
      const values = [];
      this.traverseInOrderHelper(this.root, values);
      return values;
    }
  
    // Helper function for in-order traversal
    traverseInOrderHelper(root, values) {
      if (root) {
        this.traverseInOrderHelper(root.left, values);
        values.push(root.value);
        this.traverseInOrderHelper(root.right, values);
      }
    }
  
    // Traverse the binary tree pre-order (root, left, right)
    traversePreOrder() {
      const values = [];
      this.traversePreOrderHelper(this.root, values);
      return values;
    }
  
    // Helper function for pre-order traversal
    traversePreOrderHelper(root, values) {
      if (root) {
        values.push(root.value);
        this.traversePreOrderHelper(root.left, values);
        this.traversePreOrderHelper(root.right, values);
      }
    }
  
    // Traverse the binary tree post-order (left, right, root)
    traversePostOrder() {
      const values = [];
      this.traversePostOrderHelper(this.root, values);
      return values;
    }
  
    // Helper function for post-order traversal
    traversePostOrderHelper(root, values) {
      if (root) {
        this.traversePostOrderHelper(root.left, values);
        this.traversePostOrderHelper(root.right, values);
        values.push(root.value);
      }
    }
  }
  
  // 4. Graph
  // A Graph is a non-linear data structure that consists of vertices (nodes) and edges (connections between nodes).
  // It is commonly used to represent and analyze relationships between objects.
  class Graph {
    constructor() {
      this.adjacencyList = new Map(); // Map to store the adjacency list of vertices and their neighbors
    }
  
    // Add a new vertex to the graph
    addVertex(vertex) {
      this.adjacencyList.set(vertex, []);
    }
  
    // Add an edge between two vertices
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList.has(vertex1)) {
        this.addVertex(vertex1);
      }
      if (!this.adjacencyList.has(vertex2)) {
        this.addVertex(vertex2);
      }
      this.adjacencyList.get(vertex1).push(vertex2);
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  
    // Depth-First Search (DFS) traversal of the graph
    dfs(startVertex) {
      const visited = new Set();
      this.dfsHelper(startVertex, visited);
      return visited;
    }
  
    // Helper function for DFS traversal
    dfsHelper(vertex, visited) {
      visited.add(vertex);
      console.log(vertex); // Process the vertex
  
      const neighbors = this.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          this.dfsHelper(neighbor, visited);
        }
      }
    }
  
    // Breadth-First Search (BFS) traversal of the graph
    bfs(startVertex) {
      const visited = new Set();
      const queue = [startVertex];
      while (queue.length > 0) {
        const vertex = queue.shift();
        if (!visited.has(vertex)) {
          visited.add(vertex);
          console.log(vertex); // Process the vertex
          const neighbors = this.adjacencyList.get(vertex);
          for (const neighbor of neighbors) {
            if (!visited.has(neighbor)) {
              queue.push(neighbor);
            }
          }
        }
      }
      return visited;
    }
  }
  
  // Helper class for Binary Tree
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // 5. Linked List
  // A Linked List is a linear data structure where elements are not stored in contiguous memory locations.
  // Instead, each element (node) contains a value and a reference (link) to the next node in the sequence.
  class LinkedList {
    constructor() {
      this.head = null; // Head node of the linked list
      this.tail = null; // Tail node of the linked list
      this.length = 0; // Length of the linked list
    }
  
    // Insert a new node with the given value at the specified index
    insert(val, index) {
      const newNode = new ListNode(val);
      if (index < 0 || index > this.length) {
        return; // Invalid index
      }
      if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
      } else {
        let prev = null;
        let current = this.head;
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        prev.next = newNode;
        newNode.next = current;
      }
      this.length++;
    }
  
    // Delete the node at the specified index
    delete(index) {
      if (index < 0 || index >= this.length) {
        return; // Invalid index
      }
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let prev = null;
        let current = this.head;
        let i = 0;
        while (i < index) {
          prev = current;
          current = current.next;
          i++;
        }
        prev.next = current.next;
      }
      this.length--;
    }
  
    // Search for a node with the given value in the linked list
    search(val) {
      let current = this.head;
      while (current) {
        if (current.val === val) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  
    // Print the linked list as a string
    printList() {
      let current = this.head;
      let str = "";
      while (current) {
        str += current.val + " ";
        current = current.next;
      }
      return str;
    }
  }
  
  // Helper class for Linked List
  class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Part 2: Algorithmic Problems
  
  // 1. Min/Max Stack
  // A Min/Max Stack is a stack data structure that supports constant-time retrieval of the minimum and maximum elements.
  class MinMaxStack {
    constructor() {
      this.stack = []; // Main stack to store elements
      this.minStack = []; // Stack to keep track of minimum elements
      this.maxStack = []; // Stack to keep track of maximum elements
    }
  
    // Push an element onto the stack
    push(val) {
      this.stack.push(val);
      if (
        this.minStack.length === 0 ||
        val <= this.minStack[this.minStack.length - 1]
      ) {
        this.minStack.push(val);
      }
      if (
        this.maxStack.length === 0 ||
        val >= this.maxStack[this.maxStack.length - 1]
      ) {
        this.maxStack.push(val);
      }
    }
  
    // Remove and return the top element from the stack
    pop() {
      if (this.stack.length === 0) {
        return "Underflow";
      }
      const val = this.stack.pop();
      if (val === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      if (val === this.maxStack[this.maxStack.length - 1]) {
        this.maxStack.pop();
      }
      return val;
    }
  
    // Get the minimum element from the stack
    getMin() {
      if (this.minStack.length === 0) {
        return "Stack is empty";
      }
      return this.minStack[this.minStack.length - 1];
    }
  
    // Get the maximum element from the stack
    getMax() {
      if (this.maxStack.length === 0) {
        return "Stack is empty";
      }
      return this.maxStack[this.maxStack.length - 1];
    }
  }
  
  // 2. Binary Search Tree
  // A Binary Search Tree (BST) is a binary tree where the value of each node is greater than or equal to the values in all the nodes in its left subtree,
  // and less than or equal to the values in all the nodes in its right subtree.
  // This function checks if a given binary tree is a valid Binary Search Tree.
  function isBinarySearchTree(root) {
    return isBSTHelper(root, -Infinity, Infinity);
  }
  
  // Helper function for checking if a binary tree is a valid Binary Search Tree
  function isBSTHelper(node, min, max) {
    if (!node) {
      return true;
    }
    if (node.value < min || node.value > max) {
      return false;
    }
    return (
      isBSTHelper(node.left, min, node.value - 1) &&
      isBSTHelper(node.right, node.value + 1, max)
    );
  }
  
  // 3. Graph Algorithms
  // Dijkstra's algorithm for finding the shortest path between two vertices in a weighted graph
  function shortestPathDijkstra(graph, startVertex, endVertex) {
    const distances = new Map();
    const visited = new Set();
    const pq = new PriorityQueue();
  
    for (const vertex of graph.adjacencyList.keys()) {
      distances.set(vertex, Infinity);
    }
    distances.set(startVertex, 0);
    pq.enqueue(startVertex, 0);
  
    while (!pq.isEmpty()) {
      const { vertex, distance } = pq.dequeue();
      if (visited.has(vertex)) {
        continue;
      }
      visited.add(vertex);
      if (vertex === endVertex) {
        return distance;
      }
      const neighbors = graph.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          const newDistance = distance + 1;
          if (newDistance < distances.get(neighbor)) {
            distances.set(neighbor, newDistance);
            pq.enqueue(neighbor, newDistance);
          }
        }
      }
    }
  
    return distances.get(endVertex) || Infinity;
  }
  
  // Breadth-First Search (BFS) algorithm for finding the shortest path between two vertices in an unweighted graph
  function shortestPathBFS(graph, startVertex, endVertex) {
    const distances = new Map();
    const visited = new Set();
    const queue = [[startVertex, 0]];
  
    for (const vertex of graph.adjacencyList.keys()) {
      distances.set(vertex, Infinity);
    }
    distances.set(startVertex, 0);
  
    while (queue.length > 0) {
      const [vertex, distance] = queue.shift();
      if (visited.has(vertex)) {
        continue;
      }
      visited.add(vertex);
      if (vertex === endVertex) {
        return distance;
      }
      const neighbors = graph.adjacencyList.get(vertex);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          const newDistance = distance + 1;
          if (newDistance < distances.get(neighbor)) {
            distances.set(neighbor, newDistance);
            queue.push([neighbor, newDistance]);
          }
        }
      }
    }
  
    return distances.get(endVertex) || Infinity;
  }

  // Priority Queue implementation for Dijkstra's algorithm
class PriorityQueue {
    constructor() {
      this.values = [];
    }
  
    enqueue(vertex, distance) {
      this.values.push({ vertex, distance });
      this.sort();
    }
  
    dequeue() {
      return this.values.shift();
    }
  
    sort() {
      this.values.sort((a, b) => a.distance - b.distance);
    }
  
    isEmpty() {
      return this.values.length === 0;
    }
  }
  
  // 4. Linked List Cycle
  function hasCycle(head) {
    if (!head || !head.next) {
      return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
      if (!fast || !fast.next) {
        return false;
      }
      slow = slow.next;
      fast = fast.next.next;
    }
    return true;
  }
  
  // Part 3: Demonstration
  // Stack
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  console.log(stack.printStack()); // Output: 1 2 3
  console.log(stack.pop()); // Output: 3
  console.log(stack.peek()); // Output: 2
  
  // Queue
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  console.log(queue.printQueue()); // Output: 1 2 3
  console.log(queue.dequeue()); // Output: 1
  console.log(queue.peek()); // Output: 2
  
  // Binary Tree
  const binaryTree = new BinaryTree();
  binaryTree.insertNode(5);
  binaryTree.insertNode(3);
  binaryTree.insertNode(7);
  binaryTree.insertNode(2);
  binaryTree.insertNode(4);
  binaryTree.insertNode(6);
  binaryTree.insertNode(8);
  
  console.log("In-order traversal:", binaryTree.traverseInOrder()); // Output: [2, 3, 4, 5, 6, 7, 8]
  console.log("Pre-order traversal:", binaryTree.traversePreOrder()); // Output: [5, 3, 2, 4, 7, 6, 8]
  console.log("Post-order traversal:", binaryTree.traversePostOrder()); // Output: [2, 4, 3, 6, 8, 7, 5]
  
  // Graph
  const graph = new Graph();
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "D");
  graph.addEdge("C", "E");
  
  console.log("DFS traversal:");
  graph.dfs("A"); // Output: A B D C E
  
  console.log("BFS traversal:");
  graph.bfs("A"); // Output: A B C D E
  
  // Linked List
  const linkedList = new LinkedList();
  linkedList.insert(1, 0);
  linkedList.insert(2, 1);
  linkedList.insert(3, 2);
  console.log(linkedList.printList()); // Output: 1 2 3
  console.log(linkedList.search(2)); // Output: true
  linkedList.delete(1);
  console.log(linkedList.printList()); // Output: 1 3
  
  console.log("Part 2 Algorithmix Problems: ");
  // Min/Max Stack
  const minMaxStack = new MinMaxStack();
  minMaxStack.push(5);
  minMaxStack.push(3);
  minMaxStack.push(7);
  minMaxStack.push(1);
  console.log(minMaxStack.getMin()); // Output: 1
  console.log(minMaxStack.getMax()); // Output: 7
  minMaxStack.pop();
  console.log(minMaxStack.getMin()); // Output: 3
  console.log(minMaxStack.getMax()); // Output: 7
  
  // Binary Search Tree
  const root = new Node(4);
  root.left = new Node(2);
  root.right = new Node(6);
  root.left.left = new Node(1);
  root.left.right = new Node(3);
  root.right.left = new Node(5);
  root.right.right = new Node(7);
  
  console.log("Is Binary Search Tree:", isBinarySearchTree(root)); // Output: true
  
  // Graph Algorithms
  const graphForShortestPath = new Graph();
  graphForShortestPath.addVertex("A");
  graphForShortestPath.addVertex("B");
  graphForShortestPath.addVertex("C");
  graphForShortestPath.addVertex("D");
  graphForShortestPath.addVertex("E");
  graphForShortestPath.addEdge("A", "B");
  graphForShortestPath.addEdge("B", "C");
  graphForShortestPath.addEdge("B", "D");
  graphForShortestPath.addEdge("C", "E");
  graphForShortestPath.addEdge("D", "E");
  
  console.log(
    "Shortest path (Dijkstra):",
    shortestPathDijkstra(graphForShortestPath, "A", "E")
  ); // Output: 3
  console.log(
    "Shortest path (BFS):",
    shortestPathBFS(graphForShortestPath, "A", "E")
  ); // Output: 3
  
  // Linked List Cycle
  const head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = head.next; // Create a cycle
  console.log(hasCycle(head)); // Output: true
  