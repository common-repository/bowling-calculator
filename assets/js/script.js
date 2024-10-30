function resetGame() {
  let removeOrNot = confirm("Your Score will be removed!");
  if (removeOrNot) {
    location.reload();
  }
}