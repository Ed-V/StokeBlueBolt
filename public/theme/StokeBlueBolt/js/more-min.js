$(document).ready(function(){var s=250,e="...",t="Show more >",n="Show less";$(".more").each(function(){var n=$(this).html();if(n.length>s){var l=n.substr(0,s),a=n.substr(s,n.length-s),h=l+'<span class="moreellipses">'+e+'&nbsp;</span><span class="morecontent"><span>'+a+'</span>&nbsp;&nbsp;<a href="" class="morelink">'+t+"</a></span>";$(this).html(h)}}),$(".morelink").click(function(){return $(this).hasClass("less")?($(this).removeClass("less"),$(this).html(t)):($(this).addClass("less"),$(this).html(n)),$(this).parent().prev().toggle(),$(this).prev().toggle(),!1})});