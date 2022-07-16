let playGame = confirm("shall we play rock, paper, or scissors?");
if (playGame == false) alert("maybe next time then");
else {
  let playerChoice = prompt("choose between rock paper or scissor");
  if (playerChoice == null)
    alert("seems you changed your mind? next time then");
  else {
    let player = playerChoice.trim().toLowerCase();//*the trim() method remove all extra spaces before and after the string
    if (player !== "rock" && player !== "paper" && player !== "scissor") {
      playerChoice = prompt(
        "You must choose only between rock paper and scissor"
      );
      player = playerChoice.trim().toLowerCase();

      let computerChoice = Math.floor(Math.random() * 3 + 1); // generate a random number between 1 and 3
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";
      let score =
        (player == "rock" && (computer == "paper" || computer == "scissor")) ||
        (player == "paper" && computer == "scissor")
          ? "Well done. You wins"
          : (computer == "rock" &&
              (player == "paper" || player == "scissor")) ||
            (computer == "paper" && player == "scissor")
          ? "Computer wins"
          : "tie game";
      let result = `Player:${player}\n Computer:${computer}\n ${score}`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("See you later");
    } else {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "rock"
          : computerChoice === 2
          ? "paper"
          : "scissor";
      let score =
        (player == "rock" && (computer == "paper" || computer == "scissor")) ||
        (player == "paper" && computer == "scissor")
          ? "Well done. You wins"
          : (computer == "rock" &&
              (player == "paper" || player == "scissor")) ||
            (computer == "paper" && player == "scissor")
          ? "Computer wins"
          : "tie game";
      let result = `Player:${player}\n Computer:${computer}\n ${score}`;
      alert(result);
      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("See you later");//location.reload(); permits to reload the page automatically
    }
  }
}
