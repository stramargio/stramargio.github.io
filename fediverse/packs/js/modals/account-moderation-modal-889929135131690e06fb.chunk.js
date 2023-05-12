"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[210],{1100:function(e,a,o){o.r(a),o.d(a,{default:function(){return D}});var s=o(1565),d=o(2126),t=o(1),n=o(2132),r=o(1566),i=o(1578),c=o(95),u=o(432),m=o(138),l=o(100),g=o(149),f=o(891),Z=o(2),_=o(3),v=o(42),M=o(34),h=o(137),p=o(579),b=(o(5),(0,n.vU)({placeholder:{id:"badge_input.placeholder",defaultMessage:"Enter a badge…"}})),C=function(e){var a=e.badges,o=e.onChange,d=(0,r.Z)(),t=a.map(p.h2);return(0,s.Z)(Z.EG,{tags:t,onChange:function(e){var a=e.map(p.JI);o(a)},placeholder:d.formatMessage(b.placeholder)})},w=o(588),T=(0,n.vU)({roleUser:{id:"account_moderation_modal.roles.user",defaultMessage:"User"},roleModerator:{id:"account_moderation_modal.roles.moderator",defaultMessage:"Moderator"},roleAdmin:{id:"account_moderation_modal.roles.admin",defaultMessage:"Admin"},promotedToAdmin:{id:"admin.users.actions.promote_to_admin_message",defaultMessage:"@{acct} was promoted to an admin"},promotedToModerator:{id:"admin.users.actions.promote_to_moderator_message",defaultMessage:"@{acct} was promoted to a moderator"},demotedToModerator:{id:"admin.users.actions.demote_to_moderator_message",defaultMessage:"@{acct} was demoted to a moderator"},demotedToUser:{id:"admin.users.actions.demote_to_user_message",defaultMessage:"@{acct} was demoted to a regular user"}}),U=function(e){var a=e.account,o=(0,r.Z)(),d=(0,_.TL)(),n=(0,t.useMemo)((function(){return{user:o.formatMessage(T.roleUser),moderator:o.formatMessage(T.roleModerator),admin:o.formatMessage(T.roleAdmin)}}),[]),i=function(e){return e.admin?"admin":e.moderator?"moderator":"user"}(a);return(0,s.Z)(w.Fj,{items:n,defaultValue:i,onChange:function(e){var s=e.target.value;d((0,c.gD)(a.id,s)).then((function(){var e;"admin"===s?e=T.promotedToAdmin:"moderator"===s&&a.admin?e=T.demotedToModerator:"moderator"===s?e=T.promotedToModerator:"user"===s&&(e=T.demotedToUser),e&&M.Z.success(o.formatMessage(e,{acct:a.acct}))})).catch((function(){}))}})},k=(0,v.Tm)(),A=(0,n.vU)({userVerified:{id:"admin.users.user_verified_message",defaultMessage:"@{acct} was verified"},userUnverified:{id:"admin.users.user_unverified_message",defaultMessage:"@{acct} was unverified"},setDonorSuccess:{id:"admin.users.set_donor_message",defaultMessage:"@{acct} was set as a donor"},removeDonorSuccess:{id:"admin.users.remove_donor_message",defaultMessage:"@{acct} was removed as a donor"},userSuggested:{id:"admin.users.user_suggested_message",defaultMessage:"@{acct} was suggested"},userUnsuggested:{id:"admin.users.user_unsuggested_message",defaultMessage:"@{acct} was unsuggested"},badgesSaved:{id:"admin.users.badges_saved_message",defaultMessage:"Custom badges updated."}}),D=function(e){var a=e.onClose,n=e.accountId,v=(0,r.Z)(),b=(0,_.TL)(),w=(0,_.Tr)(),T=(0,_.hz)(),D=(0,_.CG)((function(e){return k(e,n)})),S=D?(0,p.ro)(D):[],x=(0,t.useState)(S),H=(0,d.Z)(x,2),I=H[0],z=H[1],E=function(){return a("ACCOUNT_MODERATION")};return D&&w?(0,s.Z)(Z.u_,{title:(0,s.Z)(i.Z,{id:"account_moderation_modal.title",defaultMessage:"Moderate @{acct}",values:{acct:D.acct}}),onClose:E},void 0,(0,s.Z)(Z.Kq,{space:4},void 0,(0,s.Z)(f.Z,{},void 0,(0,s.Z)(m.Z,{account:D,showProfileHoverCard:!1,withLinkToProfile:!1,hideActions:!0})),(0,s.Z)(l.Z,{},void 0,w.admin&&(0,h.D0)(D)&&(0,s.Z)(l.H,{label:(0,s.Z)(i.Z,{id:"account_moderation_modal.fields.account_role",defaultMessage:"Staff level"})},void 0,(0,s.Z)("div",{className:"w-auto"},void 0,(0,s.Z)(U,{account:D}))),(0,s.Z)(l.H,{label:(0,s.Z)(i.Z,{id:"account_moderation_modal.fields.verified",defaultMessage:"Verified account"})},void 0,(0,s.Z)(Z.ZD,{checked:D.verified,onChange:function(e){var a=e.target.checked,o=a?A.userVerified:A.userUnverified,s=a?c.A9:c.qx;b(s(D.id)).then((function(){return M.Z.success(v.formatMessage(o,{acct:D.acct}))})).catch((function(){}))}})),T.suggestionsV2&&(0,s.Z)(l.H,{label:(0,s.Z)(i.Z,{id:"account_moderation_modal.fields.suggested",defaultMessage:"Suggested in people to follow"})},void 0,(0,s.Z)(Z.ZD,{checked:!0===D.getIn(["pleroma","is_suggested"]),onChange:function(e){var a=e.target.checked,o=a?A.userSuggested:A.userUnsuggested,s=a?c.Gy:c.g1;b(s([D.id])).then((function(){return M.Z.success(v.formatMessage(o,{acct:D.acct}))})).catch((function(){}))}})),(0,s.Z)(l.H,{label:(0,s.Z)(i.Z,{id:"account_moderation_modal.fields.badges",defaultMessage:"Custom badges"})},void 0,(0,s.Z)("div",{className:"grow"},void 0,(0,s.Z)(Z.Ug,{className:"w-full",alignItems:"center",space:2},void 0,(0,s.Z)(C,{badges:I,onChange:z}),(0,s.Z)(Z.zx,{onClick:function(){b((0,c.TW)(D.id,S,I)).then((function(){return M.Z.success(v.formatMessage(A.badgesSaved))})).catch((function(){}))}},void 0,(0,s.Z)(i.Z,{id:"save",defaultMessage:"Save"})))))),(0,s.Z)(l.Z,{},void 0,(0,s.Z)(l.H,{label:(0,s.Z)(i.Z,{id:"account_moderation_modal.fields.deactivate",defaultMessage:"Deactivate account"}),onClick:function(){b((0,u.yM)(v,D.id))}}),(0,s.Z)(l.H,{label:(0,s.Z)(i.Z,{id:"account_moderation_modal.fields.delete",defaultMessage:"Delete account"}),onClick:function(){b((0,u.rx)(v,D.id))}})),(0,s.Z)(Z.xv,{theme:"subtle",size:"xs"},void 0,(0,s.Z)(i.Z,{id:"account_moderation_modal.info.id",defaultMessage:"ID: {id}",values:{id:D.id}})),T.adminFE&&(0,s.Z)(Z.Ug,{justifyContent:"center"},void 0,(0,s.Z)(Z.zx,{icon:o(273),size:"sm",theme:"secondary",onClick:function(){window.open("/pleroma/admin/#/users/".concat(D.id,"/"),"_blank")}},void 0,(0,s.Z)(i.Z,{id:"account_moderation_modal.admin_fe",defaultMessage:"Open in AdminFE"}))))):(0,s.Z)(Z.u_,{onClose:E},void 0,(0,s.Z)(g.Z,{}))}}}]);
//# sourceMappingURL=account-moderation-modal-889929135131690e06fb.chunk.js.map