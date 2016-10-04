/*!--------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
(function(){var e=["exports","require","vs/languages/html/common/htmlTags","vs/languages/html/common/htmlTokenTypes","vs/base/common/network","vs/base/common/winjs.base","vs/nls!vs/languages/html/common/htmlTags","vs/base/common/strings","vs/languages/html/common/htmlScanner","vs/nls!vs/languages/html/common/htmlWorker","vs/nls","vs/languages/html/common/htmlWorker","vs/base/common/uri","vs/languages/lib/common/beautify-html","vs/editor/common/modes","vs/editor/common/services/resourceService","vs/languages/html/common/htmlEmptyTagsShared","vs/editor/common/modes/supports/suggestSupport","vs/base/common/paths"],n=function(n){for(var t=[],o=0,l=n.length;o<l;o++)t[o]=e[n[o]];return t};define(e[8],n([1,0,3]),function(e,n,t){"use strict";function o(e){switch(e){case t.DELIM_START:case t.DELIM_END:case t.DELIM_ASSIGN:return!0}return!1}function l(e){switch(e){case t.DELIM_START:case t.DELIM_END:case t.DELIM_ASSIGN:case t.ATTRIB_NAME:case t.ATTRIB_VALUE:return!0}return t.isTag(e)}function i(e,n){var t=n.column-1,i=n.lineNumber,a=e.getLineTokens(i),r=e.getLineContent(i),s=a.findIndexOfOffset(t),c=a.getTokenCount(),u=a.getTokenType(s),g=a.getTokenStartIndex(s),d=a.getTokenEndIndex(s,r.length);return""!==u&&!o(u)||g!==t||(s--,s>=0?(u=a.getTokenType(s),g=a.getTokenStartIndex(s),d=a.getTokenEndIndex(s,r.length)):(u="",g=d=0)),{getTokenType:function(){return u},isAtTokenEnd:function(){return t===d},isAtTokenStart:function(){return t===g},getTokenContent:function(){return r.substring(g,d)},isOpenBrace:function(){return g<d&&"<"===r.charAt(g)},getTokenPosition:function(){return{lineNumber:i,column:g+1}},getTokenRange:function(){return{startLineNumber:i,startColumn:g+1,endLineNumber:i,endColumn:d+1}},getModel:function(){return e},scanBack:function(){if(i<=0)return!1;s--;do{for(;s>=0;){if(u=a.getTokenType(s),g=a.getTokenStartIndex(s),d=a.getTokenEndIndex(s,r.length),l(u))return!0;s--}i--,i>0&&(a=e.getLineTokens(i),r=e.getLineContent(i),c=a.getTokenCount(),s=c-1)}while(i>0);return a=null,u=r="",g=d=c=0,!1},scanForward:function(){if(i>e.getLineCount())return!1;s++;do{for(;s<c;){if(u=a.getTokenType(s),g=a.getTokenStartIndex(s),d=a.getTokenEndIndex(s,r.length),l(u))return!0;s++}i++,s=0,i<=e.getLineCount()&&(a=e.getLineTokens(i),r=e.getLineContent(i),c=a.getTokenCount())}while(i<=e.getLineCount());return u=r="",g=d=c=0,!1}}}n.getScanner=i}),define(e[4],n([1,0,5]),function(e,n,t){"use strict";function o(e){var n=null,o=!1;return new t.TPromise(function(t,l,i){n=new XMLHttpRequest,n.onreadystatechange=function(){o||(4===n.readyState?(n.status>=200&&n.status<300||1223===n.status?t(n):l(n),n.onreadystatechange=function(){}):i(n))},n.open(e.type||"GET",e.url,!0,e.user,e.password),n.responseType=e.responseType||"",Object.keys(e.headers||{}).forEach(function(t){n.setRequestHeader(t,e.headers[t])}),e.customRequestInitializer&&e.customRequestInitializer(n),n.send(e.data)},function(){o=!0,n.abort()})}var l;!function(e){e.inMemory="inmemory",e.vscode="vscode",e.internal="private",e.http="http",e.https="https",e.file="file"}(l=n.Schemas||(n.Schemas={})),n.xhr=o}),define(e[6],n([10,9]),function(e,n){return e.create("vs/languages/html/common/htmlTags",n)}),/*!
BEGIN THIRD PARTY
*/
/*--------------------------------------------------------------------------------------------
 *  This file is based on or incorporates material from the projects listed below (Third Party IP).
 *  The original copyright notice and the license under which Microsoft received such Third Party IP,
 *  are set forth below. Such licenses and notices are provided for informational purposes only.
 *  Microsoft licenses the Third Party IP to you under the licensing terms for the Microsoft product.
 *  Microsoft reserves all other rights not expressly granted under this agreement, whether by implication,
 *  estoppel or otherwise.
 *--------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------
 *  Copyright © 2015 W3C® (MIT, ERCIM, Keio, Beihang). This software or document includes includes material copied
 *  from or derived from HTML 5.1 W3C Working Draft (http://www.w3.org/TR/2015/WD-html51-20151008/.)"
 *--------------------------------------------------------------------------------------------*/
