<?php

include "db.php";
session_start();

$sql = "SELECT * FROM funds";

$data = fetchAll($con, $sql);

echo json_encode(['isLogin' => isset($_SESSION['user']) ? $_SESSION['user'] : null, 'list'=>$data], JSON_UNESCAPED_UNICODE);