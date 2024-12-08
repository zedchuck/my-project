function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        File: document.getElementById("file").value,
        message: document.getElementById("message").value,
        check: document.getElementById("check").value,
    };

    let infoPage = document.getElementById("info");
    let payPage = document.getElementById("pay");

    infoPage.style.display = "none";
    payPage.style.display = "block";

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

// document.getElementById("myForm").addEventListener("submit", function (event) {
//     event.preventDefault();
// });