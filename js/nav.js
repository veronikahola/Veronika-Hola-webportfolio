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












// document.addEventListener("DOMContentLoaded", function () {
//     const links = document.querySelectorAll('.nav__item');

//     const moveRight = (element) => {
//         gsap.to(element, { x: 30, fontWeight: 800, color: '#C2605C' });
//     };

//     const moveLeft = (element) => {
//         gsap.to(element, { x: 0, fontWeight: 400, color: '#E9DCD8' });
//     };

//     links.forEach((link, index) => {
//         link.addEventListener('click', function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute('href').substring(1);
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 100,
//                     behavior: 'smooth'
//                 });
//             }
//         });
//     });

//     const sections = document.querySelectorAll('.section');
//     const navItems = document.querySelectorAll('.nav__item');

//     const onScroll = () => {
//         const scrollPosition = window.scrollY;

//         sections.forEach((section, index) => {
//             const sectionTop = section.offsetTop - 100;
//             const sectionBottom = sectionTop + section.clientHeight;

//             if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
//                 moveRight(navItems[index]);
//                 if (index > 0) {
//                     moveLeft(navItems[index - 1]);
//                 }
//             } else {
//                 moveLeft(navItems[index]);
//             }
//         });
//     };

//     // Initial animation
//     onScroll();

//     // Listen to scroll events
//     window.addEventListener('scroll', onScroll);
// });




// menu effects - hover and active items
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('.nav__item');

    const moveRight = (element) => {
        gsap.to(element, { x: 30, fontWeight: 800, color: '#AFFC41' });
    };

    const moveLeft = (element) => {
        gsap.to(element, { x: 0, fontWeight: 400, color: '#E9DCD8' });
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
                gsap.to(this, { x: 30, fontWeight: 800, color: '#FF5CB3' });
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
            const sectionTop = section.offsetTop - 100;
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

    // Initial animation
    onScroll();

    // Listen to scroll events
    window.addEventListener('scroll', onScroll);
});