document.addEventListener("DOMContentLoaded", function() {
    var faqCards = document.querySelectorAll('.faq-card');

    faqCards.forEach(function(faqCard) {
        var title = faqCard.querySelector('.faq-card-title');
        var text = faqCard.querySelector('.faq-card-text');
        var arrow = title.querySelector('.wrapper.faq-card-title img');

        title.addEventListener('click', function() {
            faqCard.classList.toggle('active')
            toggleArrow(arrow);
        });
    });

    function toggleAccordion(element) {
        if (element.style.maxHeight) {
            element.style.maxHeight = null;
        } else {
            element.style.height = 100 + "px";
        }
    }

    function toggleArrow(arrow) {
        arrow.classList.toggle('rotate');
    }
});