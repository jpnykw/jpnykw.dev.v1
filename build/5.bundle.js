(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{26:function(t,a,e){"use strict";e.r(a);var n,i=e(0),r=e(34),o=e(1),p=e(62),c=e(60),l=e.p+"src/assets/images/liquid_jpnykw.png",s=(e(15),function(t,a){return Object.defineProperty?Object.defineProperty(t,"raw",{value:a}):t.raw=a,t}),d=(a.default=function(t){return i.createElement(i.Fragment,null,i.createElement(d,null,i.createElement(p.a,{className:"text",ref:function(t){Object(r.a)({targets:t,opacity:1,duration:3600,delay:2800})}},i.createElement(c.a,null,"2002年3月5日生まれ ",(new Date).calcAge({year:2002,month:3,date:5}),"歳"),i.createElement(c.a,null,"映像やWebコンテンツなど動くものが好き")),i.createElement("img",{src:l,ref:function(t){Object(r.a)({targets:t,opacity:.3,duration:3800,delay:3e3})}}),i.createElement(p.a,{className:"text",ref:function(t){Object(r.a)({targets:t,opacity:1,duration:4e3,delay:3200})}},i.createElement(c.a,null,"未踏ジュニア'19 採択"),i.createElement(c.a,null,"SecHack365'19 採択"),i.createElement(c.a,null,"N高等学校 特別表彰受賞"))))},o.a.div(n||(n=s(["\n  text-align: center;\n  margin-top: 200;\n\n  .text {\n    opacity: 0;\n  }\n\n  .credit {\n    margin-top: 200;\n  }\n\n  img {\n    margin-top: 100;\n    margin-bottom: 100;\n    border-radius: 30px;\n    opacity: 0;\n\n    @media screen and (max-width: 480px) {\n      border-radius: 8px;\n      width: 90%;\n    }\n  }\n"],["\n  text-align: center;\n  margin-top: 200;\n\n  .text {\n    opacity: 0;\n  }\n\n  .credit {\n    margin-top: 200;\n  }\n\n  img {\n    margin-top: 100;\n    margin-bottom: 100;\n    border-radius: 30px;\n    opacity: 0;\n\n    @media screen and (max-width: 480px) {\n      border-radius: 8px;\n      width: 90%;\n    }\n  }\n"]))))},60:function(t,a,e){"use strict";var n=e(27),i=e(28),r=e(0),o=e.n(r),p=(e(29),e(30)),c=e(31),l=e(33),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=o.a.forwardRef((function(t,a){var e=t.align,r=void 0===e?"inherit":e,c=t.classes,d=t.className,m=t.color,g=void 0===m?"initial":m,h=t.component,u=t.display,b=void 0===u?"initial":u,y=t.gutterBottom,x=void 0!==y&&y,f=t.noWrap,v=void 0!==f&&f,j=t.paragraph,O=void 0!==j&&j,w=t.variant,k=void 0===w?"body1":w,W=t.variantMapping,E=void 0===W?s:W,N=Object(i.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),B=h||(O?"p":E[k]||s[k])||"span";return o.a.createElement(B,Object(n.a)({className:Object(p.a)(c.root,d,"inherit"!==k&&c[k],"initial"!==g&&c["color".concat(Object(l.a)(g))],v&&c.noWrap,x&&c.gutterBottom,O&&c.paragraph,"inherit"!==r&&c["align".concat(Object(l.a)(r))],"initial"!==b&&c["display".concat(Object(l.a)(b))]),ref:a},N))}));a.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(d)},62:function(t,a,e){"use strict";var n=e(27),i=e(28),r=e(36),o=e(0),p=e.n(o),c=(e(29),e(30)),l=e(31),s=e(33),d=p.a.forwardRef((function(t,a){var e=t.classes,r=t.className,o=t.component,l=void 0===o?"div":o,d=t.disableGutters,m=void 0!==d&&d,g=t.fixed,h=void 0!==g&&g,u=t.maxWidth,b=void 0===u?"lg":u,y=Object(i.a)(t,["classes","className","component","disableGutters","fixed","maxWidth"]);return p.a.createElement(l,Object(n.a)({className:Object(c.a)(e.root,r,h&&e.fixed,m&&e.disableGutters,!1!==b&&e["maxWidth".concat(Object(s.a)(String(b)))]),ref:a},y))}));a.a=Object(l.a)((function(t){return{root:Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",paddingLeft:t.spacing(2),paddingRight:t.spacing(2)},t.breakpoints.up("sm"),{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}),disableGutters:{paddingLeft:0,paddingRight:0},fixed:Object.keys(t.breakpoints.values).reduce((function(a,e){var n=t.breakpoints.values[e];return 0!==n&&(a[t.breakpoints.up(e)]={maxWidth:n}),a}),{}),maxWidthXs:Object(r.a)({},t.breakpoints.up("xs"),{maxWidth:Math.max(t.breakpoints.values.xs,444)}),maxWidthSm:Object(r.a)({},t.breakpoints.up("sm"),{maxWidth:t.breakpoints.values.sm}),maxWidthMd:Object(r.a)({},t.breakpoints.up("md"),{maxWidth:t.breakpoints.values.md}),maxWidthLg:Object(r.a)({},t.breakpoints.up("lg"),{maxWidth:t.breakpoints.values.lg}),maxWidthXl:Object(r.a)({},t.breakpoints.up("xl"),{maxWidth:t.breakpoints.values.xl})}}),{name:"MuiContainer"})(d)}}]);