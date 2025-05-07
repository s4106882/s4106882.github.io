document.addEventListener('DOMContentLoaded', function() {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            link.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            
            // Update buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Update content
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById(targetTab).classList.add('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Typing animation
    const text = "hi rudy here :wave:";
    const finalText = "hi rudy here 👋";
    const typingText = document.querySelector('.typing-text');
    let currentText = "";
    let isDeleting = false;
    let isMistake = false;
    let isCorrecting = false;
    let isEntering = false;

    function type() {
        if (!isDeleting && !isMistake && !isCorrecting && !isEntering) {
            // Normal typing
            if (currentText.length < 14) {
                currentText = text.substring(0, currentText.length + 1);
                typingText.textContent = currentText;
                setTimeout(type, 100);
            } else {
                // Start mistake
                isMistake = true;
                currentText += ":wav";
                typingText.textContent = currentText;
                setTimeout(type, 1000);
            }
        } else if (isMistake) {
            // Start deleting mistake
            isMistake = false;
            isDeleting = true;
            setTimeout(type, 500);
        } else if (isDeleting) {
            // Delete mistake
            if (currentText.length > 14) {
                currentText = currentText.substring(0, currentText.length - 1);
                typingText.textContent = currentText;
                setTimeout(type, 50);
            } else {
                isDeleting = false;
                isCorrecting = true;
                setTimeout(type, 500);
            }
        } else if (isCorrecting) {
            // Type correct emoji text
            currentText = text;
            typingText.textContent = currentText;
            isCorrecting = false;
            isEntering = true;
            setTimeout(type, 1000);
        } else if (isEntering) {
            // Simulate enter key and show actual emoji
            currentText = finalText;
            typingText.textContent = currentText;
            isEntering = false;
        }
    }

    // Start typing animation
    setTimeout(type, 1000);
});
