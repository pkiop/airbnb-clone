const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('.open-modal-btn');
const openModalContent = document.querySelector('.modal-contents');
const buttons = document.querySelector('.buttons');
console.log("buttons : ", buttons);


modal.addEventListener('click', () => {
  console.log("modal clicked");
  modal.classList.remove('active');
});

openModalContent.addEventListener('click', (e) => {
  e.stopPropagation();
})

buttons.addEventListener('click', (e) => {
  console.log("e : ", e.path[1]);
  console.log("e : ", e.target.className);
})

console.log('modal : ', modal);

