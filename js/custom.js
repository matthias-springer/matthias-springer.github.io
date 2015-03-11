$(function() {
    var agent = navigator.userAgent,
        is_ipad = agent.match(/iPad/i) !== null,
        is_iphone = !is_ipad && ((agent.match(/iPhone/i) !== null) || (agent.match(/iPod/i) !== null)),
        is_ios = is_ipad || is_iphone,
        is_android = !is_ios && agent.match(/android/i) !== null,
        is_mobile = is_ios || is_android;

    $('a').click(function( event ) {
        if (is_mobile) {
            var href = $(this).attr('href');
            var app_link = $(this).attr('data-app');
            if (typeof app_link !== typeof undefined && app_link !== false) {
                setTimeout(function () {
                    if (new Date().getTime() - event.timeStamp < 150) {
                        window.location = href;
                    }
                }, 100);
                window.location = app_link;
                event.preventDefault();
            }
        }
    });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-57720870-1', 'auto');
ga('send', 'pageview');

function _gaLt(event){var el=event.srcElement||event.target;while(el&&(typeof el.tagName=='undefined'||el.tagName.toLowerCase()!='a'||!el.href)){el=el.parentNode}if(el&&el.href){var link=el.href;if(link.indexOf(location.host)==-1&&!link.match(/^javascript\:/i)){var hitBack=function(link,target){target?window.open(link,target):window.location.href=link};var target=(el.target&&!el.target.match(/^_(self|parent|top)$/i))?el.target:false;ga("send","event","Outgoing Links",link,document.location.pathname+document.location.search,{"hitCallback":hitBack(link,target)});event.preventDefault?event.preventDefault():event.returnValue=!1}}}var w=window;w.addEventListener?w.addEventListener("load",function(){document.body.addEventListener("click",_gaLt,!1)},!1):w.attachEvent&&w.attachEvent("onload",function(){document.body.attachEvent("onclick",_gaLt)});

