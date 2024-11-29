// ハンバーガーメニューのトグル (既存コード)
document.getElementById('hamburger').addEventListener('click', function() {
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('active');
});

// スクロール時のアニメーションを追加 (既存コード拡張)
window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('main section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// フォーム送信時の確認 (Contactページ用)
const contactForm = document.querySelector('.contact form');
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 本番環境では必要に応じて削除
    alert('お問い合わせありがとうございます！後ほどご連絡いたします。');
    contactForm.reset();
  });
}


