<?php
    // 1.接口名称:http://localhost/1807/0706/php/register.php
    // 2.定义字段:
    //      用户名 : usr;
    //      密码   : pwd;
    // 3.返回值;
    //      3.1 注册失败: {msg:"error",stateCode:0};
    //      3.2 注册成功: {msg:"success",stateCode:1}
    // tip : 请用POST发送数据;

    //我该干啥?;
    //前端发送给我的数据ok了;
    $usr = @$_POST["usr"];
    $pwd = @$_POST["pwd"];

    if(!$usr || !$pwd){
        die("账号密码不能为空");
    }
    // 操作数据 把内容放进数据库中;
    $pwd = md5($pwd);
    //就这有问题
    $host = "localhost:3307";
    $userName = "root";
    $password = "123456";
    $database = "user1807";

    $conn = new mysqli($host,$userName,$password,$database);

    if($conn -> connect_error){
        die(connect_error);
    }
    
    // echo "链接成功";

    $sql = "INSERT INTO usertable (username, password)
    VALUES ('$usr', '$pwd')";

    $res = $conn->query($sql);
    
    if(!$res){
        die("数据库错误");
    }
    $resmsg = array("msg"=>"success","stateCode"=>"1");

    echo json_encode($resmsg);

?>  