// assign container to the data container
const container = document.querySelector(".data-container");
// Call "generatebars" function
generatebars();
// set to store different button types
let buttonSet = new Set(["Button1", "Button2", "Button3", "Button4", "Button5", "Button6", "Button7"]);

/*
###############################################################################
    Helper Functions:
      - 'generatebars': generate the graph
      - 'disable': disable button after click
###############################################################################
*/

function resizeGraph() {
  const bars = container.getElementsByTagName("div")
  for (let i = 0; i < bars.length; i += 1) {
    bars[i].style.transform = `translatex(${parseInt(getComputedStyle(container).width)/101*i}px)`;
  }
}


// function to generate bars
function generatebars(num = 100) {
    
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
      - 'SelectionSort':
      - 'BubbleSort':
      - 'InsertionSort':
      - 'MergeSort':
      - 'QuickSort':
      -
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
//TODO neec to fix
function MergeSort() {
  let bars = document.querySelectorAll(".bar");
  var barsArr = Array.prototype.slice.call(bars);
  mergesort(barsArr, 0, barsArr.length-1);
  enableButtons();

  function swap(arr, i, j) {
    var temp1 = arr[i].style.height;
    var temp2 = arr[i].childNodes[0].innerText;
    arr[i].style.height = arr[j].style.height;
    arr[i].childNodes[0].innerText = arr[j].childNodes[0].innerText;
    arr[j].style.height = temp1;
    arr[j].childNodes[0].innerText = temp2;
  }

  function merge(arr, left, mid, right) {

    var leftArrLength = mid - left + 1;
    var rightArrLength = right - mid;

    var leftArray = new Array(leftArrLength);
    var rightArray = new Array(rightArrLength);

    for (var i = 0; i < leftArrLength; i++) {
      leftArray[i] = arr[left+i];
    }
    for (var i = 0; i < rightArrLength; i++) {
      rightArray[i] = arr[mid+1+i];
    }

    // Initial index of left sub array
    var leftSubIndex = 0;

    // Initial index of right sub array
    var rightSubIndex = 0;

    // Initial index of merged sub array
    var mergeSubIndex = 1;

    // While index of each sub array are less than the size
    while (leftSubIndex < leftArrLength && rightSubIndex < rightArrLength) {
      // Get actual values for bar sizes
      var comparer1 = parseInt(leftArray[leftSubIndex].childNodes[0].innerHTML);
      var comparer2 = parseInt(rightArray[rightSubIndex].childNodes[0].innerHTML);
      if (comparer1 <= comparer2) {
        swap(arr, mergeSubIndex, leftSubIndex)
        leftSubIndex++;
      }
      else {
        swap(arr, mergeSubIndex, rightSubIndex)
        rightSubIndex++
      }
      mergeSubIndex++;
    }

    while (leftSubIndex < leftArrLength) {
      swap(arr, mergeSubIndex, leftSubIndex)
      leftSubIndex++;
      mergeSubIndex++;
    }

    while(rightSubIndex < rightArrLength) {
      swap(arr, mergeSubIndex, rightSubIndex)
      rightSubIndex++;
      mergeSubIndex++;
    }

  }

  function mergesort(arr, left, right) {
    if (left >= right) {
      return;
    }
    // Calculate the midpoint of the array
    var mid = left + parseInt((right-1)/2)
    // Use recursion passing the mid as the right
    mergesort(arr, left, mid);
    // Use recusion passing the mid+1 as the left
    mergesort(arr, mid+1, right);
    merge(arr, left, mid, right);
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
//TODO need to fix see console logs
async function HeapSort() {
  let bars = document.querySelectorAll(".bar");
  var barsArr = Array.prototype.slice.call(bars);
  sort(barsArr);
  enableButtons();

  function swap(arr, i, j) {
    var temp1 = arr[i].style.height;
    var temp2 = arr[i].childNodes[0].innerText;
    arr[i].style.height = arr[j].style.height;
    arr[i].childNodes[0].innerText = arr[j].childNodes[0].innerText;
    arr[j].style.height = temp1;
    arr[j].childNodes[0].innerText = temp2;
  }

  function sort(arr) {
    var length = arr.length;

    for(var i=Math.floor(length/2)-1; i >= 0; i--) {
      heapify(arr, length, i);
    }

    for (var i=length-1; i > 0; i--) {
      swap(arr, 0, i);
      heapify(arr, i, 0);
    }
  }

  function heapify(arr, arrSize, arrIndex) {
    var largest = arrIndex;
    var left = 2*arrIndex+1;
    var right = 2*arrIndex+2;

    console.log(arr[left]);
    console.log(arr[largest]);
    console.log(arr[right]);

    var comparerLeft = parseInt(arr[left].childNodes[0].innerHTML);
    var comparerLargest = parseInt(arr[largest].childNodes[0].innerHTML);
    var comparerRight = parseInt(arr[right].childNodes[0].innerHTML);

    if (left < arrSize && comparerLeft > comparerLargest) {
      largest = left;
    }

    comparerLargest = parseInt(arr[largest].childNodes[0].innerHTML);
    if (right < arrSize && comparerRight > comparerLargest) {
      largest = right;
    }

    if (largest != arrIndex) {
      swap(arr, arrIndex, largest);
      heapify(arr, arrSize, largest);
    }

  }

}

// asynchronous function to perform "Counting Sort"
// asynchronous function to perform "Radix Sort"
// asynchronous function to perform "Bucket Sort Sort"
// asynchronous function to perform "Bingo Sort Sort"
// asynchronous function to perform "Shell Sort"
// asynchronous function to perform "Tim Sort"
// asynchronous function to perform "Comb Sort"
// asynchronous function to perform "Pigeonhole Sort"
// asynchronous function to perform "Cycle Sort"
// asynchronous function to perform "Coctail Sort"
// asynchronous function to perform "Strand Sort"
// asynchronous function to perform "Bitonic Sort"
// asynchronous function to perform "Pancake Sort"
// asynchronous function to perform "Permutation Sort"
// asynchronous function to perform "Gnome Sort"
// asynchronous function to perform "Sleep Sort"
// asynchronous function to perform "Structure Sort"
// asynchronous function to perform "Stooge Sort"
// asynchronous function to perform "Tag Sort"
// asynchronous function to perform "Tree Sort"
// asynchronous function to perform "Brick Sort"
// asynchronous function to perform "3-Way Merge Sort"

/*
###############################################################################
    Path Finding Algorithm Functions:
###############################################################################
*/