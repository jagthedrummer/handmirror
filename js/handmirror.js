/**
 * @author jgreen
 */
tinyMCEPopup.requireLangPack();
tinyMCEPopup.onInit.add(onLoadInit);

function saveContent() {
	mirror.toTextArea();
	tinyMCEPopup.editor.setContent(document.getElementById('htmlSource').value, {source_view : true});
	tinyMCEPopup.close();
}

var mirror = null;

function onLoadInit() {
	tinyMCEPopup.resizeToInnerSize();

	// Remove Gecko spellchecking
	if (tinymce.isGecko)
		document.body.spellcheck = tinyMCEPopup.editor.getParam("gecko_spellcheck");

	document.getElementById('htmlSource').value = tinyMCEPopup.editor.getContent({source_view : true});

	var textarea = document.getElementById('htmlSource');
	  //CodeMirror.replace(textarea);
	  
	var ui = new CodeMirrorUI(textarea,
	   {
	  	path : 'js/codemirror-ui/js/'
	   },
	   {
	    matchBrackets: true,
      lineNumbers : true,
      mode : "text/html",
      onCursorActivity: function() {
       editor.setLineClass(hlLine, null);
       hlLine = editor.setLineClass(editor.getCursor().line, "activeline");
      }
      
	  });
  var editor = ui.mirror;
  hlLine = editor.setLineClass(0, "activeline");
	resizeInputs();
}

var wHeight=0, wWidth=0, owHeight=0, owWidth=0;

function findCodeMirror(){
	elems = document.getElementById('areaWrap').childNodes;
	for(var i=0; i<elems.length;i++){
		el = elems[i]
		if(el.className=='CodeMirror'){
			return el
		}
	}
	return null;
}

function resizeInputs() {
	
	var el = findCodeMirror();
	if (!tinymce.isIE) {
		 wHeight = self.innerHeight - 95;
		 wWidth = self.innerWidth - 50;
	} else {
		 wHeight = document.body.clientHeight - 80;
		 wWidth = document.body.clientWidth - 50;
	}

	el.style.height = Math.abs(wHeight) + 'px';
	el.style.width  = Math.abs(wWidth) + 'px';
	
}
