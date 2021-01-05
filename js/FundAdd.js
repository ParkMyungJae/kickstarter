class FundAdd {
    constructor(Play) {
        this.FundAdd();
    }

    FundAdd() {
        let num = document.querySelector(".num");
        let name = document.querySelector(".name");
        let date = document.querySelector(".date");
        let pay = document.querySelector(".pay");
        let img = document.querySelector(".img");
        let textarea = document.querySelector("#textarea");

        let btn = document.querySelector(".addBtn");

        //펀드번호
        let AS = Math.floor(Math.random() * 26) + 65;

        let alpha = String.fromCharCode(AS);
        let num1 = Math.floor(Math.random() * 9 + 1);
        let num2 = Math.floor(Math.random() * 9 + 1);
        let num3 = Math.floor(Math.random() * 9 + 1);
        let num4 = Math.floor(Math.random() * 9 + 1);

        if(num) {
            num.value = alpha + num1 + num2 + num3 + num4;
        }
        //

        if (name) {
            name.addEventListener("input", () => {
                let numCheck = /[0-9]/g;
                let specialCheck = /[\\\/~`!@#$%^&*()_+|:;"',.<>?{}\[\]=-]/g;

                if (numCheck.test(name.value) || specialCheck.test(name.value)) {
                    msg("창업펀드명은 한글, 영문, 띄어쓰기만 가능합니다.");
                    name.style.border = "2px solid red";
                    name.value = "";
                    return;
                } else {
                    name.style.border = "1px solid #a9a9a9";
                }
            });
        }

        if (date) {
            date.addEventListener("input", () => {
                let localDate = new Date();
                let inputDate = new Date(date.value);

                if (localDate > inputDate) {
                    msg("현재 시간의 이전으로는 설정하실 수 없습니다.");
                    date.style.border = "2px solid red";
                    return;
                } else {
                    date.style.border = "1px solid #a9a9a9";
                }
            });
        }

        if (pay) {
            let numCheck = /[^0-9,]/;
            pay.addEventListener("input", () => {
                if (numCheck.test(pay.value)) {
                    msg("숫자만 입력 가능합니다.");
                    pay.style.border = "2px solid red";
                    pay.value = "";
                    return;
                } else {
                    pay.style.border = "1px solid #a9a9a9";
                }
            });

            pay.addEventListener("blur", () => {
                pay.value = parseInt(pay.value).toLocaleString() + "원";
            });
        }

        if (img) {
            img.addEventListener("input", () => {
                let type1 = img.value.lastIndexOf(".");
                let type2 = img.value.substring(type1 + 1, img.length);
                let filetype = type2.toLowerCase();

                if (filetype == "jpg" || filetype == "png") {
                    img.style.border = "1px solid #a9a9a9";
                } else {
                    msg("첨부파일 확장자는 \"jpg\"와 \"png\"만 가능합니다.");
                    img.style.border = "2px solid red";
                    img.value = "";
                    return;
                }

                let mb = 5 * 1024 * 1024;
                let cut = img.files[0].size;

                if (mb < cut) {
                    msg("첨부파일 용량은 5MB를 초과할 수 없습니다.");
                    img.style.border = "2px solid red";
                    img.value = "";
                    return;
                } else {
                    img.style.border = "1px solid #a9a9a9";
                }
            });
        }

        if (textarea) {
            textarea.addEventListener("input", () => {
                if (textarea.value.length > 500) {
                    msg("상세설명은 500자를 초과할 수 없습니다.");
                    textarea.style.border = "2px solid red";
                    return;
                } else {
                    textarea.style.border = "1px solid #a9a9a9";
                }
            });
        }

        if (btn) {
            btn.addEventListener("click", () => {
                if(name.value == "") name.style.border = "2px solid red";
                else name.style.border = "1px solid #a9a9a9";

                if(date.value == "") date.style.border = "2px solid red";
                else date.style.border = "1px solid #a9a9a9";

                if(pay.value == "") pay.style.border = "2px solid red";
                else pay.style.border = "1px solid #a9a9a9";

                if(img.value == "") img.style.border = "2px solid red";
                else img.style.border = "1px solid #a9a9a9";

                if(textarea.value == "") textarea.style.border = "2px solid red";
                else textarea.style.border = "1px solid #a9a9a9";


                if (name.value == "" || date.value == "" || pay.value == "" || img.value == "" || textarea.value == "") {
                    msg("누락된 항목이 있습니다.");
                    return;
                }

                let localDate = new Date();
                let inputDate = new Date(date.value);

                if (localDate > inputDate) {
                    msg("현재 시간의 이전으로는 설정하실 수 없습니다.");
                    date.style.border = "2px solid red";
                    return;
                } else {
                    date.style.border = "1px solid #a9a9a9";
                }

                let type1 = img.value.lastIndexOf(".");
                let type2 = img.value.substring(type1 + 1, img.length);
                let filetype = type2.toLowerCase();

                if (filetype == "jpg" || filetype == "png") {
                    img.style.border = "1px solid #a9a9a9";
                } else {
                    msg("첨부파일 확장자는 \"jpg\"와 \"png\"만 가능합니다.");
                    img.style.border = "2px solid red";
                    img.value = "";
                    return;
                }

                let mb = 5 * 1024 * 1024;
                let cut = img.files[0].size;

                if (mb < cut) {
                    msg("첨부파일 용량은 5MB를 초과할 수 없습니다.");
                    img.style.border = "2px solid red";
                    img.value = "";
                    return;
                } else {
                    img.style.border = "1px solid #a9a9a9";
                }

                msg(`${name.value}의 펀드등록이 정상 처리되었습니다.<br> 승인번호: ${num.value}`);

                setTimeout(() => {
                    window.location.href = "/";
                }, 5000);
            });
        }
        return;
    }
}