<?php
/* $hostname = "localhost"; // название/путь сервера, с MySQL
$username = "root"; // имя пользователя (в Denwer`е по умолчанию "root")
$password = ""; // пароль пользователя (в Denwer`е по умолчанию пароль отсутствует, этот параметр можно оставить пустым)
$dbName = "article"; // название базы данных

 */
/* Создаем соединение */
// $connect = mysqli_connect($hostname, $username, $password) or die ("Не могу создать соединение");
// mysql_query('SET NAMES utf8') or header('Location: Error');

/*  Выбираем базу данных. Если произойдет ошибка - вывести ее  */
// mysqli_select_db($connect, $dbName) or die (mysqli_error($connect));

// $vol = '60-267';
?>

<!-- <html>
<head>
<meta http-equiv="Content-Type" content="text/html; Charset=UTF-8">
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
</head>
<body>
<form id="myForm">
Выберите Категорию:<br/>
<select id="idcat">
< ?php
//Выводим категории и ее ID
while ($row=mysql_fetch_array($result))
{
print "<option value=".$row['Id_cat'].">";
print $row['Name'];
echo("</option>");
}
?>
</select>
</form>

<div id="content"></div>



</body>
</html>