const attackBtn = document.getElementById("attack");
const defendBtn = document.getElementById("defend");
const runBtn = document.getElementById("run");

let console = document.getElementById("text-out");

let playerHealthOut = document.getElementById("player-health");
let enemyHealthOut = document.getElementById("enemy-health");

let enemyImg = document.getElementById("enemy-img");

let enemyImgSrcs = [
  (src = "chari2.gif"),
  (src = "blast.gif"),
  (src = "gengar.gif"),
  (src = "yveltal.gif"),
  (src = "ray.gif"),
];

enemyImg.src = enemyImgSrcs[Math.floor(Math.random() * enemyImgSrcs.length)];

let playerHealth = 100;
let enemyHealth = 100;

let delay = 1500;

function buttonState(bol) {
  attackBtn.disabled = bol;
  defendBtn.disabled = bol;
  runBtn.disabled = bol;
}

attackBtn.addEventListener("click", () => {
  enemyHealth -= Math.floor(Math.random() * (50 - 0 + 1)) + 0;

  console.textContent = "Magikarp used squirt!";

  enemyAttack(1);
  checkWin();
});

function enemyAttack(multiplier) {
  buttonState(true);

  setTimeout(() => {
    if (enemyHealth > 0) {
      buttonState(false);

      playerHealth -= Math.floor(
        (Math.floor(Math.random() * (50 - 0 + 1)) + 0) * multiplier
      );

      console.textContent = "Enemy used slash!";

      checkWin();
    }
  }, delay);
}

function checkWin() {
  buttonState(true);

  setTimeout(() => {
    buttonState(false);

    if (enemyHealth <= 0) {
      enemyHealth = 0;

      playerHealthOut.textContent = "Player Health: " + playerHealth;
      enemyHealthOut.textContent = "Enemy Health: " + enemyHealth;

      console.textContent = "You defeated the enemy!  Nice one champ!";
      restart();
    } else if (playerHealth <= 0) {
      playerHealth = 0;

      playerHealthOut.textContent = "Player Health: " + playerHealth;
      enemyHealthOut.textContent = "Enemy Health: " + enemyHealth;

      console.textContent = "The enemy has defeated you! Get good loser!";
      restart();
    } else {
      playerHealthOut.textContent = "Player Health: " + playerHealth;
      enemyHealthOut.textContent = "Enemy Health: " + enemyHealth;
    }
  }, delay);
}

function restart() {
  buttonState(true);

  setTimeout(() => {
    buttonState(false);

    playerHealth = 100;
    enemyHealth = 100;
    playerHealth = 100;

    enemyImg.src =
      enemyImgSrcs[Math.floor(Math.random() * enemyImgSrcs.length)];

    console.textContent = "Click a button!";
    enemyHealthOut.textContent = "Enemy Health: " + enemyHealth;
    playerHealthOut.textContent = "Player Health: " + playerHealth;
  }, delay);
}

defendBtn.addEventListener("click", () => {
  enemyAttack(Math.random() * (1 - 0 + 1) + 0);
  console.textContent = "Magikarp used block!";
});

runBtn.addEventListener("click", () => {
  console.textContent =
    "You ran away from the enemy! Unfortunatley, you encounter another one!";
  buttonState(true);

  setTimeout(() => {
    buttonState(false);
    restart();
  }, delay);
});
