//First Form
var form1 = document.querySelector(".first");
var icun1 = document.querySelector(".first i");
var register = document.querySelector(".first > a");
var password1 = document.querySelector(".first input[type=password]")


register.onclick = function (e) {

    e.preventDefault()

    form2.style.left = "32px";

    form1.style.left = "-100%"
}

icun1.onclick = function () {

    if (password1.type === "password") {

        password1.type = "text";

        this.className = "fa-regular fa-eye";

        this.style.color = "#ff0000c2";

    } else {
        password1.type = "password";
        this.className = "fa-regular fa-eye-slash";
        this.style.color = "black"
    }
}

//Last Form
var form2 = document.querySelector(".last");
var icun2 = document.querySelector(".last i");
var sign = document.querySelector(".last > a");
var password2 = document.querySelector(".last input[type=password]")

sign.onclick = function (e) {

    e.preventDefault()

    form1.style.left = "32px";

    form2.style.left = "100%"
}

icun2.onclick = function () {

    if (password2.type === "password") {

        password2.type = "text";

        this.className = "fa-regular fa-eye";

        this.style.color = "#ff0000c2";

    } else {
        password2.type = "password";
        this.className = "fa-regular fa-eye-slash";
        this.style.color = "black"
    }
}
