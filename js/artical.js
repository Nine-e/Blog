$(function(){
	// --- .input-comment ---
	$(".input-comment").focus(function(){
		$(this).css('margin-right','20px');
		$(".btn-comment").css('display','block');
	});
	$(".input-comment").blur(function(){
		$(this).css('margin-right','0');
		$(".btn-comment").css('display','none');
	});

	// --- #btn-thumbs-up-1 ---
	var onUp = true;
	$(".btn-thumbs-up-1").click(function(){
		var number = parseInt($(this).children("span").text());
		if(onUp){
			number = number + 1;
			$(this).children("span").text(number);
			onUp = false;
		}
		else{
			number = number - 1;
			$(this).children("span").text(number);
			onUp = true;
		}
	});

	// --- btn-invisible ---
	$(".comment-list").mouseover(function(){
		var index = $(this).index();
		$(".btn-invisible").eq(index).css('display','inline-block');
	});
	$(".comment-list").mouseout(function(){
		var index = $(this).index();
		$(".btn-invisible").eq(index).css('display','none');
	});
});

