// ハンバーガーメニューのトグル
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// アクセスカウンター (ローカルストレージ)
const visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) + 1 : 1;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visit-counter').innerText = `訪問回数: ${visitCount}`;




