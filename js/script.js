$(document).ready(function() {
    $("p").click(function() {
      $(".icons-showing").toggle();
      $(".icons-hidden").toggle();
    });
  });

$(document).ready(function () {
    $("p#design").click(function () {
        $("p#design").toggle();
    });
    $("p#development").click(function () {
        $("p#development").toggle();
    });
    $("p#product").click(function () {
        $("p#product").toggle();
    });

    $("ul#user").prepend("<li>Hello!</li>");
        $("ul#webpage").prepend("<li>Why hello there!</li>");
});

  