"use strict";(self.webpackChunksoapbox=self.webpackChunksoapbox||[]).push([[63],{1346:function(e,a,t){t.r(a),t.d(a,{default:function(){return F}});var o=t(2059),i=t(2046),r=(t(4),t(5),t(564)),n=t(1),d=t(482),s=t(2080),l=t(2081),u=t(2),c=t(3),v=(t(14),t(0),t(17),t(16),t(91),t(74),t(25),t(6),t(18),t(2061)),m=t(2078),Z=t(111),g=t(38),b=t(104),f=t(370),p=(0,v.vU)({error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),h=function(e){var a=e.onNext,d=(0,c.TL)(),s=(0,c.Tr)(),l=n.useRef(null),v=n.useState(),h=(0,i.Z)(v,2),x=h[0],y=h[1],k=n.useState(!1),w=(0,i.Z)(k,2),N=w[0],M=w[1],C=n.useState(!0),z=(0,i.Z)(C,2),T=z[0],S=z[1],q=!!s&&(0,b.z_)(s.avatar);return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)("div",{},void 0,(0,o.Z)("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-900/50 sm:-mx-10 sm:pb-10"},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.xv,{size:"2xl",align:"center",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.avatar.title",defaultMessage:"Choose a profile picture"})),(0,o.Z)(u.xv,{theme:"muted",align:"center"},void 0,(0,o.Z)(m.Z,{id:"onboarding.avatar.subtitle",defaultMessage:"Just have fun with it."})))),(0,o.Z)("div",{className:"mx-auto sm:w-2/3 sm:pt-10 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{space:10},void 0,(0,o.Z)("div",{className:"relative mx-auto rounded-full bg-gray-200"},void 0,s&&(0,o.Z)(u.qE,{src:x||s.avatar,size:175}),N&&(0,o.Z)("div",{className:"absolute inset-0 flex items-center justify-center rounded-full bg-white/80 dark:bg-primary-900/80"},void 0,(0,o.Z)(u.$j,{withText:!1})),(0,o.Z)("button",{onClick:function(){var e;null===(e=l.current)||void 0===e||e.click()},type:"button",className:(0,r.default)({"absolute bottom-3 right-2 p-1 bg-primary-600 rounded-full ring-2 ring-white dark:ring-primary-900 hover:bg-primary-700":!0,"opacity-50 pointer-events-none":N}),disabled:N},void 0,(0,o.Z)(u.JO,{src:t(152),className:"h-5 w-5 text-white"})),n.createElement("input",{type:"file",className:"hidden",ref:l,onChange:function(e){var t,o=null===(t=e.target.files)||void 0===t?void 0:t.item(0);o&&(0,f.Z)(o,16e4).then((function(e){var t=e?URL.createObjectURL(e):null==s?void 0:s.avatar;y(t),M(!0);var i=new FormData;i.append("avatar",o);var r=d((0,Z.sQ)(i));Promise.all([r]).then((function(){S(!1),M(!1),a()})).catch((function(e){var a;M(!1),S(!1),y(null),422===(null===(a=e.response)||void 0===a?void 0:a.status)?g.Z.error(e.response.data.error.replace("Validation failed: ","")):g.Z.error(p.error)}))})).catch(console.error)}})),(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",type:"button",onClick:a,disabled:q&&T||N},void 0,N?(0,o.Z)(m.Z,{id:"onboarding.saving",defaultMessage:"Saving…"}):(0,o.Z)(m.Z,{id:"onboarding.next",defaultMessage:"Next"})),T&&(0,o.Z)(u.zx,{block:!0,theme:"tertiary",type:"button",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},x=t(2062),y=(0,v.vU)({bioPlaceholder:{id:"onboarding.bio.placeholder",defaultMessage:"Tell the world a little about yourself…"},error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),k=function(e){var a=e.onNext,t=(0,x.Z)(),r=(0,c.TL)(),d=(0,c.Tr)(),s=n.useState((null==d?void 0:d.source.get("note"))||""),l=(0,i.Z)(s,2),v=l[0],b=l[1],f=n.useState(!1),p=(0,i.Z)(f,2),h=p[0],k=p[1],w=n.useState([]),N=(0,i.Z)(w,2),M=N[0],C=N[1];return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)("div",{},void 0,(0,o.Z)("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.xv,{size:"2xl",align:"center",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.note.title",defaultMessage:"Write a short bio"})),(0,o.Z)(u.xv,{theme:"muted",align:"center"},void 0,(0,o.Z)(m.Z,{id:"onboarding.note.subtitle",defaultMessage:"You can always edit this later."})))),(0,o.Z)(u.Kq,{space:5},void 0,(0,o.Z)("div",{className:"mx-auto sm:w-2/3 sm:pt-10"},void 0,(0,o.Z)(u.cw,{hintText:(0,o.Z)(m.Z,{id:"onboarding.bio.hint",defaultMessage:"Max 500 characters"}),labelText:(0,o.Z)(m.Z,{id:"edit_profile.fields.bio_label",defaultMessage:"Bio"}),errors:M},void 0,(0,o.Z)(u.gx,{onChange:function(e){return b(e.target.value)},placeholder:t.formatMessage(y.bioPlaceholder),value:v,maxLength:500}))),(0,o.Z)("div",{className:"mx-auto sm:w-2/3 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",type:"submit",disabled:h,onClick:function(){k(!0);var e=r((0,Z.sQ)({note:v}));Promise.all([e]).then((function(){k(!1),a()})).catch((function(e){var a;k(!1),422===(null===(a=e.response)||void 0===a?void 0:a.status)?C([e.response.data.error.replace("Validation failed: ","")]):g.Z.error(y.error)}))}},void 0,h?(0,o.Z)(m.Z,{id:"onboarding.saving",defaultMessage:"Saving…"}):(0,o.Z)(m.Z,{id:"onboarding.next",defaultMessage:"Next"})),(0,o.Z)(u.zx,{block:!0,theme:"tertiary",type:"button",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},w=function(e){var a=e.onComplete;return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.JO,{strokeWidth:1,src:t(1512),className:"mx-auto h-16 w-16 text-primary-600 dark:text-primary-400"}),(0,o.Z)(u.xv,{size:"2xl",align:"center",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.finished.title",defaultMessage:"Onboarding complete"})),(0,o.Z)(u.xv,{theme:"muted",align:"center"},void 0,(0,o.Z)(m.Z,{id:"onboarding.finished.message",defaultMessage:"We are very excited to welcome you to our community! Tap the button below to get started."}))),(0,o.Z)("div",{className:"mx-auto pt-10 sm:w-2/3 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.view_feed",defaultMessage:"View Feed"}))))))},N=t(195),M=(0,v.vU)({header:{id:"account.header.alt",defaultMessage:"Profile header"},error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}}),C=function(e){var a=e.onNext,d=(0,x.Z)(),s=(0,c.TL)(),l=(0,c.Tr)(),v=n.useRef(null),p=n.useState(),h=(0,i.Z)(p,2),y=h[0],k=h[1],w=n.useState(!1),C=(0,i.Z)(w,2),z=C[0],T=C[1],S=n.useState(!0),q=(0,i.Z)(S,2),K=q[0],j=q[1],P=!!l&&(0,b.NF)(l.header);return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)("div",{},void 0,(0,o.Z)("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.xv,{size:"2xl",align:"center",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.header.title",defaultMessage:"Pick a cover image"})),(0,o.Z)(u.xv,{theme:"muted",align:"center"},void 0,(0,o.Z)(m.Z,{id:"onboarding.header.subtitle",defaultMessage:"This will be shown at the top of your profile."})))),(0,o.Z)("div",{className:"mx-auto sm:w-2/3 sm:pt-10 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{space:10},void 0,(0,o.Z)("div",{className:"rounded-lg border border-solid border-gray-200 dark:border-gray-800"},void 0,(0,o.Z)("div",{role:"button",className:"relative flex h-24 items-center justify-center rounded-t-md bg-gray-200 dark:bg-gray-800"},void 0,y||(null==l?void 0:l.header)&&(0,o.Z)(N.Z,{src:y||l.header,alt:d.formatMessage(M.header),className:"absolute inset-0 rounded-t-md object-cover"}),z&&(0,o.Z)("div",{className:"absolute inset-0 flex items-center justify-center rounded-t-md bg-white/80 dark:bg-primary-900/80"},void 0,(0,o.Z)(u.$j,{withText:!1})),(0,o.Z)("button",{onClick:function(){var e;null===(e=v.current)||void 0===e||e.click()},type:"button",className:(0,r.default)({"absolute -top-3 -right-3 p-1 bg-primary-600 rounded-full ring-2 ring-white dark:ring-primary-900 hover:bg-primary-700":!0,"opacity-50 pointer-events-none":z}),disabled:z},void 0,(0,o.Z)(u.JO,{src:t(152),className:"h-5 w-5 text-white"})),n.createElement("input",{type:"file",className:"hidden",ref:v,onChange:function(e){var t,o=null===(t=e.target.files)||void 0===t?void 0:t.item(0);o&&(0,f.Z)(o,2073600).then((function(e){var t=e?URL.createObjectURL(e):null==l?void 0:l.header;k(t),T(!0);var o=new FormData;o.append("header",e);var i=s((0,Z.sQ)(o));Promise.all([i]).then((function(){j(!1),T(!1),a()})).catch((function(e){var a;T(!1),j(!1),k(null),422===(null===(a=e.response)||void 0===a?void 0:a.status)?g.Z.error(e.response.data.error.replace("Validation failed: ","")):g.Z.error(M.error)}))})).catch(console.error)}})),(0,o.Z)("div",{className:"flex flex-col px-4 pb-4"},void 0,l&&(0,o.Z)(u.qE,{src:l.avatar,size:64,className:"-mt-8 mb-2 ring-2 ring-white dark:ring-primary-800"}),(0,o.Z)(u.xv,{weight:"bold",size:"sm"},void 0,null==l?void 0:l.display_name),(0,o.Z)(u.xv,{theme:"muted",size:"sm"},void 0,"@",null==l?void 0:l.username))),(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",type:"button",onClick:a,disabled:P&&K||z},void 0,z?(0,o.Z)(m.Z,{id:"onboarding.saving",defaultMessage:"Saving…"}):(0,o.Z)(m.Z,{id:"onboarding.next",defaultMessage:"Next"})),K&&(0,o.Z)(u.zx,{block:!0,theme:"tertiary",type:"button",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},z=(t(67),t(7),(0,v.vU)({usernamePlaceholder:{id:"onboarding.display_name.placeholder",defaultMessage:"Eg. John Smith"},error:{id:"onboarding.error",defaultMessage:"An unexpected error occurred. Please try again or skip this step."}})),T=function(e){var a=e.onNext,t=(0,x.Z)(),r=(0,c.TL)(),d=(0,c.Tr)(),s=n.useState((null==d?void 0:d.display_name)||""),l=(0,i.Z)(s,2),v=l[0],b=l[1],f=n.useState(!1),p=(0,i.Z)(f,2),h=p[0],y=p[1],k=n.useState([]),w=(0,i.Z)(k,2),N=w[0],M=w[1],C=!(v.trim().length>0)||v.length>30,T=n.useMemo((function(){var e=30-v.length,a=1===e?"character remaining":"characters remaining";return"".concat(e," ").concat(a)}),[v]);return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)("div",{},void 0,(0,o.Z)("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.xv,{size:"2xl",align:"center",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.display_name.title",defaultMessage:"Choose a display name"})),(0,o.Z)(u.xv,{theme:"muted",align:"center"},void 0,(0,o.Z)(m.Z,{id:"onboarding.display_name.subtitle",defaultMessage:"You can always edit this later."})))),(0,o.Z)("div",{className:"mx-auto sm:w-2/3 sm:pt-10 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{space:5},void 0,(0,o.Z)(u.cw,{hintText:T,labelText:(0,o.Z)(m.Z,{id:"onboarding.display_name.label",defaultMessage:"Display name"}),errors:N},void 0,(0,o.Z)(u.II,{onChange:function(e){return b(e.target.value)},placeholder:t.formatMessage(z.usernamePlaceholder),type:"text",value:v,maxLength:30})),(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",type:"submit",disabled:C||h,onClick:function(){y(!0);var e=r((0,Z.sQ)({display_name:v}));Promise.all([e]).then((function(){y(!1),a()})).catch((function(e){var a;y(!1),422===(null===(a=e.response)||void 0===a?void 0:a.status)?M([e.response.data.error.replace("Validation failed: ","")]):g.Z.error(z.error)}))}},void 0,h?(0,o.Z)(m.Z,{id:"onboarding.saving",defaultMessage:"Saving…"}):(0,o.Z)(m.Z,{id:"onboarding.next",defaultMessage:"Next"})),(0,o.Z)(u.zx,{block:!0,theme:"tertiary",type:"button",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},S=t(105),q=function(e){var a=e.onNext,i=(0,c.Tr)(),r=(0,c.fz)();return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.JO,{strokeWidth:1,src:t(751),className:"mx-auto h-16 w-16 text-primary-600 dark:text-primary-400"}),(0,o.Z)(u.xv,{size:"2xl",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.fediverse.title",defaultMessage:"{siteTitle} is just one part of the Fediverse",values:{siteTitle:r.title}})),(0,o.Z)(u.Kq,{space:4},void 0,(0,o.Z)("div",{className:"border-b border-solid border-gray-200 pb-2 dark:border-gray-800 sm:pb-5"},void 0,(0,o.Z)(u.Kq,{space:4},void 0,(0,o.Z)(u.xv,{theme:"muted"},void 0,(0,o.Z)(m.Z,{id:"onboarding.fediverse.message",defaultMessage:'The Fediverse is a social network made up of thousands of diverse and independently-run social media sites (aka "servers"). You can follow users — and like, repost, and reply to posts — from most other Fediverse servers, because they can communicate with {siteTitle}.',values:{siteTitle:r.title}})),(0,o.Z)(u.xv,{theme:"muted"},void 0,(0,o.Z)(m.Z,{id:"onboarding.fediverse.trailer",defaultMessage:"Because it is distributed and anyone can run their own server, the Fediverse is resilient and open. If you choose to join another server or set up your own, you can interact with the same people and continue on the same social graph."})))),(0,o.Z)("div",{className:"rounded-lg bg-primary-50 p-4 text-center dark:bg-gray-800"},void 0,(0,o.Z)(S.Z,{account:i})),(0,o.Z)(u.xv,{theme:"muted"},void 0,(0,o.Z)(m.Z,{id:"onboarding.fediverse.its_you",defaultMessage:"This is you! Other people can follow you from other servers by using your full @-handle."})),(0,o.Z)(u.xv,{theme:"muted"},void 0,(0,o.Z)(m.Z,{id:"onboarding.fediverse.other_instances",defaultMessage:"When browsing your timeline, pay attention to the full username after the second @ symbol to know which server a post is from."})))),(0,o.Z)("div",{className:"mx-auto pt-10 sm:w-2/3 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.fediverse.next",defaultMessage:"Next"}))))))},K=t(79),j=t.n(K),P=t(57),L=t(80),_=t(1022),W=function(e){var a=e.onNext,t=(0,_._f)(),i=t.data,r=t.fetchNextPage,n=t.hasNextPage,d=t.isFetching,s=j()((function(){return d?null:r()}),300);return(0,o.Z)(u.Zb,{variant:"rounded",size:"xl"},void 0,(0,o.Z)(u.eW,{},void 0,(0,o.Z)("div",{},void 0,(0,o.Z)("div",{className:"-mx-4 mb-4 border-b border-solid border-gray-200 pb-4 dark:border-gray-800 sm:-mx-10 sm:pb-10"},void 0,(0,o.Z)(u.Kq,{space:2},void 0,(0,o.Z)(u.xv,{size:"2xl",align:"center",weight:"bold"},void 0,(0,o.Z)(m.Z,{id:"onboarding.suggestions.title",defaultMessage:"Suggested accounts"})),(0,o.Z)(u.xv,{theme:"muted",align:"center"},void 0,(0,o.Z)(m.Z,{id:"onboarding.suggestions.subtitle",defaultMessage:"Here are a few of the most popular accounts you might like."})))),i&&0!==i.length?i?(0,o.Z)("div",{className:"flex flex-col sm:pt-4 sm:pb-10"},void 0,(0,o.Z)(P.Z,{isLoading:d,scrollKey:"suggestions",onLoadMore:s,hasMore:n,useWindowScroll:!1,style:{height:320}},void 0,i.map((function(e){return(0,o.Z)("div",{className:"py-2"},e.account.id,(0,o.Z)(L.Z,{id:e.account.id,showProfileHoverCard:!1,withLinkToProfile:!1}))})))):null:(0,o.Z)("div",{className:"my-2 rounded-lg bg-primary-50 p-8 text-center dark:bg-gray-800"},void 0,(0,o.Z)(u.xv,{},void 0,(0,o.Z)(m.Z,{id:"empty_column.follow_recommendations",defaultMessage:"Looks like no suggestions could be generated for you. You can try using search to look for people you might know or explore trending hashtags."}))),(0,o.Z)("div",{className:"mx-auto sm:w-2/3 md:w-1/2"},void 0,(0,o.Z)(u.Kq,{},void 0,(0,o.Z)(u.Kq,{justifyContent:"center",space:2},void 0,(0,o.Z)(u.zx,{block:!0,theme:"primary",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.done",defaultMessage:"Done"})),(0,o.Z)(u.zx,{block:!0,theme:"tertiary",type:"button",onClick:a},void 0,(0,o.Z)(m.Z,{id:"onboarding.skip",defaultMessage:"Skip for now"}))))))))},F=function(){var e=(0,c.TL)(),a=(0,c.hz)(),t=n.useState(0),v=(0,i.Z)(t,2),m=v[0],Z=v[1],g=function(){Z((function(e){return Math.min(e+1,b.length-1)}))},b=[(0,o.Z)(h,{onNext:g}),(0,o.Z)(T,{onNext:g}),(0,o.Z)(k,{onNext:g}),(0,o.Z)(C,{onNext:g}),(0,o.Z)(W,{onNext:g})];a.federating&&b.push((0,o.Z)(q,{onNext:g})),b.push((0,o.Z)(w,{onComplete:function(){e((0,s.CT)())}}));var f=function(e){switch(e.key){case"ArrowLeft":Z((function(e){return Math.max(0,e-1)}));break;case"ArrowRight":g()}};return n.useEffect((function(){return document.addEventListener("keyup",f),function(){document.removeEventListener("keyup",f)}}),[]),(0,o.Z)("div",{"data-testid":"onboarding-wizard"},void 0,(0,o.Z)(l.Z,{}),(0,o.Z)("main",{className:"flex h-screen flex-col overflow-x-hidden"},void 0,(0,o.Z)("div",{className:"flex h-full flex-col items-center justify-center"},void 0,(0,o.Z)(d.ZP,{animateHeight:!0,index:m,onChangeIndex:function(e){Z(e)}},void 0,b.map((function(e,a){return(0,o.Z)("div",{className:"w-full max-w-[100vw] py-6 sm:mx-auto sm:max-w-lg md:max-w-2xl"},a,(0,o.Z)("div",{className:(0,r.default)({"transition-opacity ease-linear":!0,"opacity-0 duration-500":m!==a,"opacity-100 duration-75":m===a})},void 0,e))}))),(0,o.Z)(u.Ug,{space:3,alignItems:"center",justifyContent:"center",className:"relative"},void 0,b.map((function(e,a){return(0,o.Z)("button",{tabIndex:0,onClick:function(){Z(a)},className:(0,r.default)({"w-5 h-5 rounded-full focus:ring-primary-600 focus:ring-2 focus:ring-offset-2":!0,"bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-700/75 hover:bg-gray-400":a!==m,"bg-primary-600":a===m})},a)}))))))}},1512:function(e,a,t){e.exports=t.p+"packs/icons/confetti-630b49be.svg"}}]);
//# sourceMappingURL=onboarding-e601de2ae33d34a611d3.chunk.js.map