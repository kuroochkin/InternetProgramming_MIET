<form action="upload.php" method="POST" enctype="multipart/form-data">
            <label for="image">Выберите изображение:</label>
            <input type="file" name="image" id="image" accept="image/*"><br>
            <br>
            <label for="name">Введите название изображения:</label>
            <input type="text" name="name" id="name">
            <br><br>

<?php
// Проверяем, было ли отправлено изображение
if (isset($_FILES['image'])) {
  // Проверяем, что в названии изображения нет запрещенных слов и HTML-тегов
  $name = $_POST['name'];
  $forbidden_words = array('script', 'http', 'SELECT', 'UNION', 'UPDATE', 'exe', 'exec', 'INSERT', 'tmp');
  foreach ($forbidden_words as $word) {
    if (stripos($name, $word) !== false) {
      die("Название изображения содержит запрещенное слово: $word");
    }
  }
  if (preg_match('/<[^>]+>/', $name)) {
    die("Название изображения содержит HTML-теги");
  }

  // Проверяем, что изображение имеет правильный размер и вес
  $image = $_FILES['image']['tmp_name'];
  $name = $_FILES['image']['name']; //Имя файла

 
  $size = getimagesize($image);
  if ($size[0] > 800 || $size[1] > 800) {
    die("Изображение превышает максимальный размер 800x800 пикселей");
  }
  if ($_FILES['image']['size'] > 2 * 1024 * 1024) {
    die("Изображение превышает максимальный вес 2 Мб");
  }
  $f = 'upload/' . $name . '.jpg';
}

?>

<div id="preview">
                <img src="<? echo $f;?>" alt="Изображение">
            </div>
            
            <input type="submit" value="Загрузить">
<?php
  // Генерируем уникальное имя файла
  $extension = pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION);
  $filename = md5(uniqid()) . ".$extension";

  $file = fopen('image.txt', 'a+');
  fwrite($file, "$name\n");
  fclose($file);

 
  // $thumbnail = imagecreatetruecolor(200, 200);
  // $source = imagecreatefromstring(file_get_contents($image));
  // imagecopyresized($thumbnail, $source, 0, 0, 0, 0, 200, 200, $size[0], $size[1]);
  // imagejpeg($thumbnail, "thumbnails/$filename");

  // Сократим .jpeg до .jpg
    $format = str_replace('jpeg', 'jpg', $extension);

  // if (!move_uploaded_file($image, __DIR__ . '/upload/' . $name . '.jpg')) {
  //   die('При записи изображения на диск произошла ошибка.');
  // }

?>