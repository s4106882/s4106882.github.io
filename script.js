document.addEventListener('DOMContentLoaded', () => {
    // Navigation handling
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.sidebar-section li');
    const activityIcons = document.querySelectorAll('.activity-icon');
    const tabs = document.querySelectorAll('.tab');

    // Function to show a section
    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.remove('active');
            if (section.id === sectionId) {
                section.classList.add('active');
            }
        });
    }

    // Function to update active states
    function updateActiveStates(element, elements) {
        elements.forEach(el => el.classList.remove('active'));
        element.classList.add('active');
    }

    // Sidebar navigation
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.textContent.toLowerCase();
            showSection(sectionId);
            updateActiveStates(item, navItems);
        });
    });

    // Activity bar icons
    activityIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const sectionId = icon.getAttribute('title').toLowerCase();
            showSection(sectionId);
            updateActiveStates(icon, activityIcons);
        });
    });

    // Tab navigation
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.textContent.toLowerCase();
            showSection(sectionId);
            updateActiveStates(tab, tabs);
        });
    });

    // Terminal typing animation
    const terminalTexts = document.querySelectorAll('.typing-text');
    terminalTexts.forEach(text => {
        const content = text.textContent;
        text.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < content.length) {
                text.textContent += content.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
    });

    // Smooth scrolling for navigation
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
}); 