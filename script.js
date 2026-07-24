document.addEventListener("DOMContentLoaded", function () {


    /* =========================
       1. เอฟเฟกต์การ์ดปรากฏ
       เมื่อเลื่อนหน้าจอ
    ========================== */


    const elements = document.querySelectorAll(

        ".work-card, .skill, .profile-box, .gallery img"

    );


    const observer = new IntersectionObserver(

        function (entries) {


            entries.forEach(function (entry) {


                if (entry.isIntersecting) {


                    entry.target.classList.add("show");


                }

            });


        },

        {

            threshold: 0.15

        }

    );


    elements.forEach(function (element) {


        observer.observe(element);


    });


    /* =========================
       2. คลิกที่รูป Gallery
       เพื่อขยายรูป
    ========================== */


    const galleryImages = document.querySelectorAll(

        ".gallery img"

    );


    galleryImages.forEach(function (image) {


        image.addEventListener("click", function () {


            image.classList.toggle("zoom");


        });


    });


    /* =========================
       3. แสดงข้อความต้อนรับ
    ========================== */


    console.log(

        "Welcome to Biology Portfolio 🔬🧬🌿"

    );


});
