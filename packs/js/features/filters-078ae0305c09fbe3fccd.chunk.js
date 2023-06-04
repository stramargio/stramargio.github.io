"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[42],{1211:function(e,t,i){i.r(t),i(11),i(12),i(18),i(7),i(20),i(21),i(10);var r=i(2124),a=i(2125),s=i(1406),n=i(1388),o=(i(4),i(8),i(5),i(9),i(0),i(28),i(31),i(1)),l=i(2131),d=i(1407),u=i(1418),c=i(2126),f=i(457),m=i(100),g=i(149),h=i(2),p=i(3),Z=i(58),v=i(34),_=i(497);function M(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function w(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?M(Object(i),!0).forEach((function(t){(0,n.Z)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):M(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var x=(0,l.vU)({subheading_add_new:{id:"column.filters.subheading_add_new",defaultMessage:"Add New Filter"},title:{id:"column.filters.title",defaultMessage:"Title"},keyword:{id:"column.filters.keyword",defaultMessage:"Keyword or phrase"},keywords:{id:"column.filters.keywords",defaultMessage:"Keywords or phrases"},expires:{id:"column.filters.expires",defaultMessage:"Expire after"},home_timeline:{id:"column.filters.home_timeline",defaultMessage:"Home timeline"},public_timeline:{id:"column.filters.public_timeline",defaultMessage:"Public timeline"},notifications:{id:"column.filters.notifications",defaultMessage:"Notifications"},conversations:{id:"column.filters.conversations",defaultMessage:"Conversations"},accounts:{id:"column.filters.accounts",defaultMessage:"Accounts"},drop_header:{id:"column.filters.drop_header",defaultMessage:"Drop instead of hide"},drop_hint:{id:"column.filters.drop_hint",defaultMessage:"Filtered posts will disappear irreversibly, even if filter is later removed"},hide_header:{id:"column.filters.hide_header",defaultMessage:"Hide completely"},hide_hint:{id:"column.filters.hide_hint",defaultMessage:"Completely hide the filtered content, instead of showing a warning"},add_new:{id:"column.filters.add_new",defaultMessage:"Add New Filter"},edit:{id:"column.filters.edit",defaultMessage:"Edit Filter"},create_error:{id:"column.filters.create_error",defaultMessage:"Error adding filter"},expiration_never:{id:"colum.filters.expiration.never",defaultMessage:"Never"},expiration_1800:{id:"colum.filters.expiration.1800",defaultMessage:"30 minutes"},expiration_3600:{id:"colum.filters.expiration.3600",defaultMessage:"1 hour"},expiration_21600:{id:"colum.filters.expiration.21600",defaultMessage:"6 hours"},expiration_43200:{id:"colum.filters.expiration.43200",defaultMessage:"12 hours"},expiration_86400:{id:"colum.filters.expiration.86400",defaultMessage:"1 day"},expiration_604800:{id:"colum.filters.expiration.604800",defaultMessage:"1 week"}}),b=function(e){var t=e.value,i=e.onChange,r=(0,d.Z)(),a=function(e){return function(r){return i(w(w({},t),{},(0,n.Z)({},e,r.currentTarget["checkbox"===r.currentTarget.type?"checked":"value"])))}};return(0,s.Z)(h.Ug,{space:2,grow:!0},void 0,(0,s.Z)(h.II,{type:"text",outerClassName:"w-2/5 grow",value:t.keyword,onChange:a("keyword"),placeholder:r.formatMessage(x.keyword)}),(0,s.Z)(h.Ug,{alignItems:"center",space:2},void 0,(0,s.Z)(h.ZD,{checked:t.whole_word,onChange:a("whole_word")}),(0,s.Z)(h.xv,{tag:"span",theme:"muted"},void 0,(0,s.Z)(u.Z,{id:"column.filters.whole_word",defaultMessage:"Whole word"}))))};t.default=function(e){var t=e.params,i=(0,d.Z)(),n=(0,c.k6)(),l=(0,p.TL)(),M=(0,p.hz)(),y=(0,o.useState)(!1),k=(0,a.Z)(y,2),C=k[0],D=k[1],O=(0,o.useState)(!1),j=(0,a.Z)(O,2),S=j[0],N=j[1],E=(0,o.useState)(""),H=(0,a.Z)(E,2),P=H[0],z=H[1],I=(0,o.useState)(null),T=(0,a.Z)(I,2),F=T[0],K=T[1],U=(0,o.useState)(!0),V=(0,a.Z)(U,2),A=V[0],q=V[1],L=(0,o.useState)(!1),$=(0,a.Z)(L,2),B=$[0],G=$[1],J=(0,o.useState)(!1),R=(0,a.Z)(J,2),W=R[0],Y=R[1],Q=(0,o.useState)(!1),X=(0,a.Z)(Q,2),ee=X[0],te=X[1],ie=(0,o.useState)(!1),re=(0,a.Z)(ie,2),ae=re[0],se=re[1],ne=(0,o.useState)(!1),oe=(0,a.Z)(ne,2),le=oe[0],de=oe[1],ue=(0,o.useState)([{keyword:"",whole_word:!1}]),ce=(0,a.Z)(ue,2),fe=ce[0],me=ce[1],ge=(0,o.useMemo)((function(){return{"":i.formatMessage(x.expiration_never),1800:i.formatMessage(x.expiration_1800),3600:i.formatMessage(x.expiration_3600),21600:i.formatMessage(x.expiration_21600),43200:i.formatMessage(x.expiration_43200),86400:i.formatMessage(x.expiration_86400),604800:i.formatMessage(x.expiration_604800)}}),[]);return(0,o.useEffect)((function(){var e;t.id&&(D(!0),null===(e=l((0,f.BS)(t.id)))||void 0===e||e.then((function(e){if(e.filter){var t=(0,Z.re)(e.filter);z(t.title),q(t.context.includes("home")),G(t.context.includes("public")),Y(t.context.includes("notifications")),te(t.context.includes("thread")),se(t.context.includes("account")),de("hide"===t.filter_action),me(t.keywords.toJS())}else N(!0);D(!1)})))}),[t.id]),S?(0,s.Z)(g.Z,{}):(0,s.Z)(h.sg,{className:"filter-settings-panel",label:i.formatMessage(x.subheading_add_new)},void 0,(0,s.Z)(h.l0,{onSubmit:function(e){e.preventDefault();var r=[];A&&r.push("home"),B&&r.push("public"),W&&r.push("notifications"),ee&&r.push("thread"),ae&&r.push("account"),l(t.id?(0,f.a8)(t.id,P,F,r,le,fe):(0,f.cj)(P,F,r,le,fe)).then((function(){n.push("/filters")})).catch((function(){v.Z.error(i.formatMessage(x.create_error))}))}},void 0,(0,s.Z)(h.cw,{labelText:i.formatMessage(x.title)},void 0,(0,s.Z)(h.II,{required:!0,type:"text",name:"title",value:P,onChange:function(e){var t=e.target;return z(t.value)}})),M.filtersExpiration&&(0,s.Z)(h.cw,{labelText:i.formatMessage(x.expires)},void 0,(0,s.Z)(_.Fj,{items:ge,defaultValue:"",onChange:function(e){K(e.target.value)}})),(0,s.Z)(h.Kq,{},void 0,(0,s.Z)(h.xv,{size:"sm",weight:"medium"},void 0,(0,s.Z)(u.Z,{id:"filters.context_header",defaultMessage:"Filter contexts"})),(0,s.Z)(h.xv,{size:"xs",theme:"muted"},void 0,(0,s.Z)(u.Z,{id:"filters.context_hint",defaultMessage:"One or multiple contexts where the filter should apply"}))),(0,s.Z)(m.Z,{},void 0,(0,s.Z)(m.H,{label:i.formatMessage(x.home_timeline)},void 0,(0,s.Z)(h.ZD,{checked:A,onChange:function(e){var t=e.target;return q(t.checked)}})),(0,s.Z)(m.H,{label:i.formatMessage(x.public_timeline)},void 0,(0,s.Z)(h.ZD,{checked:B,onChange:function(e){var t=e.target;return G(t.checked)}})),(0,s.Z)(m.H,{label:i.formatMessage(x.notifications)},void 0,(0,s.Z)(h.ZD,{checked:W,onChange:function(e){var t=e.target;return Y(t.checked)}})),(0,s.Z)(m.H,{label:i.formatMessage(x.conversations)},void 0,(0,s.Z)(h.ZD,{checked:ee,onChange:function(e){var t=e.target;return te(t.checked)}})),M.filtersV2&&(0,s.Z)(m.H,{label:i.formatMessage(x.accounts)},void 0,(0,s.Z)(h.ZD,{checked:ae,onChange:function(e){var t=e.target;return se(t.checked)}}))),(0,s.Z)(m.Z,{},void 0,(0,s.Z)(m.H,{label:i.formatMessage(M.filtersV2?x.hide_header:x.drop_header),hint:i.formatMessage(M.filtersV2?x.hide_hint:x.drop_hint)},void 0,(0,s.Z)(h.ZD,{checked:le,onChange:function(e){var t=e.target;return de(t.checked)}}))),(0,s.Z)(h.uc,{label:i.formatMessage(x.keywords),component:b,values:fe,onChange:function(e){return me(e)},onAddItem:function(){return me((function(e){return[].concat((0,r.Z)(e),[{keyword:"",whole_word:!1}])}))},onRemoveItem:function(e){return me((function(t){return t[e].id?t.map((function(t,i){return i===e?w(w({},t),{},{_destroy:!0}):t})):t.filter((function(t,i){return i!==e}))}))},minItems:1,maxItems:M.filtersV2?1/0:1}),(0,s.Z)(h.iN,{},void 0,(0,s.Z)(h.zx,{type:"submit",theme:"primary",disabled:C},void 0,i.formatMessage(t.id?x.edit:x.add_new)))))}},1210:function(e,t,i){i.r(t);var r=i(1406),a=(i(4),i(5),i(1)),s=i(2131),n=i(1407),o=i(1418),l=i(2126),d=i(457),u=i(344),c=i(52),f=i(2),m=i(3),g=i(34),h=(0,s.vU)({heading:{id:"column.filters",defaultMessage:"Muted words"},home_timeline:{id:"column.filters.home_timeline",defaultMessage:"Home timeline"},public_timeline:{id:"column.filters.public_timeline",defaultMessage:"Public timeline"},notifications:{id:"column.filters.notifications",defaultMessage:"Notifications"},conversations:{id:"column.filters.conversations",defaultMessage:"Conversations"},accounts:{id:"column.filters.accounts",defaultMessage:"Accounts"},delete_error:{id:"column.filters.delete_error",defaultMessage:"Error deleting filter"},edit:{id:"column.filters.edit",defaultMessage:"Edit"},delete:{id:"column.filters.delete",defaultMessage:"Delete"}}),p={home:h.home_timeline,public:h.public_timeline,notifications:h.notifications,thread:h.conversations,account:h.accounts};t.default=function(){var e=(0,n.Z)(),t=(0,m.TL)(),i=(0,l.k6)(),s=(0,m.hz)().filtersV2,Z=(0,m.CG)((function(e){return e.filters})),v=function(i){return function(){t((0,d.kh)(i)).then((function(){return t((0,d.a$)(!0))})).catch((function(){g.Z.error(e.formatMessage(h.delete_error))}))}};(0,a.useEffect)((function(){t((0,d.a$)(!0))}),[]);var _=(0,r.Z)(o.Z,{id:"empty_column.filters",defaultMessage:"You haven't created any muted words yet."});return(0,r.Z)(f.sg,{className:"filter-settings-panel",label:e.formatMessage(h.heading)},void 0,(0,r.Z)(f.Ug,{className:"mb-4",space:2,justifyContent:"end"},void 0,(0,r.Z)(f.zx,{to:"/filters/new",theme:"primary",size:"sm"},void 0,(0,r.Z)(o.Z,{id:"filters.create_filter",defaultMessage:"Create filter"}))),(0,r.Z)(c.Z,{scrollKey:"filters",emptyMessage:_,itemClassName:"pb-4 last:pb-0"},void 0,Z.map((function(t){return(0,r.Z)("div",{className:"rounded-lg bg-gray-100 p-4 dark:bg-primary-800"},t.id,(0,r.Z)(f.Kq,{space:2},void 0,(0,r.Z)(f.Kq,{className:"grow",space:1},void 0,(0,r.Z)(f.xv,{weight:"medium"},void 0,(0,r.Z)(o.Z,{id:"filters.filters_list_phrases_label",defaultMessage:"Keywords or phrases:"})," ",(0,r.Z)(f.xv,{theme:"muted",tag:"span"},void 0,t.keywords.map((function(e){return e.keyword})).join(", "))),(0,r.Z)(f.xv,{weight:"medium"},void 0,(0,r.Z)(o.Z,{id:"filters.filters_list_context_label",defaultMessage:"Filter contexts:"})," ",(0,r.Z)(f.xv,{theme:"muted",tag:"span"},void 0,t.context.map((function(t){return p[t]?e.formatMessage(p[t]):t})).join(", "))),(0,r.Z)(f.Ug,{space:4,wrap:!0},void 0,(0,r.Z)(f.xv,{weight:"medium"},void 0,s?"hide"===t.filter_action?(0,r.Z)(o.Z,{id:"filters.filters_list_hide_completely",defaultMessage:"Hide content"}):(0,r.Z)(o.Z,{id:"filters.filters_list_warn",defaultMessage:"Display warning"}):"hide"===t.filter_action?(0,r.Z)(o.Z,{id:"filters.filters_list_drop",defaultMessage:"Drop"}):(0,r.Z)(o.Z,{id:"filters.filters_list_hide",defaultMessage:"Hide"})),t.expires_at&&(0,r.Z)(f.xv,{weight:"medium"},void 0,new Date(t.expires_at).getTime()<=Date.now()?(0,r.Z)(o.Z,{id:"filters.filters_list_expired",defaultMessage:"Expired"}):(0,r.Z)(u.Z,{timestamp:t.expires_at,className:"whitespace-nowrap",futureDate:!0})))),(0,r.Z)(f.Ug,{space:2,justifyContent:"end"},void 0,(0,r.Z)(f.zx,{theme:"primary",onClick:(a=t.id,function(){return i.push("/filters/".concat(a))})},void 0,e.formatMessage(h.edit)),(0,r.Z)(f.zx,{theme:"danger",onClick:v(t.id)},void 0,e.formatMessage(h.delete)))));var a}))))}}}]);
//# sourceMappingURL=filters-078ae0305c09fbe3fccd.chunk.js.map