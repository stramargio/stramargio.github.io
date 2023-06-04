"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[36],{1540:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(1417),o=a(1406),s=(a(4),a(28),a(5),a(739)),i=a(1),r=a(2131),u=a(1407),c=a(1418),d=a(2141),l=a(2126),m=a(48),f=a(241),v=a(62),g=a(150),p=a(161),Z=a(1415),h=a(348),b=a(261),M=a(180),k=a(99),x=a(59),y=a(213),_=a(2),w=a(234),I=a(172),C=a(3),N=a(137),S=a(2150),U=a(724),E=a(108),q=a(2148),T=function(){var e=(0,q.lv)(5,25),t=(0,q.lv)(5,30),a=(0,q.lv)(5,30),n=(0,q.lv)(5,30);return(0,o.Z)(_.Kq,{className:"animate-pulse text-primary-50 dark:text-primary-800",space:2},void 0,(0,o.Z)("p",{className:"text-lg"},void 0,(0,q._4)(e)),(0,o.Z)(_.Kq,{space:1},void 0,(0,o.Z)("p",{},void 0,(0,q._4)(t)),(0,o.Z)("p",{},void 0,(0,q._4)(a)),(0,o.Z)("p",{},void 0,(0,q._4)(n))))},D=a(1272),A=a(1273),O=(0,r.vU)({bannerHeader:{id:"event.banner",defaultMessage:"Event banner"},exportIcs:{id:"event.export_ics",defaultMessage:"Export to your calendar"},copy:{id:"event.copy",defaultMessage:"Copy link to event"},external:{id:"event.external",defaultMessage:"View event on {domain}"},bookmark:{id:"status.bookmark",defaultMessage:"Bookmark"},unbookmark:{id:"status.unbookmark",defaultMessage:"Remove bookmark"},quotePost:{id:"event.quote",defaultMessage:"Quote event"},reblog:{id:"event.reblog",defaultMessage:"Repost event"},unreblog:{id:"event.unreblog",defaultMessage:"Un-repost event"},pin:{id:"status.pin",defaultMessage:"Pin on profile"},unpin:{id:"status.unpin",defaultMessage:"Unpin from profile"},delete:{id:"status.delete",defaultMessage:"Delete"},mention:{id:"status.mention",defaultMessage:"Mention @{name}"},chat:{id:"status.chat",defaultMessage:"Chat with @{name}"},direct:{id:"status.direct",defaultMessage:"Direct message @{name}"},mute:{id:"account.mute",defaultMessage:"Mute @{name}"},block:{id:"account.block",defaultMessage:"Block @{name}"},report:{id:"status.report",defaultMessage:"Report @{name}"},adminAccount:{id:"status.admin_account",defaultMessage:"Moderate @{name}"},adminStatus:{id:"status.admin_status",defaultMessage:"Open this post in the moderation interface"},markStatusSensitive:{id:"admin.statuses.actions.mark_status_sensitive",defaultMessage:"Mark post sensitive"},markStatusNotSensitive:{id:"admin.statuses.actions.mark_status_not_sensitive",defaultMessage:"Mark post not sensitive"},deleteStatus:{id:"admin.statuses.actions.delete_status",defaultMessage:"Delete post"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},blockAndReport:{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"},deleteConfirm:{id:"confirmations.delete_event.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.delete_event.heading",defaultMessage:"Delete event"},deleteMessage:{id:"confirmations.delete_event.message",defaultMessage:"Are you sure you want to delete this event?"}}),R=function(e){var t=e.status,r=(0,u.Z)(),q=(0,C.TL)(),R=(0,l.k6)(),z=(0,C.hz)(),K=(0,C.rV)(),F=(0,C.Tr)(),L=!!F&&F.staff,P=!!F&&F.admin;if(!t||!t.event)return i.createElement(i.Fragment,null,(0,o.Z)("div",{className:"-mx-4 -mt-4"},void 0,(0,o.Z)("div",{className:"relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48"})),(0,o.Z)(T,{}));var B,G,V=t.account,H=t.event,J=H.banner,j=V.username;return i.createElement(i.Fragment,null,(0,o.Z)("div",{className:"-mx-4 -mt-4"},void 0,(0,o.Z)("div",{className:"relative h-32 w-full bg-gray-200 dark:bg-gray-900/50 md:rounded-t-xl lg:h-48"},void 0,J&&(0,o.Z)("a",{href:J.url,onClick:function(e){e.preventDefault(),e.stopPropagation(),q((0,Z.h7)("MEDIA",{media:(0,s.List)([H.banner])}))},target:"_blank"},void 0,(0,o.Z)(y.Z,{src:J.url,alt:r.formatMessage(O.bannerHeader),className:"absolute inset-0 h-full object-cover md:rounded-t-xl"})))),(0,o.Z)(_.Kq,{space:2},void 0,(0,o.Z)(_.Ug,{className:"w-full",alignItems:"start",space:2},void 0,(0,o.Z)(_.xv,{className:"grow",size:"lg",weight:"bold"},void 0,H.name),(0,o.Z)(_.v2,{},void 0,(0,o.Z)(_.j2,{as:_.hU,src:a(200),theme:"outlined",className:"h-[30px] px-2",iconClassName:"h-4 w-4",children:null}),(0,o.Z)(_.qy,{},void 0,(B=V.fqn.split("@")[1],G=[{text:r.formatMessage(O.exportIcs),action:function(){q((0,g.Of)(t.id)).then((function(e){var t=e.data;(0,U.L)(t,"calendar.ics")})).catch((function(){}))},icon:a(1377)},{text:r.formatMessage(O.copy),action:function(){var e=t.uri;(0,S.Z)(e)},icon:a(455)}],z.federating&&(0,N.Q1)(V)&&G.push({text:r.formatMessage(O.external,{domain:B}),action:function(){window.open(t.uri,"_blank")},icon:a(216)}),F?(z.bookmarks&&G.push({text:r.formatMessage(t.bookmarked?O.unbookmark:O.bookmark),action:function(){q((0,p.yR)(t))},icon:t.bookmarked?a(769):a(492)}),["public","unlisted"].includes(t.visibility)&&(G.push({text:r.formatMessage(t.reblogged?O.unreblog:O.reblog),action:function(){var e=function(){return q((0,p.bb)(t))};K.get("boostModal")?q((0,Z.h7)("BOOST",{status:t,onReblog:e})):e()},icon:a(181)}),z.quotePosts&&G.push({text:r.formatMessage(O.quotePost),action:function(){q((0,v.vp)(t))},icon:a(770)})),G.push(null),F.id===V.id?(["public","unlisted"].includes(t.visibility)&&G.push({text:r.formatMessage(t.pinned?O.unpin:O.pin),action:function(){q((0,p.aB)(t))},icon:t.pinned?a(694):a(494)}),G.push({text:r.formatMessage(O.delete),action:function(){q((0,Z.h7)("CONFIRM",{icon:a(103),heading:r.formatMessage(O.deleteHeading),message:r.formatMessage(O.deleteMessage),confirm:r.formatMessage(O.deleteConfirm),onConfirm:function(){return q((0,k.Vx)(t.id))}}))},icon:a(103),destructive:!0})):(G.push({text:r.formatMessage(O.mention,{name:j}),action:function(){q((0,v.Ck)(V))},icon:a(259)}),!0===t.getIn(["account","pleroma","accepts_chat_messages"])?G.push({text:r.formatMessage(O.chat,{name:j}),action:function(){q((0,f.aU)(V.id,R))},icon:a(263)}):z.privacyScopes&&G.push({text:r.formatMessage(O.direct,{name:j}),action:function(){q((0,v.kS)(V))},icon:a(217)}),G.push(null),G.push({text:r.formatMessage(O.mute,{name:j}),action:function(){q((0,b.A0)(V))},icon:a(239)}),G.push({text:r.formatMessage(O.block,{name:j}),action:function(){q((0,Z.h7)("CONFIRM",{icon:a(110),heading:(0,o.Z)(c.Z,{id:"confirmations.block.heading",defaultMessage:"Block @{name}",values:{name:V.acct}}),message:(0,o.Z)(c.Z,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:(0,o.Z)("strong",{},void 0,"@",V.acct)}}),confirm:r.formatMessage(O.blockConfirm),onConfirm:function(){return q((0,m.Gy_)(V.id))},secondary:r.formatMessage(O.blockAndReport),onSecondary:function(){q((0,m.Gy_)(V.id)),q((0,M.UQ)(M.JG.STATUS,V,{status:t}))}}))},icon:a(110)}),G.push({text:r.formatMessage(O.report,{name:j}),action:function(){q((0,M.UQ)(M.JG.STATUS,V,{status:t}))},icon:a(351)})),L&&(G.push(null),G.push({text:r.formatMessage(O.adminAccount,{name:V.username}),action:function(){q((0,Z.h7)("ACCOUNT_MODERATION",{accountId:V.id}))},icon:a(495)}),P&&G.push({text:r.formatMessage(O.adminStatus),action:function(){window.open("/pleroma/admin/#/statuses/".concat(t.id,"/"),"_blank")},icon:a(320)}),G.push({text:r.formatMessage(!1===t.sensitive?O.markStatusSensitive:O.markStatusNotSensitive),action:function(){q((0,h.SO)(r,t.id,t.sensitive))},icon:a(349)}),V.id!==(null==F?void 0:F.id)&&G.push({text:r.formatMessage(O.deleteStatus),action:function(){q((0,h.Uj)(r,t.id))},icon:a(103),destructive:!0})),G):G).map((function(e,t){if(void 0===(null==e?void 0:e.text))return(0,o.Z)(_.R,{},t);var a=e.action?_.sN:_.Uk,s=e.action?{onSelect:e.action}:{to:e.to,as:d.rU,target:e.target||"_self"};return i.createElement(a,(0,n.Z)({key:t},s,{className:"group"}),(0,o.Z)("div",{className:"flex items-center"},void 0,e.icon&&(0,o.Z)(w.Z,{src:e.icon,className:"mr-3 h-5 w-5 flex-none text-gray-400 group-hover:text-gray-500"}),(0,o.Z)("div",{className:"truncate"},void 0,e.text)))})))),V.id===(null==F?void 0:F.id)?(0,o.Z)(_.zx,{size:"sm",theme:"secondary",onClick:function(e){e.stopPropagation(),q((0,g.UB)(t.id))}},void 0,(0,o.Z)(c.Z,{id:"event.manage",defaultMessage:"Manage"})):(0,o.Z)(D.Z,{status:t})),(0,o.Z)(_.Kq,{space:1},void 0,(0,o.Z)(_.Ug,{alignItems:"center",space:2},void 0,(0,o.Z)(x.Z,{src:a(1378)}),(0,o.Z)("span",{},void 0,(0,o.Z)(c.Z,{id:"event.organized_by",defaultMessage:"Organized by {name}",values:{name:(0,o.Z)(d.rU,{className:"mention inline-block",to:"/@".concat(V.acct)},void 0,(0,o.Z)(_.Ug,{space:1,alignItems:"center",grow:!0},void 0,(0,o.Z)("span",{dangerouslySetInnerHTML:{__html:V.display_name_html}}),V.verified&&(0,o.Z)(I.Z,{})))}}))),(0,o.Z)(_.Ug,{alignItems:"center",space:2},void 0,(0,o.Z)(x.Z,{src:a(962)}),(0,o.Z)("a",{href:"#",className:"hover:underline",onClick:function(e){e.preventDefault(),e.stopPropagation(),q(F?(0,Z.h7)("EVENT_PARTICIPANTS",{statusId:t.id}):(0,Z.h7)("UNAUTHORIZED"))}},void 0,(0,o.Z)("span",{},void 0,(0,o.Z)(c.Z,{id:"event.participants",defaultMessage:"{count} {rawCount, plural, one {person} other {people}} going",values:{rawCount:H.participants_count||0,count:(0,E.w8)(H.participants_count||0)}})))),(0,o.Z)(A.Z,{status:t}),H.location&&(0,o.Z)(_.Ug,{alignItems:"center",space:2},void 0,(0,o.Z)(x.Z,{src:a(432)}),(0,o.Z)("span",{},void 0,H.location.get("name"))))))}},1542:function(e,t,a){a.r(t);var n=a(2124),o=a(1406),s=a(1398),i=a(2125),r=(a(22),a(6),a(19),a(5),a(142),a(74),a(4),a(0),a(24),a(40),a(739)),u=a(87),c=a.n(u),d=a(1),l=a(1418),m=a(62),f=a(99),v=a(149),g=a(52),p=a(916),Z=a(2),h=a(436),b=a(816),M=a(3),k=a(42),x=a(646),y=a(1012),_=a(1304);t.default=function(e){var t=(0,M.TL)(),a=(0,d.useCallback)((0,k.TE)(),[]),u=(0,M.CG)((function(t){return a(t,{id:e.params.statusId})})),w=(0,M.CG)((function(e){return e.me})),I=(0,M.CG)((function(e){var t=(0,r.OrderedSet)();if(u){var a=u.id;t=(t=(0,y.getDescendantsIds)(e,a)).delete(a)}return t})),C=(0,d.useState)(!!u),N=(0,i.Z)(C,2),S=N[0],U=N[1],E=(0,d.useState)(),q=(0,i.Z)(E,2),T=q[0],D=q[1],A=(0,d.useRef)(null),O=(0,d.useRef)(null),R=function(){var a=(0,s.Z)(regeneratorRuntime.mark((function a(){var n,o,s,i;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.params,o=n.statusId,a.next=4,t((0,f.wE)(o));case 4:s=a.sent,i=s.next,D(i);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();(0,d.useEffect)((function(){R().then((function(){U(!0)})).catch((function(){U(!0)}))}),[e.params.statusId]),(0,d.useEffect)((function(){S&&w&&t((0,m.By)("reply:".concat(e.params.statusId),u))}),[S,w]);var z=function(e){var t=(0,r.List)(I).indexOf(e);F(t-1)},K=function(e){var t=(0,r.List)(I).indexOf(e);F(t+1)},F=function(e){var t;null===(t=O.current)||void 0===t||t.scrollIntoView({index:e,behavior:"smooth",done:function(){var t=document.querySelector('#thread [data-index="'.concat(e,'"] .focusable'));t&&t.focus()}})},L=(0,d.useCallback)(c()((function(){T&&u&&t((0,f.TA)(u.id,T)).then((function(e){var t=e.next;D(t)})).catch((function(){}))}),300,{leading:!0}),[T,u]),P=I.size>0;if(!u&&S)return(0,o.Z)(v.Z,{});if(!u)return(0,o.Z)(h.Z,{});var B,G=[];return P&&G.push.apply(G,(0,n.Z)((B=I,B.map((function(e){return e.endsWith("-tombstone")?function(e){return(0,o.Z)("div",{className:"py-4 pb-8"},void 0,(0,o.Z)(p.Z,{id:e,onMoveUp:z,onMoveDown:K},e))}(e):e.startsWith("末pending-")?function(e){var t=e.replace(/^末pending-/,"");return(0,o.Z)(b.Z,{idempotencyKey:t,thread:!0},e)}(e):function(e){return(0,o.Z)(_.Z,{id:e,focusedStatusId:u.id,onMoveUp:z,onMoveDown:K},e)}(e)}))).toArray())),(0,o.Z)(Z.Kq,{space:2},void 0,w&&(0,o.Z)("div",{className:"border-b border-solid border-gray-200 p-2 pt-0 dark:border-gray-800"},void 0,(0,o.Z)(x.Z,{id:"reply:".concat(u.id),autoFocus:!1,event:u.id})),d.createElement("div",{ref:A,className:"thread p-0 shadow-none sm:p-2"},d.createElement(g.Z,{id:"thread",ref:O,hasMore:!!T,onLoadMore:L,placeholderComponent:function(){return(0,o.Z)(h.Z,{variant:"slim"})},initialTopMostItemIndex:0,emptyMessage:(0,o.Z)(l.Z,{id:"event.discussion.empty",defaultMessage:"No one has commented this event yet. When someone does, they will appear here."})},G)))}},1541:function(e,t,a){a.r(t);var n=a(1406),o=a(2125),s=(a(54),a(9),a(0),a(5),a(6),a(19),a(1)),i=a(1418),r=a(2131),u=a(1415),c=a(99),d=a(149),l=a(562),m=a(595),f=a(678),v=a(2),g=a(485),p=a(3),Z=a(42),h=a(240);t.default=function(e){var t=e.params,b=(0,p.TL)(),M=(0,s.useCallback)((0,Z.TE)(),[]),k=(0,p.CG)((function(e){return M(e,{id:t.statusId})})),x=(0,p.Dn)().tileServer,y=(0,p.rV)().get("displayMedia"),_=(0,s.useState)(!!k),w=(0,o.Z)(_,2),I=w[0],C=w[1],N=(0,s.useState)((0,h.qI)(k,y)),S=(0,o.Z)(N,2),U=S[0],E=S[1];(0,s.useEffect)((function(){b((0,c.UK)(t.statusId)).then((function(){C(!0)})).catch((function(){C(!0)})),E((0,h.qI)(k,y))}),[t.statusId]);var q=function(e){e.preventDefault(),b((0,u.h7)("EVENT_MAP",{statusId:k.id}))},T=(0,s.useCallback)((function(){var e,t=k.event;return t.location&&(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.location",defaultMessage:"Location"})),(0,n.Z)(v.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(v.JO,{src:a(432)}),(0,n.Z)(v.xv,{},void 0,t.location.get("name"),(0,n.Z)("br",{}),!(null===(e=t.location.get("street"))||void 0===e||!e.trim())&&s.createElement(s.Fragment,null,t.location.get("street"),(0,n.Z)("br",{})),[t.location.get("postalCode"),t.location.get("locality"),t.location.get("country")].filter((function(e){return e})).join(", "),x&&t.location.get("latitude")&&s.createElement(s.Fragment,null,(0,n.Z)("br",{}),(0,n.Z)("a",{href:"#",className:"text-primary-600 hover:underline dark:text-accent-blue",onClick:q},void 0,(0,n.Z)(i.Z,{id:"event.show_on_map",defaultMessage:"Show on map"}))))))}),[k]),D=(0,s.useCallback)((function(){var e=k.event;if(!e.start_time)return null;var t=new Date(e.start_time),o=e.end_time&&new Date(e.end_time),u=o&&t.getDate()===o.getDate()&&t.getMonth()===o.getMonth()&&t.getFullYear()===o.getFullYear();return(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.date",defaultMessage:"Date"})),(0,n.Z)(v.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(v.JO,{src:a(486)}),(0,n.Z)(v.xv,{},void 0,(0,n.Z)(r.Ji,{value:t,year:"numeric",month:"long",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),o&&s.createElement(s.Fragment,null," - ",(0,n.Z)(r.Ji,{value:o,year:u?void 0:"numeric",month:u?void 0:"long",day:u?void 0:"2-digit",weekday:u?void 0:"long",hour:"2-digit",minute:"2-digit"})))))}),[k]),A=(0,s.useCallback)((function(){var e;return null!==(e=k.event)&&void 0!==e&&e.links.size?(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.website",defaultMessage:"External links"})),k.event.links.map((function(e){return(0,n.Z)(v.Ug,{space:2,alignItems:"center"},void 0,(0,n.Z)(v.JO,{src:a(455)}),(0,n.Z)("a",{href:e.remote_url||e.url,className:"text-primary-600 hover:underline dark:text-accent-blue",target:"_blank"},void 0,(e.remote_url||e.url).replace(/^https?:\/\//,"")))}))):null}),[k]);return!k&&I?(0,n.Z)(d.Z,{}):k?(0,n.Z)(v.Kq,{className:"mt-4 sm:p-2",space:2},void 0,!!k.contentHtml.trim()&&(0,n.Z)(v.Kq,{space:1},void 0,(0,n.Z)(v.xv,{size:"xl",weight:"bold"},void 0,(0,n.Z)(i.Z,{id:"event.description",defaultMessage:"Description"})),(0,n.Z)(l.Z,{status:k,collapsable:!1,translatable:!0}),(0,n.Z)(f.Z,{status:k})),(0,n.Z)(m.Z,{status:k,showMedia:U,onToggleVisibility:function(){E(!U)}}),k.quote&&k.pleroma.get("quote_visible",!0)&&(0,n.Z)(g.Z,{statusId:k.quote}),T(),D(),A()):null}},1377:function(e,t,a){e.exports=a.p+"packs/icons/calendar-plus-928f3bdf.svg"},1378:function(e,t,a){e.exports=a.p+"packs/icons/flag-3-62f2778c.svg"}}]);
//# sourceMappingURL=event-aea2e86004e54cc75f4f.chunk.js.map