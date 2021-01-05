<?php
include "./db.php";
session_start();

unset($_SESSION['user']);

if (!isset($_SESSION['user'])) {
    echo("<script> alert('로그아웃 되었습니다.'); </script>");
    echo("<script> window.location.href = '../index.php'; </script>");
    exit;
}
