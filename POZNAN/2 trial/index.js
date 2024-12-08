


let fname = document.getElementById('name');
let number = document.getElementById('number');
let email = document.getElementById('email');
let message = document.getElementById('message');
let file = document.getElementById('file');
let check = document.getElementById('check');
let infoPage = document.getElementById("info");
let payPage = document.getElementById("pay");
let btn = document.getElementById('button1')


let canSubmit = false;
let reaction = null;

function formLis() {
    vName.addEventListener('keyup', valid);
    vEmail.addEventListener('keyup', valid);
    vNumber.addEventListener('keyup', valid);
    vMessage.addEventListener('keyup', valid);
    vFile.addEventListener('keyup', valid);
    vCheck.addEventListener('keyup', valid);
}
formLis();

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function valid() {

    let vName = fname.value.trim();
    let vNumber = number.value.trim();
    let vEmail = email.value.trim();
    let vMessage = message.value.trim();
    let vFile = file.value.trim();
    let vCheck = check.value.trim();

    if (vName.length > 1 && vNumber.length > 4 && vEmail.length > 4 && vFile.length > 1 && vMessage.length > 4 && vCheck.length > 1) {
        alertComment.style.visibility = "hidden";
        if (validateEmail(email)) {
            btn.classList.add('activated');
            btn.disabled = false;
            canSubmit = true;
            infoPage.style.display = "none";
            payPage.style.display = "block";
            sendMail();

        } else {
            nValid();
        }
    } else {
        alertComment.style.visibility = "visible";
        nValid();
    }
}

function nValid() {
    btn.classList.remove('activated');
    btn.disabled = true;
    canSubmit = false;
};


function sendMail() {
    var params = {
        name: fname.value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        File: document.getElementById("file").value,
        message: document.getElementById("message").value,
        check: document.getElementById("check").value,
    };

    // let infoPage = document.getElementById("info");
    // let payPage = document.getElementById("pay");

    // infoPage.style.display = "none";
    // payPage.style.display = "block";

    const serviceID = "service_p1dm0of";
    const templateID = "template_kjtvc4v";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("name").value = "",
                document.getElementById("email").value = "",
                document.getElementById("number").value = "",
                document.getElementById("file").value = "",
                document.getElementById("message").value = "",
                document.getElementById("check").value = "",
                console.log(res);
            alert("Your Appeal has been sent successfully");
        })

        .catch((err) => console.log(err))
}


function copy() {
    var copyText = document.getElementById("address");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}


function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

function pending() {
    let payPage = document.getElementById("pay");
    let pendPage = document.getElementById("pend");

    pendPage.style.display = "block";
    payPage.style.display = "none";
}

document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();
});