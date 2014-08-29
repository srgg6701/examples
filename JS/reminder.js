var makeDecition = (function (){
	/* 	Выполняется единожды, при инициализации функции: */
	var gotm = false,
		sttm = function(){
			setTimeout(makeDecition,4000); // 25*60*1000
		};
	/*	Конец инициализируемого блока. 
	При последующих вызовах функции доступ к 
	проинициализированным переменным и их значения 
	сохраняются аналогично статическим переменным.	*/
	
	return function(){
		if(gotm){
			console.log('gotm = '+gotm);
			if(!confirm("Продолжить?")) gotm=null;
		}else{
			console.log('makeDecition is run once!');		
			gotm=true;						
		}
		if (gotm!==null) sttm();
	};
}());

makeDecition();