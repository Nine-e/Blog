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

	// --- page ---
	
	$(".pagination").pagination(totalData, { //totalData代表数据总数，比如查询数据库得到200条数据，同常定义为全局变量,
		//由后台查询得到的个数决定。
   	 
    	callback:function(data){  //回调函数中的data表示，当前点击的页面，但是有一点需要注意，data的值永远比当前点击数小1
   		 				//比如，当前点击的2，则data返回的值为1，点击1时，返回值为0，
				//需要我们后台对其中的逻辑关系进行处理
   		
    		paginationClick(data);  //回调函数的处理事件，点击“页码”时，触发事件的处理方法，包括前端处理方法或者后端处理方法
        },
       num_edge_entries: 1,  //两侧显示的首尾分页的条目数
       num_display_entries: 4,  //连续分页主体部分显示的分页条目数 
       items_per_page:10 //每页显示数据的数量
   });
});

