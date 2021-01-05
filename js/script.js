class App {
    constructor(Play) {
        this.fundList = [];
        this.investorsList = [];

        let list = Play.list;
        let login = Play.isLogin;

        console.log(login);

        for (let i = 0; i < list.length; i++) {
            let cnt = 0;
            let data = list[i];
            this.fundList.push(new Fund(data.number, data.name, data.endDate, data.total, data.current, data.owner, data.investorList));
            this.fundView(this.fundList[i], login);

            // let investorData = this.fundList[i].investorList;
            // console.log(investorData);
            // for(let j = 0; j < investorData.length; j++) {
            //     let more = investorData[j];
            //     this.investorsList.push(new Investors(data.number, data.name, data.total, more.email, more.pay, more.datetime));
            // }

            let graph = document.createElement("div");
            graph.classList.add("graph");

            let result = ((data.current / data.total) * 100);

            $(".graph-wrap").append(graph);

            setInterval(() => {
                if (cnt >= result) {
                    clearInterval;
                } else {
                    cnt++;
                    $(graph).css("width", `${cnt}%`);
                }
            }, 25);
        }

        for (let i = 0; i < this.investorsList.length; i++) {
            let cnt = 0;

            this.investor(this.investorsList[i]);
            
            let graphs = document.createElement("div");
            graphs.classList.add("graphs");

            let result = ((this.investorsList[i].pay / this.investorsList[i].total) * 100);

            $(".graph-wraps").append(graphs);

            setInterval(() => {
                if (cnt >= result) {
                    clearInterval;
                } else {
                    cnt++;
                    $(graphs).css("width", `${cnt}%`);
                }
            }, 55);
        }
    }

    fundView(e, login) {
        let form = document.createElement("div");
        form.classList.add("viewer");
        form.innerHTML = `<div class="owner">펀드등록자 : ${e.owner}</div>
        <div class="graph-wrap"><div class="graph-text">${(e.current / e.total) * 100}%</div></div>
        <div class="input-form">
            <input type="text" class="fundNum" value="${e.number}" readonly>
            <label for="">펀드번호</label>
        </div>

        <div class="input-form">
            <input type="text" class="fundName" value="${e.name}" readonly>
            <label for="">창업펀드명</label>
        </div>

        <div class="input-form">
            <input type="text" class="fundDate" value="${e.endDate}" readonly>
            <label for="">모집마감일</label>
        </div>

        <div class="input-form">
            <input type="text" class="fundCurrent" value="${e.total}" readonly>
            <label for="">모집금액</label>
        </div>
        <div class="input-form">
            <input type="text" class="fundTotal" value="${e.current}" readonly>
            <label for="">현재금액</label>
        </div>
        <input type="submit" class="more" value="상세보기">`;

        if(login != null && login.email == e.owner && e.current >= e.total){
            form.innerHTML += `<a href="business.php?id=${e.id}><input type="submit" class="invest">완료</a>`;
        } else if(login != null && login.email == e.owner && Date.parse(e.endDate) < Date.now() && e.current < e.total){
            form.innerHTML += `<a href="delete.phpid=${e.id}"><input type="submit" class="invest">모집 해제</a>`;
        } else if(login != null && Date.parse(e.endDate) > Date.now()){
            form.innerHTML += `<input type="submit" class="invest" value="투자하기">`;
        } else if((Date.parse(e.endDate) < Date.now())){
            form.innerHTML += `<span>모집 마감</span>`;
        }

        $(".fund-view").append(form);
    }

    investor(e) {
        let pay = parseInt(e.pay).toLocaleString();
        let persent = ((e.pay / e.total) * 100).toFixed(1);

        let form =
            `
        <div class="viewer">
            <div class="owner">펀드 투자자 : ${e.email}</div>
            <div class="input-form">
                <input type="text" value="${e.number}" readonly>
                <label for="">펀드번호</label>
            </div>

            <div class="input-form">
                <input type="text" value="${e.name}" readonly>
                <label for="">창업펀드명</label>
            </div>

            <div class="input-form">
                <input type="text" value="${e.datetime}" readonly>
                <label for="">투자한 날</label>
            </div>

            <div class="input-form">
                <input type="text" value="${pay}원" readonly>
                <label for="">투자금액</label>
            </div>

            <div class="input-form">
                <div class="graph-wraps"><div class="graph-texts">${persent}%</div></div>
                <label for="">펀드지분</label>
            </div>
        </div>
        `;

        $(".investors-view").append(form);
    }
}

window.onload = function () {
    $.getJSON("/php/fund.php", function (Play) {
        console.log(Play);
        let app = new App(Play);
        let add = new FundAdd(Play);
    });
}

function msg(msg) {
    let toast = document.createElement("div");
    toast.classList.add("toast");

    toast.innerHTML = `<div class="toast-close">&times</div><p>${msg}</p>`;

    $(".toast-wrapper").prepend(toast);

    toast.querySelector(".toast-close").addEventListener("click", () => {
        $(toast).fadeOut();
    });

    setTimeout(() => {
        toast.querySelector(".toast-close").click();
    }, 3000);
}