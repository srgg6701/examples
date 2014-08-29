// JavaScript Document

/* 	полям формы, обязательным к заполнению, должен быть назначен атрибут required */

jQuery(function($){
	$('form#registration_form').submit( function(){
		var errs=0;
		$('[required]').each( function(index,element){
			console.info($(element).val());
			if ((element.tagName.toUpperCase()!='SELECT'
				  && !$(element).val())
				|| $(element).val()=='none'
			   ) {
				$(element).css({
					backgroundColor:'#FF6',
					border:'solid 1px #999',
					width: '211px',
					marginLeft: '2px'
				}); 
				// console.info(element.tagName.toUpperCase());
				errs++;
			}
		}); 
		if(errs>0){
			alert('Не все поля заполнены/выбраны.');
			return false;
		}else{
			var eMess='';
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			var eMail=$('input#email');
			var eMsil2=$('input#email2');
			var emailValue=$(eMail).val();
			if (!filter.test(emailValue)) {
				eMess='* Емэйл введён некорректно или отсутствует!';
				$(eMail).css('background-color','#FC0');
				errs++;
			}else if(emailValue!=$(eMsil2).val()){
				eMess='* Емэйл и его подтверждение не совпадают!';
				$(eMsil2).css('background-color','#FC0');
				errs++;
			}
			if($('input#password').val()!=$('input#password2').val()){
				if (errs) eMess+='\n'; 
				eMess+='* Пароль и его подтверждение не совпадают!';
				$('input#password2').css('background-color','#FC0');
				errs++;
			}
			if(errs>0){
				alert(eMess);
				return false;
			}
		}
	});
});
