(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[6],{1374:function(e,t,n){"use strict";n.r(t);var a=n(1565),i=n(2126),o=n(1),r=n(1578),s=n(2127),c=n(48),l=n(676),d=n(84),u=n(149),m=n(478),f=n(2),Z=n(3),v=n(42),g=(0,v.$r)();t.default=function(e){var t=e.params,n=e.withReplies,p=void 0!==n&&n,h=(0,s.k6)(),_=(0,Z.TL)(),y=(0,Z.hz)(),w=(0,Z.rV)(),x=(0,Z.Dn)(),b=(0,Z.CG)((function(e){return(0,v.XO)(e,t.username)})),k=(0,o.useState)(!b),M=(0,i.Z)(k,2),I=M[0],U=M[1],z=p?"".concat(null==b?void 0:b.id,":with_replies"):null==b?void 0:b.id,C=!0===w.getIn(["account_timeline","shows","pinned"])&&!p,L=(0,Z.CG)((function(e){return g(e,{type:"account:".concat(z),prefix:"account_timeline"})})),N=(0,Z.CG)((function(e){return g(e,{type:"account:".concat(null==b?void 0:b.id,":pinned"),prefix:"account_timeline"})})),O=(0,Z.CG)((function(e){return!0===e.relationships.getIn([null==b?void 0:b.id,"blocked_by"])})),D=O&&!y.blockersVisible,T=!0===x.getIn(["extensions","patron","enabled"]),G=(0,Z.CG)((function(e){return!0===e.getIn(["timelines","account:".concat(z),"isLoading"])})),S=(0,Z.CG)((function(e){return!0===e.getIn(["timelines","account:".concat(z),"hasMore"])})),q=(null==b?void 0:b.username)||t.username;return(0,o.useEffect)((function(){_((0,c.ULQ)(t.username,h)).then((function(){return U(!1)})).catch((function(){return U(!1)}))}),[t.username]),(0,o.useEffect)((function(){b&&!p&&_((0,d.hj)(b.id))}),[null==b?void 0:b.id,p]),(0,o.useEffect)((function(){b&&T&&_((0,l.wp)(b.url))}),[null==b?void 0:b.url,T]),(0,o.useEffect)((function(){b&&_((0,d.Cn)(b.id,{withReplies:p}))}),[null==b?void 0:b.id,p]),!b&&I?(0,a.Z)(f.$j,{}):b?D?(0,a.Z)(f.Zb,{},void 0,(0,a.Z)(f.eW,{},void 0,(0,a.Z)(f.xv,{align:"center"},void 0,O?(0,a.Z)(r.Z,{id:"empty_column.account_blocked",defaultMessage:"You are blocked by @{accountUsername}.",values:{accountUsername:q}}):(0,a.Z)(r.Z,{id:"empty_column.account_unavailable",defaultMessage:"Profile unavailable"})))):(0,a.Z)(m.Z,{scrollKey:"account_timeline",statusIds:L,featuredStatusIds:C?N:void 0,isLoading:G,hasMore:S,onLoadMore:function(e){b&&_((0,d.Cn)(b.id,{maxId:e,withReplies:p}))},emptyMessage:(0,a.Z)(r.Z,{id:"empty_column.account_timeline",defaultMessage:"No posts here!"})}):(0,a.Z)(u.Z,{nested:!0})}},1517:function(e,t,n){"use strict";var a=n(1565),i=(n(6),n(37),n(641)),o=n(2132),r=n(1566),s=n(430),c=n(2),l=n(94),d=n(82),u=function(e){return(e.match(/\$([a-zA-Z]*)/i)||[])[1]},m=(0,o.vU)({linkVerifiedOn:{id:"account.link_verified_on",defaultMessage:"Ownership of this link was checked on {date}"}}),f={month:"short",day:"numeric",year:"numeric",hour12:!0,hour:"numeric",minute:"2-digit"};t.Z=function(e){var t,o=e.field,Z=(0,r.Z)();return t=o.name,Boolean(u(t))?(0,a.Z)(l.Z,{fetchComponent:d.UE},void 0,(function(e){return(0,a.Z)(e,{ticker:u(o.name).toLowerCase(),address:o.value_plain})})):(0,a.Z)("dl",{},void 0,(0,a.Z)("dt",{title:o.name},void 0,(0,a.Z)(s.Z,{weight:"bold",tag:"span",dangerouslySetInnerHTML:{__html:o.name_emojified}})),(0,a.Z)("dd",{className:(0,i.default)({"text-success-500":o.verified_at}),title:o.value_plain},void 0,(0,a.Z)(c.Ug,{space:2,alignItems:"center"},void 0,o.verified_at&&(0,a.Z)("span",{className:"flex-none",title:Z.formatMessage(m.linkVerifiedOn,{date:Z.formatDate(o.verified_at,f)})},void 0,(0,a.Z)(c.JO,{src:n(204)})),(0,a.Z)(s.Z,{className:"overflow-hidden break-words",tag:"span",dangerouslySetInnerHTML:{__html:o.value_emojified}}))))}},1593:function(e,t,n){"use strict";n.r(t);var a=n(1565),i=(n(5),n(1578)),o=n(2),r=n(1517);t.default=function(e){var t=e.account;return(0,a.Z)(o.$L,{title:(0,a.Z)(i.Z,{id:"profile_fields_panel.title",defaultMessage:"Profile fields"})},void 0,(0,a.Z)(o.Kq,{space:4},void 0,t.fields.map((function(e,t){return(0,a.Z)(r.Z,{field:e},t)}))))}},1162:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return U}});var a=n(2125),i=n(1565),o=(n(14),n(0),n(17),n(16),n(91),n(64),n(28),n(5),n(4),n(8),n(2132)),r=n(1566),s=n(1578),c=n(494),l=n(430),d=n(2),u=n(3),m=n(137),f=n(579),Z=n(648),v=(n(15),n(24),n(831)),g=n(1),p=n(2141),h=n(995),_=n(1575),y=n(492),w=n(172),x=(0,n(42).Tm)(),b=function(e){var t=e.account,n=(0,u.TL)(),a=(0,u.CG)((function(e){return e.me})),r=(0,u.hz)(),c=(0,u.CG)((function(e){var n;return(null===(n=e.user_lists.familiar_followers.get(t.id))||void 0===n?void 0:n.items)||(0,v.OrderedSet)()})),l=(0,u.CG)((function(e){return c.slice(0,2).map((function(t){return x(e,t)}))}));if((0,g.useEffect)((function(){a&&r.familiarFollowers&&n((0,h.ne)(t.id))}),[]),0===c.size)return null;var m=l.map((function(e){return!!e&&(0,i.Z)(y.ZP,{accountId:e.id,inline:!0},void 0,(0,i.Z)(p.rU,{className:"mention",to:"/@".concat(e.acct)},void 0,(0,i.Z)("span",{dangerouslySetInnerHTML:{__html:e.display_name_html}}),e.verified&&(0,i.Z)(w.Z,{})))})).toArray();return c.size>2&&m.push((0,i.Z)("span",{className:"cursor-pointer hover:underline",role:"presentation",onClick:function(){n((0,_.h7)("FAMILIAR_FOLLOWERS",{accountId:t.id}))}},void 0,(0,i.Z)(s.Z,{id:"account.familiar_followers.more",defaultMessage:"{count, plural, one {# other} other {# others}} you follow",values:{count:c.size-l.size}}))),(0,i.Z)(d.xv,{theme:"muted",size:"sm"},void 0,(0,i.Z)(s.Z,{id:"account.familiar_followers",defaultMessage:"Followed by {accounts}",values:{accounts:(0,i.Z)(o.yX,{type:"conjunction",value:m})}}))},k=n(1517),M=n(1234),I=(0,o.vU)({linkVerifiedOn:{id:"account.link_verified_on",defaultMessage:"Ownership of this link was checked on {date}"},account_locked:{id:"account.locked_info",defaultMessage:"This account privacy status is set to locked. The owner manually reviews who can follow them."},deactivated:{id:"account.deactivated",defaultMessage:"Deactivated"},bot:{id:"account.badges.bot",defaultMessage:"Bot"}}),U=function(e){var t=e.account,o=e.username,v=(0,r.Z)(),g=(0,u.Dn)().displayFqn;if(!t)return(0,i.Z)("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,(0,i.Z)(d.Kq,{space:2},void 0,(0,i.Z)(d.Kq,{},void 0,(0,i.Z)(d.Ug,{space:1,alignItems:"center"},void 0,(0,i.Z)(d.xv,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",o)))));var p={__html:t.note_emojified},h=1==!t.pleroma.get("is_active",!0)?{__html:v.formatMessage(I.deactivated)}:{__html:t.display_name_html},_=v.formatDate(t.created_at,{month:"long",year:"numeric"}),y=function(){var e=(0,f.ro)(t).map((function(e){return(0,i.Z)(c.Z,{slug:e,title:(0,Z.k)((0,f.h2)(e))},e)})),n=null!=t&&t.admin?(0,i.Z)(c.Z,{slug:"admin",title:(0,i.Z)(s.Z,{id:"account_moderation_modal.roles.admin",defaultMessage:"Admin"})},"staff"):null!=t&&t.moderator?(0,i.Z)(c.Z,{slug:"moderator",title:(0,i.Z)(s.Z,{id:"account_moderation_modal.roles.moderator",defaultMessage:"Moderator"})},"staff"):null,o=!0===t.getIn(["patron","is_patron"]),r=[];return n&&r.push(n),o&&r.push((0,i.Z)(c.Z,{slug:"patron",title:"Patron"},"patron")),[].concat(r,(0,a.Z)(e))}();return(0,i.Z)("div",{className:"mt-6 min-w-0 flex-1 sm:px-2"},void 0,(0,i.Z)(d.Kq,{space:2},void 0,(0,i.Z)(d.Kq,{},void 0,(0,i.Z)(d.Ug,{space:1,alignItems:"center"},void 0,(0,i.Z)(d.xv,{size:"lg",weight:"bold",dangerouslySetInnerHTML:h,truncate:!0}),t.bot&&(0,i.Z)(c.Z,{slug:"bot",title:v.formatMessage(I.bot)}),y.length>0&&(0,i.Z)(d.Ug,{space:1,alignItems:"center"},void 0,y)),(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.xv,{size:"sm",theme:"muted",direction:"ltr",truncate:!0},void 0,"@",g?t.fqn:t.acct),t.locked&&(0,i.Z)(d.JO,{src:n(205),alt:v.formatMessage(I.account_locked),className:"h-4 w-4 text-gray-600"}))),(0,i.Z)(M.Z,{account:t}),t.note.length>0&&(0,i.Z)(l.Z,{size:"sm",dangerouslySetInnerHTML:p}),(0,i.Z)("div",{className:"flex flex-col items-start gap-2 md:flex-row md:flex-wrap md:items-center"},void 0,(0,m.D0)(t)?(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(577),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)(d.xv,{size:"sm"},void 0,(0,i.Z)(s.Z,{id:"account.member_since",defaultMessage:"Joined {date}",values:{date:_}}))):null,t.location?(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(471),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)(d.xv,{size:"sm"},void 0,t.location)):null,t.website?(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(496),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)("div",{className:"max-w-[300px]"},void 0,(0,i.Z)(d.xv,{size:"sm",truncate:!0},void 0,function(e){try{var t=new URL(e);return["http:","https:"].includes(t.protocol)}catch(e){return!1}}(t.website)?(0,i.Z)("a",{className:"text-primary-600 hover:underline dark:text-accent-blue",href:t.website,target:"_blank"},void 0,t.website):t.website))):null,function(){var e=t.birthday;if(!e)return null;var a=v.formatDate(e,{timeZone:"UTC",day:"numeric",month:"long",year:"numeric"}),o=new Date(e),r=new Date,c=o.getDate()===r.getDate()&&o.getMonth()===r.getMonth();return(0,i.Z)(d.Ug,{alignItems:"center",space:.5},void 0,(0,i.Z)(d.JO,{src:n(1016),className:"h-4 w-4 text-gray-800 dark:text-gray-200"}),(0,i.Z)(d.xv,{size:"sm"},void 0,c?(0,i.Z)(s.Z,{id:"account.birthday_today",defaultMessage:"Birthday is today!"}):(0,i.Z)(s.Z,{id:"account.birthday",defaultMessage:"Born {date}",values:{date:a}})))}()),(0,i.Z)(b,{account:t})),t.fields.size>0&&(0,i.Z)(d.Kq,{space:2,className:"mt-4 xl:hidden"},void 0,t.fields.map((function(e,t){return(0,i.Z)(k.Z,{field:e},t)}))))}},972:function(){}}]);
//# sourceMappingURL=account_timeline-ff22a9a20ec90239a4ee.chunk.js.map