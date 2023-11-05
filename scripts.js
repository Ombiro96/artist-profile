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

const saveButton = document.getElementById('save-button');
const heartIcon = saveButton.querySelector('i');

saveButton.addEventListener('click', function() {
    heartIcon.classList.toggle('red-heart');
});

const purchaseButton = document.querySelector('.purchase-button');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');

purchaseButton.addEventListener('click', function() {
    popup.style.display = 'block';
});

closePopup.addEventListener('click', function() {
    popup.style.display = 'none';
});

popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
