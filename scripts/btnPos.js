const container = document.querySelector('.container');
const btn = document.querySelector('.category-next');

const { right } = container.getBoundingClientRect();
btn.style.position = 'absolute';
btn.style.left = `${right - btn.offsetWidth - 15}px`;
btn.style.top = '...px'; 