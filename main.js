const input = document.querySelector(".autoSearch__input");
const result = document.querySelector(".result");

const searchArray = ["우왁굳", "엔젤님", "메시"];

function createSearchTemplate(item) {
  return `
    <div class="result__block">
      <span class="result__text">${item}</span>
    </div>
  `;
}

function renderSearchTemplate(item) {
  result.insertAdjacentHTML("beforeend", createSearchTemplate(item));
}

/* function removeSearchTemplate(item) {
  const searchResult = document.querySelector(`)
  item.remove();
} */

function checkSearchResult(value) {
  searchArray.forEach((item) => {
    if (item === value) {
      renderSearchTemplate(item);
    }
    /*     else {
      removeSearchTemplate(item);
    } */
  });
}

input.addEventListener("input", (e) => {
  let inputValue = input.value;
  console.log(inputValue);
  checkSearchResult(inputValue);
});
