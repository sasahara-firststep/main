// ハンバーガーメニューの表示切り替え
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// ハンバーガーメニューの開閉
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// メニュー外をクリックするとメニューを閉じる
document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});

// スクロールアニメーション
document.addEventListener("DOMContentLoaded", () => {
  const sectionsToAnimate = document.querySelectorAll(".services, .programs, .trainer, .hours");
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.7
  });

  sectionsToAnimate.forEach(section => observer.observe(section));
});

