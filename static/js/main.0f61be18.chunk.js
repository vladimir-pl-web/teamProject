(this["webpackJsonpteam-project"]=this["webpackJsonpteam-project"]||[]).push([[0],{102:function(e,t,r){e.exports={Profile:"profile_Profile__zjy0j"}},103:function(e,t,r){e.exports={Error:"error_Error__1tclE"}},105:function(e,t,r){e.exports={searchField:"Find_searchField__1NVK-"}},122:function(e,t,r){},123:function(e,t,r){},148:function(e,t,r){},160:function(e,t,r){"use strict";r.r(t);var n,a=r(1),c=r(0),s=r.n(c),i=r(13),o=r.n(i),u=(r(122),r(17)),l=(r(123),r(5)),d=r(67),j=r.n(d),b=r(8),O=r(39),h=r(21),p=r.n(h),g=r(35),m=r(101),f=r.n(m).a.create({baseURL:"https://neko-back.herokuapp.com/2.0/",withCredentials:!0}),x=function(e){return f.post("auth/register/",e).then((function(e){return e.data}))},v=function(e){return f.post("auth/login/",e).then((function(e){return e.data}))},_=function(e){return f.post("auth/forgot",{email:e,from:"Microsoft<pharm.sale777@gmail.com>",message:"<div>\n       To recover your password, follow the link:\n        <br/> \n          <a href='https://VovanVovanic.github.io/teamProject/#/NewPass/$token$'>\n            https://VovanVovanic.github.io/teamProject/#/NewPass/\n           </a>\n     </div>"})},S=function(e,t){return f.post("auth/set-new-password",{password:e,resetPasswordToken:t})},E=function(){return f.delete("auth/me/",{}).then((function(e){return e.data}))},N=function(){return f.post("auth/me/",{}).then((function(e){return e.data}))},P=function(e){return f.get("cards/pack/?&page=".concat(null===e||void 0===e?void 0:e.page,"&pageCount=").concat(null===e||void 0===e?void 0:e.pageCount,"&sortPacks=").concat(null===e||void 0===e?void 0:e.sortPacks,"name&min=").concat(null===e||void 0===e?void 0:e.min,"&max=").concat(null===e||void 0===e?void 0:e.max,"?packName=").concat(null===e||void 0===e?void 0:e.packName)).then((function(e){return e.data}))},C=function(e){return f.delete("cards/pack/?id=".concat(e)).then((function(e){return e.data}))},w=function(){return f.post("cards/pack/",{cardsPack:{name:"New"}}).then((function(e){return e.data}))},T=function(e){return f.put("cards/pack/",{cardsPack:{_id:e,name:"NewNameUpdated"}}).then((function(e){return e.data}))},k=function(e){return f.get("cards/card/?&cardsPack_id=".concat(e)).then((function(e){return e.data}))};!function(e){e.SET_USER_DATA="SET_USER_DATA",e.SET_ERROR_MESSAGE="SET_ERROR_MESSAGE",e.SET_USER_LOADING="SET_USER_LOADING"}(n||(n={}));var y,R={user:{email:"",name:"",avatar:"",publicCardPacksCount:null,verified:!1,rememberMe:!1,message:"",_id:""},isAuthSuccess:!1,error:"",loading:!1},A=function(e,t){return{type:n.SET_USER_DATA,user:e,isAuth:t}},I=function(e){return{type:n.SET_USER_LOADING,loading:e}},D=function(e){return{type:n.SET_ERROR_MESSAGE,error:e}},F=r(48),L=r(68),G=r.n(L),M=function(e){var t=e.type,r=e.onChange,n=e.onChangeText,c=e.onKeyPress,s=e.onEnter,i=e.error,o=(e.className,e.spanClassName),u=e.touched,d=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName","touched"]),j="".concat(G.a.error," ").concat(o||""),b=i&&u?G.a.errorInput:"";return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("input",Object(l.a)({type:t,onChange:function(e){r&&r(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),"Enter"===e.key&&s&&s()},className:"".concat(G.a.superInput," ").concat(b)},d)),i&&u&&Object(a.jsx)("span",{className:j,children:i})]})},B=(r(148),function(){return Object(a.jsx)("div",{className:"lds-css",children:Object(a.jsxs)("div",{className:"lds-double-ring",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})}),U=r(78),V=r.n(U),W=function(e){var t=e.message,r=e.type,n=[V.a.Message];return r&&n.push(V.a[r]),Object(a.jsx)("div",{className:n.join(" "),children:t})},q=r(79),Z=r.n(q),H=function(e){var t=e.color,r=(e.className,e.type,e.onClick),n=Object(F.a)(e,["color","className","type","onClick"]),c=[Z.a.Btn];return t&&c.push(Z.a[t]),Object(a.jsx)("button",Object(l.a)({onClick:r,className:c.join(" ")},n))},K=r(69),$=r.n(K),z=function(e){e.type,e.onChange;var t=e.onChangeChecked,r=e.className,n=(e.spanClassName,e.children),c=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat($.a.checkbox," ").concat(r||"");return Object(a.jsxs)("label",{className:$.a.label,children:[Object(a.jsx)("input",Object(l.a)({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked)},className:s},c)),n&&Object(a.jsx)("span",{className:$.a.spanClassName,children:n})]})},J=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.profile.error})),r=Object(b.c)((function(e){return e.profile.loading})),n=Object(b.c)((function(e){return e.profile.user.message})),c=Object(b.c)((function(e){return e.profile.isAuthSuccess})),s=Object(u.g)();c&&setTimeout((function(){s.push("/")}),3e3);var i="";n&&(i="success"),t&&(i="error");var o=Object(O.a)({initialValues:{email:"",password:"",rememberMe:!1},onSubmit:function(t){var r;e((r=t,function(){var e=Object(g.a)(p.a.mark((function e(t){var n,a,c,s,i,o,u,d,j,b;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),e.prev=1,e.next=4,v(r);case 4:n=e.sent,a=n.avatar,c=n.email,s=n.name,i=n.publicCardPacksCount,o=n.rememberMe,u=n.verified,d=n._id,n._,j={avatar:a,email:c,name:s,publicCardPacksCount:i,rememberMe:o,verified:u,_id:d,message:"".concat(c," successfully logged")},t(A(j,!0)),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),b=e.t0.response?e.t0.response.data.error:"".concat(e.t0.message," more details in the console"),console.log("Error: ",Object(l.a)({},e.t0)),t(D(b));case 15:t(I(!1));case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()))},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.password?e.password.length<8&&(t.password="Must be 8 characters or more"):t.password="Required",t}});return Object(a.jsxs)("div",{className:j.a.Login,children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsxs)("form",{onSubmit:o.handleSubmit,className:j.a.Loginform,children:[r?Object(a.jsx)(B,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,Object(l.a)(Object(l.a)({type:"email",placeholder:"Email",error:o.errors.email,touched:o.touched.email},o.getFieldProps("email")),{},{onBlur:o.handleBlur})),Object(a.jsx)(M,Object(l.a)(Object(l.a)({type:"password",placeholder:"Password",error:o.errors.password},o.getFieldProps("password")),{},{touched:o.touched.password,onBlur:o.handleBlur}))]}),Object(a.jsx)(W,{message:t||n,type:i}),Object(a.jsxs)("div",{className:j.a.BtnWrapper,children:[Object(a.jsx)(z,Object(l.a)(Object(l.a)({type:"checkbox"},o.getFieldProps("rememberMe")),{},{onBlur:o.handleBlur})),Object(a.jsx)("span",{children:"Remember me"}),Object(a.jsx)(H,{type:"submit",onClick:function(){return o.handleSubmit()},disabled:r,children:"Login"}),Object(a.jsx)(H,{onClick:function(){s.push("/register")},color:"blue",children:"Register"})]})]})]})},Y=r(82),X=r.n(Y),Q={isMessageSend:!1,isNewPasswordSet:!1,isFetching:!1,isError:null},ee=function(e){return{type:"PASSWORD/SET-MESSAGE-SEND",isMessageSend:e}},te=function(e){return{type:"PASSWORD/SET-IS-FETCHING",isFetching:e}},re=function(e){return{type:"PASSWORD/SET-IS-ERROR",isError:e}},ne=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.password.isFetching})),r=Object(b.c)((function(e){return e.password.isError})),n=Object(b.c)((function(e){return e.password.isNewPasswordSet})),c=Object(u.h)().token,s=Object(O.a)({initialValues:{password:""},validate:function(e){var t={};return e.password?e.password.length<8&&(t.password="Must be 8 characters or more"):t.password="Required",t},onSubmit:function(t){e(function(e,t){return function(){var r=Object(g.a)(p.a.mark((function r(n){return p.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(te(!0)),r.prev=1,r.next=4,S(e,t);case 4:n({type:"PASSWORD/SET-NEW-PASSWORD"}),n(re(null)),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),r.t0.response.data.error?n(re(r.t0.response.data.error)):(n(re("Some Error occurred. Please try again")),console.log("Error:",Object(l.a)({},r.t0)));case 11:return r.prev=11,n(te(!1)),r.finish(11);case 14:case"end":return r.stop()}}),r,null,[[1,8,11,14]])})));return function(e){return r.apply(this,arguments)}}()}(t.password,c))}});return n?Object(a.jsx)(u.a,{to:"/login"}):t?Object(a.jsx)("div",{className:X.a.NewPass,children:Object(a.jsx)(B,{})}):Object(a.jsx)("div",{className:X.a.NewPass,children:Object(a.jsxs)("form",{onSubmit:s.handleSubmit,children:[Object(a.jsx)("div",{children:Object(a.jsx)(M,Object(l.a)({id:"password",type:"password",placeholder:"New Password"},s.getFieldProps("password")))}),s.touched.password&&s.errors.password?Object(a.jsx)("div",{style:{color:"red"},children:s.errors.password}):null,Object(a.jsx)(H,{type:"submit",color:"blue",children:"Set New Password"}),r?Object(a.jsx)("div",{style:{color:"red"},children:r}):Object(a.jsx)(a.Fragment,{})]})})},ae=r(27),ce=r(70),se=r.n(ce),ie=s.a.memo((function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.password.isMessageSend})),r=Object(b.c)((function(e){return e.password.isError})),n=Object(b.c)((function(e){return e.password.isFetching})),s=Object(c.useState)(60),i=Object(ae.a)(s,2),o=i[0],u=i[1];Object(c.useEffect)((function(){if(t){var r=setTimeout((function(){u(o-1)}),1e3);return 0===o&&(u(60),clearTimeout(r),e(ee(!1))),function(){clearTimeout(r)}}}),[o,t,e,n]);var d=Object(O.a)({initialValues:{email:""},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},onSubmit:function(t){var r;e((r=t.email,function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0)),e.prev=1,e.next=4,_(r);case 4:t(ee(!0)),t(re(null)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),e.t0.response.data.error?t(re(e.t0.response.data.error)):(t(re("Some Error occurred. Please try again")),console.log("Error:",Object(l.a)({},e.t0)));case 11:return e.prev=11,t(te(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()))}});return n?Object(a.jsx)("div",{className:se.a.PassRecover,children:Object(a.jsx)(B,{})}):t?Object(a.jsxs)("div",{className:se.a.PassRecover,children:[Object(a.jsx)("span",{children:"Email sent, check your email "}),Object(a.jsx)("br",{}),Object(a.jsxs)("span",{children:["You can try again after: ",o]})]}):Object(a.jsx)("div",{className:se.a.PassRecover,children:Object(a.jsxs)("form",{onSubmit:d.handleSubmit,children:["RECOVER",Object(a.jsx)("div",{children:Object(a.jsx)(M,Object(l.a)({id:"email",type:"email",placeholder:"Email",onFocus:function(){r&&e(re(null))}},d.getFieldProps("email")))}),d.touched.email&&d.errors.email?Object(a.jsx)("div",{style:{color:"red"},children:d.errors.email}):null,Object(a.jsx)(H,{type:"submit",children:"Send Email"}),r?Object(a.jsx)("div",{style:{color:"red"},children:r}):Object(a.jsx)(a.Fragment,{})]})})})),oe=r(102),ue=r.n(oe),le=function(){var e=Object(b.c)((function(e){return e.profile.loading})),t=Object(b.b)(),r=Object(u.g)(),n=Object(b.c)((function(e){return e.profile.isAuthSuccess}));Object(c.useEffect)((function(){t(function(){var e=Object(g.a)(p.a.mark((function e(t){var r,n,a,c,s,i,o,u,d,j;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),e.prev=1,e.next=4,N();case 4:r=e.sent,console.log(r),n=r.avatar,a=r.email,c=r.name,s=r.publicCardPacksCount,i=r.rememberMe,o=r.verified,u=r._id,d={avatar:n,email:a,name:c,publicCardPacksCount:s,rememberMe:i,verified:o,_id:u,message:"".concat(a," successfully logged")},t(A(d,!0)),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),j=Object(l.a)({},e.t0),t(D(j.response.data.error));case 15:t(I(!1));case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()),!n&&r.push("/login")}),[]);var s=Object(b.c)((function(e){return e.profile.user}));return Object(a.jsxs)("div",{className:ue.a.Profile,children:[e?Object(a.jsx)(B,{}):Object.values(s).map((function(e){return Object(a.jsx)("div",{children:e})})),Object(a.jsx)(H,{onClick:function(){t(function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(I(!0)),e.prev=1,e.next=4,E();case 4:t(A({email:"",name:"",avatar:"",publicCardPacksCount:null,verified:!1,rememberMe:!1,_id:"",message:""},!1)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t(D("Something gonna wrong"));case 10:t(I(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}()),r.push("/login")},children:"Logout"})]})},de="REGISTER_NEW_USER",je="GET_REGISTRATION_ERROR",be="SET_REG_LOADING",Oe=function(e){return{type:de,user:e}},he=function(e){return{type:je,error:e}},pe=r(71),ge=r.n(pe),me=function(){var e=Object(u.g)(),t=Object(b.b)(),r=Object(b.c)((function(e){return e.register})),n="";r.user&&(n="success"),r.error&&(n="error");var c=function(){e.push("/login")};r.user&&setTimeout((function(){c()}),3e3);var s=function(){t(he(""))},i=Object(O.a)({initialValues:{email:"",password:""},onSubmit:function(e){var r;t((r=e,function(){var e=Object(g.a)(p.a.mark((function e(t,n){var a,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:be}),e.next=4,x(r);case 4:a=e.sent,t(Oe("".concat(a.addedUser.name," successfully registered"))),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),c=Object(l.a)({},e.t0),s=c.response.data.error,t(he(s));case 13:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}())),i.resetForm()},validate:function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Email required",e.password?e.password.length<8&&(t.password="Password must be at least 8 characters"):t.email="Password required",t}});return Object(a.jsxs)("div",{className:ge.a.Register,children:[Object(a.jsx)("h2",{children:"Register"}),Object(a.jsxs)("form",{className:ge.a.registerForm,children:[r.loading?Object(a.jsx)(B,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(M,Object(l.a)(Object(l.a)({type:"email",error:i.errors.email,touched:i.touched.email},i.getFieldProps("email")),{},{onBlur:i.handleBlur,onFocus:s})),Object(a.jsx)(M,Object(l.a)(Object(l.a)({type:"password",error:i.errors.password},i.getFieldProps("password")),{},{touched:i.touched.password,onBlur:i.handleBlur,onFocus:s}))]}),Object(a.jsx)(W,{message:r.error||r.user,type:n}),Object(a.jsxs)("div",{className:ge.a.Btns,children:[Object(a.jsx)(H,{type:"submit",onClick:function(){return i.handleSubmit()},disabled:r.loading,children:"Register"}),Object(a.jsx)(H,{onClick:c,color:"blue",children:"Login"})]})]})]})},fe=r(103),xe=r.n(fe),ve=function(){return Object(a.jsx)("div",{className:xe.a.Error,children:"Error 404"})},_e=r(26),Se=r(83),Ee=r.n(Se),Ne=function(){var e=[{to:"/",name:"profile"},{to:"/register",name:"register"},{to:"/login",name:"login"},{to:"/passRecover",name:"recover password"},{to:"/packs",name:"packs"},{to:"/cards",name:"cards"}].map((function(e){var t=e.to,r=e.name;return Object(a.jsx)("li",{children:Object(a.jsx)(_e.b,{to:t,className:Ee.a.RouteLink,children:r})},r)}));return Object(a.jsx)("ul",{className:Ee.a.Nav,children:e})},Pe=r(6),Ce=r(196),we=r(205),Te=r(197),ke=r(195),ye=r(198),Re=r(199),Ae=r(206),Ie=r(194),De=r(201),Fe=r(202),Le=r(203),Ge=r(110);!function(e){e.SET_ACTIVE_PAGE="Pagin/SET_ACTIVE_PAGE",e.SET_PAGINATION="Pagin/SET_PAGE_RANGE_DISPLAYED",e.SET_TOTAL_ITEMS="Pagin/SET_TOTAL_ITEMS"}(y||(y={}));var Me,Be={pageRangeDisplayed:10,activePage:1,itemsCountPerPage:5,totalItemsCount:0},Ue={cards:[],loading:!1,error:"",min:1,max:10},Ve=function(e){return{type:"SET_LOADING",loading:e}},We=function(e){return{type:"SET_ERROR",error:e}},qe=function(e){return function(t){t(Ve(!0)),P(e).then((function(e){var r,n;t({type:"SET_CARDS",cards:e.cardPacks}),t(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return{type:y.SET_TOTAL_ITEMS,totalItems:e}}(+e.cardPacksTotalCount)),t((r=+e.minCardsCount,n=+e.maxCardsCount,{type:"SET_MIN_MAX",min:r,max:n})),t(Ve(!1))})).catch((function(e){t(We(e.response.data.error))}))}},Ze=r(65),He=r.n(Ze),Ke=r(28),$e=r.n(Ke),ze=r(104),Je=r.n(ze),Ye=r(72),Xe=r.n(Ye),Qe=function(){var e=Object(b.c)((function(e){return e.pagination.activePage})),t=Object(b.c)((function(e){return e.pagination.pageRangeDisplayed})),r=Object(b.c)((function(e){return e.pagination.itemsCountPerPage})),n=Object(b.c)((function(e){return e.pagination.totalItemsCount})),i=Object(b.b)(),o=Object(c.useState)(!1),u=Object(ae.a)(o,2),l=u[0],d=u[1];Object(c.useEffect)((function(){l&&(i(qe({page:e.toString(),pageCount:r.toString()})),d(!1))}),[l,d]);return Object(a.jsxs)(s.a.Fragment,{children:[Object(a.jsx)("div",{className:Xe.a.bar,children:Object(a.jsx)(Je.a,{activePage:e,itemsCountPerPage:r,totalItemsCount:n,pageRangeDisplayed:t,onChange:function(e){i(function(e){return{type:y.SET_ACTIVE_PAGE,pageNumber:e}}(e)),d(!0)},itemClass:Xe.a.item})}),Object(a.jsxs)("div",{className:Xe.a.pagePortion,children:["Pagination",Object(a.jsxs)("select",{value:r,onChange:function(e){var t=+e.currentTarget.value;i(function(e){return{type:y.SET_PAGINATION,itemsCountPerPage:e}}(t)),d(!0)},children:[Object(a.jsx)("option",{value:"5",children:"5"}),Object(a.jsx)("option",{value:"10",children:"10"}),Object(a.jsx)("option",{value:"15",children:"15"}),Object(a.jsx)("option",{value:"50",children:"50"})]})]})]})},et=r(200);!function(e){e.SET_SEARCH_VALUE="SET_SEARCH_VALUE"}(Me||(Me={}));var tt={searchValue:""},rt=r(204),nt=r(105),at=r.n(nt),ct=function(){var e=Object(b.b)(),t=Object(c.useState)(!1),r=Object(ae.a)(t,2),n=r[0],i=r[1],o=Object(c.useState)(""),u=Object(ae.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),O=Object(ae.a)(j,2),h=O[0],p=O[1];Object(c.useEffect)((function(){n&&(e(qe({packName:h})),i(!1))}),[n,i]);var g=function(){""!==h.trim()?(e(function(e){return{type:Me.SET_SEARCH_VALUE,searchValue:e}}(h)),p(""),i(!0)):d("Search value is required")};return Object(a.jsx)(s.a.Fragment,{children:Object(a.jsxs)("div",{className:at.a.searchField,children:[Object(a.jsx)(rt.a,{error:!!l,helperText:l,label:"Search",onKeyPress:function(e){null!==l&&d(null),"Enter"===e.key&&g()},autoFocus:!0,onChange:function(e){var t=e.currentTarget.value;p(t)},value:h}),Object(a.jsx)(ke.a,{onClick:g,variant:"contained",children:"Search"})]})})},st=function(){var e=Object(Pe.a)((function(e){return{head:{backgroundColor:e.palette.common.black,color:e.palette.common.white},body:{fontSize:14,background:"rgba(191, 191, 191, .7)"}}}))(Ce.a),t=Object(Pe.a)((function(e){return{root:{transform:"rotate(90deg)",background:"grey",borderRadius:"40%"}}}))(we.a),r=Object(b.c)((function(e){return e.cards.loading})),n=Object(b.c)((function(e){return e.cards.cards})),s=Object(b.c)((function(e){return e.cards.min})),i=Object(b.c)((function(e){return e.cards.max})),o=Object(b.c)((function(e){return e.profile.isAuthSuccess})),l=Object(b.c)((function(e){return e.profile.user._id})),d=Object(b.c)((function(e){return e.pagination.itemsCountPerPage})),j=Object(u.g)(),O=Object(c.useState)(!1),h=Object(ae.a)(O,2),p=h[0],g=h[1],m=Object(c.useState)([s,i]),f=Object(ae.a)(m,2),x=f[0],v=f[1],_=Object(b.b)();Object(c.useEffect)((function(){!o&&j.push("/login"),_(qe({pageCount:d.toString()}))}),[]);var S=function(e){_(function(e){return function(t){t(Ve(!0)),C(e).then((function(e){t(qe()),t(Ve(!1))})).catch((function(e){t(We(e.response.data.error))}))}}(e))},E=function(e){_(function(e){return function(t){t(Ve(!0)),T(e).then((function(e){t(qe()),t(Ve(!1))})).catch((function(e){t(We(e.response.data.error))}))}}(e))},N=n.map((function(t){return Object(a.jsxs)(Te.a,{children:[Object(a.jsx)(e,{component:"th",scope:"row",children:t.name}),Object(a.jsx)(e,{align:"right",children:t.cardsCount}),Object(a.jsx)(e,{align:"right",children:t.user_id}),Object(a.jsx)(e,{align:"right",children:t.path}),Object(a.jsx)(e,{align:"right",children:Object(a.jsxs)(ke.a,{variant:"contained",color:"secondary",className:$e.a.button,disabled:l!==t.user_id,onClick:function(){return S(t._id)},children:["Delete",Object(a.jsx)(He.a,{className:$e.a.rightIcon})]})}),Object(a.jsx)(e,{align:"right",children:Object(a.jsx)(ke.a,{disabled:l!==t.user_id,variant:"contained",color:"primary",className:$e.a.button,onClick:function(){return E(t._id)},children:"update"})}),Object(a.jsx)(e,{align:"right",children:Object(a.jsx)(ke.a,{variant:"contained",component:"span",onClick:function(){return e=t._id,void j.push("/cards/:".concat(e));var e},children:"Get Cards"})})]},t._id)}));return Object(a.jsxs)("div",{className:$e.a.Packs,children:[Object(a.jsx)(ye.a,{gutterBottom:!0,variant:"h3",component:"h4",children:"Card Packs"}),r?Object(a.jsx)(B,{}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(ct,{}),Object(a.jsxs)(Re.a,{container:!0,xs:6,direction:"row",justify:"space-between",style:{width:"100%",margin:"20px",flexBasis:"0"},children:[Object(a.jsxs)(Re.a,{item:!0,xs:4,style:{color:"yellow"},children:["put your count range",Object(a.jsx)(Ae.a,{color:"primary",value:x,max:i,min:s,valueLabelDisplay:"auto","aria-labelledby":"range-slider",onChange:function(e,t){v(t)}})]}),Object(a.jsx)(Re.a,{item:!0,xs:3,children:Object(a.jsxs)(ke.a,{variant:"contained",color:"primary",className:$e.a.button,onClick:function(){_(qe({min:x[0].toString(),max:x[1].toString()}))},children:[Object(a.jsx)(et.a,{className:$e.a.rightIcon,children:"sort"}),"by count"]})}),Object(a.jsx)(Re.a,{item:!0,xs:2,children:Object(a.jsxs)(ke.a,{variant:"contained",color:"default",className:$e.a.button,onClick:function(){_((function(e){e(Ve(!0)),w().then((function(t){e(qe()),e(Ve(!1))})).catch((function(t){e(We(t.response.data.error))}))}))},children:[Object(a.jsx)(et.a,{className:$e.a.rightIcon,color:"primary",children:"add"}),"pack"]})})]}),Object(a.jsx)(Ie.a,{className:$e.a.root,children:Object(a.jsxs)(De.a,{className:$e.a.table,children:[Object(a.jsx)(Fe.a,{style:{borderRadius:"3px"},children:Object(a.jsxs)(Te.a,{children:[Object(a.jsxs)(e,{children:[Object(a.jsx)(t,{checked:p,onChange:function(e){g(e.currentTarget.checked),_(qe({sortPacks:!0===p?"0":"1"}))}})," Name"]}),Object(a.jsx)(e,{align:"right",children:"Card Count"}),Object(a.jsx)(e,{align:"right",children:"Updated"}),Object(a.jsx)(e,{align:"right",children:"Url"}),Object(a.jsx)(e,{align:"right",children:"Delete"}),Object(a.jsx)(e,{align:"right",children:"Update"}),Object(a.jsx)(e,{align:"right",children:"Get Cards"})]})}),Object(a.jsx)(Le.a,{children:N})]})}),Object(a.jsx)(Qe,{})]})]})},it={card:[],loading:!1,error:""},ot=function(e){return{type:"SET_SINGLE_LOADING",load:e}},ut=r(55),lt=r.n(ut),dt=function(){var e=Object(u.h)().id,t=Object(b.b)(),r=Object(b.c)((function(e){return e.singlePack.card})),n=Object(b.c)((function(e){return e.singlePack.loading})),s=Object(b.c)((function(e){return e.profile.isAuthSuccess})),i=Object(u.g)();Object(c.useEffect)((function(){!s&&i.push("/login"),e&&t(function(e){return function(t){t(ot(!0)),k(e).then((function(e){t({type:"SET_SINGLE_CARD",card:e.cards}),t(ot(!1))})).catch((function(e){t({type:"SET_SINGLE_ERROR",error:e.response.data.error})}))}}(e.slice(1)))}),[]);var o=Object(Pe.a)((function(e){return{head:{backgroundColor:"green",color:"black",fontSize:24},body:{fontSize:20,background:"rgba(191, 191, 191, .7)"}}}))(Ce.a),l=r.map((function(e){return Object(a.jsxs)(Te.a,{children:[Object(a.jsx)(o,{component:"th",scope:"row",children:e.answer}),Object(a.jsx)(o,{align:"right",children:e.question}),Object(a.jsx)(o,{align:"right",children:e.grade}),Object(a.jsx)(o,{align:"right",children:e.rating}),Object(a.jsx)(o,{align:"right",children:e.shots}),Object(a.jsx)(o,{align:"right",children:Object(a.jsx)(ke.a,{variant:"contained",color:"primary",children:"update"})}),Object(a.jsx)(o,{align:"right",children:Object(a.jsxs)(ke.a,{variant:"contained",color:"secondary",children:["Delete",Object(a.jsx)(He.a,{className:lt.a.rightIcon})]})})]},e._id)}));return Object(a.jsxs)("div",{className:lt.a.Cards,children:[Object(a.jsx)(ye.a,{gutterBottom:!0,variant:"h3",component:"h4",children:"Card Packs"}),n?Object(a.jsx)(B,{}):Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Ie.a,{className:lt.a.root,children:Object(a.jsxs)(De.a,{className:lt.a.table,children:[Object(a.jsx)(Fe.a,{style:{borderRadius:"3px"},children:Object(a.jsxs)(Te.a,{children:[Object(a.jsx)(o,{children:"Answer"}),Object(a.jsx)(o,{align:"right",children:"Question"}),Object(a.jsx)(o,{align:"right",children:"Grade"}),Object(a.jsx)(o,{align:"right",children:"Rating"}),Object(a.jsx)(o,{align:"right",children:"Shoots"}),Object(a.jsx)(o,{align:"right",children:"Update"}),Object(a.jsx)(o,{align:"right",children:"Delete"})]})}),Object(a.jsx)(Le.a,{children:l})]})})})]})};var jt=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(Ne,{}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(le,{})}}),Object(a.jsx)(u.b,{exact:!0,path:"/login",render:function(){return Object(a.jsx)(J,{})}}),Object(a.jsx)(u.b,{exact:!0,path:"/register",render:function(){return Object(a.jsx)(me,{})}}),Object(a.jsx)(u.b,{exact:!0,path:"/packs",render:function(){return Object(a.jsx)(st,{})}}),Object(a.jsx)(u.b,{exact:!0,path:"/cards/:id?/",render:function(){return Object(a.jsx)(dt,{})}}),Object(a.jsx)(u.b,{path:"/NewPass/:token",render:function(){return Object(a.jsx)(ne,{})}}),Object(a.jsx)(u.b,{exact:!0,path:"/passRecover",render:function(){return Object(a.jsx)(ie,{})}}),Object(a.jsx)(u.b,{path:"*",render:function(){return Object(a.jsx)(ve,{})}}),Object(a.jsx)(u.a,{from:"*",to:"/404"})]})]})},bt=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,207)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),c(e),s(e)}))},Ot=r(49),ht=r(109),pt={loading:!1,error:"",user:""},gt=Object(Ot.c)({register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case de:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:"",user:t.user});case je:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.error,user:""});case be:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SET_USER_DATA:return Object(l.a)(Object(l.a)({},e),{},{user:t.user,isAuthSuccess:t.isAuth,error:""});case n.SET_ERROR_MESSAGE:return Object(l.a)(Object(l.a)({},e),{},{isAuthSuccess:!1,error:t.error});case n.SET_USER_LOADING:return Object(l.a)(Object(l.a)({},e),{},{loading:t.loading});default:return e}},password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PASSWORD/SET-MESSAGE-SEND":return Object(l.a)(Object(l.a)({},e),{},{isMessageSend:t.isMessageSend});case"PASSWORD/SET-NEW-PASSWORD":return Object(l.a)(Object(l.a)({},e),{},{isNewPasswordSet:!0});case"PASSWORD/SET-IS-FETCHING":return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case"PASSWORD/SET-IS-ERROR":return Object(l.a)(Object(l.a)({},e),{},{isError:t.isError});default:return e}},cards:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:t.loading});case"SET_ERROR":return Object(l.a)(Object(l.a)({},e),{},{error:t.error,loading:!1});case"SET_CARDS":return Object(l.a)(Object(l.a)({},e),{},{cards:t.cards,error:""});case"SET_MIN_MAX":return Object(l.a)(Object(l.a)({},e),{},{min:t.min,max:t.max});case"DELETE_PACK":return Object(l.a)({},e);case"ADD_PACK":return Object(l.a)(Object(l.a)({},e),{},{cards:[].concat(Object(Ge.a)(e.cards),[t.pack])});default:return e}},pagination:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.SET_ACTIVE_PAGE:return Object(l.a)(Object(l.a)({},e),{},{activePage:t.pageNumber});case y.SET_PAGINATION:return Object(l.a)(Object(l.a)({},e),{},{itemsCountPerPage:t.itemsCountPerPage});case y.SET_TOTAL_ITEMS:return Object(l.a)(Object(l.a)({},e),{},{totalItemsCount:t.totalItems});default:return e}},singlePack:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SINGLE_CARD":return Object(l.a)(Object(l.a)({},e),{},{card:t.card,error:""});case"SET_SINGLE_LOADING":return Object(l.a)(Object(l.a)({},e),{},{loading:t.load});case"SET_SINGLE_ERROR":return Object(l.a)(Object(l.a)({},e),{},{loading:!1,error:t.error});default:return e}},find:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me.SET_SEARCH_VALUE:return Object(l.a)(Object(l.a)({},e),{},{searchValue:t.searchValue})}return e}}),mt=Object(Ot.d)(gt,Object(Ot.a)(ht.a));window.store=mt;var ft=mt;o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(b.a,{store:ft,children:Object(a.jsx)(_e.a,{children:Object(a.jsx)(jt,{})})})}),document.getElementById("root")),bt()},28:function(e,t,r){e.exports={Packs:"packs_Packs__3Wv2M"}},55:function(e,t,r){e.exports={Cards:"cards_Cards__HJvUU"}},67:function(e,t,r){e.exports={Login:"login_Login__3jIq-",Loginform:"login_Loginform__3feNI",BtnWrapper:"login_BtnWrapper__3AvOc"}},68:function(e,t,r){e.exports={superInput:"SuperInputText_superInput__19Lxl",errorInput:"SuperInputText_errorInput__2GFWv",error:"SuperInputText_error__3VApw"}},69:function(e,t,r){e.exports={checkbox:"SuperCheckbox_checkbox__3UPxI","click-wave":"SuperCheckbox_click-wave__1JaFw",spanClassName:"SuperCheckbox_spanClassName__kUCUS"}},70:function(e,t,r){e.exports={PassRecover:"passRecover_PassRecover__1FtlO"}},71:function(e,t,r){e.exports={Register:"register_Register__83p-8",registerForm:"register_registerForm__D6_FP",Btns:"register_Btns__2VhGt"}},72:function(e,t,r){e.exports={bar:"pagination_bar__Io-cD",item:"pagination_item__2OM3D",pagePortion:"pagination_pagePortion__37GcN"}},78:function(e,t,r){e.exports={Message:"message_Message__23eo-",error:"message_error__jxt0X",success:"message_success__2ShDs"}},79:function(e,t,r){e.exports={Btn:"SuperButton_Btn__3DrOw",blue:"SuperButton_blue__1YYR0"}},82:function(e,t,r){e.exports={NewPass:"newPass_NewPass__9f8g0"}},83:function(e,t,r){e.exports={Nav:"nav_Nav__2Uw7N",RouteLink:"nav_RouteLink__11f8F"}}},[[160,1,2]]]);
//# sourceMappingURL=main.0f61be18.chunk.js.map