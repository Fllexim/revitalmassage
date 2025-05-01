<?php

$botToken = "8065364010:AAFT6WEKVenn_u42akDVrqikC5eTLIqZ0_Q"; // замени на свой токен
$chatId = "512268525"; // замени на свой chat_id

// Получаем данные из формы
$name = htmlspecialchars($_POST['name']);
$phone = htmlspecialchars($_POST['phone']);
$comment = htmlspecialchars($_POST['comment']);
$service = htmlspecialchars($_POST['service']); // Добавляем выбор услуги

// Скрытое поле для определения источника формы
$formSource = $_POST['form_source'] ?? 'unknown';

// Формируем сообщение для Telegram
$message .= "👤 Ім’я: $name\n";
$message .= "📞 Телефон: $phone\n";
$message .= "💬 Коментар: $comment\n";
$message .= "🛀 Масаж: $service\n"; // Добавляем выбранную услугу

// Добавляем проверку источника формы
if ($formSource === 'certificate') {
    // Это заявка для сертификата
    $message = "🎰 Запит на сертифікат:\n" . $message;
} else {
    // Это обычная форма
    $message = "✅ Звичайна заявка:\n" . $message;
}

// Отправка через Telegram API
$sendToTelegram = fopen("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message), "r");

// Если сообщение отправлено успешно
if ($sendToTelegram) {
    header("Location: page-blog.html"); // перенаправление после отправки
} else {
    echo "Помилка при відправці повідомлення."; // Выводим ошибку в случае неудачи
}
?>
