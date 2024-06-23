/*
###############################################################################
SETTING VARIABLES
###############################################################################
*/
const container = document.querySelector(".data-container");
const lightGreenRGBString = " rgb(49, 226, 13)";
const lightBlueRGBString = " rgb(24, 190, 255)";
const darkBlueRGBString = " rgb(0, 0, 139)";
const redRGBString = " rgb(255, 0, 0)";
let isCancelled = false;
var barArray = [];

/*
###############################################################################
BUTTON FUNCTIONALITY
###############################################################################
*/

// set to store different button types
let buttonSet = new Set([
  "btnGenerateNewGraph", 
  "btnSelectionSort", 
  "btnBubbleSort", 
  "btnInsertionSort", 
  "btnMergeSort", 
  "btnQuickSort", 
  "btnHeapSort",
  "btnCountingSort",
  "btnRadixSort",
  "btnBucketSort",
  "btnBingoSort",
  "btnShellSort",
  "btnTimSort",
  "btnCombSort",
  "btnPigeonholeSort",
  "btnCycleSort",
  "btnCoctailSort",
  "btnStrandSort",
  "btnBitonicSort",
  "btnPancakeSort",
  "btnPermutationSort",
  "btnGnomeSort",
  "btnSleepSort",
  "btnStructureSort",
  "btnStoogeSort",
  "btnTagSort",
  "btnTreeSort",
  "btnBrickSort",
  "btn3WayMergeSort",
]);

// function to disable the button
function disableButtons()
{
  for (const buttonId of buttonSet) {
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.backgroundColor = "#d8b6ff";
  } 
}

// function to disable the button
function enableButtons()
{
  for (const buttonId of buttonSet) {
    document.getElementById(buttonId).disabled = false;
    document.getElementById(buttonId).style.backgroundColor = "#6f459e";
  }
}

/*
###############################################################################
GRAPH FUNCTIONALITY
###############################################################################
*/

