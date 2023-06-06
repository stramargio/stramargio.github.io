"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[30],{1404:function(e,a,i){i.r(a),i.d(a,{default:function(){return x}});var t=i(2120),s=i(2100),d=(i(6),i(55),i(14),i(0),i(17),i(16),i(64),i(5),i(663)),l=i(1),o=i(2121),r=i(2122),c=i(2103),n=i(1167),u=i(745),v=i(2),m=i(3),f=i(2143),Z=i(69),g=i(137),h=i(468),p=i(469),y=i(467),w=i(41),_=i(108),b=(0,w.Tm)(),N=function(e){var a,i=e.id,s=(0,m.CG)((function(e){return e.me})),l=(0,m.CG)((function(e){return b(e,i)})),o=(0,m.CG)((function(e){return(0,Z.Gw)(e).get("autoPlayGif")}));if(!l)return null;var r=s!==l.id&&(null===(a=l.relationship)||void 0===a?void 0:a.followed_by);return(0,t.Z)("div",{className:"flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:divide-primary-700 dark:bg-primary-800"},void 0,(0,t.Z)("div",{className:"relative"},void 0,r&&(0,t.Z)("div",{className:"absolute left-2.5 top-2.5"},void 0,(0,t.Z)(h.Z,{slug:"opaque",title:(0,t.Z)(f.Z,{id:"account.follows_you",defaultMessage:"Follows you"})})),(0,t.Z)("div",{className:"absolute bottom-2.5 right-2.5"},void 0,(0,t.Z)(y.Z,{account:l,small:!0})),(0,t.Z)("img",{src:o?l.header:l.header_static,alt:"",className:"h-32 w-full rounded-t-lg object-cover"})),(0,t.Z)(v.Kq,{space:4,className:"p-3"},void 0,(0,t.Z)(g.Z,{account:l,withRelationship:!1}),(0,t.Z)(v.xv,{truncate:!0,align:"left",className:(0,d.default)("[&_br]:hidden [&_p:first-child]:inline [&_p:first-child]:truncate [&_p]:hidden"),dangerouslySetInnerHTML:{__html:l.note_emojified||"&nbsp;"}})),(0,t.Z)("div",{className:"grid grid-cols-3 gap-1 py-4"},void 0,(0,t.Z)(v.Kq,{},void 0,(0,t.Z)(v.xv,{theme:"primary",size:"md",weight:"medium"},void 0,(0,_.w8)(l.statuses_count)),(0,t.Z)(v.xv,{theme:"muted",size:"sm"},void 0,(0,t.Z)(f.Z,{id:"account.posts",defaultMessage:"Posts"}))),(0,t.Z)(v.Kq,{},void 0,(0,t.Z)(v.xv,{theme:"primary",size:"md",weight:"medium"},void 0,(0,_.w8)(l.followers_count)),(0,t.Z)(v.xv,{theme:"muted",size:"sm"},void 0,(0,t.Z)(f.Z,{id:"account.followers",defaultMessage:"Followers"}))),(0,t.Z)(v.Kq,{},void 0,(0,t.Z)(v.xv,{theme:"primary",size:"md",weight:"medium"},void 0,null===l.last_status_at?(0,t.Z)(f.Z,{id:"account.never_active",defaultMessage:"Never"}):(0,t.Z)(p.Z,{theme:"inherit",timestamp:l.last_status_at})),(0,t.Z)(v.xv,{theme:"muted",size:"sm"},void 0,(0,t.Z)(f.Z,{id:"account.last_status",defaultMessage:"Last active"})))))},M=(0,o.vU)({title:{id:"column.directory",defaultMessage:"Browse profiles"},recentlyActive:{id:"directory.recently_active",defaultMessage:"Recently active"},newArrivals:{id:"directory.new_arrivals",defaultMessage:"New arrivals"},local:{id:"directory.local",defaultMessage:"From {domain} only"},federated:{id:"directory.federated",defaultMessage:"From known fediverse"}}),x=function(){var e=(0,r.Z)(),a=(0,m.TL)(),i=(0,c.TH)().search,o=new URLSearchParams(i),f=(0,m.fz)(),Z=(0,m.hz)(),g=(0,m.CG)((function(e){return e.user_lists.directory.items})),h=(0,m.CG)((function(e){return e.user_lists.directory.isLoading})),p=(0,l.useState)(o.get("order")||"active"),y=(0,s.Z)(p,2),w=y[0],_=y[1],b=(0,l.useState)(!!o.get("local")),x=(0,s.Z)(b,2),k=x[0],C=x[1];(0,l.useEffect)((function(){a((0,n._d)({order:w||"active",local:k||!1}))}),[w,k]);var z=function(e){_(e.target.value)},G=function(e){C("1"===e.target.value)};return(0,t.Z)(v.sg,{label:e.formatMessage(M.title)},void 0,(0,t.Z)(v.Kq,{space:4},void 0,(0,t.Z)("div",{className:"grid grid-cols-2 gap-2"},void 0,(0,t.Z)("div",{},void 0,(0,t.Z)(v.xv,{weight:"medium"},void 0,"Display filter"),(0,t.Z)("fieldset",{className:"mt-3"},void 0,(0,t.Z)("legend",{className:"sr-only"},void 0,"Display filter"),(0,t.Z)("div",{className:"space-y-2"},void 0,(0,t.Z)(v.EU,{name:"order",value:"active",label:e.formatMessage(M.recentlyActive),checked:"active"===w,onChange:z}),(0,t.Z)(v.EU,{name:"order",value:"new",label:e.formatMessage(M.newArrivals),checked:"new"===w,onChange:z})))),Z.federating&&(0,t.Z)("div",{},void 0,(0,t.Z)(v.xv,{weight:"medium"},void 0,"Fediverse filter"),(0,t.Z)("fieldset",{className:"mt-3"},void 0,(0,t.Z)("legend",{className:"sr-only"},void 0,"Fediverse filter"),(0,t.Z)("div",{className:"space-y-2"},void 0,(0,t.Z)(v.EU,{name:"local",value:"1",label:e.formatMessage(M.local,{domain:f.title}),checked:k,onChange:G}),(0,t.Z)(v.EU,{name:"local",value:"0",label:e.formatMessage(M.federated),checked:!k,onChange:G}))))),(0,t.Z)("div",{className:(0,d.default)({"grid grid-cols-1 sm:grid-cols-2 gap-2.5":!0,"opacity-30":h})},void 0,g.map((function(e){return(0,t.Z)(N,{id:e},e)}))),(0,t.Z)(u.Z,{onClick:function(){a((0,n.$b)({order:w||"active",local:k||!1}))},disabled:h})))}}}]);
//# sourceMappingURL=directory-02d15eddeda410c6beb1.chunk.js.map