//ブロック要素に文字列を長体にして詰めるjQuery拡張
//widthを指定したブロック要素に対して使う
//usage $(hoge).tume() innerHTMLを詰める
//      $(hoge).tume(str) strを詰めて設定
//      $(hoge).tume(str,true) widthに満たない場合は広げる
// wakufactory.jp License:BSD 
$(function() {
	$('<div id="_tume_b" style="width:10000px;overflow:hidden;height:0;"><span id="_tume_h" style="width:auto" ></span></div>').appendTo('body') ;
})
$.fn.extend({
	tume_ratio:function(t,f) {
		$('#_tume_h').css('font-family',$(this).css('font-family')) ;
		$('#_tume_h').css('font-size',$(this).css('font-size')) ;
		$('#_tume_h').css('font-weight',$(this).css('font-weight')) ;
		$('#_tume_h').css('letter-spacing',$(this).css('letter-spacing')) ;
		$('#_tume_h').html(t) ;
		var tw = $('#_tume_h').width();
//		console.log($(this).width()) ;
		if(tw==0) return 0 ;
		var r = 1.0 ;
		if(f || tw > $(this).width()) {
			r = $(this).width()/tw ;
		}
		return r ;
	},
	tume:function(t,f) {
		this.each(function() {
			var text = (t!==null&&t!=undefined)?t:$(this).html() ;
			var r = $(this).tume_ratio(text,f) ;
			var ch = $('<div>').css("transform-origin","left").css("white-space","nowrap").css("margin",0).css("padding",0) ;		
			ch.css('transform',"scaleX("+r+")") ;
			ch.html(text) ;
			$(this).empty().append(ch) ;
		});
		return this ;	
	}
})