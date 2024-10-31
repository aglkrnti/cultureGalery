// Animasi transisi masuk saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((item, index) => {
    setTimeout(() => {
      item.style.opacity = 1;
      item.style.transform = "translateY(0)";
    }, index * 100); // delay untuk efek bertahap
  });
});

// Smooth scrolling untuk anchor link
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Smooth scrolling untuk navigasi
document.querySelectorAll("a.nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Menampilkan atau menyembunyikan detail layanan
function showDetails(id) {
  const detailText = document.getElementById(id);
  if (detailText.style.display === "none" || detailText.style.display === "") {
    detailText.style.display = "block";
  } else {
    detailText.style.display = "none";
  }
}

// Validasi sederhana untuk formulir kontak
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("feedback");

  if (name && email && message) {
    feedback.textContent =
      "Pesan berhasil dikirim! Terima kasih telah menghubungi kami.";
    feedback.style.color = "green";
    document.getElementById("contactForm").reset(); // Mengosongkan form
    return false; // Mencegah form dikirim untuk keperluan demo
  } else {
    feedback.textContent = "Mohon isi semua kolom!";
    feedback.style.color = "red";
    return false;
  }
}

document.querySelectorAll('.navbar a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    window.scrollTo({
      top: target.offsetTop - 60, // Mengurangi 60px untuk memperhitungkan tinggi navbar
      behavior: "smooth",
    });
  });
});
