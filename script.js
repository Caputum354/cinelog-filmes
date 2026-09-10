const cards = [...document.querySelectorAll('.movie-card')];
const filters = [...document.querySelectorAll('.filter')];
const search = document.querySelector('#search');
const resultCount = document.querySelector('.result-count');
const emptyState = document.querySelector('.empty-state');
const modal = document.querySelector('#movie-modal');
const modalImage = document.querySelector('#modal-image');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalMeta = document.querySelector('#modal-meta');
const modalNumber = document.querySelector('#modal-number');
let activeFilter = 'todos';

function normalize(value) {
  return value.toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function updateCatalog() {
  const query = normalize(search.value.trim());
  let visible = 0;
  cards.forEach((card) => {
    const matchesQuery = !query || normalize(card.dataset.title).includes(query);
    const matchesFilter = activeFilter === 'todos' || card.dataset.genre === activeFilter;
    const isVisible = matchesQuery && matchesFilter;
    card.hidden = !isVisible;
    if (isVisible) visible += 1;
  });
  resultCount.textContent = `${visible} filme${visible === 1 ? '' : 's'}`;
  emptyState.hidden = visible !== 0;
}

filters.forEach((button) => button.addEventListener('click', () => {
  filters.forEach((item) => item.classList.remove('is-active'));
  button.classList.add('is-active');
  activeFilter = button.dataset.filter;
  updateCatalog();
}));
search.addEventListener('input', updateCatalog);

document.querySelectorAll('.details-button').forEach((button) => button.addEventListener('click', (event) => {
  const card = event.currentTarget.closest('.movie-card');
  modalImage.src = card.dataset.image;
  modalImage.alt = `Pôster de ${card.dataset.title}`;
  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  modalMeta.textContent = card.dataset.meta;
  modalNumber.textContent = `FILME ${card.dataset.number}`;
  modal.showModal();
}));

document.querySelectorAll('.modal-close, .modal-dismiss').forEach((button) => button.addEventListener('click', () => modal.close()));
modal.addEventListener('click', (event) => { if (event.target === modal) modal.close(); });
