(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{203:function(t,e,s){"use strict";var r=s(5),i=s(73).filter,n=s(50),a=s(36),c=n("filter"),l=a("filter");r({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},204:function(t,e,s){"use strict";var r=s(5),i=s(72).includes,n=s(140);r({target:"Array",proto:!0,forced:!s(36)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},215:function(t,e,s){},216:function(t,e){},219:function(t,e,s){"use strict";var r={components:{},props:["record"]},i=s(7),n=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"height-30 jarallax bg-gray-100 border-bottom"},[e("div",{staticClass:"jarallax-img bg-pattern opacity-10"}),e("b-container",{staticClass:"pt-5 pb-5"},[e("h1",{staticClass:"display-4"},[this._v(this._s(this.record.title))])])],1)}),[],!1,null,null,null);e.a=n.exports},220:function(t,e,s){"use strict";s(203),s(204);var r={components:{},props:["record"],computed:{subtitles:function(){var t=this.record.headings.filter((function(t,e,s){return[2,3].includes(t.depth)}));return t}}},i=s(7),n=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sidebar position-sticky"},[t.subtitles.length>0?s("div",{staticClass:"toc"},[s("h6",[t._v("On this page")]),s("ul",{staticClass:"pl-0"},t._l(t.subtitles,(function(e){return s("li",{key:e.value,staticClass:"toc-item",class:"toc-item-level-"+e.depth},[s("a",{staticClass:"toc-link",attrs:{href:e.anchor}},[t._v(t._s(e.value))])])})),0)]):t._e(),t.record.tags.length>0?s("div",{staticClass:"tags d-lg-block d-none",class:[t.subtitles.length>0?"mt-3":""]},[s("h6",[t._v("Tags")]),s("div",{staticClass:"tags-items"},t._l(t.record.tags,(function(e){return s("g-link",{key:e.id,staticClass:"mr-2",attrs:{to:e.path}},[s("span",[t._v("#")]),t._v(t._s(e.title)+"\n      ")])})),1)]):t._e()])}),[],!1,null,null,null);e.a=n.exports},237:function(t,e,s){"use strict";var r=s(215);s.n(r).a},238:function(t,e,s){"use strict";var r=s(216),i=s.n(r);e.default=i.a},259:function(t,e,s){"use strict";s.r(e);var r=s(219),i=s(220),n={components:{SectionHeader:r.a,SectionSidebar:i.a},metaInfo:function(){return{title:this.$page.entry.title}}},a=(s(237),s(7)),c=s(238),l=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("DefaultLayout",[e("SectionHeader",{attrs:{record:this.$page.entry}}),e("b-container",{staticClass:"mt-5 mb-5 "},[e("b-row",[e("b-col",{staticClass:"article-content",attrs:{order:"2","order-lg":"1",cols:"12",lg:"8"}},[e("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:this._s(this.$page.entry.content)}})]),e("b-col",{attrs:{lg:"3",order:"1","order-lg":"2","offset-lg":"1"}},[e("SectionSidebar",{attrs:{record:this.$page.entry}})],1)],1)],1)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(l);e.default=l.exports}}]);