/*---------------------------------------------------------------------------------------------
 *  Ionic Main Site (https://github.com/driftyco/ionic-site).
 *  Copyright Drifty Co. http://drifty.com/.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file
 *  except in compliance with the License. You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 *  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 *  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 *  MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 *  See the Apache Version 2.0 License for specific language governing permissions
 *  and limitations under the License.
 *--------------------------------------------------------------------------------------------*/
define(e[2],n([1,0,7,6]),function(e,n,t,o){"use strict";function l(){var e=["aria-activedescendant","aria-atomic:b","aria-autocomplete:autocomplete","aria-busy:b","aria-checked:tristate","aria-colcount","aria-colindex","aria-colspan","aria-controls","aria-current:current","aria-describedat","aria-describedby","aria-disabled:b","aria-dropeffect:dropeffect","aria-errormessage","aria-expanded:u","aria-flowto","aria-grabbed:u","aria-haspopup:b","aria-hidden:b","aria-invalid:invalid","aria-kbdshortcuts","aria-label","aria-labelledby","aria-level","aria-live:live","aria-modal:b","aria-multiline:b","aria-multiselectable:b","aria-orientation:orientation","aria-owns","aria-placeholder","aria-posinset","aria-pressed:tristate","aria-readonly:b","aria-relevant:relevant","aria-required:b","aria-roledescription","aria-rowcount","aria-rowindex","aria-rowspan","aria-selected:u","aria-setsize","aria-sort:sort","aria-valuemax","aria-valuemin","aria-valuenow","aria-valuetext","accesskey","class","contenteditable:b","contextmenu","dir:d","draggable:b","dropzone","hidden:v","id","itemid","itemprop","itemref","itemscope:v","itemtype","lang","role:roles","spellcheck:b","style","tabindex","title","translate:y"],t=["onabort","onblur","oncanplay","oncanplaythrough","onchange","onclick","oncontextmenu","ondblclick","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","onformchange","onforminput","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onload","onloadeddata","onloadedmetadata","onloadstart","onmousedown","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onpause","onplay","onplaying","onprogress","onratechange","onreset","onresize","onreadystatechange","onscroll","onseeked","onseeking","onselect","onshow","onstalled","onsubmit","onsuspend","ontimeupdate","onvolumechange","onwaiting"],o={b:["true","false"],u:["true","false","undefined"],o:["on","off"],y:["yes","no"],w:["soft","hard"],d:["ltr","rtl","auto"],m:["GET","POST","dialog"],fm:["GET","POST"],s:["row","col","rowgroup","colgroup"],t:["hidden","text","search","tel","url","email","password","datetime","date","month","week","time","datetime-local","number","range","color","checkbox","radio","file","submit","image","reset","button"],im:["verbatim","latin","latin-name","latin-prose","full-width-latin","kana","kana-name","katakana","numeric","tel","email","url"],bt:["button","submit","reset","menu"],lt:["1","a","A","i","I"],mt:["context","toolbar"],mit:["command","checkbox","radio"],et:["application/x-www-form-urlencoded","multipart/form-data","text/plain"],tk:["subtitles","captions","descriptions","chapters","metadata"],pl:["none","metadata","auto"],sh:["circle","default","poly","rect"],xo:["anonymous","use-credentials"],sb:["allow-forms","allow-modals","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-same-origin","allow-scripts","allow-top-navigation"],tristate:["true","false","mixed","undefined"],inputautocomplete:["additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-year","bday-day","bday-month","billing","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","organization","organization-title","pager","photo","postal-code","sex","shipping","street-address","tel-area-code","tel","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],autocomplete:["inline","list","both","none"],current:["page","step","location","date","time","true","false"],dropeffect:["copy","move","link","execute","popup","none"],invalid:["grammar","false","spelling","true"],live:["off","polite","assertive"],orientation:["vertical","horizontal","undefined"],relevant:["additions","removals","text","all","additions text"],sort:["ascending","descending","none","other"],roles:["alert","alertdialog","button","checkbox","dialog","gridcell","link","log","marquee","menuitem","menuitemcheckbox","menuitemradio","option","progressbar","radio","scrollbar","searchbox","slider","spinbutton","status","switch","tab","tabpanel","textbox","timer","tooltip","treeitem","combobox","grid","listbox","menu","menubar","radiogroup","tablist","tree","treegrid","application","article","cell","columnheader","definition","directory","document","feed","figure","group","heading","img","list","listitem","math","none","note","presentation","region","row","rowgroup","rowheader","separator","table","term","text","toolbar","banner","complementary","contentinfo","form","main","navigation","region","search"]};return{getId:function(){return"html5"},collectTags:function(e){return r(e,n.HTML_TAGS)},collectAttributes:function(o,l){s(o,l,n.HTML_TAGS,e),t.forEach(function(e){l(e,"event")})},collectValues:function(t,l,i){return c(t,l,i,n.HTML_TAGS,e,o)}}}function i(){var e={input:["ng-model","ng-required","ng-minlength","ng-maxlength","ng-pattern","ng-trim"],select:["ng-model"],textarea:["ng-model","ng-required","ng-minlength","ng-maxlength","ng-pattern","ng-trim"]},n=["ng-app","ng-bind","ng-bind-html","ng-bind-template","ng-blur","ng-change","ng-checked","ng-class","ng-class-even","ng-class-odd","ng-click","ng-cloak","ng-controller","ng-copy","ng-csp","ng-cut","ng-dblclick","ng-disabled","ng-focus","ng-form","ng-hide","ng-href","ng-if","ng-include","ng-init","ng-jq","ng-keydown","ng-keypress","ng-keyup","ng-list","ng-model-options","ng-mousedown","ng-mouseenter","ng-mouseleave","ng-mousemove","ng-mouseover","ng-mouseup","ng-non-bindable","ng-open","ng-options","ng-paste","ng-pluralize","ng-readonly","ng-repeat","ng-selected","ng-show","ng-src","ng-srcset","ng-style","ng-submit","ng-switch","ng-transclude","ng-value"];return{getId:function(){return"angular1"},collectTags:function(e){},collectAttributes:function(t,o){if(t){var l=e[t];l&&l.forEach(function(e){o(e,null),o("data-"+e,null)})}n.forEach(function(e){o(e,null),o("data-"+e,null)})},collectValues:function(e,n,t){}}}function a(){var e={a:["nav-direction:navdir","nav-transition:trans"],button:["menu-toggle:menusides"]},t=["collection-repeat","force-refresh-images:b","ion-stop-event","item-height","item-render-buffer","item-width","menu-close:v","on-double-tap","on-drag","on-drag-down","on-drag-left","on-drag-right","on-drag-up","on-hold","on-release","on-swipe","on-swipe-down","on-swipe-left","on-swipe-right","on-swipe-up","on-tap","on-touch"],o={align:["center","left","right"],b:["true","false"],inputtype:["email","number","password","search","tel","text","url"],listtype:["card","list-inset"],menusides:["left","right"],navdir:["back","enter","exit","forward","swap"],navsides:["left","primary","right","secondary"],scrolldir:["x","xy","y"],trans:["android","ios","none"]};return{getId:function(){return"ionic"},collectTags:function(e){return r(e,n.IONIC_TAGS)},collectAttributes:function(o,l){if(s(o,l,n.IONIC_TAGS,t),o){var i=e[o];i&&i.forEach(function(e){var n=e.split(":");l(n[0],n[1])})}},collectValues:function(l,i,a){return c(l,i,a,n.IONIC_TAGS,t,o,e)}}}function r(e,n){for(var t in n)e(t,n[t].label)}function s(e,n,t,o){if(o.forEach(function(e){var t=e.split(":");n(t[0],t[1])}),e){var l=t[e];if(l){var i=l.attributes;i&&i.forEach(function(e){var t=e.split(":");n(t[0],t[1])})}}}function c(e,n,o,l,i,a,r){var s=n+":",c=function(e){e.forEach(function(e){if(e.length>s.length&&t.startsWith(e,s)){var l=e.substr(s.length);if("v"===l)o(n);else{var i=a[l];i&&i.forEach(o)}}})};if(e){var u=l[e];if(u){var g=u.attributes;g&&c(g)}}if(c(i),r){var d=r[e];d&&c(d)}}var u=function(){function e(e,n){void 0===n&&(n=[]),this.label=e,this.attributes=n}return e}();n.HTMLTagSpecification=u,n.HTML_TAGS={html:new u(o.localize(0,null),["manifest"]),head:new u(o.localize(1,null)),title:new u(o.localize(2,null)),base:new u(o.localize(3,null),["href","target"]),link:new u(o.localize(4,null),["href","crossorigin:xo","rel","media","hreflang","type","sizes"]),meta:new u(o.localize(5,null),["name","http-equiv","content","charset"]),style:new u(o.localize(6,null),["media","nonce","type","scoped:v"]),body:new u(o.localize(7,null),["onafterprint","onbeforeprint","onbeforeunload","onhashchange","onlanguagechange","onmessage","onoffline","ononline","onpagehide","onpageshow","onpopstate","onstorage","onunload"]),article:new u(o.localize(8,null)),section:new u(o.localize(9,null)),nav:new u(o.localize(10,null)),aside:new u(o.localize(11,null)),h1:new u(o.localize(12,null)),h2:new u(o.localize(13,null)),h3:new u(o.localize(14,null)),h4:new u(o.localize(15,null)),h5:new u(o.localize(16,null)),h6:new u(o.localize(17,null)),header:new u(o.localize(18,null)),footer:new u(o.localize(19,null)),address:new u(o.localize(20,null)),p:new u(o.localize(21,null)),hr:new u(o.localize(22,null)),pre:new u(o.localize(23,null)),blockquote:new u(o.localize(24,null),["cite"]),ol:new u(o.localize(25,null),["reversed:v","start","type:lt"]),ul:new u(o.localize(26,null)),li:new u(o.localize(27,null),["value"]),dl:new u(o.localize(28,null)),dt:new u(o.localize(29,null)),dd:new u(o.localize(30,null)),figure:new u(o.localize(31,null)),figcaption:new u(o.localize(32,null)),main:new u(o.localize(33,null)),div:new u(o.localize(34,null)),a:new u(o.localize(35,null),["href","target","download","ping","rel","hreflang","type"]),em:new u(o.localize(36,null)),strong:new u(o.localize(37,null)),small:new u(o.localize(38,null)),s:new u(o.localize(39,null)),cite:new u(o.localize(40,null)),q:new u(o.localize(41,null),["cite"]),dfn:new u(o.localize(42,null)),abbr:new u(o.localize(43,null)),ruby:new u(o.localize(44,null)),rb:new u(o.localize(45,null)),rt:new u(o.localize(46,null)),rp:new u(o.localize(47,null)),time:new u(o.localize(48,null),["datetime"]),code:new u(o.localize(49,null)),"var":new u(o.localize(50,null)),samp:new u(o.localize(51,null)),kbd:new u(o.localize(52,null)),sub:new u(o.localize(53,null)),sup:new u(o.localize(54,null)),i:new u(o.localize(55,null)),b:new u(o.localize(56,null)),u:new u(o.localize(57,null)),mark:new u(o.localize(58,null)),bdi:new u(o.localize(59,null)),bdo:new u(o.localize(60,null)),span:new u(o.localize(61,null)),br:new u(o.localize(62,null)),wbr:new u(o.localize(63,null)),ins:new u(o.localize(64,null)),del:new u(o.localize(65,null),["cite","datetime"]),picture:new u(o.localize(66,null)),img:new u(o.localize(67,null),["alt","src","srcset","crossorigin:xo","usemap","ismap:v","width","height"]),iframe:new u(o.localize(68,null),["src","srcdoc","name","sandbox:sb","seamless:v","allowfullscreen:v","width","height"]),embed:new u(o.localize(69,null),["src","type","width","height"]),object:new u(o.localize(70,null),["data","type","typemustmatch:v","name","usemap","form","width","height"]),param:new u(o.localize(71,null),["name","value"]),video:new u(o.localize(72,null),["src","crossorigin:xo","poster","preload:pl","autoplay:v","mediagroup","loop:v","muted:v","controls:v","width","height"]),audio:new u(o.localize(73,null),["src","crossorigin:xo","preload:pl","autoplay:v","mediagroup","loop:v","muted:v","controls:v"]),source:new u(o.localize(74,null),["src","type"]),track:new u(o.localize(75,null),["default:v","kind:tk","label","src","srclang"]),map:new u(o.localize(76,null),["name"]),area:new u(o.localize(77,null),["alt","coords","shape:sh","href","target","download","ping","rel","hreflang","type"]),table:new u(o.localize(78,null),["sortable:v","border"]),caption:new u(o.localize(79,null)),colgroup:new u(o.localize(80,null),["span"]),col:new u(o.localize(81,null),["span"]),tbody:new u(o.localize(82,null)),thead:new u(o.localize(83,null)),tfoot:new u(o.localize(84,null)),tr:new u(o.localize(85,null)),td:new u(o.localize(86,null),["colspan","rowspan","headers"]),th:new u(o.localize(87,null),["colspan","rowspan","headers","scope:s","sorted","abbr"]),form:new u(o.localize(88,null),["accept-charset","action","autocomplete:o","enctype:et","method:m","name","novalidate:v","target"]),label:new u(o.localize(89,null),["form","for"]),input:new u(o.localize(90,null),["accept","alt","autocomplete:inputautocomplete","autofocus:v","checked:v","dirname","disabled:v","form","formaction","formenctype:et","formmethod:fm","formnovalidate:v","formtarget","height","inputmode:im","list","max","maxlength","min","minlength","multiple:v","name","pattern","placeholder","readonly:v","required:v","size","src","step","type:t","value","width"]),button:new u(o.localize(91,null),["autofocus:v","disabled:v","form","formaction","formenctype:et","formmethod:fm","formnovalidate:v","formtarget","name","type:bt","value"]),select:new u(o.localize(92,null),["autocomplete:inputautocomplete","autofocus:v","disabled:v","form","multiple:v","name","required:v","size"]),datalist:new u(o.localize(93,null)),optgroup:new u(o.localize(94,null),["disabled:v","label"]),option:new u(o.localize(95,null),["disabled:v","label","selected:v","value"]),textarea:new u(o.localize(96,null),["autocomplete:inputautocomplete","autofocus:v","cols","dirname","disabled:v","form","inputmode:im","maxlength","minlength","name","placeholder","readonly:v","required:v","rows","wrap:w"]),output:new u(o.localize(97,null),["for","form","name"]),progress:new u(o.localize(98,null),["value","max"]),meter:new u(o.localize(99,null),["value","min","max","low","high","optimum"]),fieldset:new u(o.localize(100,null),["disabled:v","form","name"]),legend:new u(o.localize(101,null)),details:new u(o.localize(102,null),["open:v"]),summary:new u(o.localize(103,null)),dialog:new u(o.localize(104,null)),script:new u(o.localize(105,null),["src","type","charset","async:v","defer:v","crossorigin:xo","nonce"]),noscript:new u(o.localize(106,null)),template:new u(o.localize(107,null)),canvas:new u(o.localize(108,null),["width","height"])},n.IONIC_TAGS={"ion-checkbox":new u(o.localize(109,null),["name","ng-false-value","ng-model","ng-true-value"]),"ion-content":new u(o.localize(110,null),["delegate-handle","direction:scrolldir","has-bouncing:b","locking:b","on-scroll","on-scroll-complete","overflow-scroll:b","padding:b","scroll:b","scrollbar-x:b","scrollbar-y:b","start-x","start-y"]),"ion-delete-button":new u(o.localize(111,null),[]),"ion-footer-bar":new u(o.localize(112,null),["align-title:align","keyboard-attach:v"]),"ion-header-bar":new u(o.localize(113,null),["align-title:align","no-tap-scroll:b"]),"ion-infinite-scroll":new u(o.localize(114,null),["distance","icon","immediate-check:b","on-infinite","spinner"]),"ion-input":new u(o.localize(115,null),["type:inputtype","clearInput:v"]),"ion-item":new u(o.localize(116,null),[]),"ion-list":new u(o.localize(117,null),["can-swipe:b","delegate-handle","show-delete:b","show-reorder:b","type:listtype"]),"ion-modal-view":new u(o.localize(118,null),[]),"ion-nav-back-button":new u(o.localize(119,null),[]),"ion-nav-bar":new u(o.localize(120,null),["align-title:align","delegate-handle","no-tap-scroll:b"]),"ion-nav-buttons":new u(o.localize(121,null),["side:navsides"]),"ion-nav-title":new u(o.localize(122,null),[]),"ion-nav-view":new u(o.localize(123,null),["name"]),"ion-option-button":new u(o.localize(124,null),[]),"ion-pane":new u(o.localize(125,null),[]),"ion-popover-view":new u(o.localize(126,null),[]),"ion-radio":new u(o.localize(127,null),["disabled:b","icon","name","ng-disabled:b","ng-model","ng-value","value"]),"ion-refresher":new u(o.localize(128,null),["disable-pulling-rotation:b","on-pulling","on-refresh","pulling-icon","pulling-text","refreshing-icon","spinner"]),"ion-reorder-button":new u(o.localize(129,null),["on-reorder"]),"ion-scroll":new u(o.localize(130,null),["delegate-handle","direction:scrolldir","has-bouncing:b","locking:b","max-zoom","min-zoom","on-refresh","on-scroll","paging:b","scrollbar-x:b","scrollbar-y:b","zooming:b"]),"ion-side-menu":new u(o.localize(131,null),["is-enabled:b","expose-aside-when","side:navsides","width"]),"ion-side-menu-content":new u(o.localize(132,null),["drag-content:b","edge-drag-threshold"]),"ion-side-menus":new u(o.localize(133,null),["delegate-handle","enable-menu-with-back-views:b"]),"ion-slide":new u(o.localize(134,null),[]),"ion-slide-box":new u(o.localize(135,null),["active-slide","auto-play:b","delegate-handle","does-continue:b","on-slide-changed","pager-click","show-pager:b","slide-interval"]),"ion-spinner":new u(o.localize(136,null),["icon"]),"ion-tab":new u(o.localize(137,null),["badge","badge-style","disabled","hidden","href","icon","icon-off","icon-on","ng-click","on-deselect","on-select","title"]),"ion-tabs":new u(o.localize(138,null),["delegate-handle"]),"ion-title":new u(o.localize(139,null),[]),"ion-toggle":new u(o.localize(140,null),["name","ng-false-value","ng-model","ng-true-value","toggle-class"]),"ion-view ":new u(o.localize(141,null),["cache-view:b","can-swipe-back:b","hide-back-button:b","hide-nav-bar:b","view-title"])},n.getHTML5TagProvider=l,n.getAngularTagProvider=i,n.getIonicTagProvider=a});/*!
END THIRD PARTY
*/
var t=this&&this.__decorate||function(e,n,t,o){var l,i=arguments.length,a=i<3?n:null===o?o=Object.getOwnPropertyDescriptor(n,t):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,o);else for(var r=e.length-1;r>=0;r--)(l=e[r])&&(a=(i<3?l(a):i>3?l(n,t,a):l(n,t))||a);return i>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__param||function(e,n){return function(t,o){n(t,o,e)}};define(e[11],n([1,0,12,5,13,2,4,14,7,15,8,3,16,17,18]),function(e,n,l,i,a,r,s,c,u,g,d,p,m,h,f){"use strict";function v(e){return/^\s*$/.test(e)}var b;!function(e){e[e.LOOKING_FOR_HREF_OR_SRC=1]="LOOKING_FOR_HREF_OR_SRC",e[e.AFTER_HREF_OR_SRC=2]="AFTER_HREF_OR_SRC"}(b||(b={}));var w=function(){function e(e,n){this._modeId=e,this.resourceService=n,this._tagProviders=[],this._tagProviders.push(r.getHTML5TagProvider()),this.addCustomTagProviders(this._tagProviders),this._providerConfiguration=null}return e.prototype.addCustomTagProviders=function(e){e.push(r.getAngularTagProvider()),e.push(r.getIonicTagProvider())},e.prototype.getTagProviders=function(){var e=this;return"html"===this._modeId&&this._providerConfiguration?this._tagProviders.filter(function(n){return!!e._providerConfiguration[n.getId()]}):this._tagProviders},e.prototype.provideDocumentRangeFormattingEdits=function(e,n,t){return this.formatHTML(e,n,t)},e.prototype.formatHTML=function(e,n,t){var o=this.resourceService.get(e),l=n?o.getValueInRange(n):o.getValue(),r={indent_size:t.insertSpaces?t.tabSize:1,indent_char:t.insertSpaces?" ":"\t",wrap_line_length:this.getFormatOption("wrapLineLength",120),unformatted:this.getTagsFormatOption("unformatted",void 0),indent_inner_html:this.getFormatOption("indentInnerHtml",!1),preserve_newlines:this.getFormatOption("preserveNewLines",!1),max_preserve_newlines:this.getFormatOption("maxPreserveNewLines",void 0),indent_handlebars:this.getFormatOption("indentHandlebars",!1),end_with_newline:this.getFormatOption("endWithNewline",!1),extra_liners:this.getTagsFormatOption("extraLiners",void 0)},s=a.html_beautify(l,r);return i.TPromise.as([{range:n,text:s}])},e.prototype.getFormatOption=function(e,n){if(this._formatSettings&&this._formatSettings.hasOwnProperty(e)){var t=this._formatSettings[e];if(null!==t)return t}return n},e.prototype.getTagsFormatOption=function(e,n){var t=this.getFormatOption(e,null);return"string"==typeof t?t.length>0?t.split(",").map(function(e){return e.trim().toLowerCase()}):[]:n},e.prototype._doConfigure=function(e){return this._formatSettings=e&&e.format,e&&e.suggest&&(this._providerConfiguration=e.suggest),i.TPromise.as(null)},e.prototype.findMatchingOpenTag=function(e){for(var n={},t=!1;e.scanBack();)if(p.isTag(e.getTokenType())&&!t){var o=e.getTokenContent();if(e.scanBack(),e.getTokenType()===p.DELIM_END)n[o]=(n[o]||0)+1;else if(!m.isEmptyElement(o)){if(!n[o])return o;n[o]--}}else e.getTokenType()===p.DELIM_START&&(t="/>"===e.getTokenContent());return null},e.prototype.collectTagSuggestions=function(e,n,t){var o=this,l=e.getModel(),i=l.getLineContent(n.lineNumber),a=i.substr(n.column-1),r=v(a)||u.startsWith(a,"<")?">":"",s=function(i){var a=e.getTokenPosition(),s=o.findMatchingOpenTag(e);if(s){var c={label:"/"+s,insertText:"/"+s+r,overwriteBefore:i,type:"property"};t.suggestions.push(c);var u=e.getTokenPosition();if(a.lineNumber!==u.lineNumber){var g=l.getLineContent(u.lineNumber).substring(0,u.column-1),d=l.getLineContent(a.lineNumber).substring(0,a.column-1);v(g)&&v(d)&&(c.overwriteBefore=n.column-1,c.insertText=g+"</"+s+r,c.filterText=d+"</"+s+r)}return!0}return!1};if(e.getTokenType()===p.DELIM_END&&e.getTokenRange().endColumn===n.column){var c=s(t.currentWord.length+1);c||this.getTagProviders().forEach(function(e){e.collectTags(function(e,n){t.suggestions.push({label:"/"+e,overwriteBefore:t.currentWord.length+1,insertText:"/"+e+r,type:"property",documentation:n,filterText:"</"+e+r})})})}else s(t.currentWord.length),this.getTagProviders().forEach(function(e){e.collectTags(function(e,n){t.suggestions.push({label:e,insertText:e,type:"property",documentation:n,overwriteBefore:t.currentWord.length})})})},e.prototype.collectContentSuggestions=function(e){},e.prototype.collectAttributeSuggestions=function(e,n){var t=null;do{if(p.isTag(e.getTokenType())){t=e.getTokenContent();break}if(e.getTokenType()===p.DELIM_START)break}while(e.scanBack());this.getTagProviders().forEach(function(e){e.collectAttributes(t,function(e,t){var o=e;"v"!==t&&(o+='="{{}}"'),n.suggestions.push({label:e,insertText:o,type:"handler"===t?"function":"value",overwriteBefore:n.currentWord.length})})})},e.prototype.collectAttributeValueSuggestions=function(e,n){for(var t=e.getTokenType()===p.DELIM_ASSIGN,o=null,l=null;e.scanBack();)if(e.getTokenType()===p.ATTRIB_NAME){o=e.getTokenContent();break}for(;e.scanBack();){if(p.isTag(e.getTokenType())){l=e.getTokenContent();break}if(e.getTokenType()===p.DELIM_START)return}this.getTagProviders().forEach(function(e){e.collectValues(l,o,function(e){n.suggestions.push({label:e,insertText:t?'"'+e+'"':e,type:"unit",overwriteBefore:n.currentWord.length})})})},e.prototype.provideCompletionItems=function(e,n){var t=this.resourceService.get(e),o=t.getModeIdAtPosition(n.lineNumber,n.column);if(o===this._modeId)return this.suggestHTML(e,n)},e.prototype.suggestHTML=function(e,n){return this.doSuggest(e,n).then(function(e){return h.filterSuggestions(e)})},e.prototype.doSuggest=function(e,n){var t=this.resourceService.get(e),o=t.getWordUntilPosition(n).word,l={currentWord:o,suggestions:[]},a=d.getScanner(t,n);switch(a.getTokenType()){case p.DELIM_START:case p.DELIM_END:a.isOpenBrace()?this.collectTagSuggestions(a,n,l):this.collectContentSuggestions(l);break;case p.ATTRIB_NAME:this.collectAttributeSuggestions(a,l);break;case p.ATTRIB_VALUE:this.collectAttributeValueSuggestions(a,l);break;case p.DELIM_ASSIGN:a.isAtTokenEnd()&&this.collectAttributeValueSuggestions(a,l);break;case"":if(v(a.getTokenContent())&&a.scanBack())switch(a.getTokenType()){case p.ATTRIB_VALUE:case p.ATTRIB_NAME:this.collectAttributeSuggestions(a,l);break;case p.DELIM_ASSIGN:this.collectAttributeValueSuggestions(a,l);break;case p.DELIM_START:case p.DELIM_END:a.isOpenBrace()?this.collectTagSuggestions(a,n,l):this.collectContentSuggestions(l);break;default:p.isTag(a.getTokenType())&&this.collectAttributeSuggestions(a,l)}else this.collectContentSuggestions(l);break;default:p.isTag(a.getTokenType())&&(a.scanBack(),this.collectTagSuggestions(a,n,l))}return i.TPromise.as(l)},e.prototype.findMatchingBracket=function(e,n){if(m.isEmptyElement(e))return null;var t=0;if(n.scanBack(),n.getTokenType()===p.DELIM_END)for(var o=!1;n.scanBack();)if(p.isTag(n.getTokenType())&&n.getTokenContent()===e&&!o){var l=n.getTokenRange();if(n.scanBack(),n.getTokenType()===p.DELIM_START){if(0===t)return l;t--}else t++}else n.getTokenType()===p.DELIM_START&&(o="/>"===n.getTokenContent());else for(var i=!1;n.scanForward();)if(p.isTag(n.getTokenType())&&n.getTokenContent()===e)if(i){if(t--,t<=0)return n.getTokenRange()}else if(n.scanForward(),n.getTokenType()===p.DELIM_START&&"/>"===n.getTokenContent()){if(t<=0)return null}else t++;else n.getTokenType()===p.DELIM_START?i=!1:n.getTokenType()===p.DELIM_END&&(i=!0);return null},e.prototype.provideDocumentHighlights=function(e,n,t){void 0===t&&(t=!1);var o=this.resourceService.get(e),l=o.getWordAtPosition(n),a=l?l.word:"",r=[],s=d.getScanner(o,n);if(p.isTag(s.getTokenType())){var u=s.getTokenContent();r.push({range:s.getTokenRange(),kind:c.DocumentHighlightKind.Read});var g=this.findMatchingBracket(u,s);g&&r.push({range:g,kind:c.DocumentHighlightKind.Read})}else for(var m=o.getAllWordsWithRange(),h=Math.min(1e3,m.length),f=0;f<h;f++)m[f].text===a&&r.push({range:m[f].range,kind:c.DocumentHighlightKind.Read});return i.TPromise.as(r)},e._stripQuotes=function(e){return e.replace(/^'([^']+)'$/,function(e,n){return n}).replace(/^"([^"]+)"$/,function(e,n){return n})},e._getWorkspaceUrl=function(n,t,o){if(o=e._stripQuotes(o),/^\s*javascript\:/i.test(o)||/^\s*\#/i.test(o))return null;if(/^\s*https?:\/\//i.test(o)||/^\s*file:\/\//i.test(o))return o.replace(/^\s*/g,"");if(/^\s*\/\//i.test(o)){var l=s.Schemas.http;return n.scheme===s.Schemas.https&&(l=s.Schemas.https),l+":"+o.replace(/^\s*/g,"")}var i=f.dirname(n.path),a=null;o.length>0&&"/"===o.charAt(0)?a=o:(a=f.join(i,o),a=a.replace(/^(\/\.\.)+/,""));var r=n["with"]({path:a}).toString(),c=t?t.toString():null;if(c&&u.startsWith(n.toString(),c)){var g=u.commonPrefixLength(c,r);return u.endsWith(c,"/")&&(g=r.lastIndexOf("/",g)+1),c+r.substr(g)}return r},e.prototype.createLink=function(n,t,o,l,i,a){var r=e._getWorkspaceUrl(n,t,o);return r?{range:{startLineNumber:l,startColumn:i,endLineNumber:l,endColumn:a},url:r}:null},e.prototype._computeHTMLLinks=function(e,n){var t,o,i,a,r,s,c,u,g,d,m=e.getLineCount(),h=[],f=b.LOOKING_FOR_HREF_OR_SRC,v=e.uri,w=null;if(n){var T=String(n);w="/"===T.charAt(T.length-1)?l["default"].parse(T):l["default"].parse(T+"/")}for(t=1;t<=m;t++)for(o=e.getLineContent(t),i=o.length,a=e.getLineTokens(t),c=0,s=a.getTokenCount();c<s;c++)switch(r=a.getTokenType(c)){case p.DELIM_ASSIGN:case"":break;case p.ATTRIB_NAME:u=a.getTokenEndIndex(c,i),g=o.substring(a.getTokenStartIndex(c),u).toLowerCase(),f="src"===g||"href"===g?b.AFTER_HREF_OR_SRC:b.LOOKING_FOR_HREF_OR_SRC;break;case p.ATTRIB_VALUE:f===b.AFTER_HREF_OR_SRC&&(u=a.getTokenEndIndex(c,i),g=o.substring(a.getTokenStartIndex(c),u),d=this.createLink(v,w,g,t,a.getTokenStartIndex(c)+2,u),d&&h.push(d),f=b.LOOKING_FOR_HREF_OR_SRC);default:p.isTag(r)?f=b.LOOKING_FOR_HREF_OR_SRC:f===b.AFTER_HREF_OR_SRC&&(f=b.LOOKING_FOR_HREF_OR_SRC)}return h},e.prototype.provideLinks=function(e,n){var t=this.resourceService.get(e);return i.TPromise.as(this._computeHTMLLinks(t,n))},e=t([o(1,g.IResourceService)],e)}();n.HTMLWorker=w})}).call(this);
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/66f37fd2a99eb9d628dd374d81d78835b410c39b/vs\languages\html\common\htmlWorker.js.map
