// JavaScript Document
// назначить целевой тег для заголовка-триггера:

tTag='H1';
suff='-collapseText';

function hideContent(obj,jHide){
  jQuery(function($){
		$(obj)
		.siblings()
			.each( function(index, element) {
		if(element.tagName!=tTag){
			(jHide)? $(element).hide():$(element).fadeOut(150);
		}
	});
  });
}
jQuery(function($){
	// получить набор таргет-заголовков (триггеров процедуры):
	var allHeaders=$(tTag,'div.item-page'+suff);
	$(allHeaders).each( function(index, element) {
			// спрятать текст (при первоначальной загрузке) или
			// свернуть при клике по заголовку:
			hideContent(this,true);
			// назначить всем заголовкам статус "свёрнутых":
			$(allHeaders).attr('data-stat','collapsed');
		});
	
	$(allHeaders).click( function(){
			var trHeader=this; // триггер-объект
			// console.info('\nthis top START: '+$(this).offset().top);
			$(allHeaders).each(function(index,element) {
				// присвоить статус "свёрнутых" всем заголовкам, кроме источника события:
                if (element!=trHeader)
					$(element).attr('data-stat','collapsed');
            });
			// переключить состояние "свёрнутости" для триггер-заголовка:
			($(this).attr('data-stat')=='expanded')?
				$(this).attr('data-stat','collapsed')
				:
				$(this).attr('data-stat','expanded');
			
			// свернуть контент всех блоков, кроме заголовков:
			$(allHeaders).each( function(index, element) {
                hideContent(element,true); // обязательно true!
            });
			
			// console.info('this top NEXT: '+$(this).offset().top);

			var goScroll=$(this).offset().top-20;
			// прокрутить страницу до позиции заголовка:
			$("html, body").animate({scrollTop:goScroll},100);
			
			// console.info('this top, goScroll: '+$(this).offset().top+', '+goScroll);
			
			// обработать блоки, лежащие в коде ПОСЛЕ триггер-заголовка:
			$(this).nextAll().each( function(index, element) {
				// выйти из цикла, если наткнулись на следующий заголовок:
                if(element.tagName==tTag){
					return false;
				}else // продолжить сворачивание/разворачивание в зависимости от статуса "свёрнутости" текущего заголовка:
					if($(trHeader).attr('data-stat')=='expanded'){
						$(element).fadeIn(150);
					}
            });
			
			// console.info('this top FINISH: '+$(this).offset().top);
    }).mouseover( function(){
		$(this).attr('title','Щёлкните, чтобы развернуть/свернуть блок текста.');
	});
});