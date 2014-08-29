window.onload=function() {
	var sel_name_sbstr = '[src*="metabar.ru"]';
	var intv = setInterval(function() {
		var metabars = document.querySelectorAll(sel_name_sbstr);
		if (metabars.length) {
			for (var el in metabars) {
				if (typeof metabars[el] == 'object') {
					metabars[el].remove();
				}
			}
		} else
			clearInterval(intv);
	}, 1000);
}