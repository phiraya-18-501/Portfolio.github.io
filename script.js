```javascript
/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(function(link) {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {

            target.scrollIntoView({

                behavior: 'smooth'

            });

        }

    });

});


/* =========================
   กดรูปเพื่อดูภาพขนาดใหญ่
========================= */

const images = document.querySelectorAll(
    '.photo-card img, .hero-image img'
);


images.forEach(function(image) {

    image.addEventListener('click', function() {

        const overlay = document.createElement('div');

        overlay.className = 'image-overlay';


        const largeImage = document.createElement('img');

        largeImage.src = this.src;


        overlay.appendChild(largeImage);

        document.body.appendChild(overlay);


        /* กดที่พื้นหลังเพื่อปิด */

        overlay.addEventListener('click', function() {

            overlay.remove();

        });

    });

});


/* =========================
   แสดงการ์ดเมื่อเลื่อนหน้าจอ
========================= */

const cards = document.querySelectorAll(
    '.photo-card'
);


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add(
                    'show'
                );

            }

        });

    },

    {

        threshold: 0.15

    }

);


cards.forEach(function(card) {

    observer.observe(card);

});


/* =========================
   เอฟเฟกต์เลื่อนเมนู
========================= */

window.addEventListener('scroll', function() {

    const nav = document.querySelector('nav');

    if (window.scrollY > 50) {

        nav.classList.add('scrolled');

    } else {

        nav.classList.remove('scrolled');

    }

});
```
