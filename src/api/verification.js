
/**
 * 正则验证
 */

export var verification = {
    //微信登陆
	isWxLand: function(callback) {
        var ua = navigator.userAgent.toLowerCase();
        var isWeixin = ua.indexOf('micromessenger') != -1;
        var link = window.location.href;
        var URLTOBASE64 = new base64InOut();
        var base64 = URLTOBASE64.base64Encodes(link);
        if (isWeixin) {
            var search = encodeURIComponent("" + base64);
            window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb7d2546da9c36972&redirect_uri=" + search + "&response_type=code&scope=snsapi_base&state=3d6be0a4035d839573b04816624a415e&connect_redirect=1#wechat_redirect";
        }else{
            callback();
        };
    },
    //分享
	share: function(title, content, icon) {
        var url = window.location.href.replace("?", "&");
        $.ajax({
            type: "GET",
            url: "" + url,
            dataType: "json",
            success: function(data) {
                wx.config({
                    debug: false,
                    　　　　appId: data.appId,
                    　　　　timestamp: data.timestamp,
                    　　　　nonceStr: data.nonceStr,
                    　　　　signature: data.signature,
                    　　　　jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
                });
            },
            error: function(data) {}
        });
        wx.ready(function() {
            var title = "";
            var description = "";
            var imgUrl = "";
            /*
            朋友圈 timeline
            分享给朋友 appMessage
            分享到QQ QQ
            分享到腾讯微博 weibo
            分享到QQ空间 QZone
            */
            // 分享到QQ
            wx.onMenuShareQQ({
                title: "", //名称
                desc: "", //描述
                link: window.location.href,
                imgUrl: "", //放全景图片路径
                success: function(res) {
                    //shareSuccess("1");
                }
            });
            // 分享给朋友
            wx.onMenuShareAppMessage({
                title: "", //名称
                desc: "", //描述
                link: window.location.href,
                imgUrl: "", //
                success: function(res) {
                    //shareSuccess("1");
                }
            });
            // 分享到朋友圈
            wx.onMenuShareTimeline({
                title: "", //名称
                desc: "", //描述
                link: window.location.href,
                imgUrl: "", 
                success: function(res) {
                    //shareSuccess("2");
                }
            });
        });
    },
    //验证邮箱
    isMailbox:function(val) {
        //var reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        var reg = /^([0-9]{8,10}?)+@qq.com$/;
        if (!reg.test(val)) {
           return false;
        }else{
            return true;
        }
    },
    //数字验证
    isNumber:function checkNum(val){
        //console.log(val);
        var reg=/^[0-9]*$/; //判断字符串是否为数字 ，判断正整数用/^[1-9]+[0-9]*]*$/
        if(!reg.test(val)){
            return false;
        }else{
            return true;
        }
    },
    //获取链接后参数
    getCaption:function(obj){
        var index=obj.lastIndexOf("\=");
        obj=obj.substring(index+1,obj.length);
        return obj;
    },
    getThisTime:function(day){
        var today = new Date();
        var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        today.setTime(targetday_milliseconds); 
        var tYear = today.getFullYear();
        var tMonth = today.getMonth();
        var tDate = today.getDate();
        tMonth = this.doHandleMonth(tMonth + 1);
        tDate = this.doHandleMonth(tDate);
        return tYear+"-"+tMonth+"-"+tDate;
    },
    doHandleMonth:function(month){
        var m = month;
        if(month.toString().length == 1){
            m = "0" + month;
        };
        return m;
    },
}