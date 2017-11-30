<!DOCTYPE html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <?php echo ENUY_TITLE(@$dataitem?$dataitem:NULL); ?>
  <META NAME="ROBOTS" CONTENT="INDEX, FOLLOW">

  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&amp;subset=vietnamese" rel="stylesheet"> -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>


    <link href="theme/frontend/css/font-awesome.min.css" type="text/css" rel="stylesheet" />

    <link href="theme/frontend/css/camera.css" type="text/css" rel="stylesheet" />
    <link href="theme/frontend/css/animate.css" type="text/css" rel="stylesheet" />

    <link href="theme/frontend/css/owl.carousel.min.css" type="text/css" rel="stylesheet" />
    <!-- <link href="theme/frontend/css/owl.theme.css" type="text/css" rel="stylesheet" /> -->
    <link href="theme/frontend/css/owl.theme.default.min.css" type="text/css" rel="stylesheet" />
    <link href="theme/frontend/css/owl.transitions.css" type="text/css" rel="stylesheet" />

    <link href="theme/frontend/css/style.css" type="text/css" rel="stylesheet" />

  <script src="theme/frontend/js/jquery-2.2.1.min.js"></script>

</head>
<body>



  @include('cart.callcart')
  
  @include('header')

  @yield('content')

  @include('footer')







  <div id="goTop" >
    <div class="go_top" title="Lên trên">
      <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </div>
  </div>




  <script type="text/javascript">
    /* Thanks to CSS Tricks for pointing out this bit of jQuery
    http://css-tricks.com/equal-height-blocks-in-rows/
    It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

    equalheight = function(container){

    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
     $(container).each(function() {

       $el = $(this);
       $($el).height('auto');
       topPostion = $el.position().top;

       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }
         rowDivs.length = 0;
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
       } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
     });
    }

    // fix chieu cao div - auto-height
    $(window).load(function() {
      equalheight('.box-cate-home .box-info');
      equalheight('.box-page-list-post .item-list-post');
      equalheight('.item-new-home .box-info');
      equalheight('.box-search .full480');
    });


    $(window).resize(function(){
      equalheight('.box-cate-home .box-info');
      equalheight('.box-page-list-post .item-list-post');
      equalheight('.item-new-home .box-info');
      equalheight('.box-search .full480');
    });

  </script>

  <script src="theme/frontend/js/jquery.easing.1.3.js" defer></script>
  <script src="theme/frontend/js/camera.min.js" defer></script>

  <script src="theme/frontend/js/owl.carousel.js" defer></script>
  <script src="theme/frontend/js/owl.carousel.min.js" defer></script>


  <script src="theme/frontend/js/wow.js" defer></script>


  <script src="theme/frontend/js/jquery.matchHeight.js"></script>


  <script src="theme/frontend/js/script.js" defer></script>
  <script src="theme/frontend/plug/script.js" type="text/javascript"></script>

</body>
</html>
