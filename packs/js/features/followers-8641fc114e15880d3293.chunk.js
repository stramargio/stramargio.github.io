"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[46],{1320:function(e,o,l){l.r(o);var n=l(2120),i=l(2100),t=(l(14),l(0),l(24),l(17),l(16),l(5),l(828)),s=l(82),a=l.n(s),u=l(1),r=l(2121),d=l(2122),c=l(2143),f=l(48),v=l(148),m=l(53),p=l(2),Z=l(86),b=l(3),g=l(41),h=(0,r.vU)({heading:{id:"column.followers",defaultMessage:"Followers"}});o.default=function(e){var o,l,s=(0,d.Z)(),r=(0,b.TL)(),w=(0,b.hz)(),C=(0,b.Tr)(),y=(0,u.useState)(!0),k=(0,i.Z)(y,2),M=k[0],_=k[1],G=(null===(o=e.params)||void 0===o?void 0:o.username)||"",L=(0,b.CG)((function(e){return(0,g.XO)(e,G)})),x=G.toLowerCase()===(null==C||null===(l=C.username)||void 0===l?void 0:l.toLowerCase()),N=(0,b.CG)((function(e){var o;return(null===(o=e.user_lists.followers.get(null==L?void 0:L.id))||void 0===o?void 0:o.items)||(0,t.OrderedSet)()})),z=(0,b.CG)((function(e){var o;return!(null===(o=e.user_lists.followers.get(null==L?void 0:L.id))||void 0===o||!o.next)})),E=(0,b.CG)((function(e){var o=!0===e.relationships.getIn([null==L?void 0:L.id,"blocked_by"]);return!x&&o&&!w.blockersVisible})),O=(0,u.useCallback)(a()((function(){L&&r((0,f.tut)(L.id))}),300,{leading:!0}),[null==L?void 0:L.id]);return(0,u.useEffect)((function(){var e;e=L?[r((0,f.$Gz)(L.id)),r((0,f.__q)(L.id))]:[r((0,f.ULQ)(G))],Promise.all(e).then((function(){return _(!1)})).catch((function(){return _(!1)}))}),[null==L?void 0:L.id,G]),M&&N.isEmpty()?(0,n.Z)(p.$j,{}):L?E?(0,n.Z)("div",{className:"empty-column-indicator"},void 0,(0,n.Z)(c.Z,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"})):(0,n.Z)(p.sg,{label:s.formatMessage(h.heading),transparent:!0},void 0,(0,n.Z)(m.Z,{scrollKey:"followers",hasMore:z,onLoadMore:O,emptyMessage:(0,n.Z)(c.Z,{id:"account.followers.empty",defaultMessage:"No one follows this user yet."}),itemClassName:"pb-4"},void 0,N.map((function(e){return(0,n.Z)(Z.Z,{id:e},e)})))):(0,n.Z)(v.Z,{})}}}]);
//# sourceMappingURL=followers-8641fc114e15880d3293.chunk.js.map