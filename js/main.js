// ハンバーガーメニューのトグル機能
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// DOMが完全に読み込まれてからスクリプトを実行する
document.addEventListener('DOMContentLoaded', function() {
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // ハンバーガーメニューのリンクをクリックしたらメニューを閉じる
    const navItems = navLinks.querySelectorAll('a');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navLinks.classList.remove('active'); // メニューを閉じる
      });
    });
  }
});

