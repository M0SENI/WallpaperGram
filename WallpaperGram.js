$(document).ready(function () {
    $(document).scroll(function () { 
       let st = $(this).scrollTop();
       if (st > 280) {
        $('.first-nav').addClass('first-nav-edited');
       } else{
        $('.first-nav-edited').removeClass('first-nav-edited'); 
       }
    });
});