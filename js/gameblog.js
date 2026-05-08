document.addEventListener('DOMContentLoaded', () => {
    /* --- 1. DARK/LIGHT MODE --- */
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'light') applyLightMode();

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.contains('light-mode') ? applyDarkMode() : applyLightMode();
        });
    }

    function applyLightMode() {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
        const icon = themeToggle?.querySelector('i');
        if (icon) icon.classList.replace('fa-moon', 'fa-sun');
    }

    function applyDarkMode() {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
        const icon = themeToggle?.querySelector('i');
        if (icon) icon.classList.replace('fa-sun', 'fa-moon');
    }

    /* --- 2. LOADER & NAVIGATION --- */
    const loader = document.getElementById('page-loader');
    window.addEventListener('load', () => {
        setTimeout(() => { if(loader) loader.classList.add('loader-hidden'); }, 500);
    });

    const bottomBtn = document.querySelector('.bottom-parallax-container .cta-button');
    const navLinks = document.querySelectorAll('.nav-links a');

    if (bottomBtn) {
        bottomBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => {
                navLinks.forEach(link => {
                    link.classList.add('nav-glow-active');
                    setTimeout(() => link.classList.remove('nav-glow-active'), 1500);
                });
            }, 800);
        });
    }
/* --- THE POCKET PIXELS SMART BRIDGE --- */
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const gameID = params.get('game');

    if (gameID) {
        let checkCount = 0;
        const waitForData = setInterval(() => {
            // Check if articleData and openTips are ready
            if (typeof articleData !== 'undefined' && typeof openTips === 'function') {
                if (articleData[gameID]) {
                    clearInterval(waitForData); // Stop checking
                    openTips(gameID);
                }
            }
            
            // Stop trying after 2 seconds so we don't lag the site
            checkCount++;
            if (checkCount > 20) clearInterval(waitForData); 
        }, 100); // Check every 100ms
    }
});
});