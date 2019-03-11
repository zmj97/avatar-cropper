!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("avatar-cropper",[],t):"object"==typeof exports?exports["avatar-cropper"]=t():e["avatar-cropper"]=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var o={};return t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/dist/",t(t.s=1)}([function(e,t,o){"use strict";t.a={name:"avatarCropper",props:{value:{default:!0}},data:function(){return{showRechoose:!1,img:new Image,canvasWidth:450,canvasHeight:450,scale:1,x:0,y:0,xLen:0,yLen:0,mouseDownX:0,mouseDownY:0,mouseIsDownCropper:!1,mouseIsDownDot:!1}},methods:{resizeCanvas:function(){document.body.clientWidth<768&&(this.canvasWidth=this.canvasHeight=.9*document.documentElement.clientWidth,document.getElementById("select").style.display="inline-block",document.getElementById("edit").style.display="none")},selectImg:function(){document.getElementById("inputFile").click()},changeImg:function(e){var t=this,o=e.target.files[0];if(o&&o.size<=5242880){document.getElementById("select").style.display="none",document.getElementById("edit").style.display="block",this.showRechoose=!0;var n=new FileReader;n.readAsDataURL(o),n.onload=function(){t.img.src=n.result,t.showImg()}}else alert("图片不可以超过5M！")},showImg:function(){var e=this;this.img.onload=function(){var t=e.img.width>=e.img.height;e.scale=t?e.canvasWidth/e.img.width:e.canvasHeight/e.img.height,e.xLen=e.img.width*e.scale,e.yLen=e.img.height*e.scale,e.x=(e.canvasWidth-e.xLen)/2,e.y=(e.canvasHeight-e.yLen)/2;var o=document.getElementById("pic").getContext("2d");o.clearRect(0,0,e.canvasWidth,e.canvasHeight),o.drawImage(e.img,0,0,e.img.width,e.img.height,e.x,e.y,e.xLen,e.yLen),e.showMask()}},showMask:function(){var e=document.getElementById("mask");e.style.left=this.x+"px",e.style.top=this.y+"px",e.style.width=this.xLen+"px",e.style.height=this.yLen+"px"},updateMouseDownPos:function(e){this.mouseDownX=e.clientX,this.mouseDownY=e.clientY},mousedownCropper:function(e){this.mouseIsDownCropper||(this.updateMouseDownPos(e),this.mouseIsDownCropper=!0)},mousedownDot:function(e){this.mouseIsDownDot||(this.updateMouseDownPos(e),this.mouseIsDownDot=!0)},mouseup:function(){this.mouseIsDownCropper=this.mouseIsDownDot=!1},moveCropper:function(e){if(this.mouseIsDownCropper){var t=document.getElementById("cropper"),o=Number(window.getComputedStyle(t).getPropertyValue("width").slice(0,-2)),n=Number(window.getComputedStyle(t).getPropertyValue("top").slice(0,-2)),i=Number(window.getComputedStyle(t).getPropertyValue("left").slice(0,-2)),r=e.clientX-this.mouseDownX,s=e.clientY-this.mouseDownY;this.updateMouseDownPos(e);var a=n+s,c=i+r;a>=0&&a+o<=this.yLen&&c>=0&&c+o<=this.xLen&&(t.style.top=a+"px",t.style.left=c+"px")}},resizeCropper:function(e){if(this.mouseIsDownDot){this.mouseIsDownCropper=!1;var t=document.getElementById("cropper"),o=Number(window.getComputedStyle(t).getPropertyValue("width").slice(0,-2)),n=Number(window.getComputedStyle(t).getPropertyValue("top").slice(0,-2)),i=Number(window.getComputedStyle(t).getPropertyValue("left").slice(0,-2)),r=e.clientX-this.mouseDownX;this.updateMouseDownPos(e),o+r>=30&&n+o+r<=this.yLen&&i+o+r<=this.xLen&&(t.style.width=t.style.height=o+r+"px",t.style.borderRadius=(o+r)/2+"px")}},ok:function(){if(!this.img.src)return void alert("请先选择图片！");this.close();var e=Number(window.getComputedStyle(cropper).getPropertyValue("left").slice(0,-2))/this.scale,t=Number(window.getComputedStyle(cropper).getPropertyValue("top").slice(0,-2))/this.scale,o=Number(window.getComputedStyle(cropper).getPropertyValue("width").slice(0,-2))/this.scale,n=document.createElement("canvas");n.width=n.height=o,n.getContext("2d").drawImage(this.img,e,t,o,o,0,0,o,o),this.$emit("ok",n.toDataURL())},close:function(){this.$emit("input",!1)}},mounted:function(){this.resizeCanvas(),window.addEventListener("resize",this.resizeCanvas,!1)},destroyed:function(){window.removeEventListener("resize",this.resizeCanvas,!1)}}},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(2),i={install:function(e){e.component("avatar-cropper",n.a)}};t.default=i},function(e,t,o){"use strict";function n(e){o(3)}var i=o(0),r=o(9),s=o(8),a=n,c=s(i.a,r.a,!1,a,"data-v-eac1628c",null);t.a=c.exports},function(e,t,o){var n=o(4);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);o(6)("63c57ecb",n,!0,{})},function(e,t,o){t=e.exports=o(5)(!1),t.push([e.i,"#container[data-v-eac1628c]{position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.3)}.panel[data-v-eac1628c]{position:fixed;width:100%;height:120vw;top:calc(50vh - 60vw);border-radius:5px;background-color:#fff}.buttons[data-v-eac1628c]{width:100%;height:56px;margin-bottom:20px;background-color:#f2f2f5;text-align:center}.button[data-v-eac1628c]{margin:11px 5px;padding:0 15px;border:0;border-radius:2px;height:34px;line-height:35px;background-color:#fff;color:#515a6e;font-size:14px;box-shadow:0 1px 2px rgba(0,0,0,.25);text-decoration:none;outline:none;cursor:pointer}.ok[data-v-eac1628c]{background-color:#2d8cf0;color:#fff}.select-panel[data-v-eac1628c]{width:90vw;height:90vw;margin:5vw;background-color:#f2f2f5}.hint[data-v-eac1628c]{position:absolute;top:60px;width:90vw;text-align:center;color:#515a6e;font-size:12px}#select[data-v-eac1628c]{margin-left:calc(45vw - 43px);margin-top:40vw}#edit[data-v-eac1628c]{display:none;position:absolute;width:90vw;height:90vw;background-color:#333}#cropper[data-v-eac1628c]{display:inline-block;position:relative;top:100px;left:100px;width:100px;height:100px;border-radius:50px;box-shadow:0 0 0 500px hsla(0,0%,100%,.6);cursor:move}#dot[data-v-eac1628c]{display:inline-block;position:absolute;top:50%;right:-4px;border:1px solid gray;width:7px;height:7px;border-radius:4px;background-color:#fff;cursor:w-resize}@media screen and (min-width:768px){.panel[data-v-eac1628c]{width:500px;height:556px;top:calc(50vh - 270px);left:calc(50vw - 270px)}.select-panel[data-v-eac1628c]{width:450px;height:450px;margin:25px;background-color:#f2f2f5}.hint[data-v-eac1628c]{width:450px}#select[data-v-eac1628c]{margin-left:182px;margin-top:182px}#edit[data-v-eac1628c]{width:450px;height:450px}}",""])},function(e,t){function o(e,t){var o=e[1]||"",i=e[3];if(!i)return o;if(t&&"function"==typeof btoa){var r=n(i);return[o].concat(i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"})).concat([r]).join("\n")}return[o].join("\n")}function n(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=o(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},function(e,t,o){function n(e){for(var t=0;t<e.length;t++){var o=e[t],n=u[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(r(o.parts[i]));u[o.id]={id:o.id,refs:1,parts:s}}}}function i(){var e=document.createElement("style");return e.type="text/css",p.appendChild(e),e}function r(e){var t,o,n=document.querySelector("style["+g+'~="'+e.id+'"]');if(n){if(f)return m;n.parentNode.removeChild(n)}if(w){var r=h++;n=l||(l=i()),t=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0)}else n=i(),t=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return t(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;t(e=n)}else o()}}function s(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(r,s[t]):e.appendChild(r)}}function a(e,t){var o=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),v.ssrId&&e.setAttribute(g,t.id),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var d=o(7),u={},p=c&&(document.head||document.getElementsByTagName("head")[0]),l=null,h=0,f=!1,m=function(){},v=null,g="data-vue-ssr-id",w="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,o,i){f=o,v=i||{};var r=d(e,t);return n(r),function(t){for(var o=[],i=0;i<r.length;i++){var s=r[i],a=u[s.id];a.refs--,o.push(a)}t?(r=d(e,t),n(r)):r=[];for(var i=0;i<o.length;i++){var a=o[i];if(0===a.refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete u[a.id]}}}};var y=function(){var e=[];return function(t,o){return e[t]=o,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var o=[],n={},i=0;i<t.length;i++){var r=t[i],s=r[0],a=r[1],c=r[2],d=r[3],u={id:e+":"+i,css:a,media:c,sourceMap:d};n[s]?n[s].parts.push(u):o.push(n[s]={id:s,parts:[u]})}return o}},function(e,t){e.exports=function(e,t,o,n,i,r){var s,a=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,a=e.default);var d="function"==typeof a?a.options:a;t&&(d.render=t.render,d.staticRenderFns=t.staticRenderFns,d._compiled=!0),o&&(d.functional=!0),i&&(d._scopeId=i);var u;if(r?(u=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(r)},d._ssrRegister=u):n&&(u=n),u){var p=d.functional,l=p?d.render:d.beforeCreate;p?(d._injectStyles=u,d.render=function(e,t){return u.call(t),l(e,t)}):d.beforeCreate=l?[].concat(l,u):[u]}return{esModule:s,exports:a,options:d}}},function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],attrs:{id:"container"}},[o("div",{staticClass:"panel"},[o("div",{staticClass:"buttons"},[o("button",{staticClass:"button",on:{click:e.close}},[e._v("取消")]),e._v(" "),e.showRechoose?o("button",{staticClass:"button",on:{click:function(t){e.value=!1}}},[e._v("重新选择")]):e._e(),e._v(" "),o("button",{staticClass:"button ok",on:{click:e.ok}},[e._v("确定")])]),e._v(" "),o("div",{staticClass:"select-panel"},[o("div",{staticClass:"hint"},[e._v("只支持JPG、PNG、GIF、SVG，大小不超过5M")]),e._v(" "),o("button",{staticClass:"button",attrs:{id:"select"},on:{click:e.selectImg}},[e._v("选择图片")]),e._v(" "),o("input",{staticStyle:{display:"none"},attrs:{id:"inputFile",type:"file",accept:"image/gif,image/jpeg,image/jpg,image/png,image/svg"},on:{change:e.changeImg}}),e._v(" "),o("div",{attrs:{id:"edit"},on:{mouseup:e.mouseup}},[o("canvas",{attrs:{id:"pic",width:e.canvasWidth,height:e.canvasHeight}}),e._v(" "),o("div",{staticStyle:{position:"absolute",overflow:"hidden"},attrs:{id:"mask"},on:{mousemove:e.resizeCropper}},[o("div",{attrs:{id:"cropper"},on:{mousedown:e.mousedownCropper,mousemove:e.moveCropper}},[o("div",{attrs:{id:"dot"},on:{mousedown:e.mousedownDot}})])])])])])])},i=[],r={render:n,staticRenderFns:i};t.a=r}])});
//# sourceMappingURL=avatarCropper.js.map