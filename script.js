```javascript id="f32s9p"
// =========================
// เลื่อนหน้าแบบนุ่มนวล
// =========================

document.querySelectorAll('.menu a').forEach(function(link) {

    link.addEventListener('click', function(event) {

        event.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            targetSection.scrollIntoView({

                behavior: 'smooth',

                block: 'start'

            });

        }

    });

});


// =========================
// เอฟเฟกต์เมื่อเลื่อนถึงแต่ละหน้า
// =========================

const pages = document.querySelectorAll('.portfolio-page');


const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add('active');

            }

        });

    },

    {

        threshold: 0.25

    }

);


pages.forEach(function(page) {

    observer.observe(page);

});


// =========================
// เปลี่ยนสี Navbar เมื่อเลื่อน
// =========================

const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', function() {

    if (window.scrollY > 50) {

        navbar.classList.add('scrolled');

    } else {

        navbar.classList.remove('scrolled');

    }

});


// =========================
// กดรูปเพื่อขยาย
// =========================

const portfolioImages = document.querySelectorAll(

    '.portfolio-page img'

);


portfolioImages.forEach(function(image) {

    image.addEventListener('click', function() {


        const overlay = document.createElement('div');

        overlay.className = 'image-modal';


        const bigImage = document.createElement('img');

        bigImage.src = this.src;


        overlay.appendChild(bigImage);


        document.body.appendChild(overlay);


        overlay.addEventListener('click', function() {

            overlay.remove();

        });


    });

});
```
