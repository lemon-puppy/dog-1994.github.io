window.__require=function t(e,n,o){function r(i,s){if(!n[i]){if(!e[i]){var u=i.split("/");if(u=u[u.length-1],!e[u]){var a="function"==typeof __require&&__require;if(!s&&a)return a(u,!0);if(c)return c(u,!0);throw new Error("Cannot find module '"+i+"'")}i=u}var l=n[i]={exports:{}};e[i][0].call(l.exports,function(t){return r(e[i][1][t]||t)},l,l.exports,t,e,n,o)}return n[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<o.length;i++)r(o[i]);return r}({test:[function(t,e,n){"use strict";cc._RF.push(e,"f0d96SLjFRPcLrV0NjjhWRn","test");var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),c=this&&this.__decorate||function(t,e,n,o){var r,c=arguments.length,i=c<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,o);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,n,i):r(e,n))||i);return c>3&&i&&Object.defineProperty(e,n,i),i},i=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))(function(r,c){function i(t){try{u(o.next(t))}catch(e){c(e)}}function s(t){try{u(o.throw(t))}catch(e){c(e)}}function u(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(i,s)}u((o=o.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var n,o,r,c,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(t){return function(e){return u([t,e])}}function u(c){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(s){c=[6,s],o=0}finally{n=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(n,"__esModule",{value:!0});var u=cc._decorator,a=u.ccclass,l=(u.property,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.tonConnectUI=null,e}return r(e,t),e.prototype.start=function(){this.testTonweb()},e.prototype.testTonweb=function(){return i(this,void 0,void 0,function(){var t;return s(this,function(){return(t=new TON_CONNECT_UI.TonConnectUI({manifestUrl:"https://lemon-puppy.github.io/dog-1994.github.io/testTWA/tonconnect-manifest.json"})).uiOptions={twaReturnUrl:"https://t.me/myTestTWA"},t.onStatusChange(function(t){var e;t&&(null===(e=t.connectItems)||void 0===e?void 0:e.tonProof)&&t.connectItems.tonProof}),this.tonConnectUI=t,[2]})})},e.prototype.btnTestClick=function(){return i(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this.tonConnectUI.openSingleWalletModal("tonwallet")];case 1:return t.sent(),[2]}})})},e.prototype.btnBuyClick=function(){return i(this,void 0,void 0,function(){var t,e,n,o;return s(this,function(r){switch(r.label){case 0:return[4,this.tonConnectUI.openModal()];case 1:t=r.sent(),console.log("connect:",t),e={validUntil:Math.floor(Date.now()/1e3)+60,messages:[{address:"0:4d5c0210b35daddaa219fac459dba0fdefb1fae4e97a0d0797739fe050d694ca",amount:"1000000"}]},r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.tonConnectUI.sendTransaction(e,{modals:["before","success","error"],notifications:["before","success","error"],skipRedirectToWallet:"ios"})];case 3:return n=r.sent(),console.log("sendTx",n),[3,5];case 4:return o=r.sent(),console.error(o),[3,5];case 5:return[2]}})})},c([a],e)}(cc.Component));n.default=l,cc._RF.pop()},{}]},{},["test"]);