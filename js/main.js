// ハンバーガーメニューのトグル機能
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// DOMが完全に読み込まれてからスクリプトを実行する
document.addEventListener('DOMContentLoaded', function() {
  // ハンバーガーメニューのクリックでメニューを表示・非表示
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

