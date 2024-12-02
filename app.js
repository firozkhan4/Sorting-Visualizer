const barsBox = document.getElementById("bars-box");
const rangeInput = document.getElementById("rangeInput");
const newArray = document.getElementById("new-array-btn");
const sortBtn = document.getElementById("sort-btn");
const sortingAlgoInput = document.getElementById("SortingAlgo");

let size = 20;
rangeInput.value = size;
let array = [];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const createArray = () => {
  array = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * 500) + 1);
  }
};

// Function to render bars
const renderBar = (array, active = -1) => {
  barsBox.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement("div");
    bar.className = "box";
    if (i === active) {
      bar.classList.add("active");
    }
    bar.style.width = `${array[i]}px`;

    barsBox.appendChild(bar);
  }
};

createArray();
renderBar(array);

rangeInput.addEventListener("input", (event) => {
  size = parseInt(event.target.value, 10);
  createArray();
  renderBar(array);
});

newArray.addEventListener("click", () => {
  createArray();
  renderBar(array);
});

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

class SortingAlgorithm {
  async bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        renderBar(array, j);
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1);
          await sleep(100);
        }
      }
    }
  }

  async selectionSort() {
    for (let i = 0; i < array.length; i++) {
      let min = i;
      renderBar(array, min);
      await sleep(100);
      for (let j = i + 1; j < array.length; j++) {
        // renderBar(array, j);
        // await sleep(100);

        if (array[j] < array[min]) {
          min = j;
          renderBar(array, min);
          await sleep(100);
        }
      }
      if (min !== i) {
        swap(array, min, i);
        renderBar(array);
        await sleep(500);
      }
    }
  }
}

sortBtn.addEventListener("click", () => {
  const sortingAlgorithm = new SortingAlgorithm();
  const algo = sortingAlgoInput.value;
  if (algo === "bubble-sort") sortingAlgorithm.bubbleSort(array);
  else if (algo === "selection-sort") sortingAlgorithm.selectionSort(array);
});
