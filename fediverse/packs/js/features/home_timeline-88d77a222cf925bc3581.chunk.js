(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[51],{1364:function(e,t,n){"use strict";n.r(t);var i=n(1565),o=n(1),l=n(2132),u=n(1566),r=n(1578),a=n(2141),s=n(48),c=n(591),d=n(84),m=n(376),f=n(2),v=n(266),h=n(3),g=(0,l.vU)({title:{id:"column.home",defaultMessage:"Home"}});t.default=function(){var e=(0,u.Z)(),t=(0,h.TL)(),n=(0,h.hz)(),l=(0,h.fz)(),p=(0,o.useRef)(null),Z=(0,h.CG)((function(e){var t;return!0===(null===(t=e.timelines.get("home"))||void 0===t?void 0:t.isPartial)})),y=(0,h.CG)((function(e){var t;return null===(t=e.timelines.get("home"))||void 0===t?void 0:t.feedAccountId})),b=(0,h.CG)((function(e){return y?e.relationships.get(y):null})),x=(0,h.CG)((function(e){var t;return null===(t=e.timelines.get("home"))||void 0===t?void 0:t.next})),w=function(){p.current&&(clearInterval(p.current),p.current=null)};return(0,o.useEffect)((function(){return Z?p.current=setInterval((function(){t((0,d.jW)())}),3e3):w(),function(){w()}}),[Z]),(0,o.useEffect)((function(){y&&t((0,s.dmJ)([y]))}),[]),(0,o.useEffect)((function(){!b||null!=b&&b.following||(t((0,d.fK)()),t((0,d.jW)({},(function(){t((0,c.bq)())}))))}),[y]),(0,i.Z)(f.sg,{label:e.formatMessage(g.title),transparent:!0,withHeader:!1},void 0,(0,i.Z)(m.Z,{onRefresh:function(){return t((0,d.jW)({accountId:y}))}},void 0,(0,i.Z)(v.Z,{scrollKey:"home_timeline",onLoadMore:function(e){t((0,d.jW)({url:x,maxId:e,accountId:y}))},timelineId:"home",divideType:"space",showAds:!0,emptyMessage:(0,i.Z)(f.Kq,{space:1},void 0,(0,i.Z)(f.xv,{size:"xl",weight:"medium",align:"center"},void 0,(0,i.Z)(r.Z,{id:"empty_column.home.title",defaultMessage:"You're not following anyone yet"})),(0,i.Z)(f.xv,{theme:"muted",align:"center"},void 0,(0,i.Z)(r.Z,{id:"empty_column.home.subtitle",defaultMessage:"{siteTitle} gets more interesting once you follow other users.",values:{siteTitle:l.title}})),n.federating&&(0,i.Z)(f.xv,{theme:"muted",align:"center"},void 0,(0,i.Z)(r.Z,{id:"empty_column.home",defaultMessage:"Or you can visit {public} to get started and meet other users.",values:{public:(0,i.Z)(a.rU,{to:"/timeline/local",className:"text-primary-600 hover:underline dark:text-primary-400"},void 0,(0,i.Z)(r.Z,{id:"empty_column.home.local_tab",defaultMessage:"the {site_title} tab",values:{site_title:l.title}}))}})))})))}},972:function(){}}]);
//# sourceMappingURL=home_timeline-88d77a222cf925bc3581.chunk.js.map