$(document).ready(function() {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
	})
	$(".bar").click(function() {
		
		if($(".menu-bar").hasClass("dis-vis")){
			$(".menu-bar").removeClass("dis-vis");
			$(".menu-bar").addClass("dis-hid");
		}
		else {
			$(".menu-bar").removeClass("dis-hid");
			$(".menu-bar").addClass("dis-vis");
		}
	});
	
	if($(window).width() < 690) {
	  $(".menu-bar").removeClass("dis-vis");
	  $(".menu-bar").addClass("dis-hid");
	}
	
    var backWid = $('.img-responsive').innerHeight();
    var prdtWid = $('#product-box').width();
    $('header').css('height',backWid-80);
    $('footer img').css('width', $(window).width());
    if(((prdtWid/4)-135)/2 >= 12) {
      $('main img').css('margin-left',((prdtWid/4)-140)/2);
      $('main img').css('margin-right',((prdtWid/4)-140)/2);
    }
    else {
      $('main img').css('margin-left',((prdtWid/2)-140)/2);
      $('main img').css('margin-right',((prdtWid/2)-140)/2);
    }
    if($(window).width() > 980) $('footer ul').css('margin-right', $(window).width()/20);
    if($(window).width() < 830) {
      $('footer #flogo').css('visibility', 'hidden');
      $('footer #country').css('visibility', 'hidden');
    }
    else {
      $('footer #flogo').css('visibility', 'visible');
      $('footer #country').css('visibility', 'visible');
    }
    if($(window).width() < 950) {
      $('header ul').css('margin-left', '0');
    }
    else $('header ul').css('margin-left', '5vw');
    if($(window).width() < 691) {
      $('header ul').css('background-color', 'rgba(232,244,222,0.87)');
      $('header ul').css('border-radius', '3px');
    }
    else {
      $('header ul').css('background-color', 'rgba(0,0,0,0)');
    }
    if($(window).width() > 750) $('header li a').css('font-size', $(window).width() / 50);

    $(window).resize(function() {
        backWid = $('.img-responsive').innerHeight();
        prdtWid = $('#product-box').width();
        $('header').css('height',backWid-80);
        if(((prdtWid/4)-135)/2 >= 12) {
          $('main img').css('margin-left',((prdtWid/4)-135)/2);
          $('main img').css('margin-right',((prdtWid/4)-135)/2);
        }
        else {
          $('main img').css('margin-left',((prdtWid/2)-135)/2);
          $('main img').css('margin-right',((prdtWid/2)-135)/2);
        }
        $('footer img').css('width', $(window).width());
        if($(window).width() > 980) $('footer ul').css('margin-right', $(window).width()/20);
        if($(window).width() < 830) {
          $('footer #flogo').css('visibility', 'hidden');
          $('footer #country').css('visibility', 'hidden');
        }
        else {
          $('footer #flogo').css('visibility', 'visible');
          $('footer #country').css('visibility', 'visible');
        }
        if($(window).width() < 950) {
          $('header ul').css('margin-left', '0');
        }
        else $('header ul').css('margin-left', '5vw');
        if($(window).width() < 691) {
          $('header ul').css('background-color', 'rgba(232,244,222,0.87)');
          $('header ul').css('border-radius', '3px');
        }
        else {
          $('header ul').css('background-color', 'rgba(0,0,0,0)');
        }
        if($(window).width() > 750) $('header li a').css('font-size', $(window).width() / 50);
    });
});


function resettext(id) {  //恢復文字
    if (id.value == "") {
        id.value = id.defaultValue;
        id.idName = "search-box";
    }
}

function cleartext(id) {  //清除文字
    id.value = "";
}
