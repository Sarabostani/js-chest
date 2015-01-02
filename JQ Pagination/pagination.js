(function( $ ) {
$.fn.pagination = function(settings){
	var options = {
		scrollToTop: false,
		scrollPosition: 0,
		onNext: null, 
		onPrevious: null
	};
	if(settings) $.extend(options, settings);
	var ARROW_LEFT  = "<img id='pagination-prev' style='cursor:pointer;display:none' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABtQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBnKPQAAAAh0Uk5TAAEMGE+DltcpasJ0AAAAK0lEQVQImWNgQAZMMIZ5AIRmrmiBCnQkQgXaBLALwBlwKexCLWhWICwFAQBSQwvVn/CLAgAAAABJRU5ErkJggg3d03ba193ecaed061b05d767d84fed96'/>";
	var ARROW_RIGHT = "<img id='pagination-next' style='cursor:pointer' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAABtQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeBnKPQAAAAh0Uk5TAAEMGE+DltcpasJ0AAAALElEQVQIW2NgQAIKUJq1GMrwaDeAMMQ6oEKMGbiF4AyYFIYAwkC4FXBLIQAAWZIL8+h4RvoAAAAASUVORK5CYIIb59a98adfc5a795592e1297a026673f5'/>";
	var curPage = 1;
	var numPages = 0;
	var id = $(this).attr('id');
	$("#"+id+">div").each(function(){
		numPages++;
	});
	$("#"+id+">div").hide();
	$("#page-" + curPage).show();

	var navigation =
	"<div id='pagination-nav' style='margin:auto; text-align:center'>"+
		ARROW_LEFT +
		"<span id='pagination-pagetrack' style='margin:0px 8px'>page "+ curPage + " of " + numPages + "</span>"+
		ARROW_RIGHT +
	"</div>";

	$("#"+id).append(navigation);
	//console.log(numPages);
	$("#pagination-next").click(function(event){
		if(options.onNext != null) options.onNext();
		curPage++;
		if(curPage == numPages)
			$("#pagination-next").hide(100);
		
		$("#page-"+ curPage).show();
		$("#page-"+ (curPage-1) ).hide();
		$("#pagination-prev").show(100);
		$("#pagination-pagetrack").text("page " + curPage + " of "+ numPages);
		if(options.scrollToTop){
			$("body").animate({ scrollTop: options.scrollPosition });
		}
		//console.log(curPage);
		
		return false;
	});

	$("#pagination-prev").click(function(){
		if(options.onPrevious != null) options.onPrevious();
		curPage--;
		if(curPage == 1)
			$("#pagination-prev").hide(100);

		$("#page-" + curPage).show();
		$("#page-" + (curPage+1) ).hide();
		$("#pagination-next").show(100);
		$("#pagination-pagetrack").text("page " + curPage + " of "+ numPages);
		if(options.scrollToTop)
			$("body").animate({ scrollTop: options.scrollPosition });
		//console.log(curPage);
		
		return false;
	});
}

})( jQuery );