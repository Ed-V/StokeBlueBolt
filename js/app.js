/**
 * Initialize foundation
 */
$(document).foundation();


$(document).ready(function(){
    $('#scrollToTop').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });
});