$(function() {
    /* Will close the navigation if the window width goes below 1100px */
    $(window).resize(function(event) {
        if ($(this).width < 1100) {
            $(".navbar__container").removeClass("navbar__container--open").addClass("navbar__container--closed");
        }
    });

    /* For opening the navigation */
    $(".navbar__trigger").on("click", function(event) {
        event.preventDefault();
        $(".navbar__container").removeClass("navbar__container--closed").addClass("navbar__container--open");
    });

    /* For closing the navigation */
    $(".navbar__item--cta-button").on("click", function(event) {
        event.preventDefault();
        $(".navbar__container").removeClass("navbar__container--open").addClass("navbar__container--closed");
    });
});
