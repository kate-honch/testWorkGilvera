const openBtn = document.querySelector('.openBtn');
const closeBtn = document.querySelector('.closeBtn');
const list = document.querySelector('.sidebar__list');

openBtn.addEventListener('click', ()=> {
  list.style.display = 'block';
  openBtn.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', ()=> {
  list.style.display = 'none';
  openBtn.style.display = 'block';
  closeBtn.style.display = 'none';
});
