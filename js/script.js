// MENU NAVIGASI

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

if (menuButton && nav) {

    menuButton.addEventListener('click', () => {

        const isOpen = nav.classList.toggle('open');

        menuButton.setAttribute(
            'aria-expanded',
            String(isOpen)
        );

        menuButton.textContent = isOpen ? '×' : '☰';

    });

    nav.querySelectorAll('a').forEach(link => {

        link.addEventListener('click', () => {

            nav.classList.remove('open');

            menuButton.setAttribute(
                'aria-expanded',
                'false'
            );

            menuButton.textContent = '☰';

        });

    });

}


// ANIMASI SAAT SCROLL

const revealItems = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {

    const observer = new IntersectionObserver(
        (entries, obs) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add('visible');

                    obs.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach(item => {
        observer.observe(item);
    });

} else {

    revealItems.forEach(item => {
        item.classList.add('visible');
    });

}