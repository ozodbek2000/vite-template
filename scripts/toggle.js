const categoryList = document.getElementById('category-list');
const nextBtn = document.getElementById('category-next');

nextBtn.addEventListener('click', () => {
    categoryList.scrollBy({
        left: 300,
        behavior: 'smooth'
    });
});