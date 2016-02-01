/* ###### init skrol to point  ######*/
/* ###### bower i page-scroll-to-id  ######*/
/*(function($){
    $(window).load(function(){
        $("a[rel='m_PageScroll2id']").mPageScroll2id({
				    offset:200
				});
    });
 })(jQuery);*/ 

$(document).ready(function(){
	
	/* ###### init bpopup  ######*/
	/* ###### bower i bpopup  ######*/
	// $('.button-modal').click(function(){
	// 	$('.modal-block').bPopup({
	// 			closeClass:'closer'
	// 	}); 
	// })
	/* ###### init stickUp  ######*/
	/* ###### bower i sticky  ######*/
	/*$("#sticker").sticky({topSpacing:0});*/
$('.main-menu-toggle').click(function(){
	$('.header-mainMenu-elem').slideToggle()
})


	$(".slider-proj-main,.Garant-slider-cert-wrap,.about-comand").owlCarousel({
	 	items : 4,
	 	pagination : false,
	 	autoPlay : false,
	 	navigation : true,
    navigationText : ["<i class='fa fa-arrow-left slider-proj-main-arrow'></i>"
    								 ,"<i class='fa fa-arrow-right slider-proj-main-arrow'></i>"],
	 	}
	 ); 
	$(".slider-proj-mainEl-img").owlCarousel({
	 	items : 1,
	 	autoHeight : true,
	 	pagination : false,
	 	autoPlay : false,
	 	singleItem:true,
	 	navigation : true,
    navigationText : ["<i class='fa fa-angle-left '></i>","<i class='fa fa-angle-right '></i>"],
	 	}
	 );
	 $(".catalog-main-el-top-left").owlCarousel({
	 	items : 1,
	 	autoHeight : true,
	 	pagination : false,
	 	autoPlay : false,
	 	singleItem:true,
	 	navigation : true,
    navigationText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	 	}
	 ); 
	 
	 $(".garant-rewiev").owlCarousel({
	 		items : 1,
		 	autoHeight : true,
		 	pagination : false,
		 	autoPlay : false,
		 	singleItem:true,
		 	navigation : true,
	    navigationText : ["<i class='fa fa-arrow-left slider-proj-main-arrow'></i>"
    								 ,"<i class='fa fa-arrow-right slider-proj-main-arrow'></i>"],
	 	}
	 );
	$('.catalog-main-el-top-img a,.slider-proj-mainEl-img a,.service-slider a,.catalog-main-el-top-left a').fancybox();

	$(".about-partners").owlCarousel({
	 	items : 6,
	 	pagination : false,
	 	autoPlay : false,
	 	navigation : true,
    navigationText : ["<i class='fa fa-arrow-left slider-proj-main-arrow'></i>"
    								 ,"<i class='fa fa-arrow-right slider-proj-main-arrow'></i>"],
	 	}
	 );

	$(".service-slider").owlCarousel({
	 	items : 6,
	 	pagination : false,
	 	autoPlay : false,
	 	navigation : true,
    navigationText : ["<i class='fa fa-arrow-left slider-proj-main-arrow'></i>"
    								 ,"<i class='fa fa-arrow-right slider-proj-main-arrow'></i>"],
	 	}
	 );

	//Init slider + bottom items

	var sync1 = $(".works-left-head");
  var sync2 = $(".works-left-items");
 
  sync1.owlCarousel({
    singleItem : true,
    slideSpeed : 1000,
    navigation: true,
    navigationText :["<i class='fa fa-angle-left'></i>"
    								 ,"<i class='fa fa-angle-right'></i>"],
    pagination:false,
    afterAction : syncPosition,
    responsiveRefreshRate : 200,
     afterUpdate: function () {
            updateSize();
        },
        afterInit:function(){
            updateSize();
        }
  });
 
  sync2.owlCarousel({
    items : 3,
    itemsScaleUp:true,
    pagination:false,
    responsiveRefreshRate : 100,
    afterInit : function(el){
      el.find(".owl-item").eq(0).addClass("synced");
    },
    
  });
 
  function syncPosition(el){
    var current = this.currentItem;
    $(sync2)
      .find(".owl-item")
      .removeClass("synced")
      .eq(current)
      .addClass("synced")
    if($(sync2).data("owlCarousel") !== undefined){
      center(current)
    }
  }
 
  $(sync2).on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).data("owlItem");
    sync1.trigger("owl.goTo",number);
  });
 
  function center(number){
    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    var num = number;
    var found = false;
    for(var i in sync2visible){
      if(num === sync2visible[i]){
        var found = true;
      }
    }
 
    if(found===false){
      if(num>sync2visible[sync2visible.length-1]){
        sync2.trigger("owl.goTo", num - sync2visible.length+2)
      }else{
        if(num - 1 === -1){
          num = 0;
        }
        sync2.trigger("owl.goTo", num);
      }
    } else if(num === sync2visible[sync2visible.length-1]){
      sync2.trigger("owl.goTo", sync2visible[1])
    } else if(num === sync2visible[0]){
      sync2.trigger("owl.goTo", num-1)
    }
    
  }

function updateSize(){
    var minHeight=parseInt($('.works-left-head .owl-item').eq(0).css('height'));
    $('.works-left-head .owl-item').each(function () {
        var thisHeight = parseInt($(this).css('height'));
        minHeight=(minHeight<=thisHeight?minHeight:thisHeight);
    });
    $('.works-left-head .owl-wrapper-outer').css('height',minHeight+'px');
}

var $tabs = $('#horizontalTab');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 1
        
    });

var $tabs = $('.service-tab-left-vertical');
    $tabs.responsiveTabs({
        rotate: false,
        startCollapsed: 'accordion',
        collapsible: 'accordion',
        setHash: true,
        active: 0
        
    });

	/* ###### init validate form  ######*/
	/* ###### bower i jquery-validation ######*/
	/*$('#myform').validate({
			rules:{ //правила для полей 
				name:{
					required:true,
					minlength:5 //минимальное значение поля
				},
				phone:{
					required:true,
					number:true
				}
			},
			messages:{
				name:{
					required: 'Это поле обязатлеьно для заполнения', //какое сообщение будет выводиться
					minlength:'Имя должно быть не меньше 5 символов'
				},
				phone:{
					required: 'Это поле обязатлеьно для заполнения',
					number:'Введите правильный телефон'
				},
				submitHandler:function(){ //выполнять если все валидно
					alert('Форма заполнена правильно');
				}
			}
	})*/

	/* ###### init animatedModal  ######*/
	/* ###### bower i animatedModa  ######*/
	// $(".play").animatedModal({
	//  	 animatedIn:'lightSpeedIn',
	//     animatedOut:'bounceOutDown',
	//     color:'#0394c7'
	//  	});
	
})