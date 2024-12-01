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

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
        
                document.querySelector(this.getAttribute('href')).scrollIntoView({  
                    behavior: 'smooth'
                });
            });
        });

    });
});