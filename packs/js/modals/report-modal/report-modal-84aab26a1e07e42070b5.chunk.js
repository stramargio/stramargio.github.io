"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[218],{1331:function(e,t,r){r.r(t),r.d(t,{default:function(){return I}});var a,n,o=r(2100),i=r(2120),s=r(2094),d=r(1),u=r(2121),c=r(2122),l=r(2143),f=r(48),g=r(180),m=r(85),p=r(471),v=r(756),h=r(100),Z=r(385),b=r(2),y=r(86),k=r(3),M=r(197),w=(0,u.vU)({accountEntity:{id:"report.confirmation.entity.account",defaultMessage:"account"},groupEntity:{id:"report.confirmation.entity.group",defaultMessage:"group"},title:{id:"report.confirmation.title",defaultMessage:"Thanks for submitting your report."},content:{id:"report.confirmation.content",defaultMessage:"If we find that this {entity} is violating the {link} we will take further action on the matter."}}),T=(0,i.Z)(l.Z,{id:"shared.tos",defaultMessage:"Terms of Service"}),x=function(e){e.account;var t,r=(0,c.Z)(),a=(0,k.CG)((function(e){return(0,M.UX)(e).get("links")})),n=(0,k.CG)((function(e){return e.reports.new.entityType}))===g.JG.GROUP?r.formatMessage(w.groupEntity):r.formatMessage(w.accountEntity);return(0,i.Z)(b.Kq,{space:1},void 0,(0,i.Z)(b.xv,{weight:"semibold",tag:"h1",size:"xl"},void 0,r.formatMessage(w.title)),(0,i.Z)(b.xv,{},void 0,r.formatMessage(w.content,{entity:n,link:a.get("termsOfService")?(t=a.get("termsOfService"),(0,i.Z)("a",{href:t,target:"_blank",className:"text-primary-600 hover:text-primary-800 hover:underline dark:text-accent-blue dark:hover:text-accent-blue"},void 0,T)):T})))},E=(r(5),r(828)),C=r(753),G=(r(28),r(31),r(0),r(12),r(29),r(755)),O=r.n(G),S=r(462),A=r(83),N=function(e){var t,r,a,n=e.id,o=e.disabled,s=(0,k.TL)(),d=(0,k.CG)((function(e){return e.statuses.get(n)})),u=(0,k.CG)((function(e){return e.reports.new.status_ids.includes(n)}));if(!d||d.reblog)return null;if(d.media_attachments.size>0)if(d.media_attachments.some((function(e){return"unknown"===e.type})));else if("video"===(null===(r=d.media_attachments.get(0))||void 0===r?void 0:r.type)){var c=d.media_attachments.get(0);c&&(t=(0,i.Z)(S.Z,{fetchComponent:A.nk},void 0,(function(e){return(0,i.Z)(e,{preview:c.preview_url,blurhash:c.blurhash,src:c.url,alt:c.description,aspectRatio:c.meta.getIn(["original","aspect"]),width:239,height:110,inline:!0,sensitive:d.sensitive,onOpenVideo:O()})})))}else if("audio"===(null===(a=d.media_attachments.get(0))||void 0===a?void 0:a.type)){var l=d.media_attachments.get(0);l&&(t=(0,i.Z)(S.Z,{fetchComponent:A.Bb},void 0,(function(e){return(0,i.Z)(e,{src:l.url,alt:l.description,inline:!0,sensitive:d.sensitive,onOpenAudio:O()})})))}else t=(0,i.Z)(S.Z,{fetchComponent:A.ew},void 0,(function(e){return(0,i.Z)(e,{media:d.media_attachments,sensitive:d.sensitive,height:110,onOpenMedia:O()})}));return(0,i.Z)("div",{className:"status-check-box"},void 0,(0,i.Z)("div",{className:"status-check-box__status"},void 0,(0,i.Z)(Z.Z,{status:d}),t),(0,i.Z)("div",{className:"status-check-box-toggle"},void 0,(0,i.Z)(b.ZD,{checked:u,onChange:function(e){return s((0,g.cm)(n,e.target.checked))},disabled:o})))},_=r(136),R=(0,u.vU)({addAdditionalStatuses:{id:"report.otherActions.addAdditional",defaultMessage:"Would you like to add additional statuses to this report?"},addMore:{id:"report.otherActions.addMore",defaultMessage:"Add more"},furtherActions:{id:"report.otherActions.furtherActions",defaultMessage:"Further actions:"},hideAdditonalStatuses:{id:"report.otherActions.hideAdditional",defaultMessage:"Hide additional statuses"},otherStatuses:{id:"report.otherActions.otherStatuses",defaultMessage:"Include other statuses?"}}),H=function(e){var t=e.account,a=(0,k.TL)(),n=(0,k.hz)(),s=(0,c.Z)(),u=(0,k.CG)((function(e){return(0,E.OrderedSet)(e.timelines.get("account:".concat(t.id,":with_replies")).items).union(e.reports.new.status_ids)})),f=(0,k.CG)((function(e){return e.reports.new.block})),m=(0,k.CG)((function(e){return e.reports.new.forward})),p=(0,_.Q1)(t)&&n.federating,v=(0,k.CG)((function(e){return e.reports.new.isSubmitting})),h=(0,d.useState)(!1),Z=(0,o.Z)(h,2),y=Z[0],M=Z[1];return(0,d.useEffect)((function(){a((0,C.j)())}),[]),(0,i.Z)(b.Kq,{space:4},void 0,n.reportMultipleStatuses&&(0,i.Z)(b.Kq,{space:2},void 0,(0,i.Z)(b.xv,{tag:"h1",size:"xl",weight:"semibold"},void 0,s.formatMessage(R.otherStatuses)),(0,i.Z)(b.cw,{labelText:s.formatMessage(R.addAdditionalStatuses)},void 0,y?(0,i.Z)(b.Kq,{space:2},void 0,(0,i.Z)("div",{className:"divide-y divide-solid divide-gray-200 dark:divide-gray-800"},void 0,u.map((function(e){return(0,i.Z)(N,{id:e},e)}))),(0,i.Z)("div",{},void 0,(0,i.Z)(b.zx,{icon:r(757),theme:"tertiary",size:"sm",onClick:function(){return M(!1)}},void 0,s.formatMessage(R.hideAdditonalStatuses)))):(0,i.Z)(b.zx,{icon:r(179),theme:"tertiary",size:"sm",onClick:function(){return M(!0)}},void 0,s.formatMessage(R.addMore)))),(0,i.Z)(b.Kq,{space:2},void 0,(0,i.Z)(b.xv,{tag:"h1",size:"xl",weight:"semibold"},void 0,s.formatMessage(R.furtherActions)),(0,i.Z)(b.cw,{labelText:(0,i.Z)(l.Z,{id:"report.block_hint",defaultMessage:"Do you also want to block this account?"})},void 0,(0,i.Z)(b.Ug,{space:2,alignItems:"center"},void 0,(0,i.Z)(b.ZD,{checked:f,onChange:function(e){a((0,g.LG)(e.target.checked))},id:"report-block"}),(0,i.Z)(b.xv,{theme:"muted",tag:"label",size:"sm",htmlFor:"report-block"},void 0,(0,i.Z)(l.Z,{id:"report.block",defaultMessage:"Block {target}",values:{target:"@".concat(t.get("acct"))}})))),p&&(0,i.Z)(b.cw,{labelText:(0,i.Z)(l.Z,{id:"report.forward_hint",defaultMessage:"The account is from another server. Send a copy of the report there as well?"})},void 0,(0,i.Z)(b.Ug,{space:2,alignItems:"center"},void 0,(0,i.Z)(b.ZD,{checked:m,onChange:function(e){a((0,g.$p)(e.target.checked))},id:"report-forward",disabled:v}),(0,i.Z)(b.xv,{theme:"muted",tag:"label",size:"sm",htmlFor:"report-forward"},void 0,(0,i.Z)(l.Z,{id:"report.forward",defaultMessage:"Forward to {target}",values:{target:(0,_.ge)(t)}}))))))},U=(r(9),r(663)),z=(0,u.vU)({placeholder:{id:"report.placeholder",defaultMessage:"Additional comments"},reasonForReporting:{id:"report.reason.title",defaultMessage:"Reason for reporting"}}),J=function(e){var t=(0,k.TL)(),r=(0,c.Z)(),a=(0,d.useRef)(null),n=(0,d.useState)(!1),s=(0,o.Z)(n,2),u=s[0],l=s[1],f=(0,d.useState)(!0),m=(0,o.Z)(f,2),p=m[0],v=m[1],h=(0,k.CG)((function(e){return e.reports.new.entityType})),Z=(0,k.CG)((function(e){return e.reports.new.comment})),y=(0,k.CG)((function(e){return e.rules.items})),M=(0,k.CG)((function(e){return e.reports.new.rule_ids})),w=y.length>0;return(0,d.useEffect)((function(){t((0,C.j)())}),[]),(0,d.useEffect)((function(){y.length>0&&a.current&&a.current.clientHeight<=385&&l(!0)}),[y,a.current]),(0,i.Z)(b.Kq,{space:4},void 0,w&&(0,i.Z)(b.Kq,{space:2},void 0,(0,i.Z)(b.xv,{size:"xl",weight:"semibold",tag:"h1"},void 0,r.formatMessage(z.reasonForReporting)),(0,i.Z)("div",{className:"relative"},void 0,d.createElement("div",{style:{maxHeight:385},className:"-space-y-px overflow-y-auto rounded-lg",onScroll:function(){if(a.current){var e=a.current,t=e.scrollTop,r=e.scrollHeight,n=e.clientHeight;l(t+n>r-24),v(t<24)}},ref:a},y.filter((function(e){var t="content";switch(h){case g.JG.ACCOUNT:t="account";break;case g.JG.STATUS:case g.JG.CHAT_MESSAGE:t="content";break;case g.JG.GROUP:t="group";break;default:t="content"}return!e.rule_type||e.rule_type===t})).map((function(e,r){var a=M.includes(String(e.id));return(0,i.Z)("button",{"data-testid":"rule-".concat(e.id),onClick:function(){return t((0,g.Nr)(e.id))},className:(0,U.default)({"relative border border-solid border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-primary-800/30 text-start w-full p-4 flex justify-between items-center cursor-pointer":!0,"rounded-tl-lg rounded-tr-lg":0===r,"rounded-bl-lg rounded-br-lg":r===y.length-1,"bg-gray-200 hover:bg-gray-200 dark:bg-primary-800/50":a})},r,(0,i.Z)(b.Kq,{className:"mr-3"},void 0,(0,i.Z)(b.xv,{tag:"span",size:"sm",weight:"medium",theme:a?"primary":"default"},void 0,e.text),(0,i.Z)(b.xv,{tag:"span",theme:"muted",size:"sm"},void 0,e.subtext)),(0,i.Z)("input",{name:"reason",type:"checkbox",value:e.id,checked:a,readOnly:!0,className:"h-4 w-4 rounded border-2 border-gray-300 text-primary-600 checked:bg-primary-500 focus:ring-primary-500 dark:border-gray-800 dark:bg-gray-900 dark:checked:bg-primary-500 dark:focus:ring-primary-500"}))}))),(0,i.Z)("div",{className:(0,U.default)("pointer-events-none absolute inset-x-0 top-0 flex justify-center rounded-t-lg bg-gradient-to-b from-white pb-12 pt-8 transition-opacity duration-500 dark:from-gray-900",{"opacity-0":p,"opacity-100":!p})}),(0,i.Z)("div",{className:(0,U.default)("pointer-events-none absolute inset-x-0 bottom-0 flex justify-center rounded-b-lg bg-gradient-to-t from-white pb-8 pt-12 transition-opacity duration-500 dark:from-gray-900",{"opacity-0":u,"opacity-100":!u})}))),(0,i.Z)(b.cw,{labelText:r.formatMessage(z.placeholder)},void 0,(0,i.Z)(b.gx,{placeholder:r.formatMessage(z.placeholder),value:Z,onChange:function(e){t((0,g.Ck)(e.target.value))}})))},q=(0,u.vU)({blankslate:{id:"report.reason.blankslate",defaultMessage:"You have removed all statuses from being selected."},done:{id:"report.done",defaultMessage:"Done"},next:{id:"report.next",defaultMessage:"Next"},submit:{id:"report.submit",defaultMessage:"Submit"},reportContext:{id:"report.chatMessage.context",defaultMessage:"When reporting a user’s message, the five messages before and five messages after the one selected will be passed along to our moderation team for context."},reportMessage:{id:"report.chatMessage.title",defaultMessage:"Report message"},reportGroup:{id:"report.group.title",defaultMessage:"Report Group"},cancel:{id:"common.cancel",defaultMessage:"Cancel"},previous:{id:"report.previous",defaultMessage:"Previous"}});!function(e){e.ONE="ONE",e.TWO="TWO",e.THREE="THREE"}(n||(n={}));var W=(a={},(0,s.Z)(a,g.JG.ACCOUNT,{ONE:J,TWO:H,THREE:x}),(0,s.Z)(a,g.JG.CHAT_MESSAGE,{ONE:J,TWO:H,THREE:x}),(0,s.Z)(a,g.JG.STATUS,{ONE:J,TWO:H,THREE:x}),(0,s.Z)(a,g.JG.GROUP,{ONE:J,TWO:null,THREE:x}),a),K=function(e){var t=e.statusId,r=(0,k.CG)((function(e){return e.statuses.get(t)}));return r?(0,i.Z)(b.Kq,{space:2,className:"rounded-lg bg-gray-100 p-4 dark:bg-gray-800"},void 0,(0,i.Z)(y.Z,{id:r.account,showProfileHoverCard:!1,withLinkToProfile:!1,timestamp:r.created_at,hideActions:!0}),(0,i.Z)(Z.Z,{status:r,collapsable:!0}),r.media_attachments.size>0&&(0,i.Z)(p.Z,{media:r.media_attachments,sensitive:r.sensitive})):null},I=function(e){var t=e.onClose,a=(0,k.TL)(),s=(0,c.Z)(),u=(0,k.CG)((function(e){return e.reports.new.account_id})),p=(0,k.mA)(u),Z=(0,k.CG)((function(e){return e.reports.new.entityType})),y=(0,k.CG)((function(e){return e.reports.new.block})),M=(0,k.CG)((function(e){return e.reports.new.isSubmitting})),w=(0,k.CG)((function(e){return e.rules.items})),T=(0,k.CG)((function(e){return e.reports.new.rule_ids})),x=(0,k.CG)((function(e){return e.reports.new.status_ids})),E=(0,k.CG)((function(e){return e.reports.new.chat_message})),C=(0,k.CG)((function(e){return e.reports.new.group})),G=w.length>0,O=Z===g.JG.ACCOUNT,S=Z===g.JG.STATUS,A=Z===g.JG.GROUP,N=(0,d.useState)(n.ONE),_=(0,o.Z)(N,2),R=_[0],H=_[1],U=function(){a((0,g.ZD)()).then((function(){return H(n.THREE)})).catch((function(e){return a((0,g.rC)(e))})),y&&p&&a((0,f.Gy_)(p.id))},z=(0,d.useCallback)((function(){return 0===x.size?(0,i.Z)("div",{className:"flex w-full items-center justify-center rounded-lg bg-gray-100 p-4 dark:bg-gray-800"},void 0,(0,i.Z)(b.xv,{theme:"muted"},void 0,s.formatMessage(q.blankslate))):(0,i.Z)(K,{statusId:x.first()})}),[x.size]),J=(0,d.useMemo)((function(){return R===n.ONE?s.formatMessage(q.cancel):s.formatMessage(q.previous)}),[R]),I=(0,d.useMemo)((function(){switch(R){case n.ONE:return A?s.formatMessage(q.submit):s.formatMessage(q.next);case n.TWO:return A?s.formatMessage(q.done):s.formatMessage(q.submit);case n.THREE:return s.formatMessage(q.done);default:return s.formatMessage(q.next)}}),[R,A]),P=(0,d.useMemo)((function(){return R!==n.THREE&&(M||G&&T.isEmpty()||S&&0===x.size)}),[R,M,G,T,x.size,S]),D=(0,d.useCallback)((function(){switch(R){case n.ONE:return.33;case n.TWO:return.66;case n.THREE:return 1;default:return 0}}),[R]);if((0,d.useEffect)((function(){null!=p&&p.id&&a((0,m.Cn)(p.id,{withReplies:!0,maxId:null}))}),[null==p?void 0:p.id]),!p)return null;var F=W[Z][R];return(0,i.Z)(b.u_,{title:function(){switch(Z){case g.JG.CHAT_MESSAGE:return s.formatMessage(q.reportMessage);case g.JG.GROUP:return s.formatMessage(q.reportGroup);default:return(0,i.Z)(l.Z,{id:"report.target",defaultMessage:"Reporting {target}",values:{target:(0,i.Z)("strong",{},void 0,"@",null==p?void 0:p.acct)}})}}(),onClose:t,cancelText:J,cancelAction:R===n.THREE?void 0:function(){switch(R){case n.ONE:t();break;case n.TWO:H(n.ONE)}},confirmationAction:function(){switch(R){case n.ONE:A?U():H(n.TWO);break;case n.TWO:A?(a((0,g.rq)()),t()):U();break;case n.THREE:a((0,g.rq)()),t()}},confirmationText:I,confirmationDisabled:P,skipFocus:!0},void 0,(0,i.Z)(b.Kq,{space:4},void 0,(0,i.Z)(b.ko,{progress:D()}),R!==n.THREE&&!O&&function(){switch(Z){case g.JG.STATUS:return z();case g.JG.CHAT_MESSAGE:return function(){if(p)return(0,i.Z)(b.Kq,{space:4},void 0,(0,i.Z)(b.Ug,{alignItems:"center",space:4,className:"rounded-md border border-solid border-gray-400 p-4 dark:border-2 dark:border-gray-800"},void 0,(0,i.Z)("div",{},void 0,(0,i.Z)(b.qE,{src:p.avatar,className:"h-8 w-8"})),(0,i.Z)("div",{className:"grow rounded-md bg-gray-200 p-4 dark:bg-primary-800"},void 0,(0,i.Z)(b.xv,{dangerouslySetInnerHTML:{__html:null==E?void 0:E.content}}))),(0,i.Z)(h.Z,{},void 0,(0,i.Z)(h.H,{label:(0,i.Z)(b.JO,{src:r(461),className:"text-gray-600"})},void 0,(0,i.Z)(b.xv,{size:"sm"},void 0,s.formatMessage(q.reportContext)))))}();case g.JG.GROUP:return R===n.TWO?null:function(){if(C)return(0,i.Z)(v.Z,{group:C})}();default:return null}}(),F&&(0,i.Z)(F,{account:p})))}}}]);
//# sourceMappingURL=report-modal-84aab26a1e07e42070b5.chunk.js.map