(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["staticPage"],{"1cf9":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"InfoSection"},[i("h1",[t._v("Lorem ipsum sed.")]),i("InfoCard",{attrs:{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",opened:0==t.openedInfoCard},on:{click:function(e){return t.handleInfoCardClicked(0)}}},[i("p",{staticClass:"info-card-content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")])]),i("InfoCard",{attrs:{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",opened:1==t.openedInfoCard},on:{click:function(e){return t.handleInfoCardClicked(1)}}},[i("p",{staticClass:"info-card-content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")])]),i("InfoCard",{attrs:{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",opened:2==t.openedInfoCard},on:{click:function(e){return t.handleInfoCardClicked(2)}}},[i("p",{staticClass:"info-card-content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")])]),i("InfoCard",{attrs:{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",opened:3==t.openedInfoCard},on:{click:function(e){return t.handleInfoCardClicked(3)}}},[i("p",{staticClass:"info-card-content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")])]),i("InfoCard",{attrs:{title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",opened:4==t.openedInfoCard},on:{click:function(e){return t.handleInfoCardClicked(4)}}},[i("p",{staticClass:"info-card-content"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")])])],1)},s=[],n=i("d4ec"),r=i("bee2"),o=i("99de"),c=i("7e84"),u=i("262e"),l=i("9ab4"),d=i("60a3"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"InfoCard",class:t.computedClass},[i("header",{on:{click:t.click}},[i("h1",[t._v(t._s(t.title))]),t._m(0)]),i("SlideUpDown",{staticClass:"content",attrs:{active:t.opened}},[t._t("default")],2)],1)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"arrow-button"},[a("img",{attrs:{src:i("76bd")}})])}],f={name:"SlideUpDown",props:{active:Boolean,duration:{type:Number,default:500},tag:{type:String,default:"div"},useHidden:{type:Boolean,default:!0}},data:function(){return{style:{},initial:!1,hidden:!1}},watch:{active:function(){this.layout()}},render:function(t){return t(this.tag,{style:this.style,attrs:this.attrs,ref:"container",on:{transitionend:this.onTransitionEnd}},this.$slots.default)},mounted:function(){this.layout(),this.initial=!0},created:function(){this.hidden=!this.active},computed:{el:function(){return this.$refs.container},attrs:function(){var t={"aria-hidden":!this.active,"aria-expanded":this.active};return this.useHidden&&(t.hidden=this.hidden),t}},methods:{layout:function(){var t=this;this.active?(this.hidden=!1,this.$emit("open-start"),this.initial&&this.setHeight("0px",(function(){return t.el.scrollHeight+"px"}))):(this.$emit("close-start"),this.setHeight(this.el.scrollHeight+"px",(function(){return"0px"})))},asap:function(t){this.initial?this.$nextTick(t):t()},setHeight:function(t,e){var i=this;this.style={height:t},this.asap((function(){i.__=i.el.scrollHeight,i.style={height:e(),overflow:"hidden","transition-property":"height","transition-duration":i.duration+"ms"}}))},onTransitionEnd:function(t){t.target===this.el&&(this.active?(this.style={},this.$emit("open-end")):(this.style={height:"0",overflow:"hidden"},this.hidden=!0,this.$emit("close-end")))}}},h={name:"InfoCard",components:{SlideUpDown:f},props:{title:{type:String,required:!0},opened:{type:Boolean,default:!1}},computed:{computedClass:function(){return{opened:this.opened}}},methods:{click:function(){this.$emit("click")}}},v=h,b=(i("53e9"),i("2877")),g=Object(b["a"])(v,m,p,!1,null,"4993be3d",null),C=g.exports,_=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.openedInfoCard=-1,t}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"handleInfoCardClicked",value:function(t){this.openedInfoCard==t?this.openedInfoCard=-1:this.openedInfoCard=t}}]),e}(d["c"]);_=Object(l["a"])([Object(d["a"])({name:"InfoSection",components:{InfoCard:C}})],_);var q=_,y=q,I=(i("d228"),Object(b["a"])(y,a,s,!1,null,"2f10e536",null));e["a"]=I.exports},"1e59":function(t,e,i){},2278:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"StaticPage"},[i("MainPageHeader"),i("div",{staticClass:"content"},[t._m(0),i("section",{staticClass:"section-tab"},[i("div",{staticClass:"info"},[i("h1",[t._v("Tab1")]),t._m(1),i("WeirdCounter"),i("div",{staticClass:"buttons"},[i("BigButton",{attrs:{borderColor:"primary"},on:{click:function(e){return t.route({name:"summaryPage",params:{tabKey:"tab1"}})}}},[t._v("BUTTON_4")]),i("router-link",{staticClass:"mini-button",attrs:{to:{name:"tabPage",params:{tabKey:"tab1"}}}},[t._v(" button_4.1 ")])],1)],1),t._m(2)]),i("section",{staticClass:"section-tab"},[i("div",{staticClass:"info"},[i("h1",[t._v("Tab2")]),t._m(3),i("WeirdCounter"),i("div",{staticClass:"buttons"},[i("BigButton",{attrs:{borderColor:"primary"},on:{click:function(e){return t.route({name:"summaryPage",params:{tabKey:"tab2"}})}}},[t._v("BUTTON_4")]),i("router-link",{staticClass:"mini-button",attrs:{to:{name:"tabPage",params:{tabKey:"tab2"}}}},[t._v(" button_4.1 ")])],1)],1),t._m(4)]),i("section",{staticClass:"section-tab"},[i("div",{staticClass:"info"},[i("h1",[t._v("Tab3")]),t._m(5),i("WeirdCounter"),i("div",{staticClass:"buttons"},[i("BigButton",{attrs:{borderColor:"primary"},on:{click:function(e){return t.route({name:"summaryPage",params:{tabKey:"tab3"}})}}},[t._v(" BUTTON_4 ")]),i("router-link",{staticClass:"mini-button",attrs:{to:{name:"tabPage",params:{tabKey:"tab3"}}}},[t._v(" button_4.1 ")])],1)],1),t._m(6)]),i("section",{staticClass:"section-end"},[i("InfoSection")],1)]),i("Footer")],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section-1"},[i("div",{staticClass:"image"},[i("div",{staticClass:"image-placeholder"})]),i("div",{staticClass:"info"},[i("h1",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing lectus. ")]),i("p",[i("ul",[i("li",[t._v("Lorem ipsum dolor proin.")]),i("li",[t._v("Lorem ipsum dolor proin.")]),i("li",[t._v("Lorem ipsum dolor proin.")])]),t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non ullamcorper felis. Mauris efficitur nunc nibh, vitae auctor magna facilisis ac. Nullam egestas, ex at varius laoreet, quam diam gravida massa, eu varius nulla ipsum non ante. Vivamus nec ex sed dolor pretium commodo sit amet efficitur nibh. Nullam in. ")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"indented"},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")]),i("div",{staticClass:"image-placeholder"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[i("div",{staticClass:"image-placeholder"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"indented"},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")]),i("div",{staticClass:"image-placeholder"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[i("div",{staticClass:"image-placeholder"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"indented"},[i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus urna diam, quis rutrum eros pretium in. Aliquam id elementum ante. Ut quam urna, aliquet vel blandit sit amet, ultricies sit amet diam. Donec ultrices ligula ac. ")]),i("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus placerat. ")]),i("div",{staticClass:"image-placeholder"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"image"},[i("div",{staticClass:"image-placeholder"})])}],n=i("d4ec"),r=i("bee2"),o=i("99de"),c=i("7e84"),u=i("262e"),l=i("9ab4"),d=i("60a3"),m=i("18e6"),p=i("fd2d"),f=i("c687"),h=i("7a5c"),v=i("1cf9"),b=function(t){function e(){return Object(n["a"])(this,e),Object(o["a"])(this,Object(c["a"])(e).apply(this,arguments))}return Object(u["a"])(e,t),Object(r["a"])(e,[{key:"route",value:function(t){this.$router.push(t)}}]),e}(d["c"]);b=Object(l["a"])([Object(d["a"])({name:"StaticPage",components:{MainPageHeader:m["a"],Footer:p["a"],BigButton:f["a"],WeirdCounter:h["a"],InfoSection:v["a"]}})],b);var g=b,C=g,_=(i("f01e"),i("2877")),q=Object(_["a"])(C,a,s,!1,null,"3e5f637c",null);e["default"]=q.exports},"53e9":function(t,e,i){"use strict";var a=i("1e59"),s=i.n(a);s.a},"73fb":function(t,e,i){},"76bd":function(t,e,i){t.exports=i.p+"img/arrow-down.558d7444.svg"},d228:function(t,e,i){"use strict";var a=i("73fb"),s=i.n(a);s.a},f01e:function(t,e,i){"use strict";var a=i("f65b"),s=i.n(a);s.a},f65b:function(t,e,i){}}]);
//# sourceMappingURL=staticPage.73b0e6e1.js.map