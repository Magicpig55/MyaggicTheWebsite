$(function () {
    var header = $("body header");
    $(window).scroll(function (e) {
        if ($(window).scrollTop() > 80) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        if ($(window).scrollTop() > 100) {
            header.addClass("nobg");
        } else {
            header.removeClass("nobg");
        }
    });
});