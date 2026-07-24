// =========================
// เปิดรูปใหญ่
// =========================

function openImage(imageName) {

    const modal = document.getElementById("imageModal");
    const bigImage = document.getElementById("bigImage");

    // ใส่ path รูป
    bigImage.src = imageName;

    // แสดง modal
    modal.style.display = "flex";

    // ป้องกันการเลื่อนหน้าเว็บ
    document.body.style.overflow = "hidden";

}


// =========================
// ปิดรูปใหญ่
// =========================

function closeImage() {

    const modal = document.getElementById("imageModal");

    // ซ่อน modal
    modal.style.display = "none";

    // เปิดการเลื่อนหน้าเว็บ
    document.body.style.overflow = "auto";

}


// =========================
// กด ESC เพื่อปิด
// =========================

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        closeImage();

    }

});
