"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[14],{1537:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var a=n(1406),r=n(2125),i=(n(27),n(0),n(5),n(670)),o=n(739),u=n(1),c=n(1418),s=n(530),l=n(230),d=n(501),m=n(2),f=n(3),v=n(2131),g=(n(4),n(6),n(19),n(7),n(35),n(2126)),p=function(e){var t=e.announcement,n=(0,g.k6)(),a=(0,u.useRef)(null);(0,u.useEffect)((function(){c()}));var r=function(e,t){0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),t.stopPropagation(),n.push("/@".concat(e.acct)))},i=function(e,t){e=e.replace(/^#/,"").toLowerCase(),0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),t.stopPropagation(),n.push("/tags/".concat(e)))},o=function(e,t){0!==t.button||t.ctrlKey||t.metaKey||(t.preventDefault(),n.push(e))},c=function(){a.current&&a.current.querySelectorAll("a").forEach((function(e){var n,a,u;if(!e.classList.contains("status-link")){e.classList.add("status-link"),e.setAttribute("rel","nofollow noopener"),e.setAttribute("target","_blank");var c=t.mentions.find((function(t){return e.href==="".concat(t.url)}));if(c)e.addEventListener("click",r.bind(e,c),!1),e.setAttribute("title",c.acct);else if("#"===(null===(n=e.textContent)||void 0===n?void 0:n.charAt(0))||"#"===(null===(a=e.previousSibling)||void 0===a||null===(u=a.textContent)||void 0===u?void 0:u.charAt(e.previousSibling.textContent.length-1)))e.addEventListener("click",i.bind(e,e.text),!1);else{var s=t.statuses.get(e.href);s&&e.addEventListener("click",o.bind(void 0,s),!1),e.setAttribute("title",e.href),e.classList.add("unhandled-link")}}}))};return u.createElement("div",{className:"translate text-sm",ref:a,dangerouslySetInnerHTML:{__html:t.contentHtml}})},y=(n(9),n(24),n(203)),b=n(966),h=function(e){return e<0?0:e<=1?e:"1+"},Z=function(e){var t=e.value,n=e.obfuscate,i=(0,f.rV)().get("reduceMotion"),o=(0,u.useState)(1),c=(0,r.Z)(o,2),s=c[0],l=c[1],d=(0,u.useState)(t),m=(0,r.Z)(d,2),g=m[0],p=m[1];if((0,u.useEffect)((function(){void 0!==g&&(t>g?l(1):t<g&&l(-1)),p(t)}),[t]),i)return n?u.createElement(u.Fragment,null,h(g)):(0,a.Z)(v.BK,{value:g});var b=[{key:"".concat(g),data:g,style:{y:(0,y.ST)(0,{damping:35,stiffness:400})}}];return(0,a.Z)(y.bg,{styles:b,willEnter:function(){return{y:-1*s}},willLeave:function(){return{y:(0,y.ST)(1*s,{damping:35,stiffness:400})}}},void 0,(function(e){return(0,a.Z)("span",{className:"relative inline-flex flex-col items-stretch overflow-hidden"},void 0,e.map((function(e){var t=e.key,r=e.data,i=e.style;return(0,a.Z)("span",{style:{position:s*i.y>0?"absolute":"static",transform:"translateY(".concat(100*i.y,"%)")}},t,n?h(r):(0,a.Z)(v.BK,{value:r}))})))}))},k=n(599),x=n(340),w=function(e){var t=e.emoji,n=e.emojiMap,r=e.hovered,i=(0,f.rV)().get("autoPlayGif");if(k.Z[t]){var o=k.Z[t],u=o.filename,c=o.shortCode,s=c?":".concat(c,":"):"";return(0,a.Z)("img",{draggable:"false",className:"emojione m-0 block",alt:t,title:s,src:(0,x.J)("packs/emoji/".concat(u,".svg"))})}if(n.get(t)){var l=i||r?n.getIn([t,"url"]):n.getIn([t,"static_url"]),d=":".concat(t,":");return(0,a.Z)("img",{draggable:"false",className:"emojione m-0 block",alt:d,title:d,src:l})}return null},M=function(e){var t=e.announcementId,n=e.reaction,o=e.addReaction,c=e.removeReaction,s=e.emojiMap,l=e.style,d=(0,u.useState)(!1),m=(0,r.Z)(d,2),f=m[0],v=m[1],g=n.name;return k.Z[g]&&(g=k.Z[g].shortCode),(0,a.Z)("button",{className:(0,i.default)("flex shrink-0 items-center gap-1.5 rounded-sm bg-gray-100 px-1.5 py-1 transition-colors dark:bg-primary-900",{"bg-gray-200 dark:bg-primary-800":f,"bg-primary-200 dark:bg-primary-500":n.me}),onClick:function(){n.me?c(t,n.name):o(t,n.name)},onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},title:":".concat(g,":"),style:l},void 0,(0,a.Z)("span",{className:"block h-4 w-4"},void 0,(0,a.Z)(w,{hovered:f,emoji:n.name,emojiMap:s})),(0,a.Z)("span",{className:"block min-w-[9px] text-center text-xs font-medium text-primary-600 dark:text-white"},void 0,(0,a.Z)(Z,{value:n.count})))},j=function(e){var t=e.announcementId,n=e.reactions,r=e.addReaction,o=e.removeReaction,u=e.emojiMap,c=(0,f.rV)().get("reduceMotion"),s=function(e){r(t,e.native.replace(/:/g,""))},l=n.filter((function(e){return e.count>0})),d=l.map((function(e){return{key:e.name,data:e,style:{scale:c?1:(0,y.ST)(1,{stiffness:150,damping:13})}}})).toArray();return(0,a.Z)(y.bg,{styles:d,willEnter:function(){return{scale:c?1:0}},willLeave:function(){return{scale:c?0:(0,y.ST)(0,{stiffness:170,damping:26})}}},void 0,(function(e){return(0,a.Z)("div",{className:(0,i.default)("flex flex-wrap items-center gap-1",{"reactions-bar--empty":l.isEmpty()})},void 0,e.map((function(e){var n=e.key,i=e.data,c=e.style;return(0,a.Z)(M,{reaction:i,style:{transform:"scale(".concat(c.scale,")"),position:c.scale<.5?"absolute":"static"},announcementId:t,addReaction:r,removeReaction:o,emojiMap:u},n)})),l.size<8&&(0,a.Z)(b.Z,{onPickEmoji:s}))}))},C=function(e){var t=e.announcement,n=e.addReaction,r=e.removeReaction,i=e.emojiMap,o=(0,f.hz)(),u=t.starts_at&&new Date(t.starts_at),c=t.ends_at&&new Date(t.ends_at),s=new Date,l=u&&c,d=l&&u.getFullYear()===c.getFullYear()&&c.getFullYear()===s.getFullYear(),g=l&&u.getDate()===c.getDate()&&u.getMonth()===c.getMonth()&&u.getFullYear()===c.getFullYear(),y=t.all_day;return(0,a.Z)(m.Kq,{className:"w-full",space:2},void 0,l&&(0,a.Z)(m.xv,{theme:"muted"},void 0,(0,a.Z)(v.Ji,{value:u,hour12:!0,year:d||u.getFullYear()===s.getFullYear()?void 0:"numeric",month:"short",day:"2-digit",hour:y?void 0:"numeric",minute:y?void 0:"2-digit"})," ","-"," ",(0,a.Z)(v.Ji,{value:c,hour12:!0,year:d||c.getFullYear()===s.getFullYear()?void 0:"numeric",month:g?void 0:"short",day:g?void 0:"2-digit",hour:y?void 0:"numeric",minute:y?void 0:"2-digit"})),(0,a.Z)(p,{announcement:t}),o.announcementsReactions&&(0,a.Z)(j,{reactions:t.reactions,announcementId:t.id,addReaction:n,removeReaction:r,emojiMap:i}))},R=(0,l.P1)([function(e){return e.custom_emojis}],(function(e){return e.reduce((function(e,t){return e.set(t.get("shortcode"),t)}),(0,o.Map)())})),E=function(){var e=(0,f.TL)(),t=(0,f.CG)((function(e){return R(e)})),n=(0,u.useState)(0),o=(0,r.Z)(n,2),l=o[0],v=o[1],g=(0,f.CG)((function(e){return e.announcements.items})),p=function(t,n){return e((0,d.rU)(t,n))},y=function(t,n){return e((0,d.WO)(t,n))};return 0===g.size?null:(0,a.Z)(m.$L,{title:(0,a.Z)(c.Z,{id:"announcements.title",defaultMessage:"Announcements"})},void 0,(0,a.Z)(m.Zb,{className:"relative",size:"md",variant:"rounded"},void 0,(0,a.Z)(s.ZP,{animateHeight:!0,index:l,onChangeIndex:function(e){v(e%g.size)}},void 0,g.map((function(e){return(0,a.Z)(C,{announcement:e,emojiMap:t,addReaction:p,removeReaction:y},e.id)})).reverse()),g.size>1&&(0,a.Z)(m.Ug,{space:2,alignItems:"center",justifyContent:"center",className:"relative"},void 0,g.map((function(e,t){return(0,a.Z)("button",{tabIndex:0,onClick:function(){return v(t)},className:(0,i.default)({"w-2 h-2 rounded-full focus:ring-primary-600 focus:ring-2 focus:ring-offset-2":!0,"bg-gray-200 hover:bg-gray-300":t!==l,"bg-primary-600":t===l})},t)})))))}}}]);
//# sourceMappingURL=announcements-02fdfb2020c40607d1a7.chunk.js.map