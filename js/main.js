// スクロールでフェードインする要素を検出
window.addEventListener('scroll', () => {
  const fadeElements = document.querySelectorAll('.fade-in-up');
  fadeElements.forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      element.classList.add('visible');
    }
  });
});


