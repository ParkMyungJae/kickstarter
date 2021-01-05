<?php
include "./db.php";
session_start();

$inId = $_POST['inId'];
$inPassword = $_POST['inPassword'];
// var_dump($mbId);
$sql = "SELECT * FROM user WHERE email = '$inId' AND password = PASSWORD('$inPassword')";

$user = fetch($con, $sql, [$inId, $inPassword]);

if ($inId == "" || $inPassword == "") {
    echo ("<script> alert('누락된 값이 있습니다.'); </script>");
    echo ("<script> window.history.back(); </script>");
    exit;
}

if ($user == true) {
    $_SESSION['user'] = $user;
    echo ("<script> alert('환영합니다 고객님, 오늘도 성공투자 하세요.'); </script>");
    echo ("<script> window.location.href = '/index.php'; </script>");
} else {
    echo ("<script> alert('등록되지 않은 계정이거나 아이디 또는 비밀번호가 올바르지 않습니다.'); </script>");
    echo ("<script> window.history.back(); </script>");
}
