document.addEventListener('DOMContentLoaded', function () {
    const readMoreButton = document.querySelector('.read-more');
    const bio = document.querySelector('.artist-bio');
    let expanded = false;

    readMoreButton.addEventListener('click', function() {
        if (expanded) {
            bio.classList.remove('expanded');
            readMoreButton.textContent = 'Read more...';
        } else {
            bio.classList.add('expanded');
            readMoreButton.textContent = 'Read less...';
        }
        expanded = !expanded;
    });
});
