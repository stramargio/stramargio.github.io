"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[75],{1316:function(e,t,a){a.r(t);var s=a(2095),r=a(2120),o=a(2110),n=a(2100),i=(a(8),a(40),a(82)),l=a.n(i),u=a(1),d=a(2121),c=a(2122),f=a(2103),g=a(95),p=a(148),m=a(388),h=a(2),M=a(298),v=a(3),w=a(41),Z=a(1006),b=(0,d.vU)({title:{id:"status.title",defaultMessage:"Post Details"},titleDirect:{id:"status.title_direct",defaultMessage:"Direct message"},deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteHeading:{id:"confirmations.delete.heading",defaultMessage:"Delete post"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this post?"},redraftConfirm:{id:"confirmations.redraft.confirm",defaultMessage:"Delete & redraft"},redraftHeading:{id:"confirmations.redraft.heading",defaultMessage:"Delete & redraft"},redraftMessage:{id:"confirmations.redraft.message",defaultMessage:"Are you sure you want to delete this post and re-draft it? Favorites and reposts will be lost, and replies to the original post will be orphaned."},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},revealAll:{id:"status.show_more_all",defaultMessage:"Show more for all"},hideAll:{id:"status.show_less_all",defaultMessage:"Show less for all"},detailedStatus:{id:"status.detailed_status",defaultMessage:"Detailed conversation view"},replyConfirm:{id:"confirmations.reply.confirm",defaultMessage:"Reply"},replyMessage:{id:"confirmations.reply.message",defaultMessage:"Replying now will overwrite the message you are currently composing. Are you sure you want to proceed?"},blockAndReport:{id:"confirmations.block.block_and_report",defaultMessage:"Block & Report"}});t.default=function(e){var t=(0,v.TL)(),a=(0,c.Z)(),i=(0,u.useCallback)((0,w.TE)(),[]),d=(0,v.CG)((function(t){return i(t,{id:e.params.statusId})})),y=(0,u.useState)(!!d),k=(0,n.Z)(y,2),_=k[0],C=k[1],D=(0,u.useState)(),x=(0,n.Z)(D,2),A=x[0],R=x[1],S=function(){var a=(0,o.Z)(regeneratorRuntime.mark((function a(){var s,r,o,n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=e.params,r=s.statusId,a.next=4,t((0,g.wE)(r));case 4:o=a.sent,n=o.next,R(n);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();(0,u.useEffect)((function(){S().then((function(){C(!0)})).catch((function(){C(!0)}))}),[e.params.statusId]);var I=(0,u.useCallback)(l()((function(){A&&d&&t((0,g.TA)(d.id,A)).then((function(e){var t=e.next;R(t)})).catch((function(){}))}),300,{leading:!0}),[A,d]);return null!=d&&d.event?(0,r.Z)(f.l_,{to:"/@".concat(d.getIn(["account","acct"]),"/events/").concat(d.id)}):!d&&_?(0,r.Z)(p.Z,{}):d?d.group&&"object"===(0,s.Z)(d.group)&&d.group.slug&&!e.params.groupSlug?(0,r.Z)(f.l_,{to:"/group/".concat(d.group.slug,"/posts/").concat(e.params.statusId)}):(0,r.Z)(h.sg,{label:a.formatMessage("direct"===d.visibility?b.titleDirect:b.title)},void 0,(0,r.Z)(m.Z,{onRefresh:function(){return S()}},void 0,(0,r.Z)(Z.Z,{status:d,next:A,handleLoadMore:I}))):(0,r.Z)(h.sg,{},void 0,(0,r.Z)(M.Z,{}))}}}]);
//# sourceMappingURL=status-f2fba89587b28e394970.chunk.js.map