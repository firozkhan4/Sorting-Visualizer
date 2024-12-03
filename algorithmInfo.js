// algorithmInfo.js

const algorithmDescriptions = {
  "bubble-sort":
    "Bubble Sort: Repeatedly compares adjacent elements and swaps them if they are in the wrong order. Time Complexity: O(n^2). Space Complexity: O(1).",
  "selection-sort":
    "Selection Sort: Selects the smallest element in each pass and places it in the sorted portion. Time Complexity: O(n^2). Space Complexity: O(1).",
  "insertion-sort":
    "Insertion Sort: Builds the sorted array one item at a time, inserting elements in their correct position. Time Complexity: O(n^2). Space Complexity: O(1).",
  "merge-sort":
    "Merge Sort: A divide-and-conquer algorithm that splits the array, sorts subarrays, and merges them. Time Complexity: O(n log n). Space Complexity: O(n).",
  "quick-sort":
    "Quick Sort: A divide-and-conquer algorithm that uses a pivot to partition the array. Time Complexity: O(n log n) on average. Space Complexity: O(log n).",
  "heap-sort":
    "Heap Sort: Uses a binary heap to repeatedly extract the maximum (or minimum) element. Time Complexity: O(n log n). Space Complexity: O(1).",
  "shell-sort":
    "Shell Sort: Generalized version of insertion sort that allows swapping distant elements. Time Complexity: O(n^(3/2)). Space Complexity: O(1).",
  "tim-sort":
    "Tim Sort: A hybrid algorithm derived from Merge Sort and Insertion Sort. Time Complexity: O(n log n). Space Complexity: O(n).",
  "tree-sort":
    "Tree Sort: Constructs a binary search tree and performs an in-order traversal. Time Complexity: O(n log n). Space Complexity: O(n).",
  "smooth-sort":
    "Smooth Sort: A comparison-based sorting algorithm that improves on Heap Sort. Time Complexity: O(n log n). Space Complexity: O(1).",
  "counting-sort":
    "Counting Sort: Non-comparison-based sort that counts occurrences of elements. Time Complexity: O(n + k). Space Complexity: O(n + k).",
  "radix-sort":
    "Radix Sort: Non-comparison-based sort that processes digits individually. Time Complexity: O(nk). Space Complexity: O(n + k).",
  "bucket-sort":
    "Bucket Sort: Distributes elements into buckets and sorts each bucket. Time Complexity: O(n + k). Space Complexity: O(n + k).",
  "pigeonhole-sort":
    "Pigeonhole Sort: Counts occurrences and positions elements based on a range. Time Complexity: O(n + k). Space Complexity: O(n + k).",
  "intro-sort":
    "Intro Sort: Hybrid of Quick Sort and Heap Sort, switching strategies when necessary. Time Complexity: O(n log n). Space Complexity: O(log n).",
  "cocktail-sort":
    "Cocktail Shaker Sort: A variation of Bubble Sort that sorts in both directions alternately. Time Complexity: O(n^2). Space Complexity: O(1).",
  "gnome-sort":
    "Gnome Sort: Similar to Insertion Sort, but with a simpler implementation. Time Complexity: O(n^2). Space Complexity: O(1).",
  "odd-even-sort":
    "Odd-Even Sort: Compares and swaps adjacent elements alternately in odd and even passes. Time Complexity: O(n^2). Space Complexity: O(1).",
  "bitonic-sort":
    "Bitonic Sort: A parallel algorithm for sorting based on Bitonic Sequences. Time Complexity: O(log^2 n). Space Complexity: O(n).",
  "bogo-sort":
    "Bogo Sort: Randomly shuffles the array until it is sorted. Time Complexity: O(n!). Space Complexity: O(1).",
  "comb-sort":
    "Comb Sort: Improves Bubble Sort by eliminating small values at the end early. Time Complexity: O(n^2). Space Complexity: O(1).",
};

export default algorithmDescriptions;
