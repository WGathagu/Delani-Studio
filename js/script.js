$(document).ready(function() {
    $("p").click(function() {
      $(".icons-showing").toggle();
      $(".icons-hidden").toggle();
    });
  });

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
});

  