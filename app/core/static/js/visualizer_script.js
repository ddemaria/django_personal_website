// assign container to the data container
const container = document.querySelector(".data-container");

generateBars();

var barArray = [];
// set to store different button types
let buttonSet = new Set([
  "Button1", 
  "Button2", 
  "Button3", 
  "Button4", 
  "Button5", 
  "Button6", 
  "Button7",
  "Button8",
  "Button9",
  "Button10",
  "Button11",
  "Button12",
  "Button13",
  "Button14",
  "Button15",
  "Button16",
  "Button17",
  "Button18",
  "Button19",
  "Button20",
  "Button21",
  "Button22",
  "Button23",
  "Button24",
  "Button25",
  "Button26",
  "Button27",
  "Button28",
  "Button29",
]);

/*
###############################################################################
    Class for bar:
###############################################################################
*/
class Bar {

  constructor(container) {
    this.bar = document.createElement("div");
    this.value = function () {
      return Math.floor(Math.random() * 99) + 1;
    };
    this.init = function() {
      // To create element "div"
      //this.bar = document.createElement("div");
      // To add class "bar" to "div"
      this.bar.classList.add("bar");
      // Provide height to the bar
      this.bar.style.height = `${this.value}%`;  
      // Translate the bar towards positive X axis 
      this.bar.style.transform = `translateX(${parseInt(getComputedStyle(container).width)/101*i}px)`;
      // To create element "label"
      const barLabel = document.createElement("label");
      // To add class "bar_id" to "label"
      barLabel.classList.add("bar_id");
      // Assign value to "label"
      barLabel.innerHTML = this.value;
      // Append "Label" to "div"
      this.bar.appendChild(barLabel);
      // Append "div" to "data-container div"
      container.appendChild(this.bar);
    };
  }

  getHeight() {
    return this.bar.style.height;
  }

  getInnerText() {
    return this.bar.childNodes[0].innerText;
  }

  setHeight(height) {
    this.bar.style.height = `${height}%`;
  }

  setInnerText(innerText) {
    this.bar.childNodes[0].innerText = innerText;
  }

}

/*
###############################################################################
    Helper Functions:
###############################################################################
*/

function resizeGraph() {
  const bars = container.getElementsByTagName("div")
  for (let i = 0; i < bars.length; i += 1) {
    bars[i].style.transform = `translatex(${parseInt(getComputedStyle(container).width)/101*i}px)`;
  }
}


// function to generate bars
function generateBars(num = 100) {
    
  //for loop to generate 20 bars
  for (let i = 0; i < num; i += 1) {
  
    // To generate random values from 1 to 100
    const value = Math.floor(Math.random() * 99) + 1; 
      
    // To create element "div"
    const bar = document.createElement("div");
  
    // To add class "bar" to "div"
    bar.classList.add("bar");
  
    // Provide height to the bar
    bar.style.height = `${value}%`;  

    // Translate the bar towards positive X axis 
    bar.style.transform = `translateX(${parseInt(getComputedStyle(container).width)/101*i}px)`;
    
    // To create element "label"
    const barLabel = document.createElement("label");
  
    // To add class "bar_id" to "label"
    barLabel.classList.add("bar_id");
  
    // Assign value to "label"
    barLabel.innerHTML = value;
      
    // Append "Label" to "div"
    bar.appendChild(barLabel);
  
    // Append "div" to "data-container div"
    container.appendChild(bar);
  }
}
  
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
  console.log("test test")  
}

function generateBarGraph()
{
  window.location.reload();
}

/*
###############################################################################
    Sorting Algorithm Functions:
###############################################################################
*/

function swap(arr, i, j) {
  var temp1 = arr[i].style.height;
  var temp2 = arr[i].childNodes[0].innerText;
  arr[i].style.height = arr[j].style.height;
  arr[i].childNodes[0].innerText = arr[j].childNodes[0].innerText;
  arr[j].style.height = temp1;
  arr[j].childNodes[0].innerText = temp2;
}

// asynchronous function to perform "Selection Sort"
async function SelectionSort() {
  let bars = document.querySelectorAll(".bar");
  // Assign 0 to min_idx
  var min_idx = 0;
  for (var i = 0; i < bars.length; i += 1) {
  
    // Assign i to min_idx
    min_idx = i;
  
    // Provide darkblue color to the ith bar
    bars[i].style.backgroundColor = "darkblue";
    for (var j = i + 1; j < bars.length; j += 1) {
  
      // Provide red color to the jth bar
      bars[j].style.backgroundColor = "red";
        
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
          bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
        }
        min_idx = j;
      } else {
  
        // Provide skyblue color to the jth bar
        bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
      }
    }
  
    // To swap ith and (min_idx)th bar
    var temp1 = bars[min_idx].style.height;
    var temp2 = bars[min_idx].childNodes[0].innerText;
    bars[min_idx].style.height = bars[i].style.height;
    bars[i].style.height = temp1;
    bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
    bars[i].childNodes[0].innerText = temp2;
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 1)
    );
  
    // Provide skyblue color to the (min-idx)th bar
    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
  
    // Provide lightgreen color to the ith bar
    bars[i].style.backgroundColor = " rgb(49, 226, 13)";
  }

  enableButtons();
}

// asynchronous function to perform "Bubble Sort"
async function BubbleSort() {
  let bars = document.querySelectorAll(".bar");
  for (var j = 0; j < bars.length; j += 1) {
    for (var i = 0; i < bars.length-1; i += 1) {
      // To store the integer value of jth bar to var1 
      var val1 = parseInt(bars[i].childNodes[0].innerHTML);
      // To store the integer value of jth bar to var1 
      var val2 = parseInt(bars[i+1].childNodes[0].innerHTML);
      // To pause the execution of code for 10 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1)
      );
      // Compare val1 & val2
      if (val2 < val1) {
        // To swap ith and (min_idx)th bar
        var temp1 = bars[i+1].style.height;
        var temp2 = bars[i+1].childNodes[0].innerText;
        bars[i+1].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[i+1].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;
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
      var temp1 = bars[j].style.height;
      var temp2 = bars[j].childNodes[0].innerText;
      bars[j].style.height = bars[j-1].style.height;
      bars[j-1].style.height = temp1;
      bars[j].childNodes[0].innerText = bars[j-1].childNodes[0].innerText;
      bars[j-1].childNodes[0].innerText = temp2;
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

  function swap(arr, i, j) {
    var temp1 = arr[i].style.height;
    var temp2 = arr[i].childNodes[0].innerText;
    arr[i].style.height = arr[j].style.height;
    arr[i].childNodes[0].innerText = arr[j].childNodes[0].innerText;
    arr[j].style.height = temp1;
    arr[j].childNodes[0].innerText = temp2;
  }

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