define("arale/dialog/1.0.0/confirmbox",["./dialog","$","arale/widget/1.0.3/templatable","gallery/handlebars/1.0.0/handlebars","arale/overlay/1.0.0/overlay","arale/position/1.0.0/position","arale/iframe-shim/1.0.0/iframe-shim","arale/widget/1.0.3/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events","arale/overlay/1.0.0/mask"],function(a,b,c){var d=a("$"),e=a("arale/widget/1.0.3/templatable"),f=a("gallery/handlebars/1.0.0/handlebars"),g=a("./dialog");a("arale/dialog/1.0.0/dialog.css");var h=g.extend({Implements:e,attrs:{content:'{{#if title}}\n<div class="{{classPrefix}}-title" data-role="title">{{{title}}}</div>\n{{/if}}\n<div class="{{classPrefix}}-container">\n<div class="{{classPrefix}}-message" data-role="message">{{{message}}}</div>\n{{#if hasFoot}}\n<div class="{{classPrefix}}-operation" data-role="foot">\n{{#if confirmTpl}}\n<div class="{{classPrefix}}-confirm" data-role="confirm">\n{{{confirmTpl}}}\n</div>\n{{/if}}\n{{#if cancelTpl}}\n<div class="{{classPrefix}}-cancel" data-role="cancel">\n{{{cancelTpl}}}\n</div>\n{{/if}}\n</div>\n{{/if}}\n</div>',title:"默认标题",confirmTpl:'<a class="ui-dialog-button-orange">确定</a>',cancelTpl:'<a class="ui-dialog-button-white">取消</a>',message:"默认内容"},parseElement:function(){var a={classPrefix:this.get("classPrefix"),message:this.get("message"),title:this.get("title"),confirmTpl:this.get("confirmTpl"),cancelTpl:this.get("cancelTpl"),hasFoot:this.get("confirmTpl")||this.get("cancelTpl")},b=f.compile(this.get("content"));this.set("content",b(a)),h.superclass.parseElement.call(this)},events:{"click [data-role=confirm]":function(a){a.preventDefault(),this.trigger("confirm")},"click [data-role=cancel]":function(a){a.preventDefault(),this.hide()}},_onChangeMessage:function(a){this.$("[data-role=message]").html(a)},_onChangeTitle:function(a){this.$("[data-role=title]").html(a)},_onChangeConfirmTpl:function(a){this.$("[data-role=confirm]").html(a)},_onChangeCancelTpl:function(a){this.$("[data-role=cancel]").html(a)}});h.alert=function(a,b,c){var e={message:a,title:"",cancelTpl:"",closeTpl:"",onConfirm:function(){b&&b(),this.hide()}};new h(d.extend(null,e,c)).show().on("close",function(){this.destroy()})},h.confirm=function(a,b,c,e){var f={message:a,title:b||"确认框",closeTpl:"",onConfirm:function(){c&&c(),this.hide()}};new h(d.extend(null,f,e)).show().on("close",function(){this.destroy()})},h.show=function(a,b,c){var e={message:a,title:"",confirmTpl:!1,cancelTpl:!1,onConfirm:function(){b&&b(),this.hide()}};new h(d.extend(null,e,c)).show().on("close",function(){this.destroy()})},c.exports=h}),define("arale/dialog/1.0.0/dialog.css",[],function(){function a(a){var b=document.createElement("style");document.getElementsByTagName("head")[0].appendChild(b),b.styleSheet?b.styleSheet.cssText=a:b.appendChild(document.createTextNode(a))}a('.ui-dialog{background-color:rgba(0,0,0,.5);border:0;FILTER:progid:DXImageTransform.Microsoft.Gradient(startColorstr=#88000000, endColorstr=#88000000);padding:6px}:root .ui-dialog{FILTER:none9}.ui-dialog-close{color:#999;cursor:pointer;display:block;font-family:tahoma;font-size:24px;font-weight:700;height:18px;line-height:14px;position:absolute;right:16px;text-decoration:none;top:16px;z-index:10}.ui-dialog-close:hover{color:#666;text-shadow:0 0 2px #aaa}.ui-dialog-title{height:45px;font-size:16px;font-family:"微软雅黑","黑体",Arial;line-height:46px;border-bottom:1px solid #E1E1E1;color:#4d4d4d;text-indent:20px;background:-webkit-gradient(linear,left top,left bottom,from( #fcfcfc),to( #f9f9f9));background:-moz-linear-gradient(top, #fcfcfc, #f9f9f9);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#fcfcfc", endColorstr="#f9f9f9");background:-o-linear-gradient(top, #fcfcfc, #f9f9f9);background:linear-gradient(top, #fcfcfc, #f9f9f9)}.ui-dialog-container{padding:15px 20px 20px;font-size:12px}.ui-dialog-message{margin-bottom:15px}.ui-dialog-operation{zoom:1}.ui-dialog-confirm,.ui-dialog-cancel{display:inline}.ui-dialog-operation .ui-dialog-confirm{margin-right:4px}.ui-dialog-button-orange,.ui-dialog-button-white{display:inline-block;*display:inline;*zoom:1;text-align:center;text-decoration:none;vertical-align:middle;cursor:pointer;font-family:verdana,Hiragino Sans GB;font-size:12px;font-weight:700;border-radius:2px;padding:0 12px;line-height:23px;height:23px;*overflow:visible}a.ui-dialog-button-orange:hover,a.ui-dialog-button-white:hover{text-decoration:none}.ui-dialog-button-orange{border:1px solid #E5810E;color:#fff;background-color:#F5AA2B;background:-webkit-gradient(linear,left top,left bottom,from( #F5A620),to( #F09611));background:-moz-linear-gradient(top, #F5A620, #F09611);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#F5A620", endColorstr="#F09611");background:-o-linear-gradient(top, #F5A620, #F09611);background:linear-gradient(top, #F5A620, #F09611);box-shadow:0 -2px 2px rgba(255,255,255,.33) inset}.ui-dialog-button-orange:hover{background-color:#F5AA2B;background:-webkit-gradient(linear,left top,left bottom,from( #F7B73B),to( #F4A626));background:-moz-linear-gradient(top, #F7B73B, #F4A626);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#F7B73B", endColorstr="#F4A626");background:-o-linear-gradient(top, #F7B73B, #F4A626);background:linear-gradient(top, #F7B73B, #F4A626);box-shadow:0 -2px 2px rgba(255,255,255,.4) inset}.ui-dialog-button-white{border:1px solid #B3B3B3;color:#595959;background-color:#F2F2F2;background:-webkit-gradient(linear,left top,left bottom,from( #FEFEFE),to( #ECECEC));background:-moz-linear-gradient(top, #FEFEFE, #ECECEC);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#FEFEFE", endColorstr="#ECECEC");background:-o-linear-gradient(top, #FEFEFE, #ECECEC);background:linear-gradient(top, #FEFEFE, #ECECEC);box-shadow:0 -2px 2px rgba(255,255,255,.33) inset}.ui-dialog-button-white:hover{border:1px solid #999;background-color:#F6F6F6;background:-webkit-gradient(linear,left top,left bottom,from( #FEFEFE),to( #F0F0F0));background:-moz-linear-gradient(top, #FEFEFE, #F0F0F0);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#FEFEFE", endColorstr="#F0F0F0");background:-o-linear-gradient(top, #FEFEFE, #F0F0F0);background:linear-gradient(top, #FEFEFE, #F0F0F0)}')});