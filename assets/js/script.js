function toggleAccordion(selector) {
    const clickedItem = document.querySelector(selector);
    const allItems = document.querySelectorAll('.accordion-item');

    allItems.forEach(item => {
        if (item !== clickedItem) {
            item.classList.remove('active');
        }
    });

    clickedItem.classList.toggle('active');
}


function menuIcon() {
    document.querySelector('.menu-list').classList.toggle('show');
    document.querySelector('nav').classList.toggle('activeNavBar');

};
