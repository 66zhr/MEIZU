<?php
    
    $usr = @$_POST["usr"];
    $pwd = @$_POST["pwd"];

    // if(!$usr || !$pwd){
    //     die("账号密码不能为空");
    // }
    // 操作数据 把内容放进数据库中;
    $pwd = md5($pwd);

    $host = "localhost";
    $userName = "root";
    $password = "";
    $database = "user1807";

    $conn = new mysqli($host,$userName,$password,$database);

    if($conn -> connect_error){
        die(connect_error);
    }

    echo "链接成功";
?>