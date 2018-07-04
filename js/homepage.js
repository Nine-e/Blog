/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-07-03 21:43:08
 * @version $Id$
 */

window.onload=function() {
      $("input[placeholder=请输入密码]").hover(
            function() {
                $(this).bind("focus", function() {
                    $(this).attr("placeholder","");
                });
            },    
            function() {
                $(this).bind("blur", function() {
                    $(this).attr("placeholder","请输入密码");
                });
            }
        );
      
  }