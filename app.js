document.addEventListener('DOMContentLoaded', function() {
    var menuIcon = document.getElementsByClassName('menuIcon')[0]; // Access the first element
    var sidebar = document.getElementsByClassName('sidebar')[0];
    menuIcon.addEventListener('click', function() {
        menuIcon.classList.toggle('open');
        sidebar.classList.toggle('open');

        // Check if the menuIcon is in the 'open' state
        if (menuIcon.classList.contains('open')) {
            menuIcon.setAttribute('src', "assets/x.svg"); // Set X icon when open
            menuIcon.setAttribute('toggle', "close");
            sidebar.setAttribute('toggle', "close");
        } else {
            menuIcon.setAttribute('src', "assets/menu.svg"); // Set Menu icon when closed
            menuIcon.setAttribute('toggle', "open");
            sidebar.setAttribute('toggle', "open");
        }
        
        const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

        // Create an Intersection Observer
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add the breathe-in class when the element is visible
                    entry.target.classList.add('breathe-in');
                    observer.unobserve(entry.target); // Stop observing after it's visible
                }
            });
        }, {
            threshold: 0.5 // Trigger when 50% of the element is visible
        });
    
        // Observe each element
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });

    });
});