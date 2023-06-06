"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[16],{1417:function(e,s,i){i.r(s);var o=i(2120),n=(i(34),i(0),i(5),i(1)),r=i(2121),a=i(2122),t=i(2139),d=i(285),u=i(2),v=i(3),f=(0,r.vU)({header:{id:"security.headers.tokens",defaultMessage:"Sessions"},revoke:{id:"security.tokens.revoke",defaultMessage:"Revoke"},revokeSessionHeading:{id:"confirmations.revoke_session.heading",defaultMessage:"Revoke current session"},revokeSessionMessage:{id:"confirmations.revoke_session.message",defaultMessage:"You are about to revoke your current session. You will be signed out."},revokeSessionConfirm:{id:"confirmations.revoke_session.confirm",defaultMessage:"Revoke"}}),g=function(e){var s=e.token,n=e.isCurrent,g=(0,v.TL)(),m=(0,a.Z)();return(0,o.Z)("div",{className:"rounded-lg bg-gray-100 p-4 dark:bg-primary-800"},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.Kq,{},void 0,(0,o.Z)(u.xv,{size:"md",weight:"medium"},void 0,s.app_name),s.valid_until&&(0,o.Z)(u.xv,{size:"sm",theme:"muted"},void 0,(0,o.Z)(r.Ji,{value:s.valid_until,hour12:!0,year:"numeric",month:"short",day:"2-digit",hour:"numeric",minute:"2-digit"}))),(0,o.Z)(u.Ug,{justifyContent:"end"},void 0,(0,o.Z)(u.zx,{theme:n?"danger":"primary",onClick:function(){g(n?(0,t.h7)("CONFIRM",{icon:i(476),heading:m.formatMessage(f.revokeSessionHeading),message:m.formatMessage(f.revokeSessionMessage),confirm:m.formatMessage(f.revokeSessionConfirm),onConfirm:function(){g((0,d._C)(s.id))}}):(0,d._C)(s.id))}},void 0,m.formatMessage(f.revoke)))))};s.default=function(){var e=(0,v.TL)(),s=(0,a.Z)(),i=(0,v.CG)((function(e){return e.security.get("tokens").reverse()})),r=(0,v.CG)((function(e){var s=e.auth.tokens.valueSeq().find((function(s){return s.me===e.auth.me}));return null==s?void 0:s.id}));(0,n.useEffect)((function(){e((0,d.xt)())}),[]);var t=i?(0,o.Z)("div",{className:"grid grid-cols-1 gap-4 sm:grid-cols-2"},void 0,i.map((function(e){return(0,o.Z)(g,{token:e,isCurrent:e.id===r},e.id)}))):(0,o.Z)(u.$j,{});return(0,o.Z)(u.sg,{label:s.formatMessage(f.header),transparent:!0,withHeader:!1},void 0,(0,o.Z)(u.Zb,{variant:"rounded"},void 0,(0,o.Z)(u.Ol,{backHref:"/settings"},void 0,(0,o.Z)(u.ll,{title:s.formatMessage(f.header)})),(0,o.Z)(u.eW,{},void 0,t)))}}}]);
//# sourceMappingURL=auth_token_list-7f57f600c59485f9783f.chunk.js.map