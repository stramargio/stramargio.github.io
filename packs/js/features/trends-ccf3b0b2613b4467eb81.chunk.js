"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[78],{1382:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(2120),a=(n(5),n(15),n(2121)),i=n(2122),u=n(2143),l=n(2142),s=n(335),o=n(1071),c=n(2),v=(n(109),n(1)),d=n(2150),p=function(e){var t=e.limit,n=(0,d.lv)(6,3),a=(0,d.lv)(10,3);return v.createElement(v.Fragment,null,new Array(t).fill(void 0).map((function(e,t){return(0,r.Z)(c.Kq,{className:"animate-pulse text-primary-200 dark:text-primary-700"},t,(0,r.Z)("p",{},void 0,(0,d._4)(n)),(0,r.Z)("p",{},void 0,(0,d._4)(a)))})))},m=n(3),f=n(2110),h=(n(40),n(662)),g=n(1056),Z=n(57);function w(){var e=(0,m.h_)(),t=(0,m.TL)(),n=function(){var n=(0,f.Z)(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.get("/api/v1/trends");case 2:return r=n.sent,a=r.data,t((0,g.Bp)(a)),i=a.map((function(e){return(0,Z.cn)(e)})),n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.useQuery)(["trends"],n,{placeholderData:[],staleTime:6e5})}var x=(0,a.vU)({viewAll:{id:"trendsPanel.viewAll",defaultMessage:"View all"}}),k=function(e){var t=e.limit,n=(0,m.TL)(),a=(0,i.Z)(),v=w(),d=v.data,f=v.isFetching;return f||null!=d&&d.length?(0,r.Z)(c.$L,{title:(0,r.Z)(u.Z,{id:"trends.title",defaultMessage:"Trends"}),action:(0,r.Z)(l.rU,{className:"text-right",to:"/search",onClick:function(){n((0,s.Tv)("hashtags"))}},void 0,(0,r.Z)(c.xv,{tag:"span",theme:"primary",size:"sm",className:"hover:underline"},void 0,a.formatMessage(x.viewAll)))},void 0,f?(0,r.Z)(p,{limit:t}):null==d?void 0:d.slice(0,t).map((function(e){return(0,r.Z)(o.Z,{hashtag:e},e.name)}))):null}}}]);
//# sourceMappingURL=trends-ccf3b0b2613b4467eb81.chunk.js.map