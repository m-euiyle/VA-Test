document.addEventListener('DOMContentLoaded', function() {
    var menupic = document.getElementsByClassName('menu')[0]
    var menuicon = document.getElementById('menuicon'); // Access the first element
    var sidebar = document.getElementById('sidebar');
    menuicon.addEventListener('click', function() {
        menuicon.classList.toggle('open');
        sidebar.classList.toggle('open');

        // Check if the menuIcon is in the 'open' state
        if (menuicon.classList.contains('open')) {
            menupic.setAttribute('src', "assets/x.svg"); // Set X icon when open
            menuicon.setAttribute('toggle', "close");
            sidebar.setAttribute('toggle', "close");
        } else {
            menupic.setAttribute('src', "assets/menu.svg"); // Set Menu icon when closed
            menuicon.setAttribute('toggle', "open");
            sidebar.setAttribute('toggle', "open");
        }

        document.querySelector('.home').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default anchor behavior

    // Smooth scroll effect
    window.scrollTo({
        top: 0, // Scroll to the top of the page
        behavior: 'smooth' // Smooth scrolling
    });

    // Wait for the scroll to finish before navigating
    setTimeout(() => {
        window.location.href = 'index.html'; // Navigate to index.html
    }, 500); // Adjust delay based on scroll duration
});


    });
});
