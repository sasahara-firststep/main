// ハンバーガーメニューのトグル機能
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// ハンバーガーメニューのクリックでメニューを表示・非表示
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

