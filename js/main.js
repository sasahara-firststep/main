// ハンバーガーメニューのトグル
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// スクロール時のアニメーション
const fadeIns = document.querySelectorAll('.fade-in');

const handleScroll = () => {
  fadeIns.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('show');
    }
  });
};

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
};

// ページ読み込み時にアニメーションを開始
document.addEventListener('DOMContentLoaded', handleScroll);

// スクロールイベントを監視
window.addEventListener('scroll', handleScroll);

// アクセスカウンター (ローカルストレージ)
const visitCount = localStorage.getItem('visitCount') ? parseInt(localStorage.getItem('visitCount')) + 1 : 1;
localStorage.setItem('visitCount', visitCount);
document.getElementById('visit-counter').innerText = `訪問回数: ${visitCount}`;



