(this["webpackJsonpliveroom-pagination"]=this["webpackJsonpliveroom-pagination"]||[]).push([[0],{59:function(e,t,a){e.exports=a(69)},67:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),c=a.n(l),r=a(36),o=a(18),s=a(115),m=a(106),u=a(70),p=a(110),d=a(118),b=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,display:"flex",justifyContent:"center",flexDirection:"row"}}})),E=function(e){var t=e.name,a=e.date,n=(e.time,e.timeout),l=(e.isFirstRender,e.isCompleted),c=b();return i.a.createElement(d.a,Object.assign({in:!0,unmountOnExit:!0,style:{transformOrigin:"0 0 0"}},{timeout:n}),i.a.createElement(u.a,{elevation:3,className:c.paper,style:{color:l?"white":"black",marginBottom:"2%",backgroundColor:l?"#35C706":"white"}},i.a.createElement("div",null,i.a.createElement(p.a,{variant:"h6"},t),i.a.createElement(p.a,{variant:"subtitle1"},a)),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement("img",{src:"https://avatars.dicebear.com/api/human/".concat(t,".svg"),height:"50",width:"50"})))},g=a(113),f=a(116),v=a(47),h=a.n(v),O=a(46),j=a.n(O),y=a(114),x=a(119),w=a(117),S=a(112),k=a(48),R=a(111),C=(a(67),Object(m.a)((function(e){return{title:{flexGrow:1},appbar:{alignItems:"center"}}}))),N=Object(k.a)({palette:{background:{default:"#D4E0E4"}}}),K=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],l=t[1],c=C(),m=Object(n.useState)(void 0),u=Object(o.a)(m,2),d=u[0],b=u[1],v=Object(n.useState)(),O=Object(o.a)(v,2),k=O[0],K=O[1],_=Object(n.useState)([]),L=Object(o.a)(_,2),P=L[0],F=L[1],G=Object(n.useState)(!1),I=Object(o.a)(G,2),J=I[0],T=I[1],A=Object(n.useState)(3),B=Object(o.a)(A,2),D=B[0],M=B[1];Object(n.useEffect)((function(){fetch("https://af5xufo4j6.execute-api.us-east-1.amazonaws.com/test/all",{method:"POST",body:JSON.stringify({LastEvaluatedKey:d,limit:D})}).then((function(e){return e.json()})).then((function(e){e.LastEvaluatedKey||T(!0),K(e.LastEvaluatedKey),l(e.Items)})).catch((function(e){return console.log(e)}))}),[d,D]);return i.a.createElement(R.a,{theme:N},i.a.createElement(S.a,null),i.a.createElement(g.a,{position:"static",className:c.appbar},i.a.createElement(y.a,null,i.a.createElement(p.a,{variant:"h6",className:c.title},"The LiveRoom Pagination App"))),i.a.createElement(s.a,{container:!0,spacing:0,className:"main_container"},i.a.createElement(s.a,{item:!0,xs:12,sm:12,md:2,lg:2}),i.a.createElement(s.a,{item:!0,xs:12,sm:12,md:8,lg:8,style:{marginTop:"1.3%",padding:"2%"}},i.a.createElement("div",{id:"btn_container"},i.a.createElement(p.a,{variant:"subtitle1",style:{marginRight:"2%"}},"Rows per page"),i.a.createElement(w.a,{value:D,disableUnderline:!0,onChange:function(e){M(e.target.value),T(!1),b(void 0),F([])}},i.a.createElement(x.a,{value:3},"3"),i.a.createElement(x.a,{value:5},"5"),i.a.createElement(x.a,{value:10},"10")),i.a.createElement("div",{style:{flexGrow:1}}),i.a.createElement(f.a,{onClick:function(){J&&T(!1);var e=Object(r.a)(P),t=e.pop();F(e),b(t)},className:"pagination_btn",disableRipple:!0,style:{padding:0},disableFocusRipple:!0,disabled:0===P.length},i.a.createElement(j.a,null)),i.a.createElement("p",{id:"current_page"},"current page: ",P.length+1),i.a.createElement(f.a,{onClick:function(){F((function(e){return[].concat(Object(r.a)(e),[d])})),b(k)},className:"pagination_btn",disableRipple:!0,disableFocusRipple:!0,disabled:J,style:{padding:0}},i.a.createElement(h.a,null))),a.map((function(e,t){return i.a.createElement(E,{key:e.PK,id:Math.random(),timeout:250*(t+1),name:e.PK,date:e.SK})})))))};c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(K,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.5a1d328e.chunk.js.map