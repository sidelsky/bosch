$(document).ready(function(){


	$.extend($.easing, {
		def: 'easeOutQuad',
		swing: function (x, t, b, c, d) {
                //alert($.easing.default);
                return $.easing[$.easing.def](x, t, b, c, d);
          },
          easeInQuad: function (x, t, b, c, d) {
           return c * (t /= d) * t + b;
     },
     easeOutQuad: function (x, t, b, c, d) {
           return -c * (t /= d) * (t - 2) + b;
     },
     easeInOutQuad: function (x, t, b, c, d) {
           if ((t /= d / 2) < 1) return c / 2 * t * t + b;
           return -c / 2 * ((--t) * (t - 2) - 1) + b;
     },
     easeInCubic: function (x, t, b, c, d) {
           return c * (t /= d) * t * t + b;
     },
     easeOutCubic: function (x, t, b, c, d) {
           return c * ((t = t / d - 1) * t * t + 1) + b;
     },
     easeInOutCubic: function (x, t, b, c, d) {
           if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
           return c / 2 * ((t -= 2) * t * t + 2) + b;
     },
     easeInQuart: function (x, t, b, c, d) {
           return c * (t /= d) * t * t * t + b;
     },
     easeOutQuart: function (x, t, b, c, d) {
           return -c * ((t = t / d - 1) * t * t * t - 1) + b;
     },
     easeInOutQuart: function (x, t, b, c, d) {
           if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
           return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
     },
     easeInQuint: function (x, t, b, c, d) {
           return c * (t /= d) * t * t * t * t + b;
     },
     easeOutQuint: function (x, t, b, c, d) {
           return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
     },
     easeInOutQuint: function (x, t, b, c, d) {
           if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
           return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
     },
     easeInSine: function (x, t, b, c, d) {
           return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
     },
     easeOutSine: function (x, t, b, c, d) {
           return c * Math.sin(t / d * (Math.PI / 2)) + b;
     },
     easeInOutSine: function (x, t, b, c, d) {
           return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
     },
     easeInExpo: function (x, t, b, c, d) {
           return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
     },
     easeOutExpo: function (x, t, b, c, d) {
           return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
     },
     easeInOutExpo: function (x, t, b, c, d) {
           if (t == 0) return b;
           if (t == d) return b + c;
           if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
           return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
     },
     easeInCirc: function (x, t, b, c, d) {
           return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
     },
     easeOutCirc: function (x, t, b, c, d) {
           return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
     },
     easeInOutCirc: function (x, t, b, c, d) {
           if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
           return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
     },
     easeInElastic: function (x, t, b, c, d) {
           var s = 1.70158;
           var p = 0;
           var a = c;
           if (t == 0) return b;
           if ((t /= d) == 1) return b + c;
           if (!p) p = d * .3;
           if (a < Math.abs(c)) {
                a = c;
                var s = p / 4;
          } else var s = p / (2 * Math.PI) * Math.asin(c / a);
          return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
     var s = 1.70158;
     var p = 0;
     var a = c;
     if (t == 0) return b;
     if ((t /= d) == 1) return b + c;
     if (!p) p = d * .3;
     if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
},
easeInOutElastic: function (x, t, b, c, d) {
     var s = 1.70158;
     var p = 0;
     var a = c;
     if (t == 0) return b;
     if ((t /= d / 2) == 2) return b + c;
     if (!p) p = d * (.3 * 1.5);
     if (a < Math.abs(c)) {
          a = c;
          var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);
    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
},
easeInBack: function (x, t, b, c, d, s) {
     if (s == undefined) s = 1.70158;
     return c * (t /= d) * t * ((s + 1) * t - s) + b;
},
easeOutBack: function (x, t, b, c, d, s) {
     if (s == undefined) s = 1.70158;
     return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
},
easeInOutBack: function (x, t, b, c, d, s) {
     if (s == undefined) s = 1.70158;
     if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
     return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
},
easeInBounce: function (x, t, b, c, d) {
     return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
},
easeOutBounce: function (x, t, b, c, d) {
     if ((t /= d) < (1 / 2.75)) {
          return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
          return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
          return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
          return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
},
easeInOutBounce: function (x, t, b, c, d) {
     if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
     return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
}
});


function do_match_height(){
    var match_height = $('.match-height'),
    get_height = $('.fp-tableCell').innerHeight();
    match_height.height(get_height);
    //console.log('Window height ' + get_height);
}

//do_match_height();

$(window).resize(function(){
	//do_match_height();
	//s.refresh();
});




//End
});


/*$(window).load(function(){

});*/

window.onload = function() {


$(function() {
      $( "#normal_select, #disabled, #opt_group, #multiple" ).dropkick({
        mobile: true
      });
      var dk = new Dropkick( "#search_select", {
        mobile: true,
        initialize: function() {
          var $input,
            dk = this;
          $( '.dk-selected', dk.data.elem ).after([
            '<div class="dk-search">',
              '<input type="text" class="dk-search-input" placeholder="Search">',
            '</div>',
          ].join(""));

          $input = $( ".dk-search-input", dk.data.elem );

          $input.on( "click", function ( event ) {
            event.stopPropagation();

          }).on( "keypress keyup", function ( event ) {
            var found = dk.search( this.value );

            event.stopPropagation();

            $( '.dk-option', dk.data.elem ).remove();

            if ( found.length ) {
              $( found ).appendTo( dk.data.elem.lastChild );
              dk.selectOne( found[0] );
            } else {
              $( "<li></li>" ).addClass( "dk-option dk-option-disabled" ).text( "Not Found" ).appendTo( dk.data.elem.lastChild );
            }

            found.length && dk.selectOne( found[0] );
          });
        },

        open: function() {
          $( '.dk-search-input', this.data.elem ).focus();
        },

        close: function() {
          $( '.dk-search-input', this.data.elem ).val("").blur();
          $( '.dk-option', this.data.elem ).remove();
          $( this.options ).appendTo( this.data.elem.lastChild );
        }
      });

      $(".gist-container").each(function(gist) {
        if (gist.offsetHeight > 160) {
          $(".btn", gist).css('display', 'inline-block').on('click', function() {
            var $gistWrapper = $(".gist-wrapper", gist);

            if($gistWrapper.css('maxHeight') == "100%"){
              $gistWrapper.css('maxHeight', "");
              $gistWrapper.css('overflow', "");
              this.innerHTML = "Show Full Code";
              return false;
            } else {
              $gistWrapper.css('maxHeight', "100%");
              $gistWrapper.css('overflow', "visible");
              this.innerHTML = "Hide Code";
              return false;
            }
          })
        }
      });

    });


$("input[type=file]").nicefileinput();

$(".scroll-down img").click(function() {
    $('html, body').animate({
        scrollTop: $("#stop").offset().top
    }, 750, 'easeInOutExpo');
});

	//Animate
	var character_001 = $('.character-001').css('top', '-800px'), 
   introAni = $('.introAni').css('opacity', '0');

   $('#message').html('Complete ;-)');

$('.loading').delay(1000).fadeOut('slow', function() {
    $('.preloader').slideUp(1000, 'swing', function(){
        introAni.animate({
            opacity: '1'
      },800, 'swing', function() {
            /* stuff to do after animation is complete */
            character_001.animate({
                top: '0px'
          },2000, 'swing', function() {
                /* stuff to do after animation is complete */
          });
      });
  });
});




//Input fields
var fields = $('.fields input'),
    sliding = $('.sliding-u-l-r');

fields.focus(function(){
  $(this).parent().children(sliding).addClass('active');
});
fields.blur(function(){
  $(this).parent().children(sliding).removeClass('active');
}); 

// fields.val(function(){
// $(this).addClass('value');
// })

fields.blur(function() {
  if( $(this).val() ) {
    $(this).addClass('has-value');
  }
});


$('.cssmenu li.active').addClass('open').children('ul').show();

$('.cssmenu li.has-sub>a').on('click', function(){
  $(this).removeAttr('href');
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    $('.do-opacity').removeClass('active-opacity');
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(200);
    element.find('ol').slideUp(200);
  }
  else {
    element.addClass('open');
    element.children('ul').slideDown(200);
    element.children('ol').slideDown(200);
    element.siblings('li').children('ul').slideUp(200);
    element.siblings('li').children('ol').slideUp(200);
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(200);
    element.siblings('li').find('ol').slideUp(200);
    $('.do-opacity').not('open').addClass('active-opacity');
  }
});



var windowWidth = $(window).width();
if(windowWidth > 1024){
    var s = skrollr.init({
         forceHeight: false,
         smoothScrolling: true,
         mobileDeceleration: 0.004,
         easing: {
               //This easing will sure drive you crazy
               wtf: Math.random,
               inverted: function(p) {
                    return 1 - p;
              }
        },
        render: function(data) {
            //Log the current scroll position.
            //console.log(data.curTop);
            $('#info').text(data.curTop);
      }
});

} else {

}
//End window	
}