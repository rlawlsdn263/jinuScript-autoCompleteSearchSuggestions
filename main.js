const input = document.querySelector(".autoSearch__input");
const result = document.querySelector(".result");

const searchArray = ["우왁굳", "엔젤님", "메시"];

let results;

function createSearchTemplate(item) {
  return `
    <div class="result__block">
      <span class="result__text">${item}</span>
    </div>
  `;
}

function preventDuplicate(array) {
  let newArr = [...array];
  newArr.forEach((item) => {
    if (newArr.includes(item)) return;
  });
}

function renderSearchTemplate(item) {
  result.insertAdjacentHTML("beforeend", createSearchTemplate(item));
  results = document.querySelectorAll(".result__block");
  preventDuplicate(results);
  console.log(results);
}

/* function removeSearchTemplate(item) {
  const searchResult = document.querySelector(`)
  item.remove();
} */

function checkSearchResult(value) {
  if (!value) return;
  searchArray.forEach((item) => {
    if (item.includes(value)) {
      renderSearchTemplate(item);
    }
  });
}

input.addEventListener("input", (e) => {
  let inputValue = input.value;
  console.log(inputValue);
  checkSearchResult(inputValue);
});

/* removeSearchResult() {

} */
