<?php

    
    $conn = new mysqli("localhost:3307","root", "123456","class1807");
    if ($conn->connect_error) {
        die("Connection failed: " . mysqli_connect_error());
    }
    //  echo "连接成功";

    $sql = "SELECT id,name FROM testTable";

    $res = $conn->query($sql);

    // echo var_dump($res->fetch_assoc());
    // echo var_dump($res->fetch_assoc());
    // echo var_dump($res->fetch_assoc());
    // echo var_dump($res->fetch_assoc());
    $resArray = array();

    while($col = $res->fetch_assoc()){
       array_push($resArray,$col);
    }

    // echo var_dump($resArray);
    echo json_encode(array("data"=>$resArray));
?>  