// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

//ketika hamberger di klik
document.querySelector(" #hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar side-bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fungsi untuk menangani klik pada menu "Search"
$("#search").on("click", function () {
  // Ganti bagian ini dengan tindakan yang diinginkan saat menu "Search" diklik
  alert("Menu Search diklik!");
});

// Fungsi untuk menangani klik pada menu "Shopping Cart"
$("#shopping-cart").on("click", function () {
  // Ganti bagian ini dengan tindakan yang diinginkan saat menu "Shopping Cart" diklik
  alert("Menu Shopping Cart diklik!");
});
