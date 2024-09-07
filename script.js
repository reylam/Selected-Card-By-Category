const categoryButtons = document.querySelectorAll(".category-list button");
const cards = document.querySelectorAll(".card");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => btn.classList.remove("selected"));

    button.classList.add("selected");

    const selectedCategory = button.id;

    cards.forEach((card) => {
      const cardCategory = card.id.replace("-card", "");

      if (cardCategory === selectedCategory || selectedCategory === "all") {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
