let currentIndex = 0;

function showNextImage() {
    const slider = document.querySelector('.slider');
    currentIndex = (currentIndex + 1) % 3;  // Cycle through 3 images
    slider.style.transform = `translateX(-${currentIndex * 30}%)`;
}

// Change image every 3 seconds
setInterval(showNextImage, 5000);
