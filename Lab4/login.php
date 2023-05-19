<?php
// получаем данные из формы
$username = $_POST['username'];
$password = $_POST['password'];

// проверяем, что поля заполнены
if (empty($username) || empty($password)) {
  echo "Заполните все поля";
  exit;
}

// открываем файл для чтения
$file = fopen('users.txt', 'r');

// ищем пользователя с таким именем и паролем
$found = false;
while (!feof($file)) {
  $line = trim(fgets($file));
  $user = explode(':', $line);
  if ($user[0] == $username && $user[1] == $password) {
    $found = true;
    break;
  }
}

// закрываем файл
fclose($file);

// если пользователь не найден, выводим сообщение об ошибке
if (!$found) {
  echo "Неверное имя пользователя или пароль";
  exit;
}

// сохраняем имя пользователя в сессию
session_start();
$_SESSION['username'] = $username;

// перенаправляем пользователя на главную страницу
header("Location: upload.php");
exit;
?>