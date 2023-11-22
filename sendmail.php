<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('info@fls.guru', 'Фрилансер по жизни');
    //Кому отправить
    $mail->addAddress('norman.djeiden@gmail.com');
    //Тема письма
    $mail->Subject = 'Standart Project -> Перезвоните мне (Модальная форма)';

    //Тело письма
    $body = '<h1>Приветствую, Андрей! Меня что-то заинтересовало... Прошу перезвонить!!!</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Phone:</strong> '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message:</strong> '.$_POST['message'].'</p>';
    }



    $mail->Body = $body;

    //Отправляем
    if (!$mail->send()) {
        $message = 'Error';        
    } else {
        $message = 'Data has been sent!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>