<?php
     session_start();
     $data=[];
     $host="localhost:3308";
     $user="root";
     $password="";
     $db_name="vegmart";
     $ds="mysql:host=".$host.";dbname=".$db_name; 
     $pdo= new PDO($ds,$user,$password);
     $pdo -> setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
     if(!empty($_POST['get'])){
         $sql="select * from  $_POST[get]";
         $stmt=$pdo->prepare($sql);
         $stmt->execute();
         $data=$stmt->fetchAll();
     }
     echo json_encode($data)
?>
