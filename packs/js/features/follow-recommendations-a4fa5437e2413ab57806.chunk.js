"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[43],{1410:function(e,o,n){n.r(o);var t=n(1565),s=(n(5),n(87)),i=n.n(s),u=n(1),a=n(2132),r=n(1566),c=n(1578),g=n(591),l=n(52),d=n(2),f=n(85),m=n(3),h=(0,a.vU)({heading:{id:"followRecommendations.heading",defaultMessage:"Suggested Profiles"}});o.default=function(){var e=(0,m.TL)(),o=(0,r.Z)(),n=(0,m.hz)(),s=(0,m.CG)((function(e){return e.suggestions.items})),a=(0,m.CG)((function(e){return!!e.suggestions.next})),p=(0,m.CG)((function(e){return e.suggestions.isLoading})),Z=i()((function(){return p?null:e((0,g.mO)({limit:20}))}),300);return(0,u.useEffect)((function(){e((0,g.mO)({limit:20}))}),[]),0!==s.size||p?(0,t.Z)(d.sg,{label:o.formatMessage(h.heading)},void 0,(0,t.Z)(d.Kq,{space:4},void 0,(0,t.Z)(l.Z,{isLoading:p,scrollKey:"suggestions",onLoadMore:Z,hasMore:a,itemClassName:"pb-4"},void 0,n.truthSuggestions?s.map((function(e){return(0,t.Z)(f.Z,{id:e.account,withAccountNote:!0,showProfileHoverCard:!1,actionAlignment:"top"},e.account)})):s.map((function(e){return(0,t.Z)(f.Z,{id:e.account,withAccountNote:!0},e.account)}))))):(0,t.Z)(d.sg,{label:o.formatMessage(h.heading)},void 0,(0,t.Z)(d.xv,{align:"center"},void 0,(0,t.Z)(c.Z,{id:"empty_column.follow_recommendations",defaultMessage:"Looks like no suggestions could be generated for you. You can try using search to look for people you might know or explore trending hashtags."})))}}}]);
//# sourceMappingURL=follow-recommendations-a4fa5437e2413ab57806.chunk.js.map