(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[50],{1261:function(n,a,t){"use strict";t.r(a),t.d(a,{HashtagTimeline:function(){return g}});var e=t(2059),u=t(1120),o=(t(4),t(5),t(7),t(9),t(0),t(28),t(33),t(1)),i=t(2061),s=t(2062),r=t(233),l=t(81),c=t(2),d=t(209),f=t(3),h=(0,i.vU)({any:{id:"hashtag.column_header.tag_mode.any",defaultMessage:"or {additional}"},all:{id:"hashtag.column_header.tag_mode.all",defaultMessage:"and {additional}"},none:{id:"hashtag.column_header.tag_mode.none",defaultMessage:"without {additional}"},empty:{id:"empty_column.hashtag",defaultMessage:"There is nothing in this hashtag yet."}}),g=function(n){var a,t=n.params,i=(0,s.Z)(),g=(null==t?void 0:t.id)||"",m=(null==t?void 0:t.tags)||{any:[],all:[],none:[]},p=(0,f.TL)(),y=(0,o.useRef)([]),v=function(n){return m&&(m[n]||[]).length>0?m[n].map((function(n){return n.value})).join("/"):""},M=function(){var n=m.any.map((function(n){return n.value})),a=m.all.map((function(n){return n.value})),t=m.none.map((function(n){return n.value}));[g].concat((0,u.Z)(n)).map((function(n){y.current.push(p((0,r.HZ)(g,n,(function(n){var e=n.tags.map((function(n){return n.name}));return a.filter((function(n){return e.includes(n)})).length===a.length&&0===t.filter((function(n){return e.includes(n)})).length}))))}))},Z=function(){y.current.map((function(n){return n()})),y.current=[]};return(0,o.useEffect)((function(){return M(),p((0,l.Zt)(g,{tags:m})),function(){Z()}}),[]),(0,o.useEffect)((function(){Z(),M(),p((0,l.lq)("hashtag:".concat(g))),p((0,l.Zt)(g,{tags:m}))}),[g]),(0,e.Z)(c.sg,{label:(a=["#".concat(g)],v("any")&&a.push(" ",i.formatMessage(h.any,{additional:v("any")})),v("all")&&a.push(" ",i.formatMessage(h.any,{additional:v("all")})),v("none")&&a.push(" ",i.formatMessage(h.any,{additional:v("none")})),a.join("")),transparent:!0},void 0,(0,e.Z)(d.Z,{scrollKey:"hashtag_timeline",timelineId:"hashtag:".concat(g),onLoadMore:function(n){p((0,l.Zt)(g,{maxId:n,tags:m}))},emptyMessage:i.formatMessage(h.empty),divideType:"space"}))};a.default=g},694:function(){}}]);
//# sourceMappingURL=hashtag_timeline-4ad6acd5d3922d0740a5.chunk.js.map