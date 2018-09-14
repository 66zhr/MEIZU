<?php
    require "./common.php";
    # ./ 当前文件夹;
    // ../上级文件夹;
    // /php/ === php/;
    $sql = "SELECT username,password FROM usertable WHERE username='$usr'";

    $res = $conn->query($sql);

    if($res->num_rows == 0){
        die("用户名不存在");
    }
   
    while($item = $res->fetch_assoc()){
        if($item["password"] == $pwd){
            setcookie("tocken",time(),time() + 36000,"/");
            die( json_encode($item));
        }
    }

    echo "密码错误";
?>  