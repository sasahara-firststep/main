document.addEventListener("DOMContentLoaded", () => {
  // ハンバーガーメニューの操作
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("toggle");
  });

  // スムーズスクロール
  const links = document.querySelectorAll(".nav-links a");

  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });

  // お問い合わせフォームの送信
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(form);

    // バリデーション
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      alert("全てのフィールドを入力してください！");
      return;
    }

    // メール送信のモックアップ（実際のAPIをここで使用）
    try {
      await fetch("https://your-email-api-endpoint.com/send", {
        method: "POST",
        body: formData,
      });
      alert("メッセージが送信されました！");
      form.reset();
    } catch (error) {
      alert("送信に失敗しました。後でもう一度お試しください。");
    }
  });
});


