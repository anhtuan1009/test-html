$(document).ready(function() {

    $(document).ajaxStart(function() {
        $('.load').fadeIn(300);
    });
    $(document).ajaxComplete(function(event, xhr, settings) {
        $('.load').delay(500).fadeOut(500);
    });
    $(window).load(function(){
        $('.load').fadeOut(1000);
    });

});

// strat menu fixed
var num = 34; //number of pixels before modifying styles
if($(window).width() >= 991){
    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > num) {
            $('.header-top').addClass('hidden');
            $('header').addClass('fixed');
        } else {
            $('.header-top').removeClass('hidden');
            $('header').removeClass('fixed');
        }
    });
};
// end menu fixed


function callTooltip() {
    jQuery(document).tooltip({
        items: "ul.products li.type-product img",
        content: function() {
            var e = "<h4>" + jQuery(this).parent().children("h3").text() + "</h4>",
                t = '<div class="jquery-tooltip-content">' + jQuery(this).parent().children(".tooltip-content").html() + "</div>",
                r = jQuery(this).attr("srcset"),
                n = r.split(","),
                o = 0,
                c = jQuery(this).attr("src");
            jQuery.each(n, function(e, t) {
                t = t.trim(), arrSrcAndWidth = t.split(" "), src = arrSrcAndWidth[0], width = parseInt(arrSrcAndWidth[1]), o < width && (o = width, c = src)
            });
            var i = '<img src="' + c + '" title="' + e + '" />';
            return '<div class="jquery-tooltip-wrap">' + i + "<h4>Thông tin sản phẩm</h4>" + t + "</div>"
        },
        track: !0
    })
}


jQuery(function($) {

    if($('body').find(".slide-top").length > 0){
        $('.slide-top').camera({
            // height: 'auto',
            height: '43%',
            // loader: 'pie',
            loader: 'none',
            pagination: false,
            thumbnails: false,
            hover: false,
            opacityOnGrid: false,
        });
    };

    $("#btn-buy").click(function(){
        $("#sdt").addClass("show-tel", {duration:600,effect:'blind'});
        $("#lienhe").addClass("hidden", {duration:600,effect:'blind'});
    });



    var wow = new WOW({offset:50,mobile:false}); wow.init();

    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if(isChrome==true){
        $('.top a h2').addClass("text-gd");
    }

    $('#slide_gallery_tour').owlCarousel({
        loop:false,
        items: 1,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('#box-slide-doi-tac').owlCarousel({
        loop:true,
        responsive:{
            0:{ items:2 },
            480:{ items:2 },
            768:{ items:3 },
            992:{items:4 },
            1200:{items:4 },
        },
        margin:20,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('#slide-post-home-1').owlCarousel({
        loop:false,
        items: 3,
        nav:true,
        navText:['<img src="theme/frontend/images/icon/btn_slide_small.png">','<img src="theme/frontend/images/icon/btn_slide_small.png">'],
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            768:{ items:3 },
            992:{items:2, dots:false },
            1200:{items:3, dots:false }
        },
        margin:20,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('#slide-post-home-2').owlCarousel({
        loop:false,
        items: 3,
        nav:true,
        navText:['<img src="theme/frontend/images/icon/btn_slide_small.png">','<img src="theme/frontend/images/icon/btn_slide_small.png">'],
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            768:{ items:3 },
            992:{items:2, dots:false },
            1200:{items:3, dots:false }
        },
        margin:20,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('.slide-col-left-1').owlCarousel({
        loop:true,
        items: 1,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('.slide-col-left-2').owlCarousel({
        loop:true,
        items: 1,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('.slide-col-left-3').owlCarousel({
        loop:true,
        items: 1,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
    });


    $('.slide-doi-ngu').owlCarousel({
        loop:false,
        items: 4,
        margin:20,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            767:{ items:3 },
            991:{items:4, dots:false },
            1200:{items:4, dots:false },
        },
    });

    $('.slide-chung-nhan').owlCarousel({
        loop:false,
        items: 4,
        margin:20,
        dots:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:10000,
        smartSpeed:1500,
        responsive:{
            0:{ items:1 },
            480:{ items:2 },
            767:{ items:3 },
            991:{items:4, dots:false },
            1200:{items:4, dots:false },
        },
    });

    $('.feature .owl-controls').append('<i class="fa fa-angle-right smooth prev"></i>');
    $('.feature .owl-controls').prepend('<i class="fa fa-angle-left smooth next"></i>');
    $('.owl-controls .next').click(function(){
        $('.feature .owl-next').trigger("click");
    });
    $('.owl-controls .prev').click(function(){
        $('.feature .owl-prev').trigger("click");
    })

    $('.news-list').owlCarousel({
        loop:true,
        items: 1,
        margin:20,
        dots:false,
        nav:true,
        navText:['<i class="fa fa-angle-left smooth"></i>','<i class="fa fa-angle-right smooth"></i>'],
        autoplay:true,
        autoHeight:true,
        autoplayTimeout:8000,
        smartSpeed:1500,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
    });


    $(".map").click(function () {
        $(".map iframe").css("pointer-events", "auto");
    });
    $(".map iframe").mouseleave(function() {
        $(".map iframe").css("pointer-events", "none"); 
    });



});


$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) $('#goTop').fadeIn();
        else $('#goTop').fadeOut();
    });
    $('#goTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 'slow');
        return false;
    });

});


// $(window).scroll(function(){

//     var scroll = $(window).scrollTop();
//     if (scroll >= 200){
//         $(".primary-menu").addClass("scroll-fixed");
//     }else{
//         $(".primary-menu").removeClass("scroll-fixed");
//     }

// });




//Start JS counter
jQuery(function($) {

    //counter
    $('#count').data('countToOptions', {
        formatter: function(value, options) {
            return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
        }
    });

    // start all the timers
    $('.count_title').bind('inview', function(event, visible) {
        if (visible == true) {
            $('.count_title').each(count);
        }
    });

    function count(options) {
        var $this = $(this);
        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
        $this.countTo(options);
    }



    $('.nav-tabs-dropdown').each(function(i, elm) {
        $(elm).text($(elm).next('ul').find('li.active a').text());
    });
      
    $('.nav-tabs-dropdown').on('click', function(e) {
        e.preventDefault();    
        $(e.target).toggleClass('open').next('ul').slideToggle();    
    });

    $('#nav-tabs-wrapper a[data-toggle="tab"]').on('click', function(e) {
        e.preventDefault();    
        $(e.target).closest('ul').hide().prev('a').removeClass('open').text($(this).text());      
    });



});




var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
        }
    });
}
function onPlayerReady(event) {
    event.target.mute();
}