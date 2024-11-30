document.addEventListener('DOMContentLoaded', () => {
  // 1. アクセスカウンター
  const counter = document.getElementById('visitCounter');
  let count = parseInt(localStorage.getItem('visitCount') || '0') + 1;
  localStorage.setItem('visitCount', count);
  if (counter) {
    counter.textContent = `訪問者数: ${count}`;
  }

  // 2. ハンバーガーメニューの表示
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
  });

  // 3. スクロールエフェクト (要素が画面に入った時にフェードイン)
  const elements = document.querySelectorAll('.fade-in');

  function checkInView() {
    const triggerBottom = window.innerHeight / 5 * 4;
    elements.forEach((el) => {
      const boxTop = el.getBoundingClientRect().top;
      if (boxTop < triggerBottom) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }

  window.addEventListener('scroll', checkInView);
  checkInView(); // 初回チェック

  // 4. スムーズスクロール
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
  smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});



