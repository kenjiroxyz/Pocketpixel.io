// Function to open the modal and show the clicked image
function openModal(src) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("img01");
    
    modal.style.display = "block";
    modalImg.src = src;
    
    // Prevent scrolling behind the modal
    document.body.style.overflow = "hidden";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    
    // Re-enable scrolling
    document.body.style.overflow = "auto";
}

// Close modal if user presses "Escape" key
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});