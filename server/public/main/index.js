const buttons = document.querySelector('.buttons');

const DBtn = document.createElement('button');
buttons.appendChild(DBtn);


buttons.addEventListener('click', (e) => {
  const array = [...buttons.childNodes];
  console.log(e.target);
  const selected = array.filter((el) => {
    return el === e.target;
  });
});



































// const openModalContent = document.querySelector('.modal-contents');
// const openBtn = document.querySelector('.open');
// const email = document.querySelector('.email');

// const modal = document.querySelector('.modal');
// openBtn.addEventListener('click', () => {
//   modal.classList.add('abc');
// });

// modal.addEventListener('click', () => {
//   console.log('modal clicked');
//   modal.classList.remove('abc');
// });

// openModalContent.addEventListener('click', (event) => {
//   console.log('openModalContent clicked');
// })

// email.addEventListener('click', function(event) {
//   console.log(event);
//   event.stopPropagation();
//   console.log('email clicked');
// })




