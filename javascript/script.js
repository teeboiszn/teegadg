
const searchInput = document.getElementById('searchInput');
const clearSearch = document.getElementById('clearSearch');

searchInput.addEventListener('input', () => {
  clearSearch.classList.toggle('hidden', searchInput.value.length === 0);
});

clearSearch.addEventListener('click', () => {
  searchInput.value = '';
  searchInput.focus();
  clearSearch.classList.add('hidden');
});


const accountToggle = document.getElementById('accountToggle');
const accountMenu = document.getElementById('accountMenu');

accountToggle.addEventListener('click', () => {
  accountMenu.classList.toggle('hidden');
});


document.addEventListener('click', (e) => {
  const clickedToggle = accountToggle.contains(e.target);
  const clickedMenu = accountMenu.contains(e.target);
  if (!clickedToggle && !clickedMenu) {
    accountMenu.classList.add('hidden');
  }
});
