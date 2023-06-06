"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[27],{1366:function(e,t,a){a.r(t);var s=a(2120),l=a(2100),o=(a(0),a(24),a(222),a(1)),c=a(2121),d=a(2122),u=a(285),n=a(2),i=a(3),r=a(35),f=(0,c.vU)({passwordFieldLabel:{id:"security.fields.password.label",defaultMessage:"Password"},deleteHeader:{id:"security.headers.delete",defaultMessage:"Delete Account"},deleteText:{id:"security.text.delete",defaultMessage:"To delete your account, enter your password then click Delete Account. This is a permanent action that cannot be undone. Your account will be destroyed from this server, and a deletion request will be sent to other servers. It's not guaranteed that all servers will purge your account."},localDeleteText:{id:"security.text.delete.local",defaultMessage:"To delete your account, enter your password then click Delete Account. This is a permanent action that cannot be undone."},deleteSubmit:{id:"security.submit.delete",defaultMessage:"Delete Account"},deleteAccountSuccess:{id:"security.delete_account.success",defaultMessage:"Account successfully deleted."},deleteAccountFail:{id:"security.delete_account.fail",defaultMessage:"Account deletion failed."}});t.default=function(){var e=(0,d.Z)(),t=(0,i.TL)(),a=(0,i.hz)(),c=o.useState(""),b=(0,l.Z)(c,2),g=b[0],h=b[1],m=o.useState(!1),p=(0,l.Z)(m,2),v=p[0],y=p[1],Z=o.useCallback((function(e){e.persist(),h(e.target.value)}),[]),w=o.useCallback((function(){y(!0),t((0,u.tm)(g)).then((function(){h(""),r.Z.success(e.formatMessage(f.deleteAccountSuccess))})).finally((function(){y(!1)})).catch((function(){h(""),r.Z.error(e.formatMessage(f.deleteAccountFail))}))}),[g,t,e]);return(0,s.Z)(n.Zb,{variant:"rounded"},void 0,(0,s.Z)(n.Ol,{backHref:"/settings"},void 0,(0,s.Z)(n.ll,{title:e.formatMessage(f.deleteHeader)})),(0,s.Z)(n.eW,{},void 0,(0,s.Z)(n.Kq,{space:4},void 0,(0,s.Z)(n.xv,{theme:"muted"},void 0,e.formatMessage(a.federating?f.deleteText:f.localDeleteText)),(0,s.Z)(n.l0,{onSubmit:w},void 0,(0,s.Z)(n.cw,{labelText:e.formatMessage(f.passwordFieldLabel)},void 0,(0,s.Z)(n.II,{type:"password",name:"password",onChange:Z,value:g})),(0,s.Z)(n.iN,{},void 0,(0,s.Z)(n.zx,{type:"submit",theme:"danger",disabled:v},void 0,e.formatMessage(f.deleteSubmit)))))))}}}]);
//# sourceMappingURL=delete_account-d71f3dc6879cc6b34167.chunk.js.map