(this["webpackJsonpliveroom-pagination"]=this["webpackJsonpliveroom-pagination"]||[]).push([[0],{59:function(e,t,a){e.exports=a(69)},67:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(7),l=a.n(i),r=a(36),o=a(16),s=a(115),m=a(106),u=a(70),p=a(110),d=a(118),b=Object(m.a)((function(e){return{paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary,display:"flex",justifyContent:"center",flexDirection:"row"}}})),E=function(e){var t=e.name,a=e.date,n=(e.time,e.timeout),i=(e.isFirstRender,e.isCompleted),l=b();return c.a.createElement(d.a,Object.assign({in:!0,key:t,unmountOnExit:!0,style:{transformOrigin:"0 0 0"}},{timeout:n}),c.a.createElement(u.a,{elevation:3,className:l.paper,style:{color:i?"white":"black",marginBottom:"2%",backgroundColor:i?"#35C706":"white"}},c.a.createElement("div",null,c.a.createElement(p.a,{variant:"h6"},t),c.a.createElement(p.a,{variant:"subtitle1"},a)),c.a.createElement("div",{style:{flexGrow:1}}),c.a.createElement("img",{src:"https://avatars.dicebear.com/api/human/".concat(t,".svg"),height:"50",width:"50"})))},g=a(113),f=a(116),v=a(47),O=a.n(v),j=a(46),h=a.n(j),y=a(114),x=a(119),w=a(117),S=a(112),k=a(48),R=a(111),C=(a(67),Object(m.a)((function(e){return{title:{flexGrow:1},appbar:{alignItems:"center"}}}))),N=Object(k.a)({palette:{background:{default:"#D4E0E4"}}}),K=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],i=t[1],l=C(),m=Object(n.useState)(void 0),u=Object(o.a)(m,2),d=u[0],b=u[1],v=Object(n.useState)(),j=Object(o.a)(v,2),k=j[0],K=j[1],_=Object(n.useState)([]),L=Object(o.a)(_,2),F=L[0],G=L[1],I=Object(n.useState)(1),J=Object(o.a)(I,2),P=J[0],T=J[1],A=Object(n.useState)(!1),B=Object(o.a)(A,2),D=B[0],M=B[1],z=Object(n.useState)(3),U=Object(o.a)(z,2),q=U[0],H=U[1];Object(n.useEffect)((function(){fetch("https://af5xufo4j6.execute-api.us-east-1.amazonaws.com/test/all",{method:"POST",body:JSON.stringify({LastEvaluatedKey:d,limit:q})}).then((function(e){return e.json()})).then((function(e){e.LastEvaluatedKey||M(!0),K(e.LastEvaluatedKey),i(e.Items)})).catch((function(e){return console.log(e)}))}),[d,q]);return c.a.createElement(R.a,{theme:N},c.a.createElement(S.a,null),c.a.createElement(g.a,{position:"static",className:l.appbar},c.a.createElement(y.a,null,c.a.createElement(p.a,{variant:"h6",className:l.title},"The LiveRoom Pagination App"))),c.a.createElement(s.a,{container:!0,spacing:0,className:"main_container"},c.a.createElement(s.a,{item:!0,xs:12,sm:12,md:2,lg:2}),c.a.createElement(s.a,{item:!0,xs:12,sm:12,md:8,lg:8,style:{marginTop:"1.3%"}},c.a.createElement("div",{id:"btn_container"},c.a.createElement("p",{style:{marginRight:"2%"}},"Rows per page"),c.a.createElement(w.a,{value:q,disableUnderline:!0,onChange:function(e){H(e.target.value),T(1),b(void 0),G([])}},c.a.createElement(x.a,{value:3},"3"),c.a.createElement(x.a,{value:5},"5"),c.a.createElement(x.a,{value:10},"10")),c.a.createElement("div",{style:{flexGrow:1}}),c.a.createElement(f.a,{onClick:function(){P>1&&T(P-1),D&&M(!1);var e=Object(r.a)(F),t=e.pop();G(e),b(t)},className:"pagination_btn",disableRipple:!0,disableFocusRipple:!0,disabled:1===P},c.a.createElement(h.a,null)),c.a.createElement("p",{id:"current_page"},"current page: ",P),c.a.createElement(f.a,{onClick:function(){G((function(e){return[].concat(Object(r.a)(e),[d])})),b(k),T(P+1)},className:"pagination_btn",disableRipple:!0,disableFocusRipple:!0,disabled:D,style:{padding:0}},c.a.createElement(O.a,null))),a.map((function(e,t){return c.a.createElement(E,{id:Math.random(),timeout:250*(t+1),name:e.PK,date:e.SK})})))))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(K,null)),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.3869796f.chunk.js.map