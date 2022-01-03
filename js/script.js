
//Design
$(document).ready(function () {
    $("p#design").click(function () {
        $("p#design").toggle();
        $("p#des").show();
        $("p#des_description").show();
        $("p#des_description").text("Design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style. Designers aim to create interfaces which users find easy to use and pleasurable.");
        $("p#des").css("font-weight", "bold");
    });
    /* $("p#des").click(function () {
        $("p#des").toggle();
        $("p#design").show();
    }); */
    $("p#des_description").click(function () {
        $("p#des_description").toggle();
        $("p#design").show();
        $("p#des").css("font-weight", "normal");
    });

    //Development
    $("p#development").click(function () {
        $("p#development").toggle();
        $("p#dev").show();
        $("p#dev_description").show();
        $("p#dev_description").text("development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.");
        $("p#dev").css("font-weight", "bold");
    });

    $("p#dev_description").click(function () {
        $("p#dev_description").toggle();
        $("p#development").show();
        $("p#dev").css("font-weight", "normal");
    });

    //Product
    $("p#product").click(function () {
        $("p#product").toggle();
        $("p#prod").show();
        $("p#prod_description").show();
        $("p#prod_description").text("Product management is an organisational function within a company dealing with new product development, business justification, planning, verification, forecasting, pricing, product launch, and marketing of a product or products at all stages of the product lifecycle.");
        $("p#prod").css("font-weight", "bold");
    });

    $("p#prod_description").click(function () {
        $("p#prod_description").toggle();
        $("p#product").show();
        $("p#prod").css("font-weight", "normal");
    });

    //Hover

    $("img#blank").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Blank Pages Art Projects");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#ontario").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Ontario Project");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#pentagon").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Pentagon Orange Project");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#news").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Daily News Project");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#user_interface").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Best UI Projects");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#elements").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Many Elements Projects");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#burned").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Burned Sample Project");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    $("img#bailey").hover(function () {
        $("p").addClass("hover");
        $("p.hover").text("Bailey Giraffe Project");
        $(".hover").show().offset($(this).offset());
    }, function () {
        $(".hover").hide();
    });

    var name, email, message;
    //events
    const form = document.querySelector("#myform");

    form.addEventListener("submit", function (event) {
        //get entries
        name = document.getElementById('name').value;
        email = document.getElementById('email').value;
        message = document.getElementById('message').value;

        userPopup();

    }, false);

    function userPopup() {

        alert(name + ", we have received your message. Thank you for reaching out to us.");

    }

});

