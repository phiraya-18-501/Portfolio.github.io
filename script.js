```javascript
/* =========================
   เปิดรูป Portfolio
========================= */

function openImage(imageName) {

    const modal = document.getElementById("imageModal");

    const bigImage = document.getElementById("bigImage");


    // ใส่ชื่อรูปที่กดลงในหน้าต่างใหญ่

    bigImage.src = imageName;


    // แสดงหน้าต่างรูปใหญ่

    modal.style.display = "flex";


    // ป้องกันการเลื่อนหน้าเว็บตอนดูรูป

    document.body.style.overflow = "hidden";

}


/* =========================
   ปิดรูป Portfolio
========================= */

function closeImage() {

    const modal = document.getElementById("imageModal");


    // ซ่อนหน้าต่างรูปใหญ่

    modal.style.display = "none";


    // เปิดการเลื่อนหน้าเว็บกลับมา

    document.body.style.overflow = "auto";

}


/* =========================
   กดปุ่ม ESC เพื่อปิดรูป
========================= */

document.addEventListener(

    "keydown",

    function(event) {


        if (event.key === "Escape") {


            closeImage();


        }

    }

);
```
