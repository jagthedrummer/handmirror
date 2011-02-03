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
	  
	mirror = new CodeMirrorUI(textarea,
	   {
	  	path : 'js/codemirror-ui/js/'
	   },
	   {
	    height: "150px",
	    content: textarea.value,
	    parserfile: ["parsexml.js", "parsecss.js", "tokenizejavascript.js", "parsejavascript.js", "parsehtmlmixed.js"],
	    stylesheet: ["js/codemirror-ui/lib/CodeMirror-0.93/css/xmlcolors.css", "js/codemirror-ui/lib/CodeMirror-0.93/css/jscolors.css", "js/codemirror-ui/lib/CodeMirror-0.93/css/csscolors.css"],
	    path: "js/codemirror-ui/lib/CodeMirror-0.93/js/",
		reindentOnLoad : true,
	    autoMatchParens: true
	  });

	resizeInputs();
}

var wHeight=0, wWidth=0, owHeight=0, owWidth=0;

function findCodeMirror(){
	elems = document.getElementById('areaWrap').childNodes;
	for(var i=0; i<elems.length;i++){
		el = elems[i]
		if(el.className=='CodeMirror-wrapping'){
			return el
		}
	}
	return null;
}

function resizeInputs() {
	
	var el = findCodeMirror();
	if (!tinymce.isIE) {
		 wHeight = self.innerHeight - 85;
		 wWidth = self.innerWidth - 16;
	} else {
		 wHeight = document.body.clientHeight - 70;
		 wWidth = document.body.clientWidth - 16;
	}

	el.style.height = Math.abs(wHeight) + 'px';
	el.style.width  = Math.abs(wWidth) + 'px';
	
}
