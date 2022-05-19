<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'mailer/src/Exception.php';
	require 'mailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->charSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->ItHTML(true);

	// От кого письмо
	$mail->setForm('info@fls.guru', 'Фрилансер по жизни');
	//Кому отправить
	$mail->addAddress('666trall666@gmail.com');
	// тема письма
	$mail->Subject = 'Привет!';

	// Туло письма
	$body = '<h1>Встречай супер письмо!</h1>'

	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> ' .$_POST['name']. '</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>Имя:</strong> ' .$_POST['email']. '</p>';
	}
	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Имя:</strong> ' .$_POST['tel']. '</p>';
	}


	//прекрипить файл 
if(!empty($_FILES['image']['tmp_name'])){
	// путь загрузки
	$filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
	//грузим файл
	if(copy($_FILES['image']['tmp_name'])){
		$fileAttach = $filePath;
		$body.='<p><strong>Фото в приложении</strong></p>';
		$mail->addAttachment($fileAttach);
	}
}

$mail->Body = $body;
//Отправляем 
if(!$mail->send()){
	$message = 'Ошибка';
}else{
	$message = 'Данныу отправлены';
}

$response = ['message'=> $message];

header('Content-type: application/json');
echo json_encode($response);
?>