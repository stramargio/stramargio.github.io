"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[35],{1231:function(e,s,a){a.r(s);var n=a(1406),o=a(2125),r=(a(14),a(0),a(17),a(16),a(64),a(6),a(55),a(1)),c=a(2131),t=a(1407),u=a(2126),i=a(215),f=a(2),d=a(3),h=a(34),l=a(761),m="SUCCESS",p="FAIL",b=(0,c.vU)({success:{id:"email_confirmation.success",defaultMessage:"Your email has been confirmed!"}}),w=new URLSearchParams(window.location.search).get("confirmation_token");s.default=function(){var e=(0,t.Z)(),s=(0,d.TL)(),a=r.useState("IDLE"),c=(0,o.Z)(a,2),Z=c[0],k=c[1];return r.useEffect((function(){w&&s((0,i.dw)(w)).then((function(){k(m),h.Z.success(e.formatMessage(b.success))})).catch((function(e){if(k(p),e.response.data.error){var s=(0,l.b)(e.response.data.error);h.Z.error(s)}}))}),[w]),w&&Z!==m&&Z!==p?(0,n.Z)(f.$j,{}):(0,n.Z)(u.l_,{to:"/"})}}}]);
//# sourceMappingURL=email_confirmation-a76c9d863d0c170fce18.chunk.js.map