// function to generate bars
function generateBars(num = 100) {
  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
    // Generate random number from 1-100
    const value = Math.floor(Math.random() * 99) + 1; 
    // Create div
    const bar = document.createElement("div");
    // Set class of the div to bar
    bar.classList.add("bar");
    // Set height for bar class
    bar.style.height = `${value}%`;  
    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${parseInt(getComputedStyle(container).width)/101*i}px)`;
    // Create a label element
    const barLabel = document.createElement("label");
    // Set class of label to bar_id
    barLabel.classList.add("bar_id");
    // Assign a value to the label
    barLabel.innerHTML = value;
    // Add label to the bar div
    bar.appendChild(barLabel);
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}

function resizeGraph() {
  const bars = container.getElementsByTagName("div")
  for (let i = 0; i < bars.length; i += 1) {
    bars[i].style.transform = `translatex(${parseInt(getComputedStyle(container).width)/101*i}px)`;
  }
}

function generateBarGraph()
{
  window.location.reload();
}

/*
###############################################################################
HELPERS
###############################################################################
*/

function cancel()
{
  isCancelled = true;
}


function swap(arr, i, j) {
  var temp1 = arr[i].style.height;
  var temp2 = arr[i].childNodes[0].innerText;
  arr[i].style.height = arr[j].style.height;
  arr[i].childNodes[0].innerText = arr[j].childNodes[0].innerText;
  arr[j].style.height = temp1;
  arr[j].childNodes[0].innerText = temp2;
}

/*
###############################################################################
SORT FUNCTIONS
###############################################################################
*/

// asynchronous function to perform "Selection Sort"
async function SelectionSort() {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = darkBlueRGBString;
    for (var j = i + 1; j < bars.length; j += 1) {
      if (isCancelled) {
        enableButtons();
        return; // Exit the function early if cancellation is requested
      }
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = redRGBString;
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1)
      );
  
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide skyblue color to the (min-idx)th bar
          bars[min_idx].style.backgroundColor = lightBlueRGBString;
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = lightBlueRGBString;
      }
    }
  
    // To swap ith and (min_idx)th bar
    swap(bars, min_idx, i)
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1)
    );
  
    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = lightBlueRGBString;
  
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = lightGreenRGBString;
  }

  enableButtons();
}

// asynchronous function to perform "Bubble Sort"
async function BubbleSort() {
  let bars = document.querySelectorAll(".bar");
  for (var j = 0; j < bars.length; j += 1) {
    for (var i = 0; i < bars.length-1; i += 1) {
      var barValueA = parseInt(bars[i].childNodes[0].innerHTML);
      var barValueB = parseInt(bars[i+1].childNodes[0].innerHTML);
      // To pause the execution of code for 10 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1)
      );
      // Compare val1 & val2
      if (barValueB < barValueA) {
        // To swap ith and (min_idx)th bar
        swap(bars, i+1, i);
      }
    }
  }
  enableButtons();
}

// asynchronous function to perform "Insertion Sort"
async function InsertionSort() {
  let bars = document.querySelectorAll(".bar");
  for (var i = 1; i < bars.length; i += 1) {
    var j = i;
    // To store the integer value of jth bar to var1 
    var val1 = parseInt(bars[j-1].childNodes[0].innerHTML);
    // To store the integer value of jth bar to var1 
    var val2 = parseInt(bars[j].childNodes[0].innerHTML);
    while (j > 0 && val1 > val2) {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1)
      );
      // To swap ith and (min_idx)th bar
      swap(bars, j, j-1);
      j -= 1;
      if (j > 0) {
        // To store the integer value of jth bar to var1 
        val1 = parseInt(bars[j-1].childNodes[0].innerHTML);
        // To store the integer value of jth bar to var1 
        val2 = parseInt(bars[j].childNodes[0].innerHTML);
      }
    }
  }
  enableButtons();
}

// asynchronous function to perform "Merge Sort"
function MergeSort() {
  // Define a global variable to hold the sorted array
  let sortedArray = [];
  // Get the array to sort from the HTML bar graph
  const bars = document.getElementsByClassName("bar");
  // Convert the HTML bar graph to an array of numbers
  const arrayToSort = Array.from(bars).map(bar => parseInt(bar.style.height));
  // Call the merge sort algorithm on the array
  mergeSort(arrayToSort, 0, arrayToSort.length - 1);
  // Animate the sorted array on the HTML bar graph
  animateSort(sortedArray);
  enableButtons();

  // Define the merge sort algorithm
  function mergeSort(array, start, end) {
    if (start < end) {
      const middle = Math.floor((start + end) / 2);
      mergeSort(array, start, middle);
      mergeSort(array, middle + 1, end);
      merge(array, start, middle, end);
    }
  }

  // Define the merge function to merge two sorted arrays
  function merge(array, start, middle, end) {
    const leftArray = array.slice(start, middle + 1);
    const rightArray = array.slice(middle + 1, end + 1);
    let leftIndex = 0;
    let rightIndex = 0;
    let arrayIndex = start;
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex] <= rightArray[rightIndex]) {
        array[arrayIndex] = leftArray[leftIndex];
        leftIndex++;
      } else {
        array[arrayIndex] = rightArray[rightIndex];
        rightIndex++;
      }
      arrayIndex++;
    }
    while (leftIndex < leftArray.length) {
      array[arrayIndex] = leftArray[leftIndex];
      leftIndex++;
      arrayIndex++;
    }
    while (rightIndex < rightArray.length) {
      array[arrayIndex] = rightArray[rightIndex];
      rightIndex++;
      arrayIndex++;
    }
    // Save the sorted array in the global variable
    sortedArray = array.slice();
  }

  // Define a function to animate the sorted array on the HTML bar graph
  function animateSort(array) {
    const bars = document.getElementsByClassName("bar");
    for (let i = 0; i < array.length; i++) {
      const heightPercentage = (array[i] / 100) * 100;
      setTimeout(() => {
        bars[i].style.height = `${heightPercentage}%`;
      }, i * 50);
    }
    return;
  }
}

// asynchronous function to perform "Quick Sort"
//TODO fix enable buttons has something to do with recursion
function QuickSort() {

  let bars = document.querySelectorAll(".bar");
  var barsArr = Array.prototype.slice.call(bars);
  var length = barsArr.length;
  quicksort(barsArr, 0, length-1);
  enableButtons();

  function partition(arr, low, high) {
    // To store the integer value of jth bar to var1 
    var pivot = parseInt(arr[high].childNodes[0].innerHTML);
    //arr[pivot].style.backgroundColor = "red";
    var smallIndex = (low - 1);
  
    for (var i = low; i <= high-1; i++) {
      var comparer = parseInt(arr[i].childNodes[0].innerHTML);
      if (comparer < pivot) {
        smallIndex++;
        swap(arr, smallIndex, i);
      }
    }
    swap(arr, smallIndex+1, high);
    return (smallIndex+1);
  }

  function quicksort(arr, low, high) {
    if (low < high) {
      var partitionIndex = partition(arr, low, high);
      quicksort(arr, low, partitionIndex-1);
      quicksort(arr, partitionIndex+1, high);
    }
  }
}

// asynchronous function to perform "Heap Sort"
async function HeapSort() {

}

// asynchronous function to perform "Counting Sort"
function CountingSort() {
}

// asynchronous function to perform "Radix Sort"
function RadixSort() {
}

// asynchronous function to perform "Bucket Sort"
function BucketSort() {
}

// asynchronous function to perform "Bingo Sort"
function BingoSort() {
}

// asynchronous function to perform "Shell Sort"
function ShellSort() {
}

// asynchronous function to perform "Tim Sort"
function TimSort() {
}

// asynchronous function to perform "Comb Sort"
function CombSort() {
}

// asynchronous function to perform "Pigeonhole Sort"
function PigeonholeSort() {
}

// asynchronous function to perform "Cycle Sort"
function CycleSort() {
}

// asynchronous function to perform "Coctail Sort"
function CoctailSort() {
}

// asynchronous function to perform "Strand Sort"
function StrandSort() {
}

// asynchronous function to perform "Bitonic Sort"
function BitonicSort() {
}

// asynchronous function to perform "Pancake Sort"
function PancakeSort() {
}

// asynchronous function to perform "Permutation Sort"
function PermutationSort() {
}

// asynchronous function to perform "Gnome Sort"
function GnomeSort() {
}

// asynchronous function to perform "Sleep Sort"
function SleepSort() {
}

// asynchronous function to perform "Structure Sort"
function StructureSort() {
}

// asynchronous function to perform "Stooge Sort"
function StoogeSort() {
}

// asynchronous function to perform "Tag Sort"
function TagSort() {
}

// asynchronous function to perform "Tree Sort"
function TreeSort() {
}

// asynchronous function to perform "Brick Sort"
function BrickSort() {
}

// asynchronous function to perform "3-Way Merge Sort"
function ThreeWayMergeSort() {
}


/*
###############################################################################
    Path Finding Algorithm Functions:
###############################################################################
*/