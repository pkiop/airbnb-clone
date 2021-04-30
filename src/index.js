const openModalContent = document.querySelector('.modal-contents');

const modal = document.querySelector('.modal');
modal.addEventListener('click', () => {
  modal.classList.remove('abc');
});

openModalContent.addEventListener('click', (e) => {
  e.stopPropagation();
})


