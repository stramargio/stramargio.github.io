"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[25],{1476:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var o=t(1406),r=t(1),a=t(2131),u=t(1407),c=t(62),s=t(352),i=t(151),d=t(1287),l=t(2),f=t(3),v=(t(93),t(5),t(87)),h=t.n(v),m=t(1418),g=t(52),p=(t(35),t(0),t(4),t(2126)),M=t(438),Z=function(n){var e=n.conversationId,t=n.onMoveUp,r=n.onMoveDown,a=(0,f.TL)(),u=(0,p.k6)(),c=(0,f.CG)((function(n){var t=n.conversations.items.find((function(n){return n.id===e}));return{accounts:t.accounts.map((function(e){return n.accounts.get(e,null)})),unread:t.unread,lastStatusId:t.last_status||null}})),i=c.accounts,d=c.unread,l=c.lastStatusId;return null===l?null:(0,o.Z)(M.Z,{id:l,unread:d,otherAccounts:i,onMoveUp:function(){t(e)},onMoveDown:function(){r(e)},onClick:function(){d&&a((0,s.v3)(e)),u.push("/statuses/".concat(l))}})},w=function(){var n=(0,f.TL)(),e=(0,r.useRef)(null),t=(0,f.CG)((function(n){return n.conversations.items})),a=(0,f.CG)((function(n){return n.conversations.isLoading})),u=(0,f.CG)((function(n){return n.conversations.hasMore})),c=function(n){return t.findIndex((function(e){return e.id===n}))},i=function(n){var e=c(n)-1;l(e)},d=function(n){var e=c(n)+1;l(e)},l=function(n){var t;null===(t=e.current)||void 0===t||t.scrollIntoView({index:n,behavior:"smooth",done:function(){var e=document.querySelector('#direct-list [data-index="'.concat(n,'"] .focusable'));e&&e.focus()}})},v=h()((function(){var e=t.getIn([-1,"id"]);e&&n((0,s.P4)({maxId:e}))}),300,{leading:!0});return r.createElement(g.Z,{hasMore:u,onLoadMore:v,id:"direct-list",scrollKey:"direct",ref:e,isLoading:a,showLoading:a&&0===t.size,emptyMessage:(0,o.Z)(m.Z,{id:"empty_column.direct",defaultMessage:"You don't have any direct messages yet. When you send or receive one, it will show up here."})},t.map((function(n){return(0,o.Z)(Z,{conversationId:n.id,onMoveUp:i,onMoveDown:d},n.id)})))},C=(0,a.vU)({title:{id:"column.direct",defaultMessage:"Direct messages"},searchPlaceholder:{id:"direct.search_placeholder",defaultMessage:"Send a message to…"}}),I=function(){var n=(0,u.Z)(),e=(0,f.TL)();return(0,r.useEffect)((function(){e((0,s.ol)()),e((0,s.P4)());var n=e((0,i._o)());return function(){e((0,s.eC)()),n()}}),[]),(0,o.Z)(l.sg,{label:n.formatMessage(C.title)},void 0,(0,o.Z)(d.Z,{placeholder:n.formatMessage(C.searchPlaceholder),onSelected:function(n){e((0,c.W3)(n))}}),(0,o.Z)(w,{}))}}}]);
//# sourceMappingURL=conversations-d0f4438edf1814de014b.chunk.js.map