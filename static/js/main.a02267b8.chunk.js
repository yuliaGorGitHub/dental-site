(this["webpackJsonpdental-site"]=this["webpackJsonpdental-site"]||[]).push([[0],{447:function(e,t,n){},448:function(e,t,n){},681:function(e,t){},683:function(e,t){},694:function(e,t){},696:function(e,t){},723:function(e,t){},725:function(e,t){},726:function(e,t){},731:function(e,t){},733:function(e,t){},752:function(e,t){},764:function(e,t){},767:function(e,t){},809:function(e,t,n){},810:function(e,t,n){},815:function(e,t,n){},817:function(e,t,n){},818:function(e,t,n){},819:function(e,t,n){},820:function(e,t,n){},821:function(e,t,n){},822:function(e,t,n){},823:function(e,t,n){},824:function(e,t,n){},825:function(e,t,n){},826:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(22),s=n.n(i),o=(n(447),n(19)),l=n.n(o),d=n(49),j=n(13),b=(n(448),n(65)),p=n(184),u=n(31),h=n(12),x=n.n(h),O=(n(809),n(865)),m=n(831),g=n(872),f=n(873),v=n(869),y=n(883),w=n(884),k=n(867),S=(n(810),n(829)),N=n(870),C=n(871),I=n(897),T=n(414),D=n.n(T),A=n(416),P=n.n(A),U=n(417),F=n.n(U),z=n(415),E=n.n(z);var R=function(e){e.appointments;var t=e.fromScreen,n=e.returnToList,c=e.takeApp,i=e.row,s=e.index,o=e.setShowModal,l=e.setSelectedRow,d=r.a.useState(!1),b=Object(j.a)(d,2),p=b[0],u=b[1],h=Object(O.a)({root:{width:"90%",margin:"0 auto"},container:{maxHeight:440},displayFlex:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},padding:{paddingTop:0,paddingBottom:0},resize:{fontSize:14},right:{textAlign:"right"},hover:{"&:hover":{opacity:"0.7"}},even:{backgroundColor:"#E3E8E9"},odd:{backgroundColor:"#DDFFE7"},footer:{"& > td > div":{height:30,minHeight:30},backgroundColor:"grey",height:30,minHeight:30}})();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(k.a,{className:"".concat(h.hover," ").concat(s%2?h.even:h.odd),children:[Object(a.jsx)(v.a,{className:"".concat(h.padding," ").concat(h.right),children:i.appDate},s),Object(a.jsx)(v.a,{className:"".concat(h.padding," ").concat(h.right),children:i.appWeekDay},s),Object(a.jsx)(v.a,{className:"".concat(h.padding," ").concat(h.right),children:i.appStartTime},s),Object(a.jsx)(v.a,{className:"".concat(h.padding," ").concat(h.right),children:i.doctorName},s),Object(a.jsx)(v.a,{className:"".concat(h.padding," ").concat(h.right),value:i.id,children:"appoint"===t?Object(a.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"create",dir:"rtl",className:h.padding,value:i.id,onClick:function(){return c(i.id)},children:Object(a.jsx)(D.a,{fontSize:"small",color:"primary"})}):"work"===t?Object(a.jsxs)("div",{className:"".concat(h.padding," ").concat(h.displayFlex),children:[Object(a.jsx)(N.a,{href:"#/personal/".concat(i.pacientId.id),className:h.resize,children:i.pacientName}),Object(a.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"create",dir:"rtl",className:h.padding,onClick:function(){return e=i.id,l(e),void o();var e},children:Object(a.jsx)(E.a,{fontSize:"small",color:"primary"})})]}):"pActive"===t?Object(a.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"create",dir:"rtl",className:h.padding,onClick:function(){return e=i.id,void n(e);var e},children:Object(a.jsx)(P.a,{fontSize:"small",color:"primary"})}):"pHistory"===t?Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"create",dir:"rtl",className:h.padding,onClick:function(){return u(!p)},children:Object(a.jsx)(F.a,{fontSize:"small",color:"primary"})})}):""},s)]},s),Object(a.jsx)(k.a,{className:"".concat(h.right," ").concat(s%2?h.even:h.odd),children:Object(a.jsx)(v.a,{className:"".concat(h.padding," ").concat(h.right),colSpan:5,children:Object(a.jsx)(C.a,{in:p,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(I.a,{margin:1,children:Object(a.jsx)(g.a,{size:"small",children:Object(a.jsx)(f.a,{children:Object(a.jsx)(k.a,{children:Object(a.jsx)(v.a,{component:"th",scope:"row",align:"right",children:i.comments},s)},s)})})})})},s)})]})},W=n(903),H=n(874),L=n(875),M=n(876),B=n(877);function Q(e){var t=e.count,n=e.page,c=e.rowsPerPage,r=e.onChangePage,i=function(e,t){return Math.ceil(e/t)},s=Object(O.a)({padding:{paddingTop:0,paddingBottom:0}})();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S.a,{onClick:function(){r(0)},disabled:0===n,className:s.padding,"aria-label":"first page",children:Object(a.jsx)(H.a,{})}),Object(a.jsx)(S.a,{onClick:function(){r(n-1)},disabled:0===n,className:s.padding,"aria-label":"previous page",children:Object(a.jsx)(L.a,{})}),Object(a.jsx)(S.a,{className:s.padding,onClick:function(){r(Number(n)+1)},disabled:n>=i(t,c)-1,"aria-label":"next page",children:Object(a.jsx)(M.a,{})}),Object(a.jsx)(S.a,{className:s.padding,onClick:function(){r(i(t,c)-1)},disabled:n>=i(t,c)-1,"aria-label":"last page",children:Object(a.jsx)(B.a,{})})]})}var J=function(e){var t=e.rowsPerPage,n=e.rowCount,c=e.onChangePage,r=e.onChangeRowsPerPage,i=e.currentPage;return Object(a.jsx)(W.a,{labelRowsPerPage:"\u05e9\u05d5\u05e8\u05d5\u05ea \u05d1\u05d3\u05e3:",component:"nav",count:n,rowsPerPage:t,rowsPerPageOptions:[3,6,9],page:i,labelDisplayedRows:function(e){var t=e.from,n=e.to,a=e.count;return" \u05d4\u05e6\u05d2\u05ea \u05e9\u05d5\u05e8\u05d5\u05ea ".concat(t,"-").concat(n,' \u05e1\u05d4"\u05db ').concat(a," \u05e9\u05d5\u05e8\u05d5\u05ea")},onChangePage:c,onChangeRowsPerPage:function(e){return r(Number(e.target.value))},SelectProps:{native:!0},ActionsComponent:Q})};var q=function(e){var t=e.appointments,n=e.fromScreen,c=e.returnToList,i=e.takeApp,s=e.setShowModal,o=e.setSelectedRow,l=r.a.useState(0),d=Object(j.a)(l,2),b=d[0],p=d[1],u=r.a.useState(3),h=Object(j.a)(u,2),x=h[0],S=h[1],N="appoint"===n?"\u05ea\u05d0\u05d5\u05dd \u05ea\u05d5\u05e8":"pActive"===n?"\u05d1\u05d9\u05d8\u05d5\u05dc \u05ea\u05d5\u05e8":"pHistory"===n?"\u05e6\u05e4\u05d9\u05d9\u05d4 \u05d1\u05e4\u05e8\u05d8\u05d9\u05dd":"\u05e9\u05dd \u05d4\u05de\u05d8\u05d5\u05e4\u05dc",C=Object(O.a)({root:{width:"90%",margin:"0 auto"},container:{maxHeight:440},padding:{paddingTop:0,paddingBottom:0},right:{diraction:"ltr",textAlign:"right",align:"right"},footer:{"& > td > div":{height:30,minHeight:30},background:"linear-gradient(45deg, #D3F7EE 30%, #E4DFD9 90%)"}})();return Object(a.jsxs)(m.a,{className:C.root,children:[Object(a.jsx)(y.a,{className:C.container,children:Object(a.jsxs)(g.a,{"aria-label":"sticky table",children:[Object(a.jsx)(w.a,{children:Object(a.jsxs)(k.a,{className:C.header,children:[Object(a.jsx)(v.a,{className:C.padding,align:"right",children:"\u05ea\u05d0\u05e8\u05d9\u05da"}),Object(a.jsx)(v.a,{className:C.padding,align:"right",children:"\u05d9\u05d5\u05dd"}),Object(a.jsx)(v.a,{className:C.padding,align:"right",children:"\u05e9\u05e2\u05d4"}),Object(a.jsx)(v.a,{className:C.padding,align:"right",children:"\u05e8\u05d5\u05e4\u05d0"}),Object(a.jsx)(v.a,{className:C.padding,align:"right",children:N})]})}),Object(a.jsx)(f.a,{children:t.slice(b*x,b*x+x).map((function(e,t){return Object(a.jsx)(R,{fromScreen:n,returnToList:c,takeApp:i,row:e,index:t,setShowModal:s,setSelectedRow:o})}))})]})}),Object(a.jsx)(J,{rowCount:t.length,rowsPerPage:x,currentPage:b,onChangePage:function(e){p(e)},onChangeRowsPerPage:function(e){S(e),p(0)}})]})},K=(n(815),n(227)),V=n(418),G=function(){function e(t){Object(K.a)(this,e),this.daysOfWeek=["\u05d0","\u05d1","\u05d2","\u05d3","\u05d4","\u05d5","\u05e9"],this.id=t.id,this.appDateTime=t.get("appDateTime"),this.doctorId=t.get("doctorId"),this.doctorName=void 0==t.get("doctorId")?"":t.get("doctorId").get("fname")+" "+t.get("doctorId").get("lname"),this.pacientId=t.get("pacientId"),this.pacientName=void 0==t.get("pacientId")?"":t.get("pacientId").get("fname")+" "+t.get("pacientId").get("lname"),this.comments=t.get("comments"),this.createdAt=t.get("createdAt"),this.updatedAt=t.get("updatedAt"),this.updatedBy=t.get("updatedBy"),this.appDuration=29}return Object(V.a)(e,[{key:"pad",value:function(e){return e<10?"0"+e:e}},{key:"appDate",get:function(){var e=this.appDateTime.getDate(),t=this.appDateTime.getMonth(),n=this.appDateTime.getFullYear();return this.pad(e)+"/"+this.pad(t+1)+"/"+n}},{key:"appStartTime",get:function(){return this.appDateTime.toString().split(" ")[4].substring(0,5)}},{key:"appEndTime",get:function(){var e=this.appDateTime.getTime();return new Date(e+60*this.appDuration*1e3)}},{key:"appWeekDay",get:function(){var e=this.appDateTime;return this.daysOfWeek[e.getDay()]}}]),e}();var Z=function(e){var t=e.activeUser,n=e.employeeArray,r=Object(c.useState)([]),i=Object(j.a)(r,2),s=i[0],o=i[1],h=Object(u.g)().id,O=h?{__type:"Pointer",className:"_User",objectId:h}:x.a.User.current();if(Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,n,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.a.Object.extend("Appointment"),(n=new x.a.Query(t)).exists("doctorId"),n.equalTo("pacientId",O),n.addDescending("appDateTime"),e.next=7,n.find();case 7:c=e.sent,r=c.map((function(e){return new G(e)})),i=a(r),o(i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(e){var t,a=Object(p.a)(e);try{var c=function(){var e=t.value,a=n.find((function(t){return t.doctorId===e.doctorId.id}));e.doctorName=a.fname+" "+a.lname,console.log(e.doctorName)};for(a.s();!(t=a.n()).done;)c()}catch(r){a.e(r)}finally{a.f()}return e}t&&function(){e.apply(this,arguments)}()}),[]),!t)return Object(a.jsx)(u.a,{to:"/"});var m=new Date,g=s.filter((function(e){return e.appDateTime<m})),f=s.filter((function(e){return e.appDateTime>=m}));function v(e){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(l.a.mark((function e(t){var n,a,c,r,i,d;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.findIndex((function(e){return e.id===t})),(a=Object(b.a)(s)).splice(n,1),c=x.a.Object.extend("Appointment"),r=new x.a.Query(c),e.next=7,r.get(t);case 7:return(i=e.sent).set("pacientId",null),i.set("updatedBy",x.a.User.current()),e.next=12,i.save();case 12:d=e.sent,new G(d),o(a);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("h3",{children:["\u05e9\u05dc\u05d5\u05dd   ",t?t.fname:""]}),Object(a.jsx)("h4",{children:h?" \u05d4\u05d3\u05e3 \u05e9\u05dc \u05de\u05d8\u05d5\u05e4\u05dc "+h:""}),f&&f.length>0?Object(a.jsx)(q,{appointments:f,fromScreen:"pActive",returnToList:v}):Object(a.jsx)("p",{children:"\u05d0\u05d9\u05df \u05dc\u05da \u05ea\u05d5\u05e8\u05d9\u05dd \u05e2\u05ea\u05d9\u05d3\u05d9\u05d9\u05dd"}),Object(a.jsx)("h4",{children:"\u05d4\u05e1\u05d8\u05d5\u05e8\u05d9\u05d9\u05ea \u05d1\u05d9\u05e7\u05d5\u05e8\u05d9\u05dd "}),g&&g.length>0?Object(a.jsx)(q,{appointments:g,fromScreen:"pHistory",returnToList:v}):Object(a.jsx)("p",{children:"\u05d0\u05d9\u05df \u05dc\u05da \u05d4\u05e1\u05d8\u05d5\u05e8\u05d9\u05d9\u05d4 \u05dc\u05e6\u05e4\u05d9\u05d9\u05d4"})]})},$=n(104),_=n(886),Y=n(67),X=(n(817),n(888)),ee=n(885),te=n(902),ne=n(28),ae=n(154),ce=n.n(ae),re=n(830),ie=n(887),se=n(898),oe=n(904),le=n(900),de=function e(t,n){Object(K.a)(this,e),this.id=t.id,this.tzeut=t.get("tzeut"),this.pwd=t.get("pwd"),this.fname=t.get("fname"),this.lname=t.get("lname"),this.birthdate=t.get("birthdate"),this.sex=t.get("sex"),this.phone=t.get("phone"),this.email=t.get("email"),this.job=null!=t.get("jobId")?t.get("jobId").id:"",this.jobStr=n};var je=function(e){e.activeUser;var t=e.onLogin,n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],s=r[1],o=Object(c.useState)(""),l=Object(j.a)(o,2),d=l[0],p=l[1],u=Object(c.useState)(!1),h=Object(j.a)(u,2),m=h[0],g=h[1],f=Object(ne.b)({plugins:[].concat(Object(b.a)(Object(se.a)().plugins),[ce()()])}),v=Object(O.a)((function(e){var t;return{root:(t={maxWidth:345},Object(Y.a)(t,e.breakpoints.down("md"),{maxWidth:280}),Object(Y.a)(t,e.breakpoints.down("sm"),{maxWidth:200}),t),container:{padding:e.spacing(3),border:"1px solid blue",borderTopRightRadius:"25px"},right:{display:"flex",justifyContent:"space-around"}}}))();return Object(a.jsxs)(ee.a,{className:"".concat(v.container," ").concat(v.root),children:[Object(a.jsx)("h3",{children:"\u05db\u05e0\u05d9\u05e1\u05d4 \u05dc\u05de\u05d8\u05d5\u05e4\u05dc"}),Object(a.jsx)("form",{children:Object(a.jsxs)(_.a,{container:!0,spacing:3,className:v.right,children:[Object(a.jsx)(_.a,{item:!0,xs:12,children:Object(a.jsxs)(_.a,{container:!0,spacing:2,children:[Object(a.jsx)(_.a,{item:!0,xs:12,dir:"rtl",children:m?Object(a.jsx)(le.a,{variant:"outlined",severity:"error",children:"\u05e9\u05dd \u05de\u05e9\u05ea\u05de\u05e9 \u05d0\u05d5 \u05e1\u05d9\u05e1\u05de\u05d0 \u05dc\u05d0 \u05ea\u05e7\u05d9\u05e0\u05d9\u05dd!"}):null}),Object(a.jsxs)(oe.b,{jss:f,children:[Object(a.jsx)(_.a,{item:!0,xs:12,dir:"rtl",children:Object(a.jsx)(te.a,{fullWidth:!0,label:"\u05ea\u05e2\u05d5\u05d3\u05ea \u05d6\u05d4\u05d5\u05ea",value:i,name:"tzeut",size:"small",variant:"outlined",onChange:function(e){s(e.target.value),g(!1)}})}),Object(a.jsx)(_.a,{item:!0,xs:12,children:Object(a.jsx)(te.a,{fullWidth:!0,label:"\u05e1\u05d9\u05e1\u05de\u05d0",value:d,name:"password",size:"small",type:"password",variant:"outlined",onChange:function(e){p(e.target.value),g(!1)}})})]})]})}),Object(a.jsx)("a",{href:"",children:Object(a.jsx)(re.a,{button:!0,children:Object(a.jsx)(ie.a,{primary:"\u05e9\u05db\u05d7\u05ea \u05e1\u05d9\u05e1\u05de\u05d0?"})})}),Object(a.jsx)(_.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{color:"primary",fullWidth:!0,type:"button",variant:"contained",onClick:function(){x.a.User.logIn(i,d).then((function(e){if(null!=e.get("jobId")){var n=x.a.Object.extend("job");new x.a.Query(n).get(e.get("jobId").id).then((function(n){t(new de(e,n.get("jobHebrew")))})).catch((function(e){console.log(e)}))}else t(new de(e,""))})).catch((function(e){console.error("Error while logging in user",e),g(!0)}))},children:"\u05db\u05e0\u05d9\u05e1\u05d4"})})]})})]})};n(818);var be=function(e){var t=Object(O.a)((function(e){var t;return{root:(t={maxWidth:500},Object(Y.a)(t,e.breakpoints.down("md"),{maxWidth:350}),Object(Y.a)(t,e.breakpoints.down("sm"),{maxWidth:200}),t),container:{padding:e.spacing(3),border:"1px solid blue",borderTopLeftRadius:"25px"},right:{display:"flex",justifyContent:"space-around"}}})),n=(Object(ne.b)({plugins:[].concat(Object(b.a)(Object(se.a)().plugins),[ce()()])}),t());return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(ee.a,{className:"".concat(n.container," ").concat(n.root),children:[Object(a.jsx)("h3",{children:"\u05e9\u05d9\u05e8\u05d5\u05ea\u05d9 \u05d4\u05d0\u05ea\u05e8"}),Object(a.jsx)("a",{href:"#/appointments/Geb4GTbjAg",children:Object(a.jsx)(re.a,{button:!0,children:Object(a.jsx)(ie.a,{primary:"\u05d6\u05d9\u05de\u05d5\u05df \u05ea\u05d5\u05e8 \u05dc\u05d1\u05d3\u05d9\u05e7\u05ea \u05e8\u05d5\u05e4\u05d0 \u05e9\u05d9\u05e0\u05d9\u05d9\u05dd"})})}),Object(a.jsx)("a",{href:"#/appointments/5lRmREiFH3",children:Object(a.jsx)(re.a,{button:!0,children:Object(a.jsx)(ie.a,{primary:"\u05d6\u05d9\u05de\u05d5\u05df \u05ea\u05d5\u05e8 \u05dc\u05d1\u05d3\u05d9\u05e7\u05d4 \u05dc\u05d9\u05d9\u05e9\u05d5\u05e8 \u05e9\u05d9\u05e0\u05d9\u05d9\u05dd"})})}),Object(a.jsx)("a",{href:"#/appointments/S5Z6hBmEka",children:Object(a.jsx)(re.a,{button:!0,children:Object(a.jsx)(ie.a,{primary:"\u05d6\u05d9\u05de\u05d5\u05df \u05ea\u05d5\u05e8 \u05dc\u05e9\u05d9\u05e0\u05e0\u05d9\u05ea"})})})]})})};n(819);var pe=function(e){var t=e.activeUser,n=(e.users,e.onLogin),r=Object(c.useState)(!1),i=Object(j.a)(r,2),s=i[0],o=i[1];return s&&t?t.job?Object(a.jsx)(u.a,{to:"/work"}):Object(a.jsx)(u.a,{to:"/personal"}):Object(a.jsxs)("div",{className:"p-home",children:[Object(a.jsx)("p",{children:"Home Page"}),Object(a.jsx)(_.a,{container:!0,spacing:1,children:Object(a.jsxs)(_.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(a.jsx)(je,{activeUser:t,onLogin:function(e){n(e),o(!0)}}),Object(a.jsx)(be,{activeUser:t})]})})]})};n(820),Object(ne.b)({plugins:[].concat(Object(b.a)(Object(se.a)().plugins),[ce()()])});function ue(){return Math.round(20*Math.random())-10}function he(){var e=50+ue(),t=50+ue();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var xe=Object(O.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",textAlign:"right"},space:{display:"flex",justifyContent:"center",paddingTop:20,paddingBottom:20},paper:{position:"absolute",width:450,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},resize:{fontSize:12,textAlign:"right"}}}));function Oe(e){var t=e.handleClose,n=e.handleComment,i=e.show,s=e.children,o=xe(),l=r.a.useState(he),d=Object(j.a)(l,1)[0],b=Object(c.useState)(""),p=Object(j.a)(b,2),u=p[0],h=p[1];function x(){h(""),t()}return Object(a.jsx)("div",{dir:"rtl",children:Object(a.jsx)("dialog",{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:i,onClose:t,children:Object(a.jsxs)("div",{style:d,className:o.paper,children:[Object(a.jsx)("h2",{children:"Simple React Modal"}),Object(a.jsx)("p",{children:s}),Object(a.jsx)("form",{className:o.root,noValidate:!0,autoComplete:"off",children:Object(a.jsx)(te.a,{className:o.resize,label:"\u05e1\u05d9\u05db\u05d5\u05dd",variant:"filled",fullWidth:!0,rowsMax:"4",multiline:!0,rows:4,InputProps:{classes:{input:o.resize}},textAlign:"right",value:u,onChange:function(e){return h(e.target.value)}})}),Object(a.jsxs)("div",{className:o.space,children:[Object(a.jsx)(X.a,{variant:"contained",color:"primary",onClick:x,m:"2rem",children:"Close"}),Object(a.jsx)("div",{style:{width:"30px"}}),Object(a.jsx)(X.a,{variant:"contained",color:"primary",onClick:function(){n(u),x()},children:"Save"})]})]})})})}n(821);var me=function(e){var t=e.activeUser,n=(e.appointments,r.a.useState(!1)),i=Object(j.a)(n,2),s=i[0],o=i[1],h=r.a.useState(-1),O=Object(j.a)(h,2),m=O[0],g=O[1],f=r.a.useState([]),v=Object(j.a)(f,2),y=v[0],w=v[1],k=r.a.useState(null),S=Object(j.a)(k,2);S[0],S[1],Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=x.a.Object.extend("Appointment"),(a=new x.a.Query(t)).notEqualTo("pacientId",null),a.equalTo("doctorId",x.a.User.current()),a.addAscending("appDateTime"),e.next=7,a.find();case 7:return c=e.sent,r=c.map((function(e){return new G(e)})),e.next=11,n(r);case 11:i=e.sent,w(i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function n(e){return a.apply(this,arguments)}function a(){return(a=Object(d.a)(l.a.mark((function e(t){var n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(p.a)(t),e.prev=1,n.s();case 3:if((a=n.n()).done){e.next=12;break}return c=a.value,r=new x.a.Query(x.a.User),e.next=8,r.get(c.pacientId.id);case 8:i=e.sent,c.pacientName=i.get("fname")+" "+i.get("lname");case 10:e.next=3;break;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),n.e(e.t0);case 17:return e.prev=17,n.f(),e.finish(17);case 20:return e.abrupt("return",t);case 21:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t]);var N=function(){return o(!s)};function C(){if(y.length>0){var e=y.find((function(e){return e.id===m}));return C=void 0==e||void 0==e.comments?"":e.comments.replace("/\n/g","&#13;&#10;")}}var I=Object(c.useMemo)((function(){return C()}),[m,y]);function T(){return(T=Object(d.a)(l.a.mark((function e(t){var n,a,c,r,i,s,o,d,j,p,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.findIndex((function(e){return e.id===m})),(a=Object(b.a)(y)).splice(n,1),c=x.a.Object.extend("Appointment"),r=new x.a.Query(c),e.next=7,r.get(m);case 7:return i=e.sent,s=new Date,o=s.toString().split(" "),d=o[4].substring(0,5),j=i.get("comments"),i.set("comments",j+"\n"+d+"\n"+t),i.set("updatedBy",x.a.User.current()),e.next=16,i.save();case 16:p=e.sent,u=new G(p),a.splice(n,0,u),w(a);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t&&t.job?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["today ",y.length]}),Object(a.jsxs)("h3",{children:[" \u05e9\u05dc\u05d5\u05dd   ",t?t.jobStr+" "+t.fname:""," "]}),Object(a.jsx)("p",{children:"Work Area"}),y&&y.length>0?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{appointments:y,fromScreen:"work",setShowModal:N,setSelectedRow:g}),Object(a.jsx)(Oe,{show:s,handleClose:N,handleComment:function(e){return T.apply(this,arguments)},children:I})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("p",{children:"\u05d0\u05d9\u05df \u05dc\u05da \u05ea\u05d5\u05e8\u05d9\u05dd \u05dc\u05d4\u05d9\u05d5\u05dd"}),Object(a.jsx)("p",{children:"\u05e7\u05d7 \u05d9\u05dc\u05d3\u05d9\u05dd \u05dc\u05d7\u05d5\u05e4\u05e9!"})]})]}):Object(a.jsx)(u.a,{to:"/"})},ge=n(889),fe=n(879),ve=n(882),ye=n(890);var we=function(e){var t=e.activeUser,n=e.onLogout,c=(e.users,Object(O.a)({navbarDisplayFlex:{display:"flex",justifyContent:"space-between"},navDisplayFlex:{display:"flex",justifyContent:"flex-end"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"white"}})),r=[{title:"\u05e6\u05d5\u05e8 \u05e7\u05e9\u05e8 ",path:"#/contactus"},{title:"\u05d4\u05e6\u05d5\u05d5\u05ea \u05d4\u05e8\u05e4\u05d5\u05d0\u05d9 \u05e9\u05dc\u05e0\u05d5",path:"#/about"},{title:"\u05d6\u05d9\u05de\u05d5\u05df / \u05d1\u05d9\u05d8\u05d5\u05dc \u05ea\u05d5\u05e8",path:"#/appointments"}];t&&(r=t.job?r.concat({title:"\u05d0\u05d9\u05d6\u05d5\u05e8 \u05e2\u05d1\u05d5\u05d3\u05d4",path:"#/work"}):r.concat({title:"\u05d0\u05d9\u05d6\u05d5\u05e8 \u05d0\u05d9\u05e9\u05d9",path:"#/personal"}));var i=c();return Object(a.jsx)(ge.a,{children:Object(a.jsx)(fe.a,{children:Object(a.jsxs)(ee.a,{maxWidth:"md",className:i.navbarDisplayFlex,children:[Object(a.jsx)(S.a,{edge:"start",color:"inherit","aria-label":"home",href:"#/",dir:"rtl",children:Object(a.jsx)(ye.a,{fontSize:"small"})}),Object(a.jsxs)(ve.a,{component:"nav","aria-labelledby":"main navigation",className:i.navDisplayFlex,edge:"end",children:[r.map((function(e){var t=e.title,n=e.path;e.onClick;return Object(a.jsx)("a",{href:n,className:i.linkText,children:Object(a.jsx)(re.a,{button:!0,children:Object(a.jsx)(ie.a,{primary:t})})},t)})),t?Object(a.jsx)("a",{href:"#/",className:i.linkText,onClick:n,children:Object(a.jsx)(re.a,{button:!0,children:Object(a.jsx)(ie.a,{primary:"\u05d4\u05ea\u05e0\u05ea\u05e7"})})}):null]})]})})})};n(822);var ke=function(e){return e.activeUser,Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{children:"Contact us"})})};n(823);var Se=function(e){return e.activeUser,Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("p",{children:"About us"})})},Ne=n(110),Ce=(n(824),n(5)),Ie=n(878),Te=n(894),De=n(895),Ae=n(48),Pe=n(896),Ue=n(419),Fe=n(893),ze=n(907),Ee=n(891),Re=n(892),We=n(899),He=n(880);n(825);var Le=function(e){var t,n=e.arr,c=e.selectedItem,r=e.idKey,i=e.valueKey,s=e.handleSelected,o=e.all,l=[];""!==o&&l.push(Object(a.jsx)(Ie.a,Object(Ne.a)(Object(Ne.a)({value:o},c==={all:o}),{},{selected:!0,children:o}),o));for(var d=0;d<n.length;d++)l.push(Object(a.jsx)(Ie.a,Object(Ne.a)(Object(Ne.a)({value:n[d][r]},n[d][r]===c?"{selected}":""),{},{children:n[d][i]}),n[d][r]));var j=Object(O.a)((function(e){return{paper:{padding:e.spacing(1),textAlign:"right",color:e.palette.text.primary},margin:{display:"inline-block",margin:"0 50px 0 50px"},select:{"& ul":{backgroundColor:"#cccccc"},"& li, & p":{fontSize:12}}}}))();return Object(a.jsx)(We.a,(t={name:"name",labelWidth:100,autoWidth:!1,value:c,onChange:function(e){s(e.target.value)},input:Object(a.jsx)(He.a,{id:"name"})},Object(Y.a)(t,"labelWidth",100),Object(Y.a)(t,"MenuProps",{classes:{paper:j.select}}),Object(Y.a)(t,"children",l),t))};var Me=function(e){e.activeUser;var t=e.jobs,n=e.employees,r=Object(c.useState)([]),i=Object(j.a)(r,2),s=i[0],o=i[1],p=Object(c.useState)(""),h=Object(j.a)(p,2),m=h[0],g=h[1],f=Object(c.useState)(""),v=Object(j.a)(f,2),y=v[0],w=v[1],k=Object(c.useState)(""),S=Object(j.a)(k,2),N=S[0],C=S[1],I=Object(c.useState)(""),T=Object(j.a)(I,2),D=T[0],A=T[1],P=Object(c.useState)(!1),U=Object(j.a)(P,2),F=U[0],z=U[1],E=Object(c.useState)(!1),R=Object(j.a)(E,2),W=R[0],H=R[1],L=Object(c.useState)(!1),M=Object(j.a)(L,2),B=M[0],Q=M[1],J=Object(c.useState)(!1),K=Object(j.a)(J,2),V=K[0],Z=K[1],$=Object(c.useState)(""),Y=Object(j.a)($,2),ee=Y[0],ne=Y[1],ae=Object(c.useState)(!1),ce=Object(j.a)(ae,2),re=(ce[0],ce[1]),ie=Object(c.useState)(""),se=Object(j.a)(ie,2),oe=se[0];se[1];var le=Object(u.g)().selectedJobHome;Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=x.a.Object.extend("Appointment"),(n=new x.a.Query(t)).exists("doctorId"),n.greaterThanOrEqualTo("appDateTime",new Date),n.equalTo("pacientId",null),n.addAscending("appDateTime"),n.find().then((function(e){var t=e.map((function(e){return new G(e)}));o(t)}),(function(e){console.error("Error while fetching Appointment",e)}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.length>0&&(g(le||t[0].jobId),function(){e.apply(this,arguments)}())}),[t]);var de=function(e){var t=[];if(void 0!=n.find((function(e){return e.doctorId===y}))&&""!==y){for(var a=0;a<e.length;a++)e[a].doctorId.id===y&&(t=t.concat(e[a]));return t}for(var c=n.filter((function(e){return e.jobId===m})),r=0;r<e.length;r++)for(var i=0;i<c.length;i++)e[r].doctorId.id===c[i].doctorId&&(t=t.concat(e[r]));return t}(s);function je(){return(je=Object(d.a)(l.a.mark((function e(){var t,n,a,c,r,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.findIndex((function(e){return e.id===ee})),(n=Object(b.a)(s)).splice(t,1),a=x.a.Object.extend("Appointment"),c=new x.a.Query(a),e.next=7,c.get(ee);case 7:return(r=e.sent).set("pacientId",x.a.User.current()),r.set("updatedBy",x.a.User.current()),e.next=12,r.save();case 12:i=e.sent,new G(i),o(n);case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function be(){return(be=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new x.a.Query(x.a.User)).equalTo("tzeut",D),e.next=4,t.find();case 4:return(n=e.sent).length,e.abrupt("return",0!==n.length);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}for(var pe=Object(O.a)((function(e){return{paper:{padding:e.spacing(1),textAlign:"center",color:e.palette.text.primary},margin:{display:"inline-block",margin:"0 50px 0 50px"},show:{display:"block"},hide:{display:"none"},select:{"& ul":{backgroundColor:"#cccccc"},"& li, & p":{fontSize:12}}}}))(),ue=Object(Ce.a)({root:{background:"rgb(63, 81, 181)",borderTopLeftRadius:"15px",borderBottomRightRadius:"15px",border:0,color:"white",height:60,width:200,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(63, 81, 181, .3)",margin:"0 50px 0 50px"},label:{textTransform:"capitalize"},"&:hover":{backgroundColor:"rgb(63, 81, 181)"}})(X.a),he=Object(Ce.a)({root:{borderTopLeftRadius:"15px",borderBottomRightRadius:"15px",border:"2px solid blue",color:"blue",height:60,width:200,padding:"0 30px",margin:"0 50px 0 50px"},label:{textTransform:"capitalize"}})(X.a),xe=Object(Ce.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none",borderRadius:"30px 0px 30px 0","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(ze.a),Oe=Object(Ce.a)({root:{backgroundColor:"inherit",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(Ee.a),me=Object(Ce.a)((function(e){return{root:{padding:e.spacing(2)}}}))(Re.a),ge=Object(c.useState)(!1),fe=Object(j.a)(ge,2),ve=fe[0],ye=fe[1],we=function(e){return function(t,n){ye(!!n&&e)}},ke=n.filter((function(e){return e.jobId===m})),Se=[],We=0;We<t.length;We++)Se.push(Object(a.jsx)(Ie.a,Object(Ne.a)(Object(Ne.a)({value:t[We].jobId},t[We].jobId===m?"selected":""),{},{children:t[We].jobHebrew}),t[We].jobId));var He=W?pe.hide:pe.paper,Me=B?pe.hide:pe.paper,Be=V?pe.hide:pe.paper;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(_.a,{container:!0,justify:"space-around",spacing:3,children:[Object(a.jsxs)(_.a,{item:!0,xs:12,className:pe.paper,children:[Object(a.jsx)(ue,{onClick:function(){ye("panel1")},style:{backgroundColor:"rgb(63, 81, 181)"},children:"\u05ea\u05d0\u05d5\u05dd \u05ea\u05d5\u05e8 \u05d7\u05d3\u05e9"}),Object(a.jsx)(he,{children:"\u05d1\u05d9\u05d8\u05d5\u05dc \u05ea\u05d5\u05e8 \u05e7\u05d9\u05d9\u05dd"})]}),Object(a.jsx)(_.a,{item:!0,xs:12,className:pe.paper,children:Object(a.jsx)("h3",{children:"\u05db\u05d0\u05df \u05ea\u05d5\u05db\u05dc\u05d5 \u05dc\u05ea\u05d0\u05dd \u05ea\u05d5\u05e8"})}),Object(a.jsx)(_.a,{item:!0,xs:12,className:He,children:Object(a.jsxs)(xe,{expanded:"panel1"===ve,disabled:"panel1"!==ve,onChange:we("panel1"),children:[Object(a.jsx)(Oe,{expandIcon:Object(a.jsx)(Fe.a,{}),children:Object(a.jsx)("h4",{children:"1. \u05e4\u05e8\u05d8\u05d9 \u05d4\u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05de\u05d1\u05d5\u05e7\u05e9"})}),Object(a.jsx)(me,{children:Object(a.jsxs)(_.a,{item:!0,xs:12,className:pe.paper,children:[t.length>0?Object(a.jsxs)("div",{className:pe.margin,children:[Object(a.jsx)("span",{children:"\u05e1\u05d5\u05d2 \u05d4\u05ea\u05d5\u05e8 \u05d4\u05de\u05d1\u05d5\u05e7\u05e9    "}),Object(a.jsx)(Le,{arr:t,selectedItem:m,idKey:"jobId",valueKey:"jobHebrew",handleSelected:g,all:""})]}):Object(a.jsx)(a.Fragment,{}),Object(a.jsx)("div",{className:pe.margin,children:Object(a.jsx)(Ae.a,{utils:Ue.a,children:Object(a.jsx)(Pe.a,{variant:"dialog",format:"dd/MM/yyyy",value:N,onChange:function(e){C(e),z(null!==e&&""!==e&&""!==m)},maxwidth:40})})})]})}),Object(a.jsx)(Te.a,{}),Object(a.jsx)(De.a,{children:Object(a.jsx)(_.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{size:"small",variant:"contained",disabled:!F,color:"primary",onClick:function(){H(!0),ye("panel2")},children:"\u05d4\u05de\u05e9\u05da \u05dc\u05d1\u05d7\u05d9\u05e8\u05ea \u05ea\u05d5\u05e8"})})})]})}),Object(a.jsx)(_.a,{item:!0,xs:12,className:Me,children:Object(a.jsxs)(xe,{expanded:"panel2"===ve,disabled:"panel2"!==ve,onChange:we("panel2"),children:[Object(a.jsx)(Oe,{expandIcon:Object(a.jsx)(Fe.a,{}),children:Object(a.jsx)("h4",{children:"2. \u05d1\u05d7\u05d9\u05e8\u05ea \u05ea\u05d5\u05e8"})}),Object(a.jsx)(me,{children:Object(a.jsxs)(_.a,{item:!0,xs:12,className:pe.margin,align:"right",children:[Object(a.jsxs)(_.a,{item:!0,xs:12,className:pe.margin,align:"right",children:[Object(a.jsx)("p",{MenuProps:{classes:{paper:pe.select}},children:'\u05dc\u05d4\u05dc\u05df \u05de\u05d5\u05e2\u05d3\u05d9 \u05d4\u05ea\u05d5\u05e8\u05d9\u05dd \u05d4\u05e7\u05e8\u05d5\u05d1\u05d9\u05dd \u05d1\u05d9\u05d5\u05ea\u05e8 \u05e2"\u05e4 \u05d4\u05d1\u05d7\u05d9\u05e8\u05d4 \u05e9\u05d1\u05d9\u05e6\u05e2\u05ea\u05dd.'}),Object(a.jsx)("p",{children:" \u05d0\u05e0\u05d0 \u05d1\u05d7\u05e8\u05d5 \u05d0\u05ea \u05d4\u05ea\u05d5\u05e8 \u05d4\u05de\u05d5\u05e2\u05d3\u05e3"})]}),Object(a.jsx)(_.a,{item:!0,xs:12,className:pe.margin,align:"right",children:t.length>0?Object(a.jsxs)("div",{className:pe.margin,children:[Object(a.jsx)("p",{children:"\u05d1\u05d7\u05d9\u05e8\u05ea \u05e8\u05d5\u05e4\u05d0"}),Object(a.jsx)(Le,{arr:ke,selectedItem:y,idKey:"doctorId",valueKey:"fullName",handleSelected:w,all:"\u05db\u05dc \u05d4\u05e8\u05d5\u05e4\u05d0\u05d9\u05dd"})]}):Object(a.jsx)(a.Fragment,{})}),de.length>0?Object(a.jsx)(q,{appointments:de,fromScreen:"appoint",takeApp:function(e){ne(e),Q(!0),ye("panel3")}}):Object(a.jsx)("h2",{style:{color:"blue"},children:"\u05e1\u05dc\u05d9\u05d7\u05d4, \u05db\u05e8\u05d2\u05e2 \u05d0\u05d9\u05df \u05d0\u05e4\u05e9\u05e8\u05d5\u05ea \u05dc\u05d4\u05d6\u05de\u05d9\u05df \u05ea\u05d5\u05e8"})]})})]})}),Object(a.jsx)(_.a,{item:!0,xs:12,className:Be,children:Object(a.jsxs)(xe,{expanded:"panel3"===ve,disabled:"panel3"!==ve,onChange:we("panel3"),children:[Object(a.jsx)(Oe,{expandIcon:Object(a.jsx)(Fe.a,{}),children:Object(a.jsx)("h4",{children:"3.  \u05de\u05d9\u05dc\u05d5\u05d9 \u05e4\u05e8\u05d8\u05d9\u05dd \u05d0\u05d9\u05e9\u05d9\u05d9\u05dd"})}),Object(a.jsxs)(me,{children:[Object(a.jsx)(_.a,{item:!0,xs:12,className:pe.margin,align:"right",children:Object(a.jsx)("p",{children:"\u05d0\u05e0\u05d0 \u05de\u05dc\u05d0\u05d5 \u05d0\u05ea \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd \u05d4\u05d1\u05d0\u05d9\u05dd"})}),Object(a.jsx)(_.a,{item:!0,xs:12,dir:"rtl",children:Object(a.jsx)(te.a,{fullWidth:!0,label:"\u05ea.\u05d6. \u05e9\u05dc \u05d1\u05e2\u05dc \u05d4\u05ea\u05d5\u05e8 *",value:D,name:"tzeut",size:"small",variant:"outlined",onChange:function(e){A(e.target.value)}})})]}),Object(a.jsx)(De.a,{children:Object(a.jsx)(_.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{size:"small",variant:"contained",disabled:""===D,color:"primary",onClick:function(){Z(!0),ye("panel4");var e=function(){return be.apply(this,arguments)}();console.log("currentUser  "+e),e||re(!0)},children:"\u05d4\u05de\u05e9\u05da"})})})]})}),Object(a.jsx)(_.a,{item:!0,xs:12,className:pe.paper,children:Object(a.jsxs)(xe,{expanded:"panel4"===ve,disabled:"panel4"!==ve,onChange:we("panel4"),children:[Object(a.jsx)(Oe,{expandIcon:Object(a.jsx)(Fe.a,{}),children:Object(a.jsx)("h4",{children:"4.  \u05d0\u05e9\u05e8 \u05d0\u05ea \u05e4\u05e8\u05d8\u05d9 \u05d4\u05ea\u05d5\u05e8"})}),Object(a.jsx)(me,{children:Object(a.jsx)(_.a,{item:!0,xs:12,className:pe.margin,align:"right",children:Object(a.jsxs)(_.a,{item:!0,xs:12,className:pe.margin,align:"right",children:[Object(a.jsx)("h5",{children:"\u05db\u05d3\u05d9 \u05e9\u05e0\u05d5\u05db\u05dc \u05dc\u05ea\u05d0\u05dd \u05d0\u05ea \u05d4\u05ea\u05d5\u05e8 \u05e2\u05d1\u05d5\u05e8\u05da \u05d0\u05e0\u05d0 \u05d0\u05e9\u05e8 \u05d0\u05ea \u05d4\u05e4\u05e8\u05d8\u05d9\u05dd:"}),Object(a.jsxs)("p",{children:[" \u05ea.\u05d6 \u05e9\u05dc \u05d1\u05e2\u05dc \u05d4\u05ea\u05d5\u05e8: ",oe.tzeut]}),Object(a.jsxs)("p",{children:[" \u05ea\u05d0\u05e8\u05d9\u05da \u05dc\u05d9\u05d3\u05d4: ",oe.birthdate]}),Object(a.jsxs)("p",{children:[" \u05e9\u05dd \u05e4\u05e8\u05d8\u05d9: ",oe.fname]}),Object(a.jsxs)("p",{children:[" \u05e9\u05dd \u05de\u05e9\u05e4\u05d7\u05d4: ",oe.lname]})]})})}),Object(a.jsx)(De.a,{children:Object(a.jsx)(_.a,{item:!0,xs:12,children:Object(a.jsx)(X.a,{size:"small",variant:"contained",color:"primary",onClick:function(){return je.apply(this,arguments)},children:"\u05d0\u05e9\u05e8"})})})]})})]})})};var Be=function(){var e=Object(c.useState)(null),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)([]),s=Object(j.a)(i,2),o=s[0],b=s[1],p=Object(c.useState)([]),h=Object(j.a)(p,2),O=h[0],m=h[1];return Object(c.useEffect)((function(){var e=!1;function t(){return(t=Object(d.a)(l.a.mark((function t(){var n,a,c,r;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=x.a.Object.extend("job"),a=new x.a.Query(n),t.next=4,a.find();case 4:return c=t.sent,e||(r=[],c.forEach((function(e){var t={jobId:e.id,jobStr:e.get("job"),jobHebrew:e.get("jobHebrew")};r=r.concat(t)})),b(r)),t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function n(){return(n=Object(d.a)(l.a.mark((function t(){var n,a,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new x.a.Query(x.a.User)).exists("jobId"),t.next=4,n.find();case 4:return a=t.sent,e||(c=[],a.forEach((function(e){var t={doctorId:e.id,fname:e.get("fname"),lname:e.get("lname"),fullName:e.get("fname")+" "+e.get("lname"),jobId:e.get("jobId").id};c=c.concat(t)})),m(c)),t.abrupt("return",!0);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){n.apply(this,arguments)}(),function(){e=!0}}),[]),Object(a.jsxs)(a.Fragment,{children:[console.log("jobArr  "+o.length),Object(a.jsx)(we,{activeUser:n,onLogout:function(){r(null),x.a.User.logOut()}}),Object(a.jsx)("div",{className:"p-app",children:Object(a.jsx)($.a,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",children:Object(a.jsx)(pe,{activeUser:n,onLogin:function(e){return r(e)}})}),Object(a.jsx)(u.b,{exact:!0,path:"/personal",children:Object(a.jsx)(Z,{activeUser:n,employeeArray:O})}),Object(a.jsx)(u.b,{exact:!0,path:"/personal/:id",children:Object(a.jsx)(Z,{activeUser:n,employeeArray:O})}),Object(a.jsx)(u.b,{exact:!0,path:"/appointments",children:Object(a.jsx)(Me,{activeUser:n,jobs:o,employees:O})}),Object(a.jsx)(u.b,{exact:!0,path:"/appointments/:selectedJobHome",children:Object(a.jsx)(Me,{activeUser:n,jobs:o,employeeArray:O})}),Object(a.jsx)(u.b,{exact:!0,path:"/work",children:Object(a.jsx)(me,{activeUser:n})}),Object(a.jsx)(u.b,{exact:!0,path:"/contactus",children:Object(a.jsx)(ke,{activeUser:n})}),Object(a.jsx)(u.b,{exact:!0,path:"/about",children:Object(a.jsx)(Se,{activeUser:n})})]})})})]})},Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,910)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};x.a.serverURL="https://parseapi.back4app.com",x.a.initialize("Mbflpmm7DVC8u5WfdjJ2zU6Wa5KlR9F7hJv6qZyc","qvEonIcPCSyoVZDxvhJtbyGkPVyvoD8EpHJFfnJK"),s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(Be,{})}),document.getElementById("root")),Qe()}},[[826,1,2]]]);
//# sourceMappingURL=main.a02267b8.chunk.js.map