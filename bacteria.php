
<!DOCTYPE html>
<html>
<head>
    <title>Bacteria</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body style="margin: 0 150px">
<h3>Форма ввода данных</h3>

<form action="bacteria.php" method="POST">
    <div class="form-group">
        <label for="exampleInputEmail1">Name</label>
        <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name" name="name">
        <small id="emailHelp" class="form-text text-muted">Only English.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" name="email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Tel.number</label>
        <input type="number" class="form-control" id="number" placeholder="Number" name="num">
    </div>
    <div class="form-group">
        <label for="exampleInputPassword1">Tick of time</label>
        <input type="number" class="form-control" id="tick" placeholder="Tick" name="time">
    </div>

    <button type="submit" class="btn btn-primary">Submit</button>
</form>
</body>
</html>

<?php
$fields = [
        'name' => [
                'field_name' => 'Имя',
                'required' => 1,
        ],
        'email' => [
            'field_name' => 'Email',
            'required' => 1,

        ],
        'num' => [
            'field_name' => 'Телефон',
            'required' => 1,
        ],
        'time' => [
            'field_name' => 'Такт',
            'required' => 1,
        ],
];


function debug($data){
    echo '<pre>' . print_r($data, 1) . '</pre>';
}

function loda($data){
    foreach ($_POST as $k => $v){
        if(array_key_exists($k,$data)){
            $data[$k]['value'] = trim($v);
        }
    }
    return $data;
};
function validate($data){
 $errors = '';
 foreach ($data as $k => $v){
     if($data[$k]['required'] && empty($data[$k]['value'])){
            $errors .= "<li>Поле не заполнено   {$data[$k]['field_name']}</li>";
        }
    }
 return $errors;
}


$red = 1;
$green = 1;
$time = $_POST['time'];



for ($i = 1; $i <= 1; $i++) {
    $newGreen = $green * 3 + $red * 4;
    $newRed = $green * 7 + $red * 5;

    $red = $newRed;
    $green = $newGreen;
}

$timeRed = $red * $time;
$timeGreen = $green * $time;
$sum = $timeGreen + $timeRed;

if(!empty($_POST)){
    debug($_POST);
    $fields = loda($fields);
    debug($fields);
    if (!preg_match("/^[a-zA-Z-' ]*$/",$_POST['name'])) {
        echo "Введите корректное имя";
    }else{
        if($errors = validate($fields)){
            debug($errors);
        }else{
            echo 'ok';
            echo "<br>Красных: $timeRed <br> Зеленых:$timeGreen <br> Сумма: $sum ";
        }
    }
}

?>
