(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{203:function(t,e,r){"use strict";var s=r(5),a=r(73).filter,n=r(50),i=r(36),c=n("filter"),l=i("filter");s({target:"Array",proto:!0,forced:!c||!l},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},204:function(t,e,r){"use strict";var s=r(5),a=r(72).includes,n=r(140);s({target:"Array",proto:!0,forced:!r(36)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},210:function(t,e,r){},211:function(t,e){},219:function(t,e,r){"use strict";var s={components:{},props:["record"]},a=r(7),n=Object(a.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"height-30 jarallax bg-gray-100 border-bottom"},[e("div",{staticClass:"jarallax-img bg-pattern opacity-10"}),e("b-container",{staticClass:"pt-5 pb-5"},[e("h1",{staticClass:"display-4"},[this._v(this._s(this.record.title))])])],1)}),[],!1,null,null,null);e.a=n.exports},220:function(t,e,r){"use strict";r(203),r(204);var s={components:{},props:["record"],computed:{subtitles:function(){var t=this.record.headings.filter((function(t,e,r){return[2,3].includes(t.depth)}));return t}}},a=r(7),n=Object(a.a)(s,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"sidebar position-sticky"},[t.subtitles.length>0?r("div",{staticClass:"toc"},[r("h6",[t._v("On this page")]),r("ul",{staticClass:"pl-0"},t._l(t.subtitles,(function(e){return r("li",{key:e.value,staticClass:"toc-item",class:"toc-item-level-"+e.depth},[r("a",{staticClass:"toc-link",attrs:{href:e.anchor}},[t._v(t._s(e.value))])])})),0)]):t._e(),t.record.tags.length>0?r("div",{staticClass:"tags d-lg-block d-none",class:[t.subtitles.length>0?"mt-3":""]},[r("h6",[t._v("Tags")]),r("div",{staticClass:"tags-items"},t._l(t.record.tags,(function(e){return r("g-link",{key:e.id,staticClass:"mr-2",attrs:{to:e.path}},[r("span",[t._v("#")]),t._v(t._s(e.title)+"\n      ")])})),1)]):t._e()])}),[],!1,null,null,null);e.a=n.exports},225:function(t,e,r){"use strict";var s=r(210);r.n(s).a},226:function(t,e,r){"use strict";var s=r(211),a=r.n(s);e.default=a.a},258:function(t,e,r){"use strict";r.r(e);var s=r(219),a=r(220),n=r(205),i={components:{SectionHeader:s.a,SectionSidebar:a.a},methods:{recordLink:function(t){return"/articles/".concat(t.slug)}},computed:{relatedRecords:function(){return Object(n.sampleSize)(this.$page.related.edges,2)}},metaInfo:function(){return{title:this.$page.entry.title}}},c=(r(225),r(7)),l=r(226),o=Object(c.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("DefaultLayout",[r("SectionHeader",{attrs:{record:t.$page.entry}}),r("b-container",{staticClass:"mt-5 mb-5"},[r("b-row",[r("b-col",{staticClass:"article-content",attrs:{order:"2","order-lg":"1",cols:"12",lg:"8"}},[r("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.entry.content)}})]),r("b-col",{attrs:{lg:"3",order:"1","order-lg":"2","offset-lg":"1"}},[r("SectionSidebar",{attrs:{record:t.$page.entry}})],1)],1)],1),2==t.relatedRecords.length?r("b-container",{attrs:{fluid:""}},[r("b-row",{staticClass:"text-center pt-5 bg-gray-100"},[r("b-col",[r("h2",{staticClass:"display-4"},[t._v("You might also like")])])],1),r("b-row",{staticClass:"height-30 bg-gray-100 pb-5 related-records"},t._l(t.relatedRecords,(function(e){return r("b-col",{key:e.node.id,staticClass:"pr-5 pl-5 mt-5 border-right",attrs:{sm:"12",md:"6"}},[r("h4",{},[t._v(t._s(e.node.title))]),r("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(e.node.excerpt)}}),r("g-link",{staticClass:"btn btn-lg btn-primary",attrs:{to:t.recordLink(e.node)}},[t._v("Continue reading")])],1)})),1)],1):t._e()],1)}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(o);e.default=o.exports}}]);