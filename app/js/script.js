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
	$('.catalog-main-el-top-img,.slider-proj-mainEl-img img').fancybox();

	$(".about-partners").owlCarousel({
	 	items : 6,
	 	pagination : false,
	 	autoPlay : false,
	 	navigation : true,
    navigationText : ["<i class='fa fa-arrow-left slider-proj-main-arrow'></i>"
    								 ,"<i class='fa fa-arrow-right slider-proj-main-arrow'></i>"],
	 	}
	 );
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