parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"h6md":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DOMSelectors=void 0;const e={enterForm:document.getElementById("enterForm"),time:document.getElementById("enterArea"),colorPage:document.querySelector(".colorPage"),testPage:document.querySelector(".testPage"),rgbName:document.querySelector(".rgbName"),numberSubmit:document.querySelector(".submit-button"),testButton:document.querySelector(".test-button"),history:document.querySelector(".history"),showHistory:document.querySelector(".showHistory"),historyArr:document.querySelector(".historyArr")};exports.DOMSelectors=e;
},{}],"SS3i":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.displayArr=exports.randomBackgroundColor=void 0;var e,t,r=require("./DOM"),o=r.DOMSelectors.time.value;const n=r.DOMSelectors.showHistory,a=r.DOMSelectors.history,l=[],c=r.DOMSelectors.colorPage,s=function(e,t,r){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"},i=function(){return l.push("rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"),l},u=function(){var e=l[l.length-1];c.style.backgroundColor=e,c.innerHTML=l[l.length-1]},d=function(){t&&clearInterval(t),f()},M=function(){n.addEventListener("click",e=>{e.preventDefault(),a.innerHTML="",a.innerHTML=i()+"<br>"})};exports.displayArr=M;const f=function(){setInterval(()=>{i(),r.DOMSelectors.testPage.style.backgroundColor=l[l.length-1]},t)},h=function(){r.DOMSelectors.numberSubmit.addEventListener("click",function(e){e.preventDefault(),d()})};exports.randomBackgroundColor=h;const m=function(){r.DOMSelectors.numberSubmit.addEventListener("click",function(e){e.preventDefault(),t=parseInt(1e3*o),d(),console.log(t)})};r.DOMSelectors.numberSubmit.addEventListener("click",function(e){e.preventDefault(),t=parseInt(1e3*o),d(),console.log(t)});
},{"./DOM":"h6md"}],"QvaY":[function(require,module,exports) {
"use strict";var r=require("./DOM"),o=require("./randomColor");(0,o.randomBackgroundColor)(),(0,o.displayArr)();
},{"./DOM":"h6md","./randomColor":"SS3i"}]},{},["QvaY"], null)
//# sourceMappingURL=/js.6ddba7b7.js.map