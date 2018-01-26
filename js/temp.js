
const winner1Screen = function () {
  $('#win').addClass('winOverlay');
  $('.winner1text').css("display", "inline-block");
  $('.resetButton').css("display", "inline-block");
  if (localStorage.winner1Screen) {
    localStorage.winner1Screen = Number(localStorage.winner1Screen) + 1;
} else {
    localStorage.winner1Screen = 1;
}
$('#resultPizza').css("display", "inline-block");
document.getElementById("resultPizza").innerHTML = "Total Wins: " +
localStorage.winner1Screen;
  resetGame();
}
