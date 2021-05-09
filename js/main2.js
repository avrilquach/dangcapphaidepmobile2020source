$(document).ready(function () {
  var big  = "big";
  loadproduct(big);
  var big2  = "big2";
  loadproduct(big2);
  var big3  = "big3";
  loadproduct(big3);
  var big4  = "big4";
  loadproduct(big4);
  var big5  = "big5";
  loadproduct(big5);
  function loadproduct(data){
    var owl = $('#'+data);
    owl.owlCarousel({
        autoplay: 2000,
        items: 1,
        loop: true,
        dots: true,
    });
  } 
    function counter(event) {
        var element = event.target;
        var id = event.target.id;
        if($("#"+id).hasClass("active")){
          var items = event.item.count;
          var item = event.item.index + 1;
          if (item > items) {
              item = item - items
          }
          $('#counter').html("" + item + "/" + items)
        }
    }
    var bigreview = "big-review";
  var thumbsreview = "thumbs-review";
  gallery_slider2(bigreview, thumbsreview);
 });

 function gallery_slider2(data1, data2)
 {
     var bigimage = $("#"+data1);
     var thumbs = $("#"+data2);
     //var totalslides = 10;
     var syncedSecondary = true;
 
     bigimage
       .owlCarousel({
       items: 1,
       slideSpeed: 2000,
       nav: false,
       autoplay: false,
       dots: false,
       loop: true,
       responsiveRefreshRate: 200
     })
       .on("changed.owl.carousel", syncPosition);
 
     thumbs
       .on("initialized.owl.carousel", function() {
       thumbs
         .find(".owl-item")
         .eq(0)
         .addClass("current");
     })
       .owlCarousel({
       items: 4,
       dots: true,
       nav: true,
       smartSpeed: 200,
       slideSpeed: 500,
       slideBy: 3,
       responsiveRefreshRate: 100,
       margin: 10,
     })
       .on("changed.owl.carousel", syncPosition2);
 
     function syncPosition(el) {
       //if loop is set to false, then you have to uncomment the next line
       //var current = el.item.index;
 
       //to disable loop, comment this block
       var count = el.item.count - 1;
       var current = Math.round(el.item.index - el.item.count / 2 - 0.5);
 
       if (current < 0) {
         current = count;
       }
       if (current > count) {
         current = 0;
       }
       //to this
       thumbs
         .find(".owl-item")
         .removeClass("current")
         .eq(current)
         .addClass("current");
       var onscreen = thumbs.find(".owl-item.active").length - 1;
       var start = thumbs
       .find(".owl-item.active")
       .first()
       .index();
       var end = thumbs
       .find(".owl-item.active")
       .last()
       .index();
 
       if (current > end) {
         thumbs.data("owl.carousel").to(current, 100, true);
       }
       if (current < start) {
         thumbs.data("owl.carousel").to(current - onscreen, 100, true);
       }
     }
 
     function syncPosition2(el) {
       if (syncedSecondary) {
         var number = el.item.index;
         bigimage.data("owl.carousel").to(number, 100, true);
       }
     }
 
     thumbs.on("click", ".owl-item", function(e) {
       e.preventDefault();
       var number = $(this).index();
       bigimage.data("owl.carousel").to(number, 300, true);
     });
 }