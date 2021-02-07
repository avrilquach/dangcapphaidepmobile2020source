$(document).ready(function() {
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        preloader: true,
    });
    $('.lazy').lazy();
    var video = $(".main-videos");
    video.owlCarousel({
        center: true,
        items: 2,
        loop: true,
        nav: true,
        autoplay: false,
        autoWidth: true,
    });
    $('.menu-click').click(function(e) {
        $('.menu-mobile').toggleClass('active');
        $(".background_mobile").toggleClass('active');
    });
    $(".background_mobile").click(function(e) {
        $('.menu-mobile').removeClass('active');
        $(".background_mobile").removeClass('active');
    })
    $(".close_mobile").click(function(e) {
        $('.menu-mobile').removeClass('active');
        $(".background_mobile").removeClass('active');
    })
    $('.menu-mobile ul li').click(function(e) {
        $(this).toggleClass('current');
    });
    $('.main-banner').each(function() {
        var el = $(this);
        el.owlCarousel({
            center: true,
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeInLeft',
            smartSpeed: 200,
        });
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 0
    });
    var owl = $('#big');
    owl.owlCarousel({
        autoplay: 2000,
        items: 1,
        loop: true,
        onInitialized: counter,
        onTranslated: counter,
        dots: false
    });

    function counter(event) {
        var element = event.target;
        var items = event.item.count;
        var item = event.item.index + 1;
        if (item > items) {
            item = item - items
        }
        $('#counter').html("" + item + "/" + items)
    }
    $(".info_detailp .ctent").slice(0, 1).css("display", "flex");
    $('.read-more a').click(function(e) {
        var _this = $(this).parent().parent().parent().parent();
        _this.find(".ctent:hidden").slice(0, 1).css("display", "flex");
        $('html,body').animate({
            scrollTop: $(this).offset().top - (315)
        }, 1500);
    });
    $('.choose_ite a').click(function(e) {
        var _this = $(this).parent();
        _this.find('.choose_ite_box').toggleClass('active');
    });
    $('.filter ul li').click(function(e) {
        $('.loc-sp').toggleClass('active');
        $('body').toggleClass('active');
    });
    $('.close_locsp').click(function(e) {
        $('.loc-sp').toggleClass('active');
        $('body').toggleClass('active');
    });
    $('.loc-sp ul li').click(function(e) {
        $('.loc-sp ul li').removeClass('current');
        $(this).addClass('current');
    });
    $('.click').click(function(e) {
        $(this).parent().find('.box').toggleClass('current');
    });
    $('.account-info .item h4').click(function(e) {
        $(this).parent().find('ul').toggleClass('current');
        $(this).parent().find('h4').toggleClass('current');
    });
    $('.search').click(function(e) {
        $('.form-box-search').show();
    });
    $('.form-box-search a.cancelSearch').click(function(e) {
        $('.form-box-search').hide();
    });
    var customer = $('.main-customer');
    customer.owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-arrow-left" aria-hidden="true"></i>', '<i class="fa fa-arrow-right" aria-hidden="true"></i>'],
        items: 1,
        autoplay: true,
        smartSpeed: 200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    var customer = $('.main-bang-gia');
    customer.owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        autoplay: true,
        smartSpeed: 200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1
            },
            1200: {
                items: 1
            }
        }
    });
    $('.gallery-bachhoa').on('initialized.owl.carousel changed.owl.carousel', function(e) {
        if (!e.namespace) {
            return;
        }
        var carousel = e.relatedTarget;
        $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        dots: true,
    });
    $('#loadcate').click(function(e) {
        $('.loadcate').addClass('active');
    })
    $('.loadcate span').click(function(e) {
        $('.loadcate').removeClass('active');
    })
    $("#thongtinsanpham .ctent").slice(0, 1).css("display", "block");
    $('a.xem-them').click(function(e) {
        var _this = $(this).parent().parent().parent().parent();
        _this.find(".ctent:hidden").slice(0, 1).css("display", "block");
        $('html,body').animate({
            scrollTop: $(this).offset().top - (315)
        }, 1500);
    });
    //dangcapphaidep16092020
    $(".nav-fix-bt-detail .item:nth-child(3) a").click(function(e) {
        $(".popup-addcart").addClass("active");
        $(".nav-fix-bt-detail").hide();
    })
    $(".addcart .close").click(function(e) {
        $(".popup-addcart").removeClass("active");
        $(".nav-fix-bt-detail").show();
    })
    var number = parseInt($('input.number').val());
    $("span.number span.minius").click(function(e) {
        if (number == 0) return;
        number--;
        $('input.number').val(number);
    })
    $("span.number span.plus").click(function(e) {
        number++;
        $('input.number').val(number);
    })
    $(".box-dia-chi ._r a").click(function(e) {
        $(".popup-giaohang").addClass("active");
    })
    // giaohang
    $(".popup-giaohang .close").click(function(e) {
        $(".popup-giaohang").removeClass("active");
    })
    $(".popup-giaohang .choose").click(function(e) {
        $(".popup-giaohang .box").toggleClass("active");
    })
    $(".popup-giaohang .detail a:last-child").click(function(e) {
        $(".popup-giaohang").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    // diachi
    $(".popup-diachi .close").click(function(e) {
        $(".popup-giaohang").addClass("active");
        $(".popup-diachi").removeClass("active");
    })
    $(".popup-diachi .back").click(function(e) {
        $(".popup-giaohang").addClass("active");
        $(".popup-diachi").removeClass("active");
    })
    // thongtinxuathoadon
    $(".box-thong-tin-xuat-hoa-don a").click(function(e) {
        $(".popup-thong-tin-hoa-don").addClass("active");
    })
    $(".popup-thong-tin-hoa-don .close").click(function(e) {
        $(".popup-thong-tin-hoa-don").removeClass("active");
    })
    // ghichudonhang
    $(".box-ghi-chu-don-hang a").click(function(e) {
        $(".popup-ghi-chu-don-hang").addClass("active");
    })
    $(".popup-ghi-chu-don-hang .close").click(function(e) {
        $(".popup-ghi-chu-don-hang").removeClass("active");
    })
    // chontinhthanhpho
    $(".choose_tinh_thanhpho").click(function(e) {
        $(".popup-tinh-thanh-pho").addClass("active");
        $(".popup-diachi").removeClass("active");
    })
    $(".popup-tinh-thanh-pho .close").click(function(e) {
        $(".popup-tinh-thanh-pho").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    $(".popup-tinh-thanh-pho .back").click(function(e) {
        $(".popup-tinh-thanh-pho").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    // chonquanhuyen
    $(".choose_quan_huyen").click(function(e) {
        $(".popup-quan-huyen").addClass("active");
        $(".popup-diachi").removeClass("active");
    })
    $(".popup-quan-huyen .close").click(function(e) {
        $(".popup-quan-huyen").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    $(".popup-quan-huyen .back").click(function(e) {
        $(".popup-quan-huyen").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    // chonphuongxa
    $(".choose_phuong_xa").click(function(e) {
        $(".popup-phuong-xa").addClass("active");
        $(".popup-diachi").removeClass("active");
    })
    $(".popup-phuong-xa .close").click(function(e) {
        $(".popup-phuong-xa").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    $(".popup-phuong-xa .back").click(function(e) {
        $(".popup-phuong-xa").removeClass("active");
        $(".popup-diachi").addClass("active");
    })
    // popup dang ky
    $(".popup-dang-ky .close").click(function(e) {
        $(".popup-dang-ky").removeClass("active");
    })
    // rating 
    $(".choose-star ul li").click(function(e) {
        $(".choose-star li").removeClass("active");
        var data = $(this).attr("data-value");
        $(this).addClass("active");
        $(".choose-star input[name='rating']").val(data);
    })
    $(".thongtinsanpham .show-data a").click(function(e) {
        $(".thongtinsanpham .content").css("height", "auto");
        $(".thongtinsanpham .content").css("overflow", "unset");
        $(".thongtinsanpham .show-data").hide();
    })
    $(".size li").click(function(e) {
        $(".size li").removeClass("active");
        $(this).addClass("active");
        var old = $(this).find("span.old").html();
        var data = $(this).find("span.new").html();
        $(".options .price-new").html(data);
        $(".options .price-old").html(old);
    })
    $(".mua-chung input[type='checkbox']").click(function(e) {
        var id = $(this).attr("id");
        var ele = id + "_new";
        $("#" + ele).toggleClass("active");
    })
    $(".mua-chung .xct").click(function(e) {
        $(".mua-chung .detail2").show();
        $(".mua-chung .xct").hide();
        $(".mua-chung .tg").show();
    })
    $(".mua-chung .tg").click(function(e) {
        $(".mua-chung .detail2").hide();
        $(".mua-chung .tg").hide();
        $(".mua-chung .xct").show();
    })
    $(".category .middle-category .top li").click(function(e) {
        $(".bg-category").show();
		if($(this).hasClass("active")){
			$(this).removeClass("active");
            $(".category .middle-category .open").removeClass("active");
            $(".bg-category").hide();
		}
		else{
			$(".category .middle-category li").removeClass("active");
			$(".category .middle-category .open").removeClass("active");
			$(this).addClass("active");
			var id = $(this).attr("id");
			$("." + id).addClass("active");
			if ($(".middle-category ul.top li").hasClass("active")) {
				$(this).find("img").attr("src", "img/arrowdowncate2.svg")
			} else {
				$(".middle-category ul.top li").find("img").attr("src", "img/arrowdowncate3.svg")
			}
		}
    })
    $(".bg-category").click(function(e){
        $(this).hide();
        $(".middle-category ul.top li").removeClass("active");
        $(".middle-category .open").removeClass("active");
        $(".middle-category ul.top li img").attr("src", "img/arrowdowncate.svg");
    })
    $(".dm").click(function(e) {
        var id = $(this).attr("class");
        $("#" + id).addClass("active");
        setTimeout(() => {
            $(".sidebar_thuonghieu").css("bottom",0);
        },500);
    })
    $(".loc").click(function(e) {
        var id = $(this).attr("class");
        $("#" + id).addClass("active");
        setTimeout(() => {
            $(".sidebar_thuonghieu").css("bottom",0);
        },500);
    })
    $(".close2").click(function(e) {
        $(".box-bottom").removeClass("active");
        setTimeout(() => {
            $(".sidebar_thuonghieu").css("bottom",'-100%');
        },500);
    })
    $(".back2").click(function(e) {
        $(".box-bottom").removeClass("active");
        setTimeout(() => {
            $(".sidebar_thuonghieu").css("bottom",'-100%');
        },500);
    })
    $(".thong_tin_tai_khoan .box").click(function(e) {
        $(this).toggleClass("active");
    })
    $(".san_pham_da_xem_2 .write").click(function(e) {
        $(".bgpopup").show();
        $(".popup").show();
    })
    $(".popup .close_popup").click(function(e) {
        $(".bgpopup").hide();
        $(".popup").hide();
    })
    $(".bgpopup").click(function(e) {
        $(".bgpopup").hide();
        $(".popup").hide();
    })
    $(".sanphamdaxem a.xt").click(function(e) {
        $(".sanphamdaxem .main-products ul").append("<li class='swiper-slide'> <div class='inner'><img class='product' src='img/image2.jpg' alt=''><span class='title'>Sữa rửa mặt dành cho nam giới Maria Galland 900...</span><span class='star row align-items-center'><img src='img/Star3.svg' alt=''><img src='img/Star3.svg' alt=''><img src='img/Star3.svg' alt=''><img src='img/Star3.svg' alt=''><img src='img/Star2.svg' alt=''><span>(20)</span></span><span class='price row align-items-center'><span class='new'>500.000đ</span><span class='old'>750.000đ</span></span></div><a class='addtocart row justify-content-center align-items-center'>Thêm giỏ hàng            </a> </li>")
    })
    $(".top_thuong_hieu .right .xt").click(function(e) {
        $(".top_thuong_hieu .right .hide").hide();
        $(".top_thuong_hieu .right .show").show();
	})
	$(".tag .xtc").click(function(e){
		if($(this).hasClass("active")){
			$(".tag ul").css("height","90px");
			$(".tag .xtc").html("Xem thêm");
			$(this).removeClass("active");
		}
		else
		{
			$(".tag ul").css("height","auto");
			$(".tag .xtc").html("Rút gọn");
			$(this).addClass("active");
		}
    })
    $(".search-page-mobile .form input").keyup(function() {
        $(".search-page-mobile .box-search").show();
        $(".search-page-mobile .box-open").hide();
      });
      $(".search-page-mobile .box-open li").click(function(e){
          var text = $(this).html();
          $(".search-page-mobile .form input").val(text);
      })
    $(".alpha ul li").click(function(e){
        $(".category .middle-category .alpha ul li").removeClass("active");
        $(".category .middle-category .open .box-filter .box-filter-4 div").removeClass("active");
        $(this).addClass("active");
        var id = $(this).attr("id");
        $("."+id).addClass("active");
    })
});