window.onload = function() {
  var texts = [],
    articles = [],
    articlesObjects = document.querySelectorAll('article');

  var maxHeight = articlesObjects[0].offsetHeight;

  for (var i in articlesObjects) {
    if (typeof articlesObjects[i] === 'object') {
      articles[i] = articlesObjects[i];
      texts[i] = articles[i].textContent.split(" ");
    }
  }
  var handleText = function(i, textArray) { 
    
    var articleText,
        newTextArray;
	/* Note: use just .textContent property, NOT .innerText! */
    articlesObjects[i].textContent = textArray.join(" ");
	
	//console.dir(articlesObjects[i]);
	
    if (maxHeight < articlesObjects[i].scrollHeight) {
      newTextArray = textArray.slice(0, textArray.length - 1);
      handleText(i, newTextArray);
    }
  };
  var handleBox = function() {
    for (var i = 0, j = texts.length; i < j; i++) {
	  handleText(i, texts[i]);
	  
      var articleBlockTextArray = articlesObjects[i].textContent.split(" "),
          heightDown = maxHeight < articlesObjects[i].scrollHeight,
          lengthsDiff = articleBlockTextArray.length < texts[i].length;

      
      articlesObjects[i].style.background = "";

      /*if (heightDown || lengthsDiff) {
		  if (heightDown && lengthsDiff) {
          articlesObjects[i].style.background = "pink";
        } else {
          if (heightDown) {
            articlesObjects[i].style.background = "lightskyblue";
          } else {
            if (lengthsDiff) {
              articlesObjects[i].style.background = "lightgreen";
            } else {
              articlesObjects[i].style.background = "";
            }
          }
        }
      } else {
        articlesObjects[i].style.background = "";
      }*/
    }
  };
  function testIt(){
	console.log('Testing...');
  }
  window.onresize = handleBox;
  handleBox();
};