/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-04 13:34:11
 * @version $Id$
 */
$(init)
function init() {
	$(".release").click(function() {
		swal({
			title:"您确定要发布文章吗",
			text:"发布后将无法修改，请谨慎操作！",
			type:"warning",
			showCancelButton:true,
			confirmButtonColor:"#DD6B55",
			confirmButtonText:"是的，我要发布！",
			cancelButtonText:"让我再考虑一下",
			closeOnConfirm:false,
			closeOnCancel:false
		},
		function(isConfirm)
				{
					if(isConfirm)
					{
						swal({title:"发布成功！",
							text:"您已经发布了这篇文章。",
							type:"success"},function(){window.location.href="../html/home.html"})
					}
					else{
						swal({title:"已取消",
							text:"您取消了发布操作！",
							type:"error"})
					}
				}


		);
	})
	$(".draft").click(function() {
		swal({
			title:"您确定要发布文章吗",
			text:"发布后将无法修改，请谨慎操作！",
			type:"warning",
			showCancelButton:true,
			confirmButtonColor:"#DD6B55",
			confirmButtonText:"是的，存为草稿！",
			cancelButtonText:"让我再考虑一下",
			closeOnConfirm:false,
			closeOnCancel:false
		},
		function(isConfirm)
				{
					if(isConfirm)
					{
						swal({title:"保存成功！",
							text:"您已经保存了这篇文章。",
							type:"success"},function(){window.location.href="writing.html"})
					}
					else{
						swal({title:"已取消",
							text:"您取消了保存操作！",
							type:"error"})
					}
				});
	})
}
