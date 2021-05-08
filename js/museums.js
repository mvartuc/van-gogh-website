$(".show-more-btn-pnt-left").click(function () {
    $(this).parent().addClass("d-none");
    var row = $(this).parent().parent();
    row.children(".museums-left-img").removeClass("col-lg-11").addClass("col-lg-7");
    if ($(this).children(".bi-arrow-bar-down").css("display") == "none") {
        row.children(".museums-left-img").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
            row.children(".museums-right-text").removeClass("d-none");
        });
    } else {
        row.children(".museums-right-text").removeClass("d-none");
    }
});

$(".show-more-btn-pnt-right").click(function () {
    $(this).parent().addClass("d-none");
    var row = $(this).parent().parent();
    row.children(".museums-right-img").removeClass("col-lg-11").addClass("col-lg-7");
    if ($(this).children(".bi-arrow-bar-down").css("display") == "none") {
        row.children(".museums-right-img").one("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
            row.children(".museums-left-text").removeClass("d-none");
        });
    } else {
        row.children(".museums-left-text").removeClass("d-none");
    }
});

$(".show-more-btn").hover(function () {
    $(this).children(".bi-arrow-bar-right").css({ "margin-left": "10px" });
    $(this).children(".bi-arrow-bar-left").css({ "margin-right": "10px" });
    $(this).children(".bi-arrow-bar-down").css({ "margin-top": "10px" });
}, function () {
    $(this).children(".bi-arrow-bar-right").css({ "margin-left": "0" });
    $(this).children(".bi-arrow-bar-left").css({ "margin-right": "0" });
    $(this).children(".bi-arrow-bar-down").css({ "margin-top": "0" });
});