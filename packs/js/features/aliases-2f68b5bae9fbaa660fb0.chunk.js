"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[13],{1400:function(e,a,s){s.r(a),s.d(a,{default:function(){return C}});var t=s(2120),i=(s(5),s(1)),l=s(2121),n=s(2122),o=s(2143),r=s(563),c=s(61),u=s(53),d=s(2),g=s(3),m=(s(28),s(31),s(137)),f=s(203),v=s(41),Z=(0,l.vU)({add:{id:"aliases.account.add",defaultMessage:"Create alias"}}),h=function(e){var a,l=e.accountId,o=e.aliases,c=(0,n.Z)(),u=(0,g.TL)(),h=(0,g.hz)(),p=(0,i.useCallback)((0,v.Tm)(),[]),b=(0,g.CG)((function(e){return p(e,l)})),_=(0,g.CG)((function(e){return e.me})),M=(0,g.CG)((function(e){var a=p(e,l),s=null==a?void 0:a.pleroma.get("ap_id"),t=h.accountMoving?null==a?void 0:a.acct:s;return o.includes(t)}));return b?(M||l===_||(a=(0,t.Z)(f.Z,{src:s(179),iconClassName:"h-5 w-5",title:c.formatMessage(Z.add),onClick:function(){return u((0,r.j4)(b))}})),(0,t.Z)(d.Ug,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,(0,t.Z)("div",{className:"w-full"},void 0,(0,t.Z)(m.Z,{account:b,withRelationship:!1})),a)):null},p=(s(6),s(55),s(663)),b=(0,l.vU)({search:{id:"aliases.search",defaultMessage:"Search your old account"},searchTitle:{id:"tabs_bar.search",defaultMessage:"Search"}}),_=function(){var e=(0,g.TL)(),a=(0,n.Z)(),i=(0,g.CG)((function(e){return e.aliases.suggestions.value})),l=i.length>0;return(0,t.Z)("div",{className:"flex items-center gap-1"},void 0,(0,t.Z)("label",{className:"relative grow"},void 0,(0,t.Z)("span",{style:{display:"none"}},void 0,a.formatMessage(b.search)),(0,t.Z)("input",{className:"block w-full rounded-full focus:border-primary-500 focus:ring-primary-500 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 sm:text-sm",type:"text",value:i,onChange:function(a){e((0,r.lt)(a.target.value))},onKeyUp:function(a){13===a.keyCode&&e((0,r.YX)(i))},placeholder:a.formatMessage(b.search)}),(0,t.Z)("div",{role:"button",tabIndex:l?0:-1,className:"search__icon",onClick:function(){e((0,r.oy)())}},void 0,(0,t.Z)(c.Z,{src:s(763),"aria-label":a.formatMessage(b.search),className:(0,p.default)("svg-icon--backspace",{active:l})}))),(0,t.Z)(d.zx,{onClick:function(){e((0,r.YX)(i))}},void 0,a.formatMessage(b.searchTitle)))},M=(0,l.vU)({heading:{id:"column.aliases",defaultMessage:"Account aliases"},subheading_add_new:{id:"column.aliases.subheading_add_new",defaultMessage:"Add New Alias"},create_error:{id:"column.aliases.create_error",defaultMessage:"Error creating alias"},delete_error:{id:"column.aliases.delete_error",defaultMessage:"Error deleting alias"},subheading_aliases:{id:"column.aliases.subheading_aliases",defaultMessage:"Current aliases"},delete:{id:"column.aliases.delete",defaultMessage:"Delete"}}),C=function(){var e=(0,n.Z)(),a=(0,g.TL)(),l=(0,g.hz)(),m=(0,g.Tr)(),f=(0,g.CG)((function(e){return l.accountMoving?e.aliases.aliases.items:m.pleroma.get("also_known_as")})),v=(0,g.CG)((function(e){return e.aliases.suggestions.items})),Z=(0,g.CG)((function(e){return e.aliases.suggestions.loaded}));(0,i.useEffect)((function(){a(r.Ir)}),[]);var p=function(e){a((0,r.vu)(e.currentTarget.dataset.value))},b=(0,t.Z)(o.Z,{id:"empty_column.aliases",defaultMessage:"You haven't created any account alias yet."});return(0,t.Z)(d.sg,{className:"aliases-settings-panel",label:e.formatMessage(M.heading)},void 0,(0,t.Z)(d.Ol,{},void 0,(0,t.Z)(d.ll,{title:e.formatMessage(M.subheading_add_new)})),(0,t.Z)(_,{}),Z&&0===v.size?(0,t.Z)("div",{className:"aliases__accounts empty-column-indicator"},void 0,(0,t.Z)(o.Z,{id:"empty_column.aliases.suggestions",defaultMessage:"There are no account suggestions available for the provided term."})):(0,t.Z)("div",{className:"aliases__accounts mb-4"},void 0,v.map((function(e){return(0,t.Z)(h,{accountId:e,aliases:f},e)}))),(0,t.Z)(d.Ol,{},void 0,(0,t.Z)(d.ll,{title:e.formatMessage(M.subheading_aliases)})),(0,t.Z)("div",{className:"aliases-settings-panel"},void 0,(0,t.Z)(u.Z,{scrollKey:"aliases",emptyMessage:b},void 0,f.map((function(a,i){return(0,t.Z)(d.Ug,{alignItems:"center",justifyContent:"between",space:1,className:"p-2"},i,(0,t.Z)("div",{},void 0,(0,t.Z)(d.xv,{tag:"span",theme:"muted"},void 0,(0,t.Z)(o.Z,{id:"aliases.account_label",defaultMessage:"Old account:"}))," ",(0,t.Z)(d.xv,{tag:"span"},void 0,a)),(0,t.Z)("div",{className:"flex items-center",role:"button",tabIndex:0,onClick:p,"data-value":a,"aria-label":e.formatMessage(M.delete)},void 0,(0,t.Z)(c.Z,{className:"mr-1.5",src:s(84)}),(0,t.Z)(d.xv,{weight:"bold",theme:"muted"},void 0,(0,t.Z)(o.Z,{id:"aliases.aliases_list_delete",defaultMessage:"Unlink alias"}))))})))))}}}]);
//# sourceMappingURL=aliases-2f68b5bae9fbaa660fb0.chunk.js.map