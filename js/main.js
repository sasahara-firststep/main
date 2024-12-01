// ハンバーガーメニューの表示切り替え
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// ヘッダーがスクロールで隠れるようにする
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // スクロールダウン
    header.classList.add('scrolled');
  } else {
    // スクロールアップ
    header.classList.remove('scrolled');
  }
  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
