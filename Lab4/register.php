<?php
// получаем данные из формы
$username = $_POST['username'];
$password = $_POST['password'];

// проверяем, что поля заполнены
if (empty($username) || empty($password)) {
  echo "Заполните все поля";
  exit;
}

// открываем файл для записи
$file = fopen('users.txt', 'a+');

// проверяем, что пользователь с таким именем еще не зарегистрирован
while (!feof($file)) {
  $line = trim(fgets($file));
  $user = explode(':', $line);
  if ($user[0] == $username) {
    echo "Пользователь с таким именем уже зарегистрирован";
    exit;
  }
}

// записываем данные пользователя в файл
fwrite($file, "$username:$password\n");

// закрываем файл
fclose($file);

// перенаправляем пользователя на страницу авторизации
header("Location: login.html");
exit;
?>

