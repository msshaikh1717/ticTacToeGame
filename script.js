let nineBtns = document.querySelectorAll(".eachBtn");
let resetBtn = document.querySelector("#reset");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
let turnX = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

nineBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (turnX === true) {
      btn.innerText = "X";
      turnX = false;
    } else {
      btn.innerText = "O";
      turnX = true;
    }
    btn.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (forEach of nineBtns) {
    forEach.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of nineBtns) {
    box.disabled = false;
    box.innerText = "";
    msgContainer.classList.add("hide");
  }
};

const showWinner = (winner) => {
  msg.innerText = `WINNER is Player${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos0 = nineBtns[pattern[0]].innerText;
    let pos1 = nineBtns[pattern[1]].innerText;
    let pos2 = nineBtns[pattern[2]].innerText;

    if (pos0 !== "" && pos1 !== "" && pos2 !== "") {
      if (pos0 === pos1 && pos0 === pos2) {
        showWinner(pos0);
      }
    }
  }
};

resetBtn.addEventListener("click", () => {
  enableBoxes();
});

newBtn.addEventListener("click", () => {
  enableBoxes();
});
