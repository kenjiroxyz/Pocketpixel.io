document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.querySelector('.btn-load-more');
    const page1 = document.getElementById('news-page-1');
    const page2 = document.getElementById('news-page-2');

    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // If Page 2 is currently hidden, show it and hide Page 1
        if (page2.classList.contains('hidden')) {
            page1.classList.add('hidden');
            page2.classList.remove('hidden');
            
            // Re-trigger the animation class
            page2.classList.add('fade-in-active');
            
            // Change button text to indicate the user can go back
            loadMoreBtn.innerText = "Go Back";
        } 
        // If Page 2 is already visible, switch back to Page 1
        else {
            page2.classList.add('hidden');
            page1.classList.remove('hidden');
            
            page1.classList.add('fade-in-active');
            
            loadMoreBtn.innerText = "Load More";
        }
    });
});