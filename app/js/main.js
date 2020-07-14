$(function () {

    $('.main-slider__inner').slick({
        arrows: false,
        infinite: true,
        asNavFor: '.dots-slider__inner'
    });
    $('.dots-slider__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        arrows: false,
        asNavFor: '.main-slider__inner'
    });
    $('.works-slider').slick({
        arrows: false,
        centerMode: true,
        infinite: true,
        variableWidth: true
    });
    $('.properties-slider').slick({
        arrows: false,
        centerMode: true,
        infinite: true,
        variableWidth: true
    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').slideToggle();
    });

    $('select').styler();



})