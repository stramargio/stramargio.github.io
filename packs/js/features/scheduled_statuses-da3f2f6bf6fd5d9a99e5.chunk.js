"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[69],{1112:function(e,t,s){s.r(t),s.d(t,{default:function(){return K}});var a=s(2059),n=(s(5),s(79)),i=s.n(n),d=s(1),u=s(2061),l=s(2062),o=s(2078),c=s(445),r=s(57),f=s(2),_=s(3),m=s(2060),g=s(2058),h=s(564),p=s(105),v=s(389),Z=s(321),y=s(390),M=s(952),b=(s(6),s(18),s(45),s(46),s(47),s(20),s(823)),C=s(433),w=s(762),x=s(37),I=s(2074),k=s(59),G=s(178),L=(0,u.vU)({cancel:{id:"scheduled_status.cancel",defaultMessage:"Cancel"},deleteConfirm:{id:"confirmations.scheduled_status_delete.confirm",defaultMessage:"Cancel"},deleteHeading:{id:"confirmations.scheduled_status_delete.heading",defaultMessage:"Cancel scheduled post"},deleteMessage:{id:"confirmations.scheduled_status_delete.message",defaultMessage:"Are you sure you want to cancel this scheduled post?"}}),N=function(e){var t=e.status,n=(0,l.Z)(),i=(0,_.TL)();return(0,a.Z)(f.Ug,{justifyContent:"end"},void 0,(0,a.Z)(G.Z,{title:n.formatMessage(L.cancel),text:n.formatMessage(L.cancel),src:s(78),onClick:function(){i((function(e,a){var d=(0,k.Gw)(a()).get("deleteModal");i(d?(0,I.h7)("CONFIRM",{icon:s(920),heading:n.formatMessage(L.deleteHeading),message:n.formatMessage(L.deleteMessage),confirm:n.formatMessage(L.deleteConfirm),onConfirm:function(){return i((0,c.Kl)(t.id))}}):(0,c.Kl)(t.id))}))}}))},T=["statusId"],U=function(e){var t=e.statusId,s=(0,g.Z)(e,T),n=(0,_.CG)((function(e){var s=e.scheduled_statuses.get(t);return s?function(e,t){var s=(0,x.Tm)()(e,e.me),a=(0,b.Map)({account:s,content:t.text.replace(new RegExp("\n","g"),"<br>"),created_at:t.scheduled_at,id:t.id,in_reply_to_id:t.in_reply_to_id,media_attachments:t.media_attachments,poll:t.poll,sensitive:t.sensitive,uri:"/scheduled_statuses/".concat(t.id),url:"/scheduled_statuses/".concat(t.id),visibility:t.visibility});return(0,w.M)((0,C.fb)(a))}(e,s):null}));if(!n)return null;var i=n.account;return(0,a.Z)("div",{className:(0,h.default)("status__wrapper","status__wrapper-".concat(n.visibility),{"status__wrapper-reply":!!n.in_reply_to_id}),tabIndex:0},void 0,(0,a.Z)("div",{className:(0,h.default)("status","status-".concat(n.visibility),{"status-reply":!!n.in_reply_to_id}),"data-id":n.id},void 0,(0,a.Z)("div",{className:"mb-4"},void 0,(0,a.Z)(f.Ug,{justifyContent:"between",alignItems:"start"},void 0,(0,a.Z)(p.Z,{account:i,timestamp:n.created_at,futureTimestamp:!0,hideActions:!0},i.id))),(0,a.Z)(y.Z,{status:n}),(0,a.Z)(Z.Z,{status:n,collapsable:!0}),n.media_attachments.size>0&&(0,a.Z)(v.Z,{media:n.media_attachments,sensitive:n.sensitive}),n.poll&&(0,a.Z)(M.Z,{pollId:n.poll}),d.createElement(N,(0,m.Z)({status:n},s))))},j=(0,u.vU)({heading:{id:"column.scheduled_statuses",defaultMessage:"Scheduled Posts"}}),E=i()((function(e){e((0,c.xj)())}),300,{leading:!0}),K=function(){var e=(0,l.Z)(),t=(0,_.TL)(),s=(0,_.CG)((function(e){return e.status_lists.get("scheduled_statuses").items})),n=(0,_.CG)((function(e){return e.status_lists.get("scheduled_statuses").isLoading})),i=(0,_.CG)((function(e){return!!e.status_lists.get("scheduled_statuses").next}));(0,d.useEffect)((function(){t((0,c.fO)())}),[]);var u=(0,a.Z)(o.Z,{id:"empty_column.scheduled_statuses",defaultMessage:"You don't have any scheduled statuses yet. When you add one, it will show up here."});return(0,a.Z)(f.sg,{label:e.formatMessage(j.heading)},void 0,(0,a.Z)(r.Z,{scrollKey:"scheduled_statuses",hasMore:i,isLoading:"boolean"!=typeof n||n,onLoadMore:function(){return E(t)},emptyMessage:u},void 0,s.map((function(e){return(0,a.Z)(U,{statusId:e},e)}))))}}}]);
//# sourceMappingURL=scheduled_statuses-da3f2f6bf6fd5d9a99e5.chunk.js.map