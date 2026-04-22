function filtraCategorie(category) {
  const items = document.querySelectorAll(".event-card, .article-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove("active"));

  const activeBtn = document.querySelector(`[data-filter="${category}"]`);
  if (activeBtn) activeBtn.classList.add("active");

  items.forEach(item => {
    const itemCategory = item.dataset.category?.trim().toLowerCase();

    if (category === "tutti" || itemCategory === category.toLowerCase()) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}