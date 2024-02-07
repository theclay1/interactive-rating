let choseCard = document.querySelector(".chose");
let submitCard = document.querySelector(".submit");
let score = document.querySelector("#score");
let scores = document.querySelectorAll(".score");
let btn = document.querySelector("#btn");
document.querySelector("body").addEventListener("click", function (e) {
  let target = e.target;
  let chose;
  if (target.className === "score") {
    chose = target.innerText;
    for (i = 0; i < scores.length; i++) {
      scores[i].style.backgroundColor = "var(--Medium-Grey)";
    }
    target.style.backgroundColor = "var(--main-color)";
    btn.addEventListener("click", () => {
      choseCard.classList.add("nun");
      submitCard.classList.remove("nun");
      score.innerHTML = chose;
    });
  }
});
