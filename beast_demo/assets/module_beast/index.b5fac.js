window.__require=function t(e,o,n){function r(i,s){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!s&&u)return u(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var l=o[i]={exports:{}};e[i][0].call(l.exports,function(t){return r(e[i][1][t]||t)},l,l.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({beastGet:[function(t,e,o){"use strict";cc._RF.push(e,"996f03kdtVP5b+/BmdvBJCX","beastGet");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__awaiter||function(t,e,o,n){return new(o||(o=Promise))(function(r,c){function i(t){try{a(n.next(t))}catch(e){c(e)}}function s(t){try{a(n.throw(t))}catch(e){c(e)}}function a(t){var e;t.done?r(t.value):(e=t.value,e instanceof o?e:new o(function(t){t(e)})).then(i,s)}a((n=n.apply(t,e||[])).next())})},s=this&&this.__generator||function(t,e){var o,n,r,c,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(t){return function(e){return a([t,e])}}function a(c){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(r=2&c[0]?n.return:c[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,c[1])).done)return r;switch(n=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,n=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!(r=(r=i.trys).length>0&&r[r.length-1])&&(6===c[0]||2===c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(t,i)}catch(s){c=[6,s],n=0}finally{o=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(o,"__esModule",{value:!0});var a=cc._decorator,u=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ske=null,e.flagList=[],e.qualityFlag=null,e.beastIcon=null,e.flagWeight=[100,300,600],e.cb=null,e}return r(e,t),e.prototype.start=function(){},e.prototype.showGetAni=function(t){return i(this,void 0,void 0,function(){var e;return s(this,function(o){switch(o.label){case 0:return this.cb=t,e=this.getWeightedIndex(this.flagWeight),this.qualityFlag.spriteFrame=this.flagList[e],this.ske.setAnimation(0,"chuxian"+(e+1),!1),[4,this.wait(.5)];case 1:return o.sent(),this.ske.setAnimation(0,"xunhuan"+(e+1),!0),[2]}})})},e.prototype.wait=function(t){var e=this;return new Promise(function(o){e.scheduleOnce(function(){o()},t)})},e.prototype.getWeightedIndex=function(t){if(0==t.length)return null;for(var e=Math.random()*t.reduce(function(t,e){return t+Number(e)},0),o=0,n=0,r=t.length;n<r;n++)if(e<=(o+=Number(t[n])))return n;return t.length-1},e.prototype.btnSureClick=function(){this.cb&&this.cb(),this.node.destroy()},c([l(sp.Skeleton)],e.prototype,"ske",void 0),c([l(cc.SpriteFrame)],e.prototype,"flagList",void 0),c([l(cc.Sprite)],e.prototype,"qualityFlag",void 0),c([l(cc.Sprite)],e.prototype,"beastIcon",void 0),c([u],e)}(cc.Component);o.default=p,cc._RF.pop()},{}],beastMgr:[function(t,e,o){"use strict";cc._RF.push(e,"21b02Arvg5PNrN64VG0+RLS","beastMgr");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0});var s=t("../../proto/mystibeast_pb"),a=t("../../proto/MystibeastServiceClientPb"),u=t("../../scripts/G"),l=i(t("./beastGet")),p=cc._decorator,f=p.ccclass,_=p.property,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.getPre=null,e}var o;return r(e,t),o=e,Object.defineProperty(e,"inst",{get:function(){return this._ins},enumerable:!1,configurable:!0}),e.prototype.onLoad=function(){cc.game.addPersistRootNode(this.node),null!==o._ins?this.node.destroy():o._ins=this},e.prototype.onDisable=function(){o._ins=null,cc.director.off("showLogin")},e.prototype.start=function(){},e.prototype.createGRPCConnect=function(){var t=new a.MystiBeastServiceClient("http://47.116.223.152"),e=new s.JoinGameReq;e.setDeviceId("dsdfsf"),e.setIp("127.0.0.1");var o={authorization:u.G.getData("SSO_TOKEN",null)},n=t.joinGame(e,o);n.on("data",function(t){cc.log("data",t)}),n.on("end",function(){console.log("Server ended the call")}),n.on("error",function(t){console.error("Error:",t)}),n.on("status",function(t){console.log("Status:",t)}),setTimeout(function(){var e=new s.TestReq;e.setMessage("welcome"),t.test(e,o,function(t,e){console.log(null==e?void 0:e.getTestresp(),t)})},500)},e.prototype.showGetBeastAni=function(t){var e=cc.instantiate(this.getPre);e.parent=cc.find("Canvas"),e.getComponent(l.default).showGetAni(t)},e._ins=null,c([_(cc.Prefab)],e.prototype,"getPre",void 0),o=c([f],e)}(cc.Component);o.default=d,cc._RF.pop()},{"../../proto/MystibeastServiceClientPb":void 0,"../../proto/mystibeast_pb":void 0,"../../scripts/G":void 0,"./beastGet":"beastGet"}],beast:[function(t,e,o){"use strict";cc._RF.push(e,"a97b3BN78NEwpujzBY06zW5","beast");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i},i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(o,"__esModule",{value:!0});var s=i(t("./beastMgr")),a=cc._decorator,u=a.ccclass,l=a.property,p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bg=null,e.gems_charge_total=null,e.charge_icon=null,e.charge_iconList=[],e.charge_info=null,e.charge_lock=null,e.charge_unlock=null,e.gems_charge_producing=null,e.beast_lock=null,e.beast_unlock=null,e.gems_beast_total=null,e.beast_count=null,e.curBeast_gems=null,e.beast_ske=null,e.gems_friend_total=null,e.friend_count=null,e.friend_content=null,e.friend_item=null,e.friend_product_speed=null,e.curProducingNum=0,e}return r(e,t),e.prototype.start=function(){},e.prototype.btnGetChargeClick=function(){this._getChargeBinding()},e.prototype._getChargeBinding=function(){var t=this;this.charge_icon.spriteFrame=this.charge_iconList[1],this.charge_lock.active=!1,this.charge_unlock.active=!0,this.charge_info.string="\u795e\u5947\u517d\u53ef\u4ee5\u63d0\u5347\u5b9d\u77f3\u4ea7\u91cf",this.schedule(function(){var e=t.curProducingNum+333e-8;Myfun._jumpNumberAsync(t.curProducingNum,e,1,t.gems_charge_producing),t.curProducingNum=e},2)},e.prototype.gameClick=function(){cc.director.loadScene("escape")},e.prototype.btnGetBeastClick=function(){var t=this;s.default.inst.showGetBeastAni(function(){t.beast_lock.active=!1,t.beast_unlock.active=!0,t.beastProductAni(),t.schedule(function(){t.beastProductAni()},8)})},e.prototype.beastProductAni=function(){var t=this;this.beast_ske.setAnimation(0,"daiji",!0),this.scheduleOnce(function(){t.beast_ske.setAnimation(0,"wakuang",!0)},5)},e.prototype._loadBeastModuleInfo=function(){this.gems_beast_total.string="",this.beast_count.string=""},e.prototype._loadCurBeastInfo=function(){this.curBeast_gems.string=""},e.prototype.btnInviteFriendClick=function(){},e.prototype._loadFriendModuleInfo=function(){this.gems_friend_total.string="",this.friend_count.string="",this.friend_product_speed.string=""},c([l(cc.Node)],e.prototype,"bg",void 0),c([l(cc.Label)],e.prototype,"gems_charge_total",void 0),c([l(cc.Sprite)],e.prototype,"charge_icon",void 0),c([l(cc.SpriteFrame)],e.prototype,"charge_iconList",void 0),c([l(cc.Label)],e.prototype,"charge_info",void 0),c([l(cc.Node)],e.prototype,"charge_lock",void 0),c([l(cc.Node)],e.prototype,"charge_unlock",void 0),c([l(cc.Label)],e.prototype,"gems_charge_producing",void 0),c([l(cc.Node)],e.prototype,"beast_lock",void 0),c([l(cc.Node)],e.prototype,"beast_unlock",void 0),c([l(cc.Label)],e.prototype,"gems_beast_total",void 0),c([l(cc.Label)],e.prototype,"beast_count",void 0),c([l(cc.Label)],e.prototype,"curBeast_gems",void 0),c([l(sp.Skeleton)],e.prototype,"beast_ske",void 0),c([l(cc.Label)],e.prototype,"gems_friend_total",void 0),c([l(cc.Label)],e.prototype,"friend_count",void 0),c([l(cc.Node)],e.prototype,"friend_content",void 0),c([l(cc.Node)],e.prototype,"friend_item",void 0),c([l(cc.Label)],e.prototype,"friend_product_speed",void 0),c([u],e)}(cc.Component);o.default=p,cc._RF.pop()},{"./beastMgr":"beastMgr"}],gemsDetail:[function(t,e,o){"use strict";cc._RF.push(e,"6a359GrUk1M/b+Rq9FZM/KJ","gemsDetail");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(r=t[s])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,s=i.ccclass,a=i.property,u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.content=null,e}return r(e,t),e.prototype.start=function(){},e.prototype.btnBackClicked=function(){this.node.destroy()},c([a(cc.Node)],e.prototype,"content",void 0),c([s],e)}(cc.Component);o.default=u,cc._RF.pop()},{}]},{},["beast","beastGet","beastMgr","gemsDetail"]);