const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vechiles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to became Freelancer",
  "How to became Web Designer",
  "How to start Gaming Channel",
  "How to start YouTube Channel",
  "What does HTML stands for?",
  "What does CSS stands for?",
];

inputBox.addEventListener("keyup", (e) => {
  let userData = e.target.value; //유저가 입력한 값
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      //유저 입력값으로 시작하는 문자열 비교
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });
    console.log(emptyArray);
    searchWrapper.classList.add("active"); //autocomplete 보기
    showSuggestions(emptyArray);
    let allList = suggBox.querySelectorAll("li");
    //클릭이벤트 부여하기
    allList.forEach((item) => {
      item.addEventListener("click", () => {
        select(item);
      });
    });
  } else {
    searchWrapper.classList.remove("active"); //autocomplete 숨기기
  }
});

function select(element) {
  let selectUserData = element.textContent;
  inputBox.value = selectUserData; //클릭한 검색어 input.value
  searchWrapper.classList.remove("active"); //검색창 숨기기
}

//검색창 X HTML 삭제;
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    //입력값 등장
    userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    listData = list.join("");
  }
  suggBox.innerHTML = listData;
}
