const arr = ["rock","paper","scissor"];
function getComputerChoice(){
    return arr[Math.floor(Math.random()*arr.length)];
}
console.log(arr[getComputerChoice()]);
const object1 = {rock:"paper",paper:"scissor",scissor:"rock"};
var computer_win_count = 0, player_win_count = 0;
function playRound (playerSelection, computerSelection){
    
    if (playerSelection.localeCompare(computerSelection) == 0) {
        return `Draw`;
    }
    else if (object1[playerSelection].localeCompare(computerSelection) == 0){
        computer_win_count++;
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
    else{
        player_win_count++;
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
}
for (let j = 0; j < 5;j++){
    const playerSelection = prompt("Enter a rock or paper or scissor: ");
    console.log(playerSelection);
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
var message = (computer_win_count == player_win_count) ? "draw": (computer_win_count > player_win_count) ? "You lose! try again":"Amazing you beat it";
console.log(message);