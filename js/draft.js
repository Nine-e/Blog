/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-04 09:23:51
 * @version $Id$
 */

$(init)
function init() {
	$(".draft-content").on('click', '.bar-delete',function() {
 		$(this).parent().remove();
 	});  

}
function imgPreview(fileDom){
        //判断是否支持FileReader
        if (window.FileReader) {
            var reader = new FileReader();
        } else {
            alert("您的设备不支持图片预览功能，如需该功能请升级您的设备！");
        }

        //获取文件
        var file = fileDom.files[0];
        var imageType = /^image\//;
        //是否是图片
        if (!imageType.test(file.type)) {
            alert("请选择图片！");
            return;
        }
        //读取完成
        reader.onload = function(e) {
        	$(".middle-pic").css("background-color", "#f7f8f9");
        	$(".middle-pic").css("z-index", "-1");
            //获取图片dom
            var img = document.getElementById("preview");
            //图片路径设置为读取的图片
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }