webpackJsonp([3],{"1qiq":function(t,e,n){"use strict";n("l/Gp"),n("gJTo")},"2LoE":function(t,e,n){t.exports={default:n("gsCR"),__esModule:!0}},"3IEL":function(t,e){t.exports={canvas:"canvas___3wgoX"}},"4YfN":function(t,e,n){"use strict";e.__esModule=!0;var i=n("aA9S"),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}},"4fuu":function(t,e,n){var i=n("273z");i(i.S,"Object",{create:n("hX+v")})},"7Dzp":function(t,e,n){var i;!function(){"use strict";var r=!("undefined"==typeof window||!window.document||!window.document.createElement),a={canUseDOM:r,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:r&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:r&&!!window.screen};void 0!==(i=function(){return a}.call(e,n,e,t))&&(t.exports=i)}()},AA3o:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},CHpA:function(t,e){},IYkF:function(t,e,n){t.exports={default:n("cAUj"),__esModule:!0}},MX4v:function(t,e){t.exports={"slider-frame":"slider-frame___1C0R4"}},OBsF:function(t,e){},UzKs:function(t,e,n){"use strict";e.__esModule=!0;var i=n("hRKE"),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,r.default)(e))&&"function"!=typeof e?t:e}},V0EG:function(t,e){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function r(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function a(t){if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function o(){g&&h&&(g=!1,h.length?f=h.concat(f):v=-1,f.length&&s())}function s(){if(!g){var t=r(o);g=!0;for(var e=f.length;e;){for(h=f,f=[];++v<e;)h&&h[v].run();v=-1,e=f.length}h=null,g=!1,a(t)}}function l(t,e){this.fun=t,this.array=e}function u(){}var c,d,p=t.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(t){d=i}}();var h,f=[],g=!1,v=-1;p.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new l(t,e)),1!==f.length||g||r(s)},l.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=u,p.addListener=u,p.once=u,p.off=u,p.removeListener=u,p.removeAllListeners=u,p.emit=u,p.prependListener=u,p.prependOnceListener=u,p.listeners=function(t){return[]},p.binding=function(t){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(t){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},VStj:function(t,e,n){"use strict";function i(t){var e=parseInt(t%3600/60)+"",n=parseInt(t%60)+"";return e.padStart(2,"0")+":"+n.padStart(2,"0")}function r(t){var e=t.split(":");return(60*e[0]+1*e[1]).toFixed(2)}Object.defineProperty(e,"__esModule",{value:!0});var a=(n("1qiq"),n("VttH")),o=n.n(a),s=n("YbOa"),l=n.n(s),u=n("U5hO"),c=n.n(u),d=n("EE81"),p=n.n(d),h=n("Jmyu"),f=n.n(h),g=n("/00i"),v=n.n(g),y=n("9wvh"),m=n.n(y),S=n("NmwX"),b=n("VTUC"),w=n.n(b),T=n("MX4v"),E=n.n(T),k=function(t){function e(t){var n;return l()(this,e),n=f()(this,v()(e).call(this,t)),n.state={times:[],texts:[],current:0},n}return p()(e,[{key:"initLryic",value:function(t){t=t.split("\n"),t.filter(function(t){return t}),t=t.map(function(e,n){var i=e.split("]");if(!i[1]&&n<t.length-2){for(var r=n+1,a=n+3;r<a;r++){var o=t[r].split("]");if(o[1]){i[1]=o[1];break}}return i.join("]")}return e}),console.log("lyrics...",t),this.formatLryic(t)}},{key:"formatLryic",value:function(t){var e=[],n=[];t.forEach(function(t){var i=t.replace("[","").split("]");e.push(r(i[0])),n.push({time:r(i[0]),text:i[1]})}),this.setState({times:e,texts:n}),console.log("times...",e,n)}},{key:"componentWillReceiveProps",value:function(t,e){t.lyric!=this.props.lyric&&this.initLryic(t.lyric);for(var n=0,i=this.state.times.length;n<i;n++)if(t.currentTime<this.state.times[n]){n-1!==this.state.current&&this.setState({current:n-1});break}}},{key:"render",value:function(){return m.a.createElement(o.a,{selectedIndex:this.state.current,vertical:!0,dots:!1,autoplayInterval:500,infinite:!0},this.state.texts.map(function(t,e){return m.a.createElement("p",{className:E.a.p,key:e},t.text)}))}}]),c()(e,t),e}(m.a.PureComponent),_=k,x=n("3IEL"),C=n.n(x);m.a.Component;n.d(e,"default",function(){return A});var M,O,A=(M=Object(S.connect)(function(t){var e=t.geturl;return console.log(e),e},function(t){return{getUrl:function(e){t({type:"geturl/getUrl",payload:e})},getlyric:function(e){t({type:"geturl/getlyric",payload:e})},changePlay:function(e){t({type:"geturl/changePlay",payload:e})}}}))(O=function(t){function e(t){var n;return l()(this,e),n=f()(this,v()(e).call(this,t)),n.com=void 0,n.state={progress:0,isPlay:!0},n}return p()(e,[{key:"componentDidMount",value:function(){var t=this.props.match.params.id;this.props.getUrl(t)}},{key:"componentWillReceiveProps",value:function(t){t.id!=this.props.id&&this.props.getlyric(t.id)}},{key:"timeUpdate",value:function(){var t=this.refs.audio.currentTime/this.refs.audio.duration*100;this.setState({progress:t})}},{key:"chageState",value:function(){var t=this;console.log(window._hmt),this.setState({isPlay:!this.state.isPlay},function(){t.state.isPlay?t.refs.audio.play():t.refs.audio.pause()})}},{key:"touchStart",value:function(){var t=this;this.setState({isPlay:!1},function(){t.refs.audio.pause()})}},{key:"touchMove",value:function(t){var e=this,n=t.touches[0],i=this.refs.progress,r=(n.pageX-i.offsetLeft)/i.offsetWidth;r>1&&(r=1),r<0&&(r=0),this.setState({progress:100*r},function(){e.refs.audio.currentTime=r*e.refs.audio.duration})}},{key:"touchEnd",value:function(){var t=this;this.setState({isPlay:!0},function(){t.refs.audio.play()})}},{key:"chanagePlay",value:function(t){this.props.changePlay(t)}},{key:"render",value:function(){var t=this;if(!this.props.detail.al)return null;if(!this.props.detail.ar)return null;var e=this.state.isPlay;return m.a.createElement("div",{className:w.a.play},m.a.createElement("div",{className:w.a.playHeader},m.a.createElement("span",null,m.a.createElement("img",{src:"./palyIcon/xiangzuojiantou.png"})),m.a.createElement("div",null,m.a.createElement("span",null,this.props.detail.name,"--",this.props.detail.ar[0].name)),m.a.createElement("span",null)),m.a.createElement(o.a,{className:w.a.imgUrl},m.a.createElement("div",{className:w.a.url},m.a.createElement("div",{className:w.a.urls},m.a.createElement("img",{src:this.props.detail.al.picUrl}))),m.a.createElement(_,{lyric:this.props.lyric,currentTime:this.refs.audio&&this.refs.audio.currentTime})),m.a.createElement("div",{className:w.a.audio},m.a.createElement("div",{className:w.a.playTop}),m.a.createElement("div",{className:w.a.playcontent},m.a.createElement("span",null,this.currentTime),m.a.createElement("div",{className:w.a.progress,onTouchStart:this.touchStart.bind(this),onTouchMove:this.touchMove.bind(this),onTouchEnd:this.touchEnd.bind(this)},m.a.createElement("b",{ref:"progress"},m.a.createElement("span",{style:{width:this.state.progress+"%"}}))),m.a.createElement("span",null,this.duration)),this.props.url?m.a.createElement("audio",{ref:"audio",crossOrigin:"anonymous",autoPlay:!0,src:this.props.url,onTimeUpdate:function(){return t.timeUpdate()}}):null,m.a.createElement("div",{className:w.a.playfooter},m.a.createElement("ul",null,m.a.createElement("li",null,m.a.createElement("img",{src:"./palyIcon/shuaxin.png"})),m.a.createElement("li",{onClick:function(){return t.chanagePlay("prev")}},m.a.createElement("img",{src:"./palyIcon/xiayishou1.png"})),m.a.createElement("li",{onClick:this.chageState.bind(this)},e?m.a.createElement("img",{src:"./palyIcon/zanting.png"}):m.a.createElement("img",{src:"./palyIcon/weibiaoti--.png"})),m.a.createElement("li",{onClick:function(){return t.chanagePlay("next")}},m.a.createElement("img",{src:"./palyIcon/xiayishou1.png"})),m.a.createElement("li",null,m.a.createElement("img",{src:"./palyIcon/liebiao.png"}))))))}},{key:"duration",get:function(){return this.refs.audio&&this.refs.audio.duration?i(this.refs.audio.duration):"00:00"}},{key:"currentTime",get:function(){return this.refs.audio&&this.refs.audio.currentTime?i(this.refs.audio.currentTime):"00:00"}}]),c()(e,t),e}(y.Component))||O},VTUC:function(t,e){t.exports={play:"play___1uZ-N",playHeader:"playHeader___3kzeq",imgUrl:"imgUrl___1OIH0",url:"url___1JZk9",urls:"urls___38gwu",rotate:"rotate___3HjG2",audio:"audio___M1uv-",playTop:"playTop___2GM2-",playcontent:"playcontent___3utYB",playfooter:"playfooter___Dw--S"}},VttH:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n("a3Yh"),a=i(r),o=n("4YfN"),s=i(o),l=n("AA3o"),u=i(l),c=n("xSur"),d=i(c),p=n("UzKs"),h=i(p),f=n("Y7Ml"),g=i(f),v=n("ZQJc"),y=i(v),m=n("9wvh"),S=i(m),b=n("nm+c"),w=i(b),T=function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&(n[i[r]]=t[i[r]]);return n},E=function(t){function e(t){(0,u.default)(this,e);var n=(0,h.default)(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.onChange=function(t){n.setState({selectedIndex:t},function(){n.props.afterChange&&n.props.afterChange(t)})},n.state={selectedIndex:n.props.selectedIndex},n}return(0,g.default)(e,t),(0,d.default)(e,[{key:"render",value:function(){var t=this.props,e=t.infinite,n=t.selectedIndex,i=t.beforeChange,r=(t.afterChange,t.dots),o=T(t,["infinite","selectedIndex","beforeChange","afterChange","dots"]),l=o.prefixCls,u=o.dotActiveStyle,c=o.dotStyle,d=o.className,p=o.vertical,h=(0,s.default)({},o,{wrapAround:e,slideIndex:n,beforeSlide:i}),f=[];r&&(f=[{component:function(t){for(var e=t.slideCount,n=t.slidesToScroll,i=t.currentSlide,r=[],o=0;o<e;o+=n)r.push(o);var s=r.map(function(t){var e=(0,y.default)(l+"-wrap-dot",(0,a.default)({},l+"-wrap-dot-active",t===i)),n=t===i?u:c;return S.default.createElement("div",{className:e,key:t},S.default.createElement("span",{style:n}))});return S.default.createElement("div",{className:l+"-wrap"},s)},position:"BottomCenter"}]);var g=(0,y.default)(l,d,(0,a.default)({},l+"-vertical",p));return S.default.createElement(w.default,(0,s.default)({},h,{className:g,decorators:f,afterSlide:this.onChange}))}}]),e}(S.default.Component);e.default=E,E.defaultProps={prefixCls:"am-carousel",dots:!0,arrows:!1,autoplay:!1,infinite:!1,cellAlign:"center",selectedIndex:0,dotStyle:{},dotActiveStyle:{}},t.exports=e.default},Y7Ml:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n("qCHB"),a=i(r),o=n("IYkF"),s=i(o),l=n("hRKE"),u=i(l);e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,u.default)(e)));t.prototype=(0,s.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(a.default?(0,a.default)(t,e):t.__proto__=e)}},Yyxk:function(t,e,n){t.exports={default:n("GYwi"),__esModule:!0}},ZQJc:function(t,e,n){var i,r;!function(){"use strict";function n(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)&&i.length){var o=n.apply(null,i);o&&t.push(o)}else if("object"===r)for(var s in i)a.call(i,s)&&i[s]&&t.push(s)}}return t.join(" ")}var a={}.hasOwnProperty;void 0!==t&&t.exports?(n.default=n,t.exports=n):(i=[],void 0!==(r=function(){return n}.apply(e,i))&&(t.exports=r))}()},a3Yh:function(t,e,n){"use strict";e.__esModule=!0;var i=n("liLe"),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t,e,n){return e in t?(0,r.default)(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},aA9S:function(t,e,n){t.exports={default:n("WgWa"),__esModule:!0}},cAUj:function(t,e,n){n("4fuu");var i=n("UB+n").Object;t.exports=function(t,e){return i.create(t,e)}},gJTo:function(t,e){},hRKE:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n("2LoE"),a=i(r),o=n("Yyxk"),s=i(o),l="function"==typeof s.default&&"symbol"==typeof a.default?function(t){return typeof t}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":typeof t};e.default="function"==typeof s.default&&"symbol"===l(a.default)?function(t){return void 0===t?"undefined":l(t)}:function(t){return t&&"function"==typeof s.default&&t.constructor===s.default&&t!==s.default.prototype?"symbol":void 0===t?"undefined":l(t)}},iMH5:function(t,e,n){(function(e){for(var i=n("jt2e"),r="undefined"==typeof window?e:window,a=["moz","webkit"],o="AnimationFrame",s=r["request"+o],l=r["cancel"+o]||r["cancelRequest"+o],u=0;!s&&u<a.length;u++)s=r[a[u]+"Request"+o],l=r[a[u]+"Cancel"+o]||r[a[u]+"CancelRequest"+o];if(!s||!l){var c=0,d=0,p=[];s=function(t){if(0===p.length){var e=i(),n=Math.max(0,1e3/60-(e-c));c=n+e,setTimeout(function(){var t=p.slice(0);p.length=0;for(var e=0;e<t.length;e++)if(!t[e].cancelled)try{t[e].callback(c)}catch(t){setTimeout(function(){throw t},0)}},Math.round(n))}return p.push({handle:++d,callback:t,cancelled:!1}),d},l=function(t){for(var e=0;e<p.length;e++)p[e].handle===t&&(p[e].cancelled=!0)}}t.exports=function(t){return s.call(r,t)},t.exports.cancel=function(){l.apply(r,arguments)},t.exports.polyfill=function(t){t||(t=r),t.requestAnimationFrame=s,t.cancelAnimationFrame=l}}).call(e,n("9AUj"))},jt2e:function(t,e,n){(function(e){(function(){var n,i,r,a,o,s;"undefined"!=typeof performance&&null!==performance&&performance.now?t.exports=function(){return performance.now()}:void 0!==e&&null!==e&&e.hrtime?(t.exports=function(){return(n()-o)/1e6},i=e.hrtime,n=function(){var t;return t=i(),1e9*t[0]+t[1]},a=n(),s=1e9*e.uptime(),o=a-s):Date.now?(t.exports=function(){return Date.now()-r},r=Date.now()):(t.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(e,n("V0EG"))},"l/Gp":function(t,e,n){"use strict";n("OBsF"),n("CHpA")},liLe:function(t,e,n){t.exports={default:n("e2yx"),__esModule:!0}},"nm+c":function(t,e,n){"use strict";function i(t,e,n,i){return(n-e)*Math.sqrt(1-(t=t/i-1)*t)+e}function r(t,e,n,i){return(n-e)*t/i+e}Object.defineProperty(e,"__esModule",{value:!0});var a=n("4YfN"),o=n.n(a),s=n("AA3o"),l=n.n(s),u=n("xSur"),c=n.n(u),d=n("UzKs"),p=n.n(d),h=n("Y7Ml"),f=n.n(h),g=n("9wvh"),v=n.n(g),y=[{component:function(t){function e(){l()(this,e);var t=p()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.previousSlide()},t}return f()(e,t),c()(e,[{key:"render",value:function(){return v.a.createElement("button",{style:this.getButtonStyles(0===this.props.currentSlide&&!this.props.wrapAround),onClick:this.handleClick},"PREV")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(v.a.Component),position:"CenterLeft"},{component:function(t){function e(){l()(this,e);var t=p()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments));return t.handleClick=function(e){e.preventDefault(),t.props.nextSlide&&t.props.nextSlide()},t}return f()(e,t),c()(e,[{key:"render",value:function(){return v.a.createElement("button",{style:this.getButtonStyles(this.props.currentSlide+this.props.slidesToScroll>=this.props.slideCount&&!this.props.wrapAround),onClick:this.handleClick},"NEXT")}},{key:"getButtonStyles",value:function(t){return{border:0,background:"rgba(0,0,0,0.4)",color:"white",padding:10,outline:0,opacity:t?.3:1,cursor:"pointer"}}}]),e}(v.a.Component),position:"CenterRight"},{component:function(t){function e(){return l()(this,e),p()(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return f()(e,t),c()(e,[{key:"render",value:function(){var t=this,e=this.getIndexes(this.props.slideCount,this.props.slidesToScroll);return v.a.createElement("ul",{style:this.getListStyles()},e.map(function(e){return v.a.createElement("li",{style:t.getListItemStyles(),key:e},v.a.createElement("button",{style:t.getButtonStyles(t.props.currentSlide===e),onClick:t.props.goToSlide&&t.props.goToSlide.bind(null,e)},"\u2022"))}))}},{key:"getIndexes",value:function(t,e){for(var n=[],i=0;i<t;i+=e)n.push(i);return n}},{key:"getListStyles",value:function(){return{position:"relative",margin:0,top:-10,padding:0}}},{key:"getListItemStyles",value:function(){return{listStyleType:"none",display:"inline-block"}}},{key:"getButtonStyles",value:function(t){return{border:0,background:"transparent",color:"black",cursor:"pointer",padding:10,outline:0,fontSize:24,opacity:t?1:.5}}}]),e}(v.a.Component),position:"BottomCenter"}],m=y,S=n("7Dzp"),b=n.n(S),w=n("iMH5"),T=n.n(w),E={ADDITIVE:"ADDITIVE",DESTRUCTIVE:"DESTRUCTIVE"},k=function(t,e,n){null!==t&&void 0!==t&&(t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n)},_=function(t,e,n){null!==t&&void 0!==t&&(t.removeEventListener?t.removeEventListener(e,n,!1):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null)},x=function(t){function e(t){l()(this,e);var n=p()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n._rafCb=function(){var t=n.state;if(0!==t.tweenQueue.length){for(var e=Date.now(),i=[],r=0;r<t.tweenQueue.length;r++){var a=t.tweenQueue[r],o=a.initTime,s=a.config;e-o<s.duration?i.push(a):s.onEnd&&s.onEnd()}-1!==n._rafID&&(n.setState({tweenQueue:i}),n._rafID=T()(n._rafCb))}},n.handleClick=function(t){!0===n.clickSafe&&(t.preventDefault(),t.stopPropagation(),t.nativeEvent&&t.nativeEvent.stopPropagation())},n.autoplayIterator=function(){if(n.props.wrapAround)return n.nextSlide();n.state.currentSlide!==n.state.slideCount-n.state.slidesToShow?n.nextSlide():n.stopAutoplay()},n.goToSlide=function(t){var e=n.props,i=e.beforeSlide,r=e.afterSlide;if(t>=v.a.Children.count(n.props.children)||t<0){if(!n.props.wrapAround)return;if(t>=v.a.Children.count(n.props.children))return i(n.state.currentSlide,0),n.setState({currentSlide:0},function(){n.animateSlide(null,null,n.getTargetLeft(null,t),function(){n.animateSlide(null,.01),r(0),n.resetAutoplay(),n.setExternalData()})});var a=v.a.Children.count(n.props.children)-n.state.slidesToScroll;return i(n.state.currentSlide,a),n.setState({currentSlide:a},function(){n.animateSlide(null,null,n.getTargetLeft(null,t),function(){n.animateSlide(null,.01),r(a),n.resetAutoplay(),n.setExternalData()})})}i(n.state.currentSlide,t),n.setState({currentSlide:t},function(){n.animateSlide(),n.props.afterSlide(t),n.resetAutoplay(),n.setExternalData()})},n.nextSlide=function(){var t=v.a.Children.count(n.props.children),e=n.props.slidesToShow;if("auto"===n.props.slidesToScroll&&(e=n.state.slidesToScroll),!(n.state.currentSlide>=t-e)||n.props.wrapAround)if(n.props.wrapAround)n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);else{if(1!==n.props.slideWidth)return n.goToSlide(n.state.currentSlide+n.state.slidesToScroll);n.goToSlide(Math.min(n.state.currentSlide+n.state.slidesToScroll,t-e))}},n.previousSlide=function(){n.state.currentSlide<=0&&!n.props.wrapAround||(n.props.wrapAround?n.goToSlide(n.state.currentSlide-n.state.slidesToScroll):n.goToSlide(Math.max(0,n.state.currentSlide-n.state.slidesToScroll)))},n.onResize=function(){n.setDimensions()},n.onReadyStateChange=function(){n.setDimensions()},n.state={currentSlide:n.props.slideIndex,dragging:!1,frameWidth:0,left:0,slideCount:0,slidesToScroll:n.props.slidesToScroll,slideWidth:0,top:0,tweenQueue:[]},n.touchObject={},n.clickSafe=!0,n}return f()(e,t),c()(e,[{key:"componentWillMount",value:function(){this.setInitialDimensions()}},{key:"componentDidMount",value:function(){this.setDimensions(),this.bindEvents(),this.setExternalData(),this.props.autoplay&&this.startAutoplay()}},{key:"componentWillReceiveProps",value:function(t){this.setState({slideCount:t.children.length}),this.setDimensions(t),this.props.slideIndex!==t.slideIndex&&t.slideIndex!==this.state.currentSlide&&this.goToSlide(t.slideIndex),this.props.autoplay!==t.autoplay&&(t.autoplay?this.startAutoplay():this.stopAutoplay())}},{key:"componentWillUnmount",value:function(){this.unbindEvents(),this.stopAutoplay(),T.a.cancel(this._rafID),this._rafID=-1}},{key:"tweenState",value:function(t,e){var n=this,i=e.easing,r=e.duration,a=e.delay,o=e.beginValue,s=e.endValue,l=e.onEnd,u=e.stackBehavior;this.setState(function(e){var c=e,d=void 0,p=void 0;if("string"==typeof t)d=t,p=t;else{for(var h=0;h<t.length-1;h++)c=c[t[h]];d=t[t.length-1],p=t.join("|")}var f={easing:i,duration:null==r?300:r,delay:null==a?0:a,beginValue:null==o?c[d]:o,endValue:s,onEnd:l,stackBehavior:u||"ADDITIVE"},g=e.tweenQueue;return f.stackBehavior===E.DESTRUCTIVE&&(g=e.tweenQueue.filter(function(t){return t.pathHash!==p})),g.push({pathHash:p,config:f,initTime:Date.now()+f.delay}),c[d]=f.endValue,1===g.length&&(n._rafID=T()(n._rafCb)),{tweenQueue:g}})}},{key:"getTweeningValue",value:function(t){var e=this.state,n=void 0,i=void 0;if("string"==typeof t)n=e[t],i=t;else{n=e;for(var r=0;r<t.length;r++)n=n[t[r]];i=t.join("|")}for(var a=Date.now(),o=0;o<e.tweenQueue.length;o++){var s=e.tweenQueue[o],l=s.pathHash,u=s.initTime,c=s.config;if(l===i){var d=a-u>c.duration?c.duration:Math.max(0,a-u);n+=(0===c.duration?c.endValue:c.easing(d,c.beginValue,c.endValue,c.duration))-c.endValue}}return n}},{key:"render",value:function(){var t=this,e=v.a.Children.count(this.props.children)>1?this.formatChildren(this.props.children):this.props.children;return v.a.createElement("div",{className:["slider",this.props.className||""].join(" "),ref:"slider",style:o()({},this.getSliderStyles(),this.props.style)},v.a.createElement("div",o()({className:"slider-frame",ref:"frame",style:this.getFrameStyles()},this.getTouchEvents(),this.getMouseEvents(),{onClick:this.handleClick}),v.a.createElement("ul",{className:"slider-list",ref:"list",style:this.getListStyles()},e)),this.props.decorators?this.props.decorators.map(function(e,n){return v.a.createElement("div",{style:o()({},t.getDecoratorStyles(e.position),e.style||{}),className:"slider-decorator-"+n,key:n},v.a.createElement(e.component,{currentSlide:t.state.currentSlide,slideCount:t.state.slideCount,frameWidth:t.state.frameWidth,slideWidth:t.state.slideWidth,slidesToScroll:t.state.slidesToScroll,cellSpacing:t.props.cellSpacing,slidesToShow:t.props.slidesToShow,wrapAround:t.props.wrapAround,nextSlide:t.nextSlide,previousSlide:t.previousSlide,goToSlide:t.goToSlide}))}):null,v.a.createElement("style",{type:"text/css",dangerouslySetInnerHTML:{__html:this.getStyleTagStyles()}}))}},{key:"getTouchEvents",value:function(){var t=this;return!1===this.props.swiping?null:{onTouchStart:function(e){t.touchObject={startX:e.touches[0].pageX,startY:e.touches[0].pageY},t.handleMouseOver()},onTouchMove:function(e){var n=t.swipeDirection(t.touchObject.startX,e.touches[0].pageX,t.touchObject.startY,e.touches[0].pageY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.touches[0].pageY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.touches[0].pageX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.touches[0].pageX,endY:e.touches[0].pageY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})},onTouchEnd:function(e){t.handleSwipe(e),t.handleMouseOut()},onTouchCancel:function(e){t.handleSwipe(e)}}}},{key:"getMouseEvents",value:function(){var t=this;return!1===this.props.dragging?null:{onMouseOver:function(){t.handleMouseOver()},onMouseOut:function(){t.handleMouseOut()},onMouseDown:function(e){t.touchObject={startX:e.clientX,startY:e.clientY},t.setState({dragging:!0})},onMouseMove:function(e){if(t.state.dragging){var n=t.swipeDirection(t.touchObject.startX,e.clientX,t.touchObject.startY,e.clientY);0!==n&&e.preventDefault();var i=t.props.vertical?Math.round(Math.sqrt(Math.pow(e.clientY-t.touchObject.startY,2))):Math.round(Math.sqrt(Math.pow(e.clientX-t.touchObject.startX,2)));t.touchObject={startX:t.touchObject.startX,startY:t.touchObject.startY,endX:e.clientX,endY:e.clientY,length:i,direction:n},t.setState({left:t.props.vertical?0:t.getTargetLeft(t.touchObject.length*t.touchObject.direction),top:t.props.vertical?t.getTargetLeft(t.touchObject.length*t.touchObject.direction):0})}},onMouseUp:function(e){t.state.dragging&&t.handleSwipe(e)},onMouseLeave:function(e){t.state.dragging&&t.handleSwipe(e)}}}},{key:"handleMouseOver",value:function(){this.props.autoplay&&(this.autoplayPaused=!0,this.stopAutoplay())}},{key:"handleMouseOut",value:function(){this.props.autoplay&&this.autoplayPaused&&(this.startAutoplay(),this.autoplayPaused=null)}},{key:"handleSwipe",value:function(t){void 0!==this.touchObject.length&&this.touchObject.length>44?this.clickSafe=!0:this.clickSafe=!1;var e=this.props,n=e.slidesToShow,i=e.slidesToScroll,r=e.swipeSpeed;"auto"===i&&(n=this.state.slidesToScroll),v.a.Children.count(this.props.children)>1&&this.touchObject.length>this.state.slideWidth/n/r?1===this.touchObject.direction?this.state.currentSlide>=v.a.Children.count(this.props.children)-n&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.nextSlide():-1===this.touchObject.direction&&(this.state.currentSlide<=0&&!this.props.wrapAround?this.animateSlide(this.props.edgeEasing):this.previousSlide()):this.goToSlide(this.state.currentSlide),this.touchObject={},this.setState({dragging:!1})}},{key:"swipeDirection",value:function(t,e,n,i){var r=t-e,a=n-i,o=Math.atan2(a,r),s=Math.round(180*o/Math.PI);return s<0&&(s=360-Math.abs(s)),s<=45&&s>=0?1:s<=360&&s>=315?1:s>=135&&s<=225?-1:!0===this.props.vertical?s>=35&&s<=135?1:-1:0}},{key:"startAutoplay",value:function(){v.a.Children.count(this.props.children)<=1||(this.autoplayID=setInterval(this.autoplayIterator,this.props.autoplayInterval))}},{key:"resetAutoplay",value:function(){this.props.resetAutoplay&&this.props.autoplay&&!this.autoplayPaused&&(this.stopAutoplay(),this.startAutoplay())}},{key:"stopAutoplay",value:function(){this.autoplayID&&clearInterval(this.autoplayID)}},{key:"animateSlide",value:function(t,e,n,i){this.tweenState(this.props.vertical?"top":"left",{easing:t||this.props.easing,duration:e||this.props.speed,endValue:n||this.getTargetLeft(),delay:null,beginValue:null,onEnd:i||null,stackBehavior:E})}},{key:"getTargetLeft",value:function(t,e){var n=void 0,i=e||this.state.currentSlide,r=this.props.cellSpacing;switch(this.props.cellAlign){case"left":n=0,n-=r*i;break;case"center":n=(this.state.frameWidth-this.state.slideWidth)/2,n-=r*i;break;case"right":n=this.state.frameWidth-this.state.slideWidth,n-=r*i}var a=this.state.slideWidth*i;return this.state.currentSlide>0&&i+this.state.slidesToScroll>=this.state.slideCount&&1!==this.props.slideWidth&&!this.props.wrapAround&&"auto"===this.props.slidesToScroll&&(a=this.state.slideWidth*this.state.slideCount-this.state.frameWidth,n=0,n-=r*(this.state.slideCount-1)),n-=t||0,-1*(a-n)}},{key:"bindEvents",value:function(){b.a.canUseDOM&&(k(window,"resize",this.onResize),k(document,"readystatechange",this.onReadyStateChange))}},{key:"unbindEvents",value:function(){b.a.canUseDOM&&(_(window,"resize",this.onResize),_(document,"readystatechange",this.onReadyStateChange))}},{key:"formatChildren",value:function(t){var e=this,n=this.props.vertical?this.getTweeningValue("top"):this.getTweeningValue("left");return v.a.Children.map(t,function(t,i){return v.a.createElement("li",{className:"slider-slide",style:e.getSlideStyles(i,n),key:i},t)})}},{key:"setInitialDimensions",value:function(){var t=this,e=this.props,n=e.vertical,i=e.initialSlideHeight,r=e.initialSlideWidth,a=e.slidesToShow,o=e.cellSpacing,s=e.children,l=n?i||0:r||0,u=i?i*a:0,c=u+o*(a-1);this.setState({slideHeight:u,frameWidth:n?c:"100%",slideCount:v.a.Children.count(s),slideWidth:l},function(){t.setLeft(),t.setExternalData()})}},{key:"setDimensions",value:function(t){var e=this;t=t||this.props;var n=void 0,i=void 0,r=void 0,a=void 0,o=t.slidesToScroll,s=this.refs.frame,l=s.childNodes[0].childNodes[0];l?(l.style.height="auto",r=this.props.vertical?l.offsetHeight*t.slidesToShow:l.offsetHeight):r=100,a="number"!=typeof t.slideWidth?parseInt(t.slideWidth,10):t.vertical?r/t.slidesToShow*t.slideWidth:s.offsetWidth/t.slidesToShow*t.slideWidth,t.vertical||(a-=t.cellSpacing*((100-100/t.slidesToShow)/100)),i=r+t.cellSpacing*(t.slidesToShow-1),n=t.vertical?i:s.offsetWidth,"auto"===t.slidesToScroll&&(o=Math.floor(n/(a+t.cellSpacing))),this.setState({slideHeight:r,frameWidth:n,slideWidth:a,slidesToScroll:o,left:t.vertical?0:this.getTargetLeft(),top:t.vertical?this.getTargetLeft():0},function(){e.setLeft()})}},{key:"setLeft",value:function(){this.setState({left:this.props.vertical?0:this.getTargetLeft(),top:this.props.vertical?this.getTargetLeft():0})}},{key:"setExternalData",value:function(){this.props.data&&this.props.data()}},{key:"getListStyles",value:function(){var t=this.state.slideWidth*v.a.Children.count(this.props.children),e=this.props.cellSpacing,n=e*v.a.Children.count(this.props.children),i="translate3d("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px, 0)";return{transform:i,WebkitTransform:i,msTransform:"translate("+this.getTweeningValue("left")+"px, "+this.getTweeningValue("top")+"px)",position:"relative",display:"block",margin:this.props.vertical?e/2*-1+"px 0px":"0px "+e/2*-1+"px",padding:0,height:this.props.vertical?t+n:this.state.slideHeight,width:this.props.vertical?"auto":t+n,cursor:!0===this.state.dragging?"pointer":"inherit",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getFrameStyles",value:function(){return{position:"relative",display:"block",overflow:this.props.frameOverflow,height:this.props.vertical?this.state.frameWidth||"initial":"auto",margin:this.props.framePadding,padding:0,transform:"translate3d(0, 0, 0)",WebkitTransform:"translate3d(0, 0, 0)",msTransform:"translate(0, 0)",boxSizing:"border-box",MozBoxSizing:"border-box"}}},{key:"getSlideStyles",value:function(t,e){var n=this.getSlideTargetPosition(t,e),i=this.props.cellSpacing;return{position:"absolute",left:this.props.vertical?0:n,top:this.props.vertical?n:0,display:this.props.vertical?"block":"inline-block",listStyleType:"none",verticalAlign:"top",width:this.props.vertical?"100%":this.state.slideWidth,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",marginLeft:this.props.vertical?"auto":i/2,marginRight:this.props.vertical?"auto":i/2,marginTop:this.props.vertical?i/2:"auto",marginBottom:this.props.vertical?i/2:"auto"}}},{key:"getSlideTargetPosition",value:function(t,e){var n=this.state.frameWidth/this.state.slideWidth,i=(this.state.slideWidth+this.props.cellSpacing)*t,r=(this.state.slideWidth+this.props.cellSpacing)*n*-1;if(this.props.wrapAround){var a=Math.ceil(e/this.state.slideWidth);if(this.state.slideCount-a<=t)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount-t)*-1;var o=Math.ceil((Math.abs(e)-Math.abs(r))/this.state.slideWidth);if(1!==this.state.slideWidth&&(o=Math.ceil((Math.abs(e)-this.state.slideWidth)/this.state.slideWidth)),t<=o-1)return(this.state.slideWidth+this.props.cellSpacing)*(this.state.slideCount+t)}return i}},{key:"getSliderStyles",value:function(){return{position:"relative",display:"block",width:this.props.width,height:"auto",boxSizing:"border-box",MozBoxSizing:"border-box",visibility:this.state.slideWidth?"visible":"hidden"}}},{key:"getStyleTagStyles",value:function(){return".slider-slide > img {width: 100%; display: block;}"}},{key:"getDecoratorStyles",value:function(t){switch(t){case"TopLeft":return{position:"absolute",top:0,left:0};case"TopCenter":return{position:"absolute",top:0,left:"50%",transform:"translateX(-50%)",WebkitTransform:"translateX(-50%)",msTransform:"translateX(-50%)"};case"TopRight":return{position:"absolute",top:0,right:0};case"CenterLeft":return{position:"absolute",top:"50%",left:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"CenterCenter":return{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",WebkitTransform:"translate(-50%, -50%)",msTransform:"translate(-50%, -50%)"};case"CenterRight":return{position:"absolute",top:"50%",right:0,transform:"translateY(-50%)",WebkitTransform:"translateY(-50%)",msTransform:"translateY(-50%)"};case"BottomLeft":return{position:"absolute",bottom:0,left:0};case"BottomCenter":return{position:"absolute",bottom:0,width:"100%",textAlign:"center"};case"BottomRight":return{position:"absolute",bottom:0,right:0};default:return{position:"absolute",top:0,left:0}}}}]),e}(v.a.Component);x.defaultProps={afterSlide:function(){},autoplay:!1,resetAutoplay:!0,swipeSpeed:12,autoplayInterval:3e3,beforeSlide:function(){},cellAlign:"left",cellSpacing:0,data:function(){},decorators:m,dragging:!0,easing:i,edgeEasing:r,framePadding:"0px",frameOverflow:"hidden",slideIndex:0,slidesToScroll:1,slidesToShow:1,slideWidth:1,speed:500,swiping:!0,vertical:!1,width:"100%",wrapAround:!1,style:{}};var C=x;n.d(e,"default",function(){return C})},qCHB:function(t,e,n){t.exports={default:n("L3g4"),__esModule:!0}},xSur:function(t,e,n){"use strict";e.__esModule=!0;var i=n("liLe"),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,r.default)(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}()}});