<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "ry.1010.st@gmail.com"; // 送信先のメールアドレス
    $subject = "お問い合わせ: $name";
    $body = "名前: $name\nメール: $email\nメッセージ:\n$message";

    // メール送信
    if (mail($to, $subject, $body)) {
        echo "お問い合わせありがとうございます！";
    } else {
        echo "送信に失敗しました。再度お試しください。";
    }
}
?>
