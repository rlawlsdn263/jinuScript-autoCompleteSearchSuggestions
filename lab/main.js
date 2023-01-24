const searchWrapper = document.querySelector(".search-input");
const input = searchWrapper.querySelector("input");
const autocomBox = searchWrapper.querySelector(".autocom-box");

//keydown은 인풋 텍스트 창에 입력되기 전에 실행됨
input.addEventListener("keyup", inputHandler);

function inputHandler() {
  let inputValue = input.value;
  let emptyArr = [];
  suggestions.forEach((data) => {
    if (!inputValue) return;
    if (data.toLowerCase().startsWith(inputValue.toLowerCase())) {
      data = `<li>${data}</li>`;
      emptyArr.push(data);
      autocomBox.innerHTML = emptyArr.join("");
      searchWrapper.classList.add("active");
    }
  });

  searchWrapper.addEventListener("click", (e) => {
    let target = e.target;
    if (target.nodeName !== "LI") return;
    else {
      //연관검색어 클릭하면 검색값으로 바꾸기
      input.value = target.textContent;
    }
  });

  //인풋값이 비어있으면 숨기기
  if (inputValue === "") {
    searchWrapper.classList.remove("active");
  }
}

//인풋값이 입력되면 배열의 데이터를 가져와 비교해야됨.
//가져온 값은 `<li>`로 감싸줘야함.

/*   let newArr = [];
  suggestions.forEach((data) => {
    if (!inputValue) return;
    if (data.toLowerCase().startsWith(inputValue.toLowerCase())) {
      let template = `<li>${data}</li>`;
      newArr.push(template);
    }
    autocomBox.insertAdjacentHTML("beforeend", newArr.join(""));
  }); */
