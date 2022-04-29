const userChoices = document.querySelectorAll(".player > button");
const result = document.querySelector(".result ");
const computer = document.querySelector(".computer");
const vs = document.querySelector(".vs")

const computerChoice = () => {
  const list = ["rock", "paper", "scissor"];
  return list[Math.round(Math.random() * 2)];
};

userChoices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    const c = computerChoice();
    const u = e.target.id;
    vs.style.display = 'block'
    computer.style.backgroundImage = `url(ressources/images/${c}.png)`
    // computer.textContent = c;
    if (
      (c == "rock" && u == "scissor") ||
      (c == "paper" && u == "rock") ||
      (c == "scissor" && u == "paper")
    )
      return (result.textContent = "You loose");
    if (
      (u == "rock" && c == "scissor") ||
      (u == "paper" && c == "rock") ||
      (u == "scissor" && c == "paper")
    )
      return (result.textContent = "You Win");
    if (c == u) return (result.textContent = "Egalite");
  });
});
