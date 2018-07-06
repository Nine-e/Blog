$(function(){

	// --- .btn-attention ---
	$(".btn-attention,.btn-gz").click(function(){
		var message = $(this).text();
		console.log(message);
		if(message=="关注作者"){
			message = "已关注";
			$(this).text(message);
			$(this).css('background-color','#999');
		}
		else{
			message = "关注作者";
			$(this).text(message);
			$(this).css('background-color','blue');
		}
	});
	$(".btn-attention,.btn-gz").mouseover(function(){
		var message = $(this).text();
		if(message=="已关注"){
			message = "取消关注";
			$(this).text(message);
		}
	});
	$(".btn-attention,.btn-gz").mouseout(function(){
		var message = $(this).text();
		if(message=="取消关注"){
			message = "已关注";
			$(this).text(message);
		}
	});

	// --- #btn-thumbs-up ---
	var onUp = true;
	$(".btn-thumbs-up").click(function(){
		var number = parseInt($(this).children("span").text());
		if(onUp){
			number = number + 1;
			$(this).children("span").text(number);
			$(this).css({'background-color':'blue','color':'white'});
			onUp = false;
		}
		else{
			number = number - 1;
			$(this).children("span").text(number);
			$(this).css({'background-color':'lightblue','color':'blue'});
			onUp = true;
		}
	});

	// --- layer ---
	// -- btn-collection --
	$('.btn-collection').on('click', function(){
	    layer.open({
	      type: 2,
	      title: '收藏文章',
	      maxmin: true,
	      shadeClose: true, //点击遮罩关闭层
	      area : ['500px' , '500px'],
	      content: '../html/collection.html'
	    });
	});
});

