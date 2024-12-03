import algorithmDescriptions from "./algorithmInfo.js";

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

  async selectionSort(array) {
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

  async insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      const key = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > key) {
        array[j + 1] = array[j];
        renderBar(array, j);
        await sleep(100);
        j--;
      }
      array[j + 1] = key;
      renderBar(array, key);
      await sleep(100);
    }
  }

  async mergeSort(array) {
    await this.sort(array, 0, array.length - 1);
  }

  async sort(array, l = 0, h = array.length - 1) {
    if (l < h) {
      const m = l + Math.floor((h - l) / 2);
      await this.sort(array, l, m);
      await this.sort(array, m + 1, h);

      await this.merge(array, l, m, h);
    }
  }

  async merge(array, l, m, h) {
    const temp = [];
    let i = l;
    let j = m + 1;

    while (i <= m && j <= h) {
      if (array[i] < array[j]) {
        temp.push(array[i]);
        i++;
      } else {
        temp.push(array[j]);
        j++;
      }
    }

    while (i <= m) temp.push(array[i++]);

    while (j <= h) temp.push(array[j++]);

    for (let k = 0; k < temp.length; k++) {
      array[k + l] = temp[k];
      renderBar(array, l + k);
      await sleep(100);
    }
  }
}

sortBtn.addEventListener("click", () => {
  const sortingAlgorithm = new SortingAlgorithm();
  const algo = sortingAlgoInput.value;
  if (algo === "bubble-sort") sortingAlgorithm.bubbleSort(array);
  else if (algo === "selection-sort") sortingAlgorithm.selectionSort(array);
  else if (algo === "insertion-sort") sortingAlgorithm.insertionSort(array);
  else if (algo === "merge-sort") sortingAlgorithm.mergeSort(array);
  else barsBox.innerHTML = '<p class="coming-soon"> Coming Soon.</p>';
});

document.addEventListener("DOMContentLoaded", () => {
  const algoInfoBtn = document.getElementById("algo-info-btn");
  const algoInfoModal = document.getElementById("algo-info-modal");
  const closeModalBtn = document.getElementById("close-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const sortingAlgoSelect = document.getElementById("SortingAlgo");

  algoInfoBtn.addEventListener("click", () => {
    const selectedAlgo = sortingAlgoSelect.value;
    modalTitle.textContent =
      sortingAlgoSelect.options[sortingAlgoSelect.selectedIndex].text;
    modalDescription.textContent =
      algorithmDescriptions[selectedAlgo] ||
      "Information about this algorithm is coming soon.";
    algoInfoModal.style.display = "block";
  });

  closeModalBtn.addEventListener("click", () => {
    algoInfoModal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === algoInfoModal) {
      algoInfoModal.style.display = "none";
    }
  });
});
