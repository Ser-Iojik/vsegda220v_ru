<?php
/* include "dataBase.php"; //Подключаем БД
//делаем запрос на товары этой категории
$query = "select * from article where id = ".$_REQUEST['id']."";
$result = mysqli_query($connect, $query) or die(mysqli_error($connect));
// выводим товары полученные по запросу
while ($row=mysqli_fetch_array($result))
{
print $row['Name']."<br>";
} */
?>