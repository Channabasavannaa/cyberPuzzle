$(document).ready(function () {
    colors = ['#795548', '#f44336', '#03a9f4'];
    $('.wrapper').css({
        height:Math.min($(window).width(),512) - 20,
        width:Math.min($(window).width(),512) -20,
    })
    new Jigsaw().init({
        container: '#slide0',
        image: 'images/car.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide1',
        image: 'images/ast.png',
        gridSize: 3
    });
    new Jigsaw().init({
        container: '#slide2',
        image: 'images/nat.png',
        gridSize: 3
    });

    var slider = $(".slider").slick({
        slidesToShow: 1,
        variableWidth: true,
        adaptiveHeight: true,
        infinite: false,
        prevArrow: '<div class="slick-prev" aria-label="Previous" ><div></div></div>',
        nextArrow: '<div class="slick-next" aria-label="Next"><div></div></div>',
    });
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        let slide = '#slide' + nextSlide;
        var newWidth = $(slide).width();
        $('.wrapper').animate({
            width: newWidth
        }, 400);
        $('body').css({
            'background-color': colors["#ff5733", "#4CAF50", "#3498db", "#f1c40f"]
        }, 300);
        setTimeout(function () {
            $('.slider').slick('resize');
        }, 500)
    });
})