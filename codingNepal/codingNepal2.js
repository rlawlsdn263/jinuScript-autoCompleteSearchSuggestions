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
  "우왁굳",
  "엔젤",
  "메시",
];

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

inputBox.addEventListener("keyup", (e) => {
  //유저의 입력값
  let userData = e.target.value;
  let emptyArray = [];
  if (userData) {
    //filter()로 유저의 입력값으로 시작하는 데이터가 담긴 배열 반환
    emptyArray = suggestions.filter((data) => {
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });

    //map()으로 배열의 데이터를 HTML 템플릿으로 변환함
    emptyArray = emptyArray.map((data) => {
      return (data = `<li>${data}</li>`);
    });

    //연관검색어를 보여줌
    searchWrapper.classList.add("active");
    showSuggestions(emptyArray);

    //연관검색어에 클릭 이벤트 부여해줌
    suggBox.addEventListener("click", (e) => {
      let target = e.target;
      if (target.nodeName !== "LI") return;
      select(target);
    });
  } else {
    //인풋값이 없다면 연관검색창 숨기기
    searchWrapper.classList.remove("active");
  }
});

function showSuggestions(list) {
  let listData;
  if (!list.length) {
    //일치하는 데이터가 없으면 유저 입력값 반환
    let userValue = inputBox.value;
    listData = `<li>${userValue}</li>`;
  } else {
    //내가 만든 HTML 템플릿 배열을 합쳐버려 추가해주는 거임
    listData = list.join("");
  }
  //검색결과를 HTML 요소로 추가해줌
  suggBox.innerHTML = listData;
}

function select(element) {
  //클릭된 HTML요소의 텍스트가 입력값이 됨
  let selectUserData = element.textContent;
  inputBox.value = selectUserData;
  searchWrapper.classList.remove("active");
}
