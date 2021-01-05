<?php
include "./db.php";
session_start();

$email = $_POST['upId'];
$name = $_POST["upName"];
$pwd = $_POST['upPassword'];
$rePwd = $_POST['upRePassword'];

if($email == "" || $name == "" || $pwd == "" || $rePwd == "") {
    echo("<script> alert('누락된 값이 있습니다.'); </script>");
    echo "<script>window.history.back();</script>";
    return;
}

if($pwd != $rePwd) {
    echo "<script>alert('비밀번호가 서로 일치하지 않습니다.')</script>";
    echo "<script>window.history.back();</script>";
    return;
}

$sql = "INSERT INTO `user`(`email`, `nicname`, `password`, `money`) VALUES('$email', '$name' , PASSWORD('$pwd'), '50000')";

if($con->query($sql)) {
    echo("<script> alert('회원가입이 완료되었습니다'); </script>");
    echo("<script> window.location.href = '../signIn.php'; </script>");
}else {
    echo "회원가입 오류가 발생하였습니다.";
}
?>