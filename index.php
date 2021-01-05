<?php

include "php/db.php";
session_start();

$url = file_get_contents("js/fund.json");
$json = json_decode($url, true);

$sql = "show table status like 'funds'";
$funds = fetch($con, $sql)->Auto_increment;

$sql = "show table status like 'user'";
$user = fetch($con, $sql)->Auto_increment;

if ($funds == 1 && $user == 1) {
    $sql = "INSERT INTO user (email,password, nickname) VALUES (?, PASSWORD(?), ?)";
    query($con, $sql, ["admin", "1234", "관리자"]);
    foreach ($json as $item) {
        $sql = "INSERT INTO funds (number, name, current, total, owner, endDate) VALUES (?, ?, ?, ?, ?, ?)";
        query($con, $sql, [$item['number'], $item['name'], $item['current'], $item['total'], $item['owner'], $item['endDate']]);
    }

    foreach ($json as $investor) {
        $sql = "INSERT INTO list (email, pay, datetime) VALUES (?, ?, ?)";
        query($con, $sql, [$investor['email'], $investor['pay'], $investor['datetime']]);
    }
}
?>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>KickStarter㈜</title>
    <link rel="stylesheet" href="./style.css">
    <script src="./js/jquery-3.4.1.js"></script>
    <script src="./js/Fund.js"></script>
    <script src="./js/Investors.js"></script>
    <script src="./js/FundAdd.js"></script>
    <script src="./js/SignUp.js"></script>
    <script src="./js/script.js"></script>
</head>

<body>
    <div class="toast-wrapper"></div>
    <div class="overlay"></div>
    <header>
        <div class="headerBox">
            <a href="/"><img src="./images/KickStarterLogo.png" alt="logo"></a>
            <a href="/" title="메인페이지" class="activity">메인페이지</a>
            <a href="add.php" title="펀드등록">펀드등록</a>
            <a href="view.php" title="펀드보기">펀드보기</a>
            <a href="investors.php" title="투자자목록">투자자목록</a>
            <a href="#">|</a>
            <?php if (isset($_SESSION['user'])) : ?>
                <a href="./profile.php" title="프로필">프로필</a>
                <a href="./php/signOut.php" title="로그인">로그아웃</a>
            <?php else : ?>
                <a href="signUp.php" title="회원가입">회원가입</a>
                <a href="signIn.php" title="로그인">로그인</a>
            <?php endif; ?>
        </div>
    </header>

    <div class="visual">
        <p>Welcome to KickStarter</p>
        <p>investing is Good Life! <br> investing Now.. </p>
        <img src="./images/sample13.jpg" alt="img">
    </div>

    <div class="main">
        <div class="infoBox">
            <p class="title">★펀드 랭킹★</p>
            <p class="reTitle">펀드 인기순으로 정렬되어 나타납니다.</p>
        </div>

        <div class="form">
            <div class="addFunction">
                <div class="fund-view"></div>
            </div>
        </div>
    </div>

    <div class="pagination">
        <a href="#">&laquo;</a>
        <a class="active" href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
    </div>

    <footer>
        <div class="topFooter">
            <a>공지사항</a>
            <a>고객센터</a>
            <a>개인정보처리방침</a>
            <a>보안프로그램 설치</a>
            <a>오시는 길</a>
        </div>
        <div class="bottomFooter">
            <h1>KickStarter㈜</h1>
            <p id="footerTitle">
                Tel) 031-778-2300<br>
                우) 13587 경기 성남시 분당구 불정로386번길 35 양영디지털고등학교<br>
            </p>
            <p id="footerFocus">Copyright Gondr Allright reserved. Since 2017-03-01</p>
        </div>
    </footer>
</body>

</html>