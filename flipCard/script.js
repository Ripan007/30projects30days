const card = document.querySelector(".card__inner");
card.addEventListener("click", function () {
  card.cardList.toggle("is-flipped");
});
