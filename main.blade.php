@extends('index')
@section('content')



<!-- Start Slide bootstrap 3 -->
<div class="bg-slide">    
  <section class="box-slide-top">
    <div class="slider">
        <!--DBS-l.slide.1|w:act = 1|o:ord ASC|l:0,10-->
          <div data-src="{(itemslide1.img)}" data-link="{(itemslide1.link)}" data-title="{(itemslide1.name)}"></div>  
        <!--DBE-l.slide.1-->
    </div>
  </section>
</div>
<!-- End Slide bootstrap 3 -->



<!-- Start Box 1 -->
<article class="div pdtb30">
  <div class="container-fluid">
    <div class="container">
      <div class="row">

          <div class="col-md-12">
            <div class="div line-dot mgbt30">
                <h2 class="title2">Sản phẩm nổi bật</h2>
            </div>

            <div class="div slide-gallery">

              <!--DBS-l.pro.0|w:act = 1,hot = 1|o:ord ASC|l:0,12-->
              <div class="item-gallery">
                <div class="box-img">
                  <img src="{(itempro0.img)}" alt="{(itempro0.name)}" class="img-reponsive">
                </div>
                <div class="title-gallery image-shop-scroll">
                  <h3 class="title3"><a href="{(itempro0.slug)}" title="{(itempro0.name)}">{(itempro0.name)}</a></h3>
                  
                  <!-- <a class="read-more text-center" href="{(itempro0.slug)}" title="">Xem chi tiết <i class="fa fa-angle-double-right"></i></a> -->
                </div>

              </div>
              <!--DBE-l.pro.0-->                         

            </div>
          </div>

      </div>
    </div>
  </div>
</article>
<!-- End Box 1 -->




<!-- Start Box 2 -->
<article class="div box2 pdtb20 wow fadeInUp">
  <div class="container-fluid">
    <div class="container">
      <div class="row">

          @include('col_left')

          <!-- Start box content home-->
          <div class="col-lg-9 col-md-8 col-sm-7 box-content-home">

      {@ $a = 1; @}
      <!--DBS-l.pro_categories.2|w:act = 1,parent = 0,hot = 1|o:ord ASC|l:0,10-->
            <section class="row box-cate-home wow fadeInRight mgbt30">

                <div class="div line-dot mgbt30">
                  <h2 class="title2">{(itempro_categories2.name)}</h2>
                </div>

                <div class="box">
                    <div id="slide-post-home-{@ echo $a++; @}" class="box">

                      <!--DBS-l.pro.2|w:act = 1,parent = $itempro_categories2['id']|o:ord ASC|l:0,12-->
                        <div class="item-new-home">
                          <div class="box-img">
                            <img class="scaledown" src="{(itempro2.img)}" alt="{(itempro2.name)}">              
                          </div>
                          <div class="box-info text-center">
                            <h3 class="title3"><a href="{(itempro2.slug)}" title="{(itempro2.name)}">{(itempro2.name)}</a></h3>
                            <div class="info">
                              <p class="p-bold">GiÁ: <span>{(itempro2.price)}</span></p>
                            </div>


                            {@ if(@$itempro2[price]){ @}
                              <a class="read-more text-center f-left" href="javascript:;" onclick="buypro_noquan({(itempro2.id)})">Đặt hàng <i class="fa fa-angle-double-right"></i></a>
                            {@ }else{ @}
                              <a class="read-more text-center f-left" href="lien-he" title="Liên hệ">Liên hệ <i class="fa fa-angle-double-right"></i></a>
                            {@ } @}

                            <a class="read-more text-center f-right" href="{(itempro2.slug)}" title="">Xem chi tiết <i class="fa fa-angle-double-right"></i></a>
                          </div>
                        </div>
                      <!--DBE-l.pro.2-->

                    </div>
                </div>
              
            </section>

      <!--DBE-l.pro_categories.2-->


          </div>
          <!-- End box content home-->

      </div>
    </div>
  </div>
</article>
<!-- End Box 2 -->



@stop