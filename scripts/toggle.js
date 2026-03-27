document.querySelectorAll('.category-next').forEach(btn => {
    btn.addEventListener('click', () => {
        const container = btn.closest('.container');
        const list = container.querySelector('.category-list');
        list.scrollBy({ left: 300, behavior: 'smooth' });
    });
});