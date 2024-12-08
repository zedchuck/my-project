let form = document.getElementById("myForm");
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    const serviceID = "service_p1dm0of";
    const templateID = "template_kjtvc4v";


    emailjs.sendForm(serviceID, templateID, this).then(
        (response) => {
            console.log("SUCCESS!", response.status, response.text);
            alert("SUCCESS!");
        },
        (error) => {
            console.log("FAILED...", error);
            alert("FAILED...", error);
        }
    );
});

const fnumber = document.getElementById('number');
const fname = document.getElementById('name');
const fcheck = document.getElementById('check');
const femail = document.getElementById('email');
const fmessage = document.getElementById('message');
const ffile = document.getElementById('file');
const btn = document.getElementById('button1');
const alertComment = document.getElementById('alertComment');



let canSubmit = false;
let reaction = null;

function formlisteners() {
    fname.addEventListener('keyup', formSubmit);
    femail.addEventListener('keyup', formSubmit);
    fnumber.addEventListener('keyup', formSubmit);
    fmessage.addEventListener('keyup', formSubmit);
    ffile.addEventListener('keyup', formSubmit);
    fcheck.addEventListener('keyup', formSubmit);
}
formlisteners();

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function formSubmit() {
    //check the required field

    let message = fmessage.value.trim();
    let email = femail.value.trim();
    let name = fname.value.trim();
    let number = fnumber.value.trim();
    let check = fcheck.value.trim();
    let file = ffile.value.trim();

    if (message.length > 4 && email.length > 4 && name.length > 1 && file.length > 1 && number.length > 1 && check.length > 1) {
        alertComment.style.visibility = "hidden";
        if (validateEmail(email)) {
            btn.classList.add('activated');
            btn.disabled = false;
            canSubmit = true;

        } else {
            eJS_disabled_submit();
        }
    } else {
        alertComment.style.visibility = "visible";
        eJS_disabled_submit();
    }
};


function eJS_disabled_submit() {
    btn.classList.remove('activated');
    btn.disabled = true;
    canSubmit = false;
};