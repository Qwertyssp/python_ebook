J_addEvent = function (o, e, f){
	if (o.addEventListener){
		o.addEventListener(e, f, true);
		return true;
	} else if (o.attachEvent){
		var r = o.attachEvent("on"+e, f);
		return r;
	} else {
		return false;
	}
};

J_dpCall = function(){
	dp.SyntaxHighlighter.ClipboardSwf = J_BasePath+'mambots/content/joomler_syntaxhighlighter/Scripts/clipboard.swf';
	dp.SyntaxHighlighter.HighlightAll('code');
};

J_addEvent(window, 'load', J_dpCall);