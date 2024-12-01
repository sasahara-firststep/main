// スクロールイベントで要素を表示する
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
});
