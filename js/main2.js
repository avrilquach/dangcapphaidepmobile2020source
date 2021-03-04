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
 });