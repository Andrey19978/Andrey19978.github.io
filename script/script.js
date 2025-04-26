document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.heder__list');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('active');
    });
    
    // Закрытие меню при клике на затемненную область
    menu.addEventListener('click', function(e) {
        if(e.target === this) {
            this.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});