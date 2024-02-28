document.addEventListener('mousemove', function(event) {
    const container = document.querySelector('.container');
    const newBlob = document.createElement('div');
    newBlob.classList.add('new-blob');
    newBlob.style.left = event.clientX + 'px';
    newBlob.style.top = event.clientY + 'px';
    container.appendChild(newBlob);

    setTimeout(() => {
        newBlob.remove();
    }, 1000); // Adjust the duration of the fade-out animation
});
