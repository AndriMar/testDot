'use strict';
$(function() {
    function set_body_height() {
        $('body').height($(window).height());
    }
    $(window).bind('resize', set_body_height);
    set_body_height();
});
