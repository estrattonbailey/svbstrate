$(document).ready(function(){
    
//Smooth scrolling anchors
    (function($) {
    $.fn.SmoothAnchors = function() {

        function scrollBodyTo(destination, hash) {

            // Change the hash first, then do the scrolling. This retains the standard functionality of the back/forward buttons.
            var scrollmem = $(document).scrollTop();
            window.location.hash = hash;
            $(document).scrollTop(scrollmem);
            $("html,body").animate({
                scrollTop: destination
            }, 1000);

        }

        if (typeof $().on == "function") {
            $(document).on('click', 'a[href^="#"]', function() {

                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
        else {
            $('a[href^="#"]').click(function() {
                var href = $(this).attr("href");

                if ($(href).length == 0) {

                    var nameSelector = "[name=" + href.replace("#", "") + "]";

                    if (href == "#") {
                        scrollBodyTo(0, href);
                    }
                    else if ($(nameSelector).length != 0) {
                        scrollBodyTo($(nameSelector).offset().top, href);
                    }
                    else {
                        // fine, we'll just follow the original link. gosh.
                        window.location = href;
                    }
                }
                else {
                    scrollBodyTo($(href).offset().top, href);
                }
                return false;
            });
        }
    };
})(jQuery);

$(document).ready(function() {
        $().SmoothAnchors();
});
    
   
//Enable scroll reveal on screens larger than mobile
if ($(window).width() > 400) {
    window.scrollReveal = new scrollReveal();
}
 
});