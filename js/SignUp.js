class SignUp {
    constructor(Play) {
        this.SignUp();
    }

    SignUp() {
        let id = document.querySelector(".upId");
        let name = document.querySelector(".upName");
        let password = document.querySelector(".upPassword");
        let rePassword = document.querySelector(".upRePassword");

        let btn = document.querySelector(".upBtn");

        if (id) {
            id.addEventListener("input", () => {
                let emailCheck = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-z]{2,3}$/g;
                if (!emailCheck.test(id.value)) {
                    id.style.border = "2px solid red";
                    $(".checkId").fadeIn();
                } else {
                    id.style.border = "1px solid #a9a9a9";
                    $(".checkId").fadeOut();
                }
            });
        }

        if (name) {
            name.addEventListener("input", () => {
                if (name.value == "") name.style.border = "2px solid red", $(".checkName").fadeIn();
                else name.style.border = "1px solid #a9a9a9", $(".checkName").fadeOut();
            });
        }

        if (password) {
            password.addEventListener("input", () => {
                let passwordCheck = /(?=.*\d)(?=.*[A-Za-z])(?=.*[~`!@#$%^&*()_+|\\\/:;"'<>?,.{}\[\]=-])/;
                if (!passwordCheck.test(password.value)) $(".checkPassword").fadeIn(), password.style.border = "2px solid red";
                else $(".checkPassword").fadeOut(), password.style.border = "1px solid #a9a9a9";
            });
        }

        if (rePassword) {
            rePassword.addEventListener("input", () => {
                if (password.value != rePassword.value) $(".checkRePassword").fadeIn(), rePassword.style.border = "2px solid red";
                else $(".checkRePassword").fadeOut(), rePassword.style.border = "1px solid #a9a9a9";
            });
        }

        if (btn) {
            btn.addEventListener("click", () => {
                if (id.value == "") id.style.border = "2px solid red";
                else id.style.border = "1px solid #a9a9a9";

                if (name.value == "") name.style.border = "2px solid red";
                else name.style.border = "1px solid #a9a9a9";

                if (password.value == "") password.style.border = "2px solid red";
                else password.style.border = "1px solid #a9a9a9";

                if (rePassword.value == "") rePassword.style.border = "2px solid red";
                else rePassword.style.border = "1px solid #a9a9a9";


                if (id.value == "" || name.value == "" || password.value == "" || rePassword.value == "") {
                    msg("누락된 항목이 있습니다.");
                    return;
                }

                let emailCheck = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-z]{2,3}$/g;
                if (!emailCheck.test(id.value)) {
                    id.style.border = "2px solid red";
                    $(".checkId").fadeIn();
                    msg("이메일 형식이 올바르지 않습니다.");
                    return;
                } else {
                    id.style.border = "1px solid #a9a9a9";
                    $(".checkId").fadeOut();
                }

                let passwordCheck = /(?=.*\d)(?=.*[A-Za-z])(?=.*[~`!@#$%^&*()_+|\\\/:;"'<>?,.{}\[\]=-])/;
                if (!passwordCheck.test(password.value)) {
                    $(".checkPassword").fadeIn();
                    password.style.border = "2px solid red";
                    msg("비밀번호는 영문, 특문, 숫자를 모두 포함해야 합니다.");
                    return;
                } else {
                    $(".checkPassword").fadeOut();
                    password.style.border = "1px solid #a9a9a9";
                }

                if (password.value != rePassword.value) {
                    $(".checkRePassword").fadeIn();
                    rePassword.style.border = "2px solid red";
                    msg("비밀번호와 비밀번호 확인이 다릅니다.");
                    return
                } else {
                    $(".checkRePassword").fadeOut();
                    rePassword.style.border = "1px solid #a9a9a9";
                }

                msg(`${name.value}님의 계정은 ${id.value}입니다.`);
                msg("회원가입이 정상적으로 완료되었습니다.");

                setTimeout(() => {
                    window.location.href = "/signin.php";
                }, 5000);
            });
        }
    }
}