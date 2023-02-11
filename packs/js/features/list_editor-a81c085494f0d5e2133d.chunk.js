"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[55],{1105:function(e,t,s){s.r(t),s.d(t,{default:function(){return w}});var i=s(2059),a=(s(5),s(1)),o=s(2061),n=s(2062),l=s(2078),r=s(164),d=s(2),u=s(3),c=(s(28),s(33),s(178)),f=s(80),v=(0,o.vU)({remove:{id:"lists.account.remove",defaultMessage:"Remove from list"},add:{id:"lists.account.add",defaultMessage:"Add to list"}}),g=function(e){var t,a=e.accountId,o=(0,n.Z)(),l=(0,u.TL)();return t=(0,u.CG)((function(e){return e.listEditor.accounts.items.includes(a)}))?(0,i.Z)(c.Z,{src:s(78),iconClassName:"h-5 w-5",title:o.formatMessage(v.remove),onClick:function(){return l((0,r.v)(a))}}):(0,i.Z)(c.Z,{src:s(152),iconClassName:"h-5 w-5",title:o.formatMessage(v.add),onClick:function(){return l((0,r.tR)(a))}}),(0,i.Z)(d.Ug,{space:1,alignItems:"center",justifyContent:"between",className:"p-2.5"},void 0,(0,i.Z)("div",{className:"w-full"},void 0,(0,i.Z)(f.Z,{id:a,withRelationship:!1})),t)},m=(0,o.vU)({title:{id:"lists.edit.submit",defaultMessage:"Change title"},save:{id:"lists.new.save_title",defaultMessage:"Save Title"}}),Z=function(){var e=(0,n.Z)(),t=(0,u.TL)(),s=(0,u.CG)((function(e){return e.listEditor.title})),a=(0,u.CG)((function(e){return!e.listEditor.isChanged})),o=e.formatMessage(m.save);return(0,i.Z)(d.l0,{onSubmit:function(e){e.preventDefault(),t((0,r.Mw)(!1))}},void 0,(0,i.Z)(d.Ug,{space:2},void 0,(0,i.Z)(d.II,{outerClassName:"flex-grow",type:"text",value:s,onChange:function(e){t((0,r.OU)(e.target.value))}}),(0,i.Z)(d.zx,{onClick:function(){t((0,r.Mw)(!1))},disabled:a},void 0,o)))},h=(s(6),s(51),s(564)),C=s(54),M=(0,o.vU)({search:{id:"lists.search",defaultMessage:"Search among people you follow"},searchTitle:{id:"tabs_bar.search",defaultMessage:"Search"}}),p=function(){var e=(0,n.Z)(),t=(0,u.TL)(),a=(0,u.CG)((function(e){return e.listEditor.suggestions.value})),o=function(){t((0,r.pT)(a))},l=a.length>0;return(0,i.Z)(d.l0,{onSubmit:o},void 0,(0,i.Z)(d.Ug,{space:2},void 0,(0,i.Z)("label",{className:"relative grow"},void 0,(0,i.Z)("span",{style:{display:"none"}},void 0,e.formatMessage(M.search)),(0,i.Z)(d.II,{type:"text",value:a,onChange:function(e){t((0,r.pQ)(e.target.value))},placeholder:e.formatMessage(M.search)}),(0,i.Z)("div",{role:"button",tabIndex:0,className:"search__icon",onClick:function(){t((0,r.MC)())}},void 0,(0,i.Z)(C.Z,{src:s(766),"aria-label":e.formatMessage(M.search),className:(0,h.default)("svg-icon--backspace",{active:l})}))),(0,i.Z)(d.zx,{onClick:o},void 0,e.formatMessage(M.searchTitle))))},b=(0,o.vU)({close:{id:"lightbox.close",defaultMessage:"Close"},changeTitle:{id:"lists.edit.submit",defaultMessage:"Change title"},addToList:{id:"lists.account.add",defaultMessage:"Add to list"},removeFromList:{id:"lists.account.remove",defaultMessage:"Remove from list"},editList:{id:"lists.edit",defaultMessage:"Edit list"}}),w=function(e){var t=e.listId,s=e.onClose,o=(0,n.Z)(),c=(0,u.TL)(),f=(0,u.CG)((function(e){return e.listEditor.accounts.items})),v=(0,u.CG)((function(e){return e.listEditor.suggestions.items}));return(0,a.useEffect)((function(){return c((0,r.Ru)(t)),function(){c((0,r.QS)())}}),[]),(0,i.Z)(d.u_,{title:(0,i.Z)(l.Z,{id:"lists.edit",defaultMessage:"Edit list"}),onClose:function(){s("LIST_ADDER")}},void 0,(0,i.Z)(d.Ol,{},void 0,(0,i.Z)(d.ll,{title:o.formatMessage(b.changeTitle)})),(0,i.Z)(Z,{}),(0,i.Z)("br",{}),f.size>0&&(0,i.Z)("div",{},void 0,(0,i.Z)(d.Ol,{},void 0,(0,i.Z)(d.ll,{title:o.formatMessage(b.removeFromList)})),(0,i.Z)("div",{className:"max-h-48 overflow-y-auto"},void 0,f.map((function(e){return(0,i.Z)(g,{accountId:e},e)})))),(0,i.Z)("br",{}),(0,i.Z)(d.Ol,{},void 0,(0,i.Z)(d.ll,{title:o.formatMessage(b.addToList)})),(0,i.Z)(p,{}),(0,i.Z)("div",{className:"max-h-48 overflow-y-auto"},void 0,v.map((function(e){return(0,i.Z)(g,{accountId:e},e)}))))}}}]);
//# sourceMappingURL=list_editor-a81c085494f0d5e2133d.chunk.js.map