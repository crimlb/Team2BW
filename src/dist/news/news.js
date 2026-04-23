

function filtraCategorie(category) {
  const items = document.querySelectorAll(".event-card, .article-card");
  const buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(btn => btn.classList.remove('active'));

  const activeBtn = document.querySelector(`[data-filter="${category}"]`);
  if (activeBtn) activeBtn.classList.add('active');

  items.forEach(item => {
    const itemCategory = item.dataset.category?.trim().toLowerCase();


      
    if (category === "tutti" || itemCategory === category.toLowerCase()) {
      item.classList.add('d-block');
      item.classList.remove('d-none')
      console.log(item)
    } else {
      item.classList.add('d-none');
      item.classList.remove('d-block');
    }
  });
}