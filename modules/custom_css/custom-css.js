CodeMirror.defineMode("css",function(e){function t(e){for(var t={},i=0;i<e.length;++i)t[e[i]]=!0;return t}function i(e,t){return s=t,e}function r(e,t){var r=e.next();if("@"==r)return e.eatWhile(/[\w\\\-]/),i("def",e.current());if("/"==r&&e.eat("*"))return t.tokenize=a,a(e,t);if("<"==r&&e.eat("!"))return t.tokenize=o,o(e,t);if("="==r)i(null,"compare");else{if(("~"==r||"|"==r)&&e.eat("="))return i(null,"compare");if('"'==r||"'"==r)return t.tokenize=n(r),t.tokenize(e,t);if("#"==r)return e.eatWhile(/[\w\\\-]/),i("atom","hash");if("!"==r)return e.match(/^\s*\w*/),i("keyword","important");if(/\d/.test(r))return e.eatWhile(/[\w.%]/),i("number","unit");if("-"!==r)return/[,+>*\/]/.test(r)?i(null,"select-op"):"."==r&&e.match(/^-?[_a-z][_a-z0-9-]*/i)?i("qualifier","qualifier"):":"==r?i("operator",r):/[;{}\[\]\(\)]/.test(r)?i(null,r):"u"==r&&e.match("rl(")?(e.backUp(1),t.tokenize=l,i("property","variable")):(e.eatWhile(/[\w\\\-]/),i("property","variable"));if(/\d/.test(e.peek()))return e.eatWhile(/[\w.%]/),i("number","unit");if(e.match(/^[^-]+-/))return i("meta","meta")}}function a(e,t){for(var a,o=!1;null!=(a=e.next());){if(o&&"/"==a){t.tokenize=r;break}o="*"==a}return i("comment","comment")}function o(e,t){for(var a,o=0;null!=(a=e.next());){if(o>=2&&">"==a){t.tokenize=r;break}o="-"==a?o+1:0}return i("comment","comment")}function n(e,t){return function(a,o){for(var n,l=!1;null!=(n=a.next())&&(n!=e||l);)l=!l&&"\\"==n;return l||(t&&a.backUp(1),o.tokenize=r),i("string","string")}}function l(e,t){return e.next(),t.tokenize=e.match(/\s*[\"\']/,!1)?r:n(")",!0),i(null,"(")}var s,d=e.indentUnit,c=t(["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"]),u=t(["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid"]),p=t(["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid-cell","grid-column","grid-column-align","grid-column-sizing","grid-column-span","grid-columns","grid-flow","grid-row","grid-row-align","grid-row-sizing","grid-row-span","grid-rows","grid-template","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marker-offset","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","play-during","position","presentation-level","punctuation-trim","quotes","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-shadow","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","word-break","word-spacing","word-wrap","z-index"]),m=t(["black","silver","gray","white","maroon","red","purple","fuchsia","green","lime","olive","yellow","navy","blue","teal","aqua"]),h=t(["above","absolute","activeborder","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","auto","avoid","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break-all","break-word","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","compact","condensed","contain","content","content-box","context-menu","continuous","copy","cover","crop","cross","crosshair","currentcolor","cursive","dashed","decimal","decimal-leading-zero","default","default-button","destination-atop","destination-in","destination-out","destination-over","devanagari","disc","discard","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ew-resize","expanded","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","footnotes","forwards","from","geometricPrecision","georgian","graytext","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-table","inset","inside","intrinsic","invert","italic","justify","kannada","katakana","katakana-iroha","khmer","landscape","lao","large","larger","left","level","lighter","line-through","linear","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","malayalam","match","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","myanmar","n-resize","narrower","navy","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","nw-resize","nwse-resize","oblique","octal","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","overlay","overline","padding","padding-box","painted","paused","persian","plus-darker","plus-lighter","pointer","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radio","read-only","read-write","read-write-plaintext-only","relative","repeat","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","round","row-resize","rtl","run-in","running","s-resize","sans-serif","scroll","scrollbar","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","semi-condensed","semi-expanded","separate","serif","show","sidama","single","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","solid","somali","source-atop","source-in","source-out","source-over","space","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","transparent","ultra-condensed","ultra-expanded","underline","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","white","wider","window","windowframe","windowtext","x-large","x-small","xor","xx-large","xx-small","yellow"]);return{startState:function(e){return{tokenize:r,baseIndent:e||0,stack:[]}},token:function(e,t){if(t.tokenize==r&&e.eatSpace())return null;var i=t.tokenize(e,t),a=t.stack[t.stack.length-1];return"property"==i?"propertyValue"==a?i=h[e.current()]?"string-2":m[e.current()]?"keyword":"variable-2":"rule"==a?p[e.current()]||(i+=" error"):a&&"@media{"!=a?"@media"==a?i=c[e.current()]?"attribute":/^(only|not)$/i.test(e.current())?"keyword":"and"==e.current().toLowerCase()?"error":u[e.current()]?"error":"attribute error":"@mediaType"==a?i=c[e.current()]?"attribute":"and"==e.current().toLowerCase()?"operator":/^(only|not)$/i.test(e.current())?"error":u[e.current()]?"error":"error":"@mediaType("==a?p[e.current()]||(c[e.current()]?i="error":"and"==e.current().toLowerCase()?i="operator":/^(only|not)$/i.test(e.current())?i="error":i+=" error"):i="error":i="tag":"atom"==i?a&&"@media{"!=a?"propertyValue"==a?/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/.test(e.current())||(i+=" error"):i="error":i="builtin":"@media"==a&&"{"==s&&(i="error"),"{"==s?"@media"==a||"@mediaType"==a?(t.stack.pop(),t.stack[t.stack.length-1]="@media{"):t.stack.push("rule"):"}"==s?(t.stack.pop(),"propertyValue"==a&&t.stack.pop()):"@media"==s?t.stack.push("@media"):"@media"==a&&/\b(keyword|attribute)\b/.test(i)?t.stack.push("@mediaType"):"@mediaType"==a&&","==e.current()?t.stack.pop():"@mediaType"==a&&"("==s?t.stack.push("@mediaType("):"@mediaType("==a&&")"==s?t.stack.pop():"rule"==a&&":"==s?t.stack.push("propertyValue"):"propertyValue"==a&&";"==s&&t.stack.pop(),i},indent:function(e,t){var i=e.stack.length;return/^\}/.test(t)&&(i-="propertyValue"==e.stack[e.stack.length-1]?2:1),e.baseIndent+i*d},electricChars:"}"}}),CodeMirror.defineMIME("text/css","css"),function(e){e(document).ready(function(){CodeMirror.fromTextArea(document.getElementById("iboard_custom_css"),{lineNumbers:!0,mode:"css"})})}(jQuery);