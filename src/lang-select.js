function changeLanguage(language) {
    // Get all elements with the data-lang attribute
    const elements = document.querySelectorAll('[data-lang]');

    // Hide all language elements
    elements.forEach(function(element) {
        element.style.display = 'none';
    });

    // Show elements that match the selected language
    elements.forEach(function(element) {
        if (element.getAttribute('data-lang') === language) {
            element.style.display = 'block';
        }
    });
}