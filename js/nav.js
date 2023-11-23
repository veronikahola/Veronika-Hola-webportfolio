// scrolling to the sections on click
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav__item');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});
















// menu effects - hover and active items
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav__item');

    const moveRight = (element) => {
        gsap.to(element, { x: 50, fontWeight: 800, color: '#A9E5BB', opacity: 1});
    };

    const moveLeft = (element) => {
        gsap.to(element, { x: 0, fontWeight: 400, color: '#E9DCD8', opacity: 0.5});
    };

    links.forEach((link, index) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });

        link.addEventListener('mouseenter', function () {
            const isActive = this.classList.contains('active');
            if (!isActive) {
                gsap.to(this, { x: 50, fontWeight: 800, color: '#A9E5BB', opacity: 1 });
            }
        });

        link.addEventListener('mouseleave', function () {
            const isActive = this.classList.contains('active');
            if (!isActive) {
                moveLeft(this);
            }
        });
    });

    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav__item');

    const onScroll = () => {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 150;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                moveRight(navItems[index]);
                navItems[index].classList.add('active');
                if (index > 0) {
                    moveLeft(navItems[index - 1]);
                    navItems[index - 1].classList.remove('active');
                }
            } else {
                moveLeft(navItems[index]);
                navItems[index].classList.remove('active');
            }
        });
    };


    onScroll();
    window.addEventListener('scroll', onScroll);
});








// mobile menu
document.addEventListener("DOMContentLoaded", function () {
    const mobileNavItems = document.querySelectorAll('.mobile-nav li');
    const sections = document.querySelectorAll('.section');

    const updateMobileMenu = () => {
        const scrollPosition = window.scrollY;

        // Check if scroll position is at the top of the page
        const isAtTop = scrollPosition === 0;

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionBottom = sectionTop + section.clientHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                mobileNavItems.forEach((item) => {
                    item.classList.remove('active');
                });

                const activeNavItem = document.querySelector(`[data-target="${sectionId}"]`);
                activeNavItem.classList.add('active');
            }
        });

        // Hide inactive mobile menu items
        mobileNavItems.forEach((item) => {
            const targetId = item.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                if (item.classList.contains('active') && !isAtTop) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            }
        });
    };

    mobileNavItems.forEach((item) => {
        item.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    window.addEventListener('scroll', updateMobileMenu);

    // Initial update
    updateMobileMenu();
});