$(function(){
	// --- .btn-title ---
	$(".btn-title").click(function(){
		var index = $(this).index();
		$(this).css('border-bottom','solid 2px blue');
		for(var i=0;i<4;i++){
			if(i != index)
				$(this).parent().children("li").eq(i).css('border-bottom','0');
		}
	});

});

