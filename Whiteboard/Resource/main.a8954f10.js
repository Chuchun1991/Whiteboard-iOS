(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t){},1:function(e,t){},2:function(e,t){},"2YZa":function(e,t,n){"use strict";n.r(t);n("pNMO"),n("4Brf"),n("tjZM"),n("3I1R"),n("7+kd"),n("0oug"),n("KhsS"),n("gOCb"),n("a57n"),n("GXvd"),n("I1Gw"),n("gXIK"),n("lEou"),n("gbiT"),n("ma9I"),n("qHT+"),n("piMb"),n("yyme"),n("TeQF"),n("fbCW"),n("x0AG"),n("BIHw"),n("XbcX"),n("QWBl"),n("pjDv"),n("yq1k"),n("yXV3"),n("4mDm"),n("uqXc"),n("2B1R"),n("Xe3L"),n("E9XD"),n("9N29"),n("Junv"),n("+2oP"),n("Rfxz"),n("ToJy"),n("94Xl"),n("pDQq"),n("QGkA"),n("c9m3"),n("wZ/5"),n("gtqK"),n("rOQg"),n("9LPj"),n("7+zs"),n("tW5y"),n("DEfu"),n("Tskq"),n("Uydy"),n("eajv"),n("n/mU"),n("PqOI"),n("QNnp"),n("/5zm"),n("CsgD"),n("9mRW"),n("QFcT"),n("a5NK"),n("yiG3"),n("kNcU"),n("KvGi"),n("AmFO"),n("eJiR"),n("I9xj"),n("tl/u"),n("qePV"),n("NbN+"),n("i6QF"),n("WDsR"),n("r/Vq"),n("5uH8"),n("w1rZ"),n("JevA"),n("zKZe"),n("Eqjn"),n("5xtp"),n("T63A"),n("3KgV"),n("wfmh"),n("5DmW"),n("27RR"),n("cDke"),n("NBAS"),n("yQYn"),n("4h0Y"),n("5D5o"),n("tkto"),n("v5b1"),n("W/eh"),n("zuhW"),n("r5Og"),n("ExoC"),n("07d7"),n("B6y2"),n("rNhl"),n("4l63"),n("5s+n"),n("p532"),n("pv2x"),n("SuFq"),n("PzqY"),n("rBZX"),n("XUE8"),n("nkod"),n("f3jH"),n("x2An"),n("25bX"),n("G/JM"),n("1t3B"),n("ftMj"),n("i5pp"),n("TWNs"),n("rB9j"),n("U3f4"),n("JfAA"),n("YGK4"),n("9bJ7"),n("inlA"),n("9tb/"),n("JTJg"),n("PKPk"),n("Rm1S"),n("hDyC"),n("TZCg"),n("2A+d"),n("OM9Z"),n("UxlC"),n("hByQ"),n("EnZy"),n("LKBx"),n("SYor"),n("HiXI"),n("7ueG"),n("z8NH"),n("SpvK"),n("/Yfv"),n("iwkZ"),n("FDzp"),n("XMab"),n("ilnZ"),n("hMMk"),n("+ywr"),n("moxL"),n("qXVe"),n("c162"),n("waxf"),n("0TkE"),n("Onu3"),n("1dYe"),n("IL/d"),n("gvgV"),n("6R/c"),n("YL0P"),n("X5Zq"),n("MoCz"),n("P8wP"),n("7JcK"),n("ypFw"),n("JaFt"),n("zSZm"),n("KVSy"),n("ZJ55"),n("IZzc"),n("s5qe"),n("cvf0"),n("ENF9"),n("H+LF"),n("FZtP"),n("3bBZ"),n("Ew+T"),n("n5b4"),n("Kz25"),n("vxnP"),n("mGGf"),n("ls82"),n("bZMm");var r,a=n("q1tI"),o=n.n(a),i=n("i8i4"),c=(n("HrR1"),n("9Ktx")),s=n("dSAS"),u=n.n(s),l=n("AitN");function d(e){if(e)return{centerX:e.centerX,centerY:e.centerY,width:e.width,height:e.height,maxContentMode:f(e.maxContentMode),minContentMode:f(e.minContentMode)}}function f(e){if(e){var t=void 0===e.scale?1:e.scale,n=void 0===e.space?0:e.space;r.Scale;switch("string"==typeof e.mode?parseInt(r[e.mode]):e.mode){case r.Scale:return Object(l.contentModeScale)(t);case r.AspectFill:return Object(l.contentModeAspectFill)();case r.AspectFillScale:return Object(l.contentModeAspectFillScale)(t);case r.AspectFit:return Object(l.contentModeAspectFit)();case r.AspectFitScale:return Object(l.contentModeAspectFitScale)(t);case r.AspectFitSpace:return Object(l.contentModeAspectFitSpace)(n);default:return}}}!function(e){e[e.Scale=0]="Scale",e[e.AspectFit=1]="AspectFit",e[e.AspectFitScale=2]="AspectFitScale",e[e.AspectFitSpace=3]="AspectFitSpace",e[e.AspectFill=4]="AspectFill",e[e.AspectFillScale=5]="AspectFillScale"}(r||(r={}));var p=n("wOnQ"),m=n.n(p);function g(e){return void 0===e.roomUUID}function h(e){var t;t={message:e.message,error:e.error},console.log(JSON.stringify(t)),u.a.call("sdk.throwError",t)}function S(e){var t=e.data;"pptImageLoadError"===t.name&&u.a.call("sdk.postMessage",JSON.stringify(t)),t.shapeId&&t.mediaType&&t.action&&u.a.call("sdk.postMessage",JSON.stringify(t))}function v(e,t){var n=function(t,n){r(t,e.scenePreview.bind(e),n)},r=function(e,t,n){var r=document.createElement("div");r.setAttribute("class","shadow");var a=document.getElementById("whiteboard-container");if(a){var o=window.getComputedStyle(a).backgroundColor;r.style.background=o}document.body.appendChild(r),t(e,r,r.clientWidth,r.clientHeight),m()(r,{useCORS:!0,onclone:function(e){Array.from(e.getElementsByTagName("svg")).forEach((function(e){e.setAttribute("width","".concat(e.clientWidth)),e.setAttribute("height","".concat(e.clientHeight))}))}}).then((function(e){window.canvas=e;var t=e.toDataURL();document.body.removeChild(r),n(t)}))};u.a.register("displayer",{setDisableCameraTransform:function(t){e.disableCameraTransform=t},getDisableCameraTransform:function(){return e.disableCameraTransform},setCameraBound:function(n){t("setCameraBound nativeBound",n);var r=d(n);t("setCameraBound bound",r),e.setCameraBound(r)},getMemberState:function(t){return JSON.stringify(e.memberState(t))},scenePathType:function(t){return e.scenePathType(t)},entireScenes:function(){return e.entireScenes()},moveCamera:function(n){t("moveCamera: ",n),e.moveCamera(n)},moveCameraToContain:function(n){t("moveCameraToContain: ",n),e.moveCameraToContain(n)},refreshViewSize:function(){t("refreshViewSize"),e.refreshViewSize()},scalePptToFit:function(n){t("scalePptToFit",n),e.scalePptToFit(n)},convertToPointInWorld:function(n,r){return t("convertToPointInWorld",n,r),e.convertToPointInWorld({x:n,y:r})},setBackgroundColor:function(e,n,r,a){var o=document.getElementById("whiteboard-container");t("setBackgroundColor native",e,n,r,a);var i="rgb(".concat(e,", ").concat(n,", ").concat(r,")");t("setBackgroundColor color",i),o.style.background=i},addHighFrequencyEventListener:function(n,r){t("addHighFrequencyEventListener",n,r),e.addMagixEventListener(n,(function(t){var n=e.uuid||e.roomUUID,r=t.map((function(e){return{uuid:n,eventName:e.event,payload:e.payload,scope:e.scope,authorId:e.authorId}}));g(e)?u.a.call("room.fireHighFrequencyEvent",JSON.stringify(r)):u.a.call("player.fireHighFrequencyEvent",JSON.stringify(r))}),r)},addMagixEventListener:function(n){t("addMagixEventListener",n),e.addMagixEventListener(n,(function(n){t("fireMagixEvent",n);var r={uuid:e.uuid||e.roomUUID,eventName:n.event,payload:n.payload,scope:n.scope,authorId:n.authorId};g(e)?u.a.call("room.fireMagixEvent",JSON.stringify(r)):u.a.call("player.fireMagixEvent",JSON.stringify(r))}))},removeMagixEventListener:function(n){t("removeMagixEventListener",n),e.removeMagixEventListener(n)}}),u.a.registerAsyn("displayerAsync",{scenePreview:n,sceneSnapshot:function(t,n){r(t,e.fillSceneSnapshot.bind(e),n)}}),window.html2canvas=m.a,window.pagePreview=n}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),y(this,"startCallback",void 0),y(this,"stopCallback",void 0),y(this,"startAudioMixing",(function(e,n,r,a,o){return t.startCallback=o,u.a.call("rtc.startAudioMixing",{filePath:e,loopback:n,replace:r,cycle:a})})),y(this,"stopAudioMixing",(function(e){return t.stopCallback=e,u.a.call("rtc.stopAudioMixing")})),u.a.register("rtc",{callback:function(n,r){switch(n){case e.kStopAudioMixing:t.stopCallback&&t.stopCallback(n,r);break;case e.kStartAudioMixing:t.startCallback&&t.startCallback(n,r);break;default:t.startCallback?t.startCallback(n,r):t.stopCallback&&t.stopCallback(n,r)}}})}var t,n,r;return t=e,(n=[{key:"pauseAudioMixing",value:function(){return u.a.call("rtc.pauseAudioMixing")}},{key:"resumeAudioMixing",value:function(){return u.a.call("rtc.resumeAudioMixing")}},{key:"setAudioMixingPosition",value:function(e){return u.a.call("rtc.setAudioMixingPosition",e)}}])&&b(t.prototype,n),r&&b(t,r),e}();y(w,"kStartAudioMixing",710),y(w,"kStopAudioMixing",713),y(w,"kAudioError",714);var P=n("xU6Y"),k=n("R+TL"),O=n("WURW"),C=n.n(O);function M(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,a)}var I=["https://scdncloudharestoragev3.herewhite.com","https://expresscloudharestoragev2.herewhite.com"],A=["https://cdncloudroomv2.herewhite.com","https://cdnroom.netless.pro"],T=window.fetch;var x=function(){window.fetch=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(t)){e.next=2;break}return e.abrupt("return",T.call(this,t,n));case 2:return e.abrupt("return",C()([T.call(this,t,n),T.call(this,E(t),n)]));case 3:case"end":return e.stop()}}),e,this)})),function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function i(e){M(o,r,a,i,c,"next",e)}function c(e){M(o,r,a,i,c,"throw",e)}i(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()};function E(e){var t,n=[],r="string"==typeof e?e:e.url;if(-1!==I.findIndex((function(e){return-1!==r.indexOf(e)})))n=I;else{if(-1===A.findIndex((function(e){return-1!==r.indexOf(e)})))return e;n=A}if("string"==typeof e){var a=n.findIndex((function(t){return-1!==e.indexOf(t)})),o=n.length-1-a;t=e.replace(n[a],n[o])}else{var i=n.findIndex((function(t){return-1!==e.url.indexOf(t)})),c=n.length-1-i;t=new Request(e.url.replace(n[i],n[c]),e)}return t}function N(e){var t=I.concat(A);return"string"==typeof e?t.some((function(t){return-1!==e.indexOf(t)})):t.some((function(t){return-1!==e.url.indexOf(t)}))}var R=n("6Dnk");n("Q8kY");function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var D=!1,B=0,_=void 0,L=void 0,U=new w;function z(){var e=void 0,t=void 0;function n(e){if(D){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.log(JSON.stringify({funName:e,params:J({},n)})),u.a.call("sdk.logger",{funName:e,params:J({},n)})}}function r(){e&&e.bindHtmlElement(null),t&&t.bindHtmlElement(null)}function i(e){var t=e.enableInterrupterAPI?function(e){var t=u.a.call("sdk.urlInterrupter",e);return t.length>0?t:e}:void 0,r=e.log,a=e.__nativeTags,o=e.__platform,i=(e.initializeOriginsStates,e.userCursor),s=(e.enableInterrupterAPI,e.routeBackup),d=e.enableRtcIntercept,f=F(e,["log","__nativeTags","__platform","initializeOriginsStates","userCursor","enableInterrupterAPI","routeBackup","enableRtcIntercept"]);D=!!r,e,n("newWhiteSdk",e),o&&(window.__platform=o),L=i?new R.CursorTool:void 0,a&&(window.__nativeTags=J(J({},window.__nativeTags),a)),s&&x();var p=f.pptParams||{};d&&(p.rtcClient=U);var m=Object(l.createPlugins)({video:P.videoPlugin,audio:k.audioPlugin});try{_=new l.WhiteWebSdk(J(J({},f),{},{invisiblePlugins:[c.b],wrappedComponents:[c.c],plugins:m,urlInterrupter:t,onWhiteSetupFailed:function(e){n("onWhiteSetupFailed",e),u.a.call("sdk.setupFail",{message:e.message,jsStack:e.stack})},pptParams:p})),window.sdk=_}catch(e){n("onWhiteSetupFailed",e),u.a.call("sdk.setupFail",{message:e.message,jsStack:e.stack})}}function s(t,a){if(_){r(),n("joinRoom",t);var o=t.timeout,i=void 0===o?45e3:o,c=t.cameraBound,s=F(t,["timeout","cameraBound"]);_.joinRoom(J(J({},s),{},{cursorAdapter:L,disableAutoResize:!0,cameraBound:d(c)}),{onPhaseChanged:function(t){return function(t,n){u.a.call("room.firePhaseChanged",t),setTimeout((function(){e&&e.phase===l.RoomPhase.Reconnecting&&e.disconnect().then((function(){u.a.call("room.fireDisconnectWithError","Reconnect time exceeds ".concat(n," milsceonds, sdk call disconnect automatically"))}))}),n)}(t,i)},onRoomStateChanged:g,onDisconnectWithError:b,onKickedWithReason:y,onCatchErrorWhenAppendFrame:I,onCatchErrorWhenRender:A,onCanRedoStepsUpdate:m,onCanUndoStepsUpdate:p,onPPTLoadProgress:T,onPPTMediaPlay:E,onPPTMediaPause:N}).then((function(t){return r(),e=t,t.bindHtmlElement(j.current),function(e,t){window.room=e,v(e,t),u.a.register("ppt",{nextStep:function(){t("nextStep"),e.pptNextStep()},previousStep:function(){t("previousStep"),e.pptPreviousStep()}}),u.a.register("room.sync",{disableSerialization:function(t){e.disableSerialization=t},copy:function(){e.copy()},paste:function(){e.paste()},duplicate:function(){e.duplicate()},delete:function(){e.delete()},disableEraseImage:function(t){e.disableEraseImage=t}}),u.a.registerAsyn("room",{redo:function(t){t(e.redo())},undo:function(t){t(e.undo())},canRedoSteps:function(t){t(e.canRedoSteps)},canUndoSteps:function(t){t(e.canUndoSteps)},setGlobalState:function(n){t("setGlobalState",n),e.setGlobalState(n)},setScenePath:function(n,r){try{t("setScenePath",n),e.setScenePath(n),r(JSON.stringify({}))}catch(e){return r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},setMemberState:function(n){t("setMemberState",n),e.setMemberState(n)},setViewMode:function(n){var r=l.ViewMode[n];void 0===r&&(r=l.ViewMode.Freedom),t("setViewMode",{viewMode:n,mode:r}),e.setViewMode(r)},setWritable:function(t,n){e.setWritable(t).then((function(){n(JSON.stringify({isWritable:e.isWritable,observerId:e.observerId}))})).catch((function(e){n(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))},getMemberState:function(n){return t("getMemberState",e.state.memberState),n(JSON.stringify(e.state.memberState))},getGlobalState:function(n){return t("getGlobalState",e.state.globalState),n(JSON.stringify(e.state.globalState))},getSceneState:function(n){return t("getSceneState",e.state.sceneState),n(JSON.stringify(e.state.sceneState))},getRoomMembers:function(n){return t("getRoomMembers",e.state.roomMembers),n(JSON.stringify(e.state.roomMembers))},getPptImages:function(t){var n=e.state.sceneState.scenes.map((function(e){return e.ppt?e.ppt.src:""}));return t(JSON.stringify(n))},setSceneIndex:function(n,r){t("setSceneIndex",n);try{e.setSceneIndex(n),r(JSON.stringify({}))}catch(e){r(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}},getScenes:function(n){return t("getScenes",e.state.sceneState.scenes),n(JSON.stringify(e.state.sceneState.scenes))},getZoomScale:function(n){return t("getZoomScale",e.state.zoomScale),n(JSON.stringify(e.state.zoomScale))},getBroadcastState:function(n){return t("getBroadcastState",e.state.zoomScale),n(JSON.stringify(e.state.broadcastState))},getRoomPhase:function(n){return t("getRoomPhase",JSON.stringify(e.phase)),n(e.phase)},disconnect:function(t){e.disconnect().then((function(){t()}))},zoomChange:function(n){t("zoomChange"),e.moveCamera({scale:n})},disableCameraTransform:function(n){t("disableCameraTransform",n),e.disableCameraTransform=n},disableDeviceInputs:function(n){t("disableDeviceInputs",n),e.disableDeviceInputs=n},disableOperations:function(n){t("disableOperations",n),e.disableCameraTransform=n,e.disableDeviceInputs=n},putScenes:function(n,r,a,o){t("putScenes",r),e.putScenes(n,r,a),o(JSON.stringify(e.state.sceneState))},removeScenes:function(n){t("removeScenes",n),e.removeScenes(n)},moveScene:function(n,r){t("moveScene",n,r),e.moveScene(n,r)},cleanScene:function(n){t("cleanCurrentScene: ",n),e.cleanCurrentScene(n)},insertImage:function(n){t("insertImage",n),e.insertImage(n)},insertVideo:function(e){t("insertVideo",e)},completeImageUpload:function(n,r){t("completeImageUpload",n,r),e.completeImageUpload(n,r)},dispatchMagixEvent:function(n){t("dispatchMagixEvent",n),e.dispatchMagixEvent(n.eventName,n.payload)},setTimeDelay:function(n){t("setTimeDelay",n),e.timeDelay=n}}),u.a.register("room.state",{getRoomState:function(){return e.state},getTimeDelay:function(){return e.timeDelay},getPhase:function(){return e.phase},isWritable:function(){return e.isWritable},debugInfo:function(){try{var t=e.screen,n=t.camera,r=t.visionRectangle,a=t.adaptedRectangle,o=t.divElement;return{camera:n,visionRectangle:r,adaptedRectangle:a,divWidth:o.clientWidth,divHeight:o.clientHeight}}catch(e){return{error:e.message}}}})}(t,n),L&&L.setRoom(e),a(JSON.stringify({state:t.state,observerId:t.observerId,isWritable:t.isWritable}))})).catch((function(e){return a(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}else a(JSON.stringify({__error:{message:"sdk init failed"}}))}function f(e,a){if(_){var o=e.step,i=void 0===o?500:o,c=e.cameraBound,s=F(e,["step","cameraBound"]);r(),n("replayRoom",e),_.replayRoom(J(J({},s),{},{cursorAdapter:L,disableAutoResize:!0,cameraBound:d(c)}),{onPhaseChanged:w,onLoadFirstFrame:O,onPlayerStateChanged:C,onStoppedWithError:M,onProgressTimeChanged:function(e){return function(e,n){!function(e,n,r){n>=B?(e(),B=Math.ceil(n/r)*r):t&&n+r>t.timeDuration&&(e(),B=n)}((function(){u.a.call("player.onScheduleTimeChanged",e)}),e,n)}(e,i)},onCatchErrorWhenAppendFrame:I,onCatchErrorWhenRender:A,onPPTLoadProgress:T,onPPTMediaPlay:E,onPPTMediaPause:N}).then((function(e){var o;(r(),t=e,function(e,t){window.player=e,v(e,t),u.a.registerAsyn("player",{play:function(){t("play"),e.play()},pause:function(){t("pause"),e.pause()},stop:function(){t("stop"),e.stop()},seekToScheduleTime:function(n){t("seekToScheduleTime",n),e.seekToScheduleTime(n)},setObserverMode:function(n){t("setObserverMode",n),e.setObserverMode(n)},setPlaybackSpeed:function(n){t("playbackSpeed",n),e.playbackSpeed=n}}),u.a.register("player.state",{roomUUID:function(){return e.roomUUID},phase:function(){return t("phase",e.phase),e.phase},playerState:function(){try{return t("playerState",e.state),e.state}catch(e){return{}}},isPlayable:function(){return e.isPlayable},playbackSpeed:function(){return t("playbackSpeed",e.playbackSpeed),e.playbackSpeed},timeInfo:function(){var n={scheduleTime:e.scheduleTime,timeDuration:e.timeDuration,framesCount:e.framesCount,beginTimestamp:e.beginTimestamp};return t("timeInfo",n),n}})}(e,n),e.bindHtmlElement(j.current),L)&&(null===(o=L)||void 0===o||o.setPlayer(t));var i=e.scheduleTime,c=e.timeDuration,s=e.framesCount,l=e.beginTimestamp;return a(JSON.stringify({timeInfo:{scheduleTime:i,timeDuration:c,framesCount:s,beginTimestamp:l}}))})).catch((function(e){return a(JSON.stringify({__error:{message:e.message,jsStack:e.stack}}))}))}else a(JSON.stringify({__error:{message:"sdk init failed"}}))}function p(e){u.a.call("room.fireCanUndoStepsUpdate",e)}function m(e){u.a.call("room.fireCanRedoStepsUpdate",e)}function g(e){u.a.call("room.fireRoomStateChanged",JSON.stringify(e))}function b(e){u.a.call("room.fireDisconnectWithError",e.message)}function y(e){u.a.call("room.fireKickedWithReason",e)}function w(e){B=0,n("onPhaseChanged:",e),u.a.call("player.onPhaseChanged",e)}function O(){n("onLoadFirstFrame"),u.a.call("player.onPlayerStateChanged",JSON.stringify(t.state)),u.a.call("player.onLoadFirstFrame")}function C(e){u.a.call("player.onPlayerStateChanged",JSON.stringify(e))}function M(e){u.a.call("player.onStoppedWithError",JSON.stringify({error:e.message,jsStack:e.stack}))}function I(t,n){e?u.a.call("room.fireCatchErrorWhenAppendFrame",{userId:t,error:n.message}):u.a.call("player.fireCatchErrorWhenAppendFrame",{userId:t,error:n.message})}function A(t){e||u.a.call("player.onCatchErrorWhenRender",{error:t.message})}function T(e,t){}function E(e,t){n("onPPTMediaPlay",e,t),u.a.call("sdk.onPPTMediaPlay",{shapeId:e,type:t})}function N(e,t){n("onPPTMediaPause",e,t),u.a.call("sdk.onPPTMediaPause",{shapeId:e,type:t})}window.testRoom=function(){D=!0,i({log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),s({uuid:"",roomToken:"",userPayload:{avatar:"https://white-pan.oss-cn-shanghai.aliyuncs.com/40/image/mask.jpg"}},(function(){}))},window.testReplay=function(){D=!0,i({log:!0,userCursor:!0,__platform:"ios",appIdentifier:""}),f({room:"",roomToken:""},(function(){}))},Object(a.useEffect)((function(){return function(){window.removeEventListener("error",h),window.removeEventListener("message",S)}}),[]),Object(l.setAsyncModuleLoadMode)(l.AsyncModuleLoadMode.StoreAsBase64),window.addEventListener("error",h),window.addEventListener("message",S),u.a.registerAsyn("sdk",{newWhiteSdk:i,joinRoom:s,replayRoom:f});var j=Object(a.useRef)(null);return o.a.createElement("div",{id:"whiteboard-container",ref:j,style:{position:"absolute",left:0,top:0,right:0,bottom:0,zIndex:1}})}i.render(a.createElement(z,null),document.getElementById("root"))},3:function(e,t){},4:function(e,t){},Q8kY:function(e,t,n){}},[["2YZa",1,3,2]]]);