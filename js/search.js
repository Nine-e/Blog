/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-05 19:00:01
 * @version $Id$
 */

$(init)
function init() {
	$("#page2").hide();
	$("#two").click(function() {
		$("#page1").hide();
		$("#page2").show();

	});
	$("#one").click(function() {
		$("#page2").hide();
		$("#page1").show();

	})
}