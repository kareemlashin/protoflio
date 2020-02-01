$(document).ready(function () {
    $("#loading").fadeOut(1000, function () {
        $("body").css({ overflow: "auto" })
    })
    $("nav .nav-links li a").click(function () {
        let hrefLink = $(this).attr("href");
        $("html,body").animate({ scrollTop: $(hrefLink).offset().top }, 1000)
    })
    AOS.init();

    $("#bars").click(function () {
        let sideNavLeft = $(".side-nav").css("left");
        if (sideNavLeft < 0 + "px") {
            $(".side-nav").animate({ left: "0%" }, 1000);
            $("#bars").animate({ left: "50%" }, 1000);
            sideNavLeft = 0;
        } else {
            $(".side-nav").animate({ left: "-300px" }, 1000);
            $("#bars").animate({ left: "1%" }, 1000);
            sideNavLeft = -300;
        }
    })
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    function validPass(pass) {
        let passRegex = /^[A-z0-9]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        } else {
            return false;
        }
    }
    function validMassage(massage) {
        let massageRegex = /^[A-z0-9]{20,100}$/;
        if (massageRegex.test(massage)) {
            return true;
        } else {
            return false;
        }
    }
    function validPhone(phone) {
        let PhoneRegex = /^(02)?(010|011|012|015)[0-9]{7}$/;
        if (PhoneRegex.test(phone)) {
            return true;
        } else {
            return false;
        }
    }
    $("#inpPhone").keyup(function () {
        let telValue = $("#inpPhone").val();
        if (validPhone(telValue) == true) {
            $("#phoneError").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#phoneError").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#messageInp").keyup(function () {
        let messageValue = $("#messageInp").val();
        if (validMassage(messageValue) == true) {
            $("#errorMassage").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorMassage").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })



    $("#inpName").keyup(function () {
        let nameValue = $("#inpName").val();
        if (validName(nameValue) == true) {
            $("#erorrName").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrName").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })

    $("#inpEmail").keyup(function () {
        let emailValue = $("#inpEmail").val();
        if (validEmail(emailValue) == true) {
            $("#erorrEmail").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrEmail").css("display", "block")
            $("#send").attr("disabled", "true")
        }
    })

    $("#messageInp").keyup(function () {
        $("#manyChar").css("display", "block")
        let manyCharMax = $(this).attr("maxlength");
        let manyChar = document.getElementById("messageInp").value;
        let x = manyChar.length;
        $("#manyChar").text(manyCharMax - x)
        if (manyCharMax - x == 0) {
            $("#manyChar").css("color", "#4ac4e6")
        } else {
            $("#manyChar").css("color", "#fff")

        }
    })


    $("#send").click(function () {
        resetInput();
    })

    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }
    var typed6 = new Typed('.element', {
        strings: ['front-end', 'and', 'Ui developer'],
        typeSpeed: 200,
        backSpeed: 50,
        loop: true
    });
    var typed7 = new Typed('.element2', {
        strings: ['Your Web site'],
        typeSpeed: 200,
        backSpeed: 50,
        loop: true
    });
    $(".chose ul li a").click(function () {
        let filterAttr = $(this).attr("data-filter");
        if (filterAttr == "all") {
            $(".filter").slideDown(1000);
        } else {
            $('.filter').not("." + filterAttr).slideUp(1000);
            $('.filter').filter("." + filterAttr).slideDown(1000);
        }
    })
    $(".chose ul li").click(function () {
        $(this).addClass("activeX");
        $(this).siblings().removeClass("activeX")
    })
    $(window).scroll(function () {

        $(".nav-links li").addClass("activeX")

    })
})