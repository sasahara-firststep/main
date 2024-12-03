// ハンバーガーメニューの表示切り替え
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navLinkItems = navLinks.querySelectorAll('a'); // 各メニューリンクを取得

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

document.addEventListener("DOMContentLoaded", () => {
  const sectionsToAnimate = document.querySelectorAll(".services, .programs, .trainer, .hours");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.4 // 40%が表示されたらトリガー
  });

  sectionsToAnimate.forEach(section => observer.observe(section));
});


