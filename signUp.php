<?php
include "./php/db.php";
session_start();
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
            <a href="/" title="메인페이지">메인페이지</a>
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
        <p>회원가입</p>
        <p>KickStarter㈜에 오신것을 환영합니다. <br> 회원가입을 하셔서 모든 서비스를 이용하세요.</p>
        <img src="./images/sample13.jpg" alt="img">
    </div>

    <div class="main">
        <div class="infoBox">
            <p class="title">★회원가입★</p>
            <p class="reTitle">회원님의 개인정보는 안전하게 보호됩니다. <br> 모든 폼은 빠짐 없이 모두 채워주시기 바랍니다.</p>
        </div>

        <div class="form">
            <div class="addFunction">
                <form action="/php/join.php" method="POST">
                    <div class="input-form">
                        <input type="email" class="upId" name="upId">
                        <label for="">아이디</label>
                        <p class="checkId" style="display:none;">이메일 형식이 올바르지 않습니다.</p>
                    </div>

                    <div class="input-form" class="upName">
                        <input type="text" class="upName" name="upName">
                        <label for="">이름</label>
                        <p class="checkName" style="display:none;">이름란이 공백입니다.</p>
                    </div>

                    <div class="input-form">
                        <input type="password" class="upPassword" name="upPassword">
                        <label for="">비밀번호</label>
                        <p class="checkPassword" style="display:none;">비밀번호는 영문, 특문, 숫자를 모두 포함해야 합니다.</p>
                    </div>

                    <div class="input-form">
                        <input type="password" class="upRePassword" name="upRePassword">
                        <label for="">비밀번호 확인</label>
                        <p class="checkRePassword" style="display:none;">비밀번호와 비밀번호 확인이 다릅니다.</p>
                    </div>

                    <input type="submit" class="upBtn" value="회원가입">
                </form>
            </div>
        </div>
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