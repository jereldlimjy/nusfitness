(this.webpackJsonpnusfitness=this.webpackJsonpnusfitness||[]).push([[0],{357:function(e,t,n){},358:function(e,t,n){},490:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(25),r=n.n(s),o=(n(357),n(23)),i=n(579),l=n(570),u=n(245),d=n(330),j=n(549),b=n(576),h=n(559),m=n(556),p=n(46),f=n(34),O=(n(358),n(582)),g=n(4),x=function(e){var t=e.alert;return null!==t&&Object(g.jsx)(O.a,{severity:t.type,children:t.msg})},y=n(146),v=n(85),k=n(495),w=n(503),S=n(502),C=n(587),T=n(552),D=n(553),N=n(584),L=n(554),E=n(555),I=n(107),F=(n(364),n(365),n(307)),A=function(e){var t=e.selectedDates,n=e.setSelectedDates;return Object(g.jsx)(F.DateRange,{onChange:function(e){return n([e.selection])},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,months:1,maxDate:new Date,ranges:t,direction:"horizontal"})},B=n(581),H=n(586),R=n(583),P=n(585),W=n(594),M=n(577),U=function(e){var t=e.setTime,n=e.data,a=e.chartTitle,c=[t(8,0),t(9,0),t(10,0),t(11,0),t(12,0),t(13,0),t(14,0),t(15,0),t(16,0),t(17,0),t(18,0),t(19,0),t(20,0),t(21,0)];return Object(g.jsxs)(B.a,{theme:H.a.material,containerComponent:Object(g.jsx)(R.a,{labels:function(e){return"Time: ".concat(e.datum.date.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(":",""),", Count: ").concat(e.datum.count)},radius:25}),minDomain:{x:t(7,0),y:0},maxDomain:{x:t(22,0),y:40},height:250,width:900,padding:{top:0,right:25,bottom:0,left:50},children:[Object(g.jsx)(P.a,{text:a,x:450,y:-30,textAnchor:"middle",style:{fontSize:18}}),Object(g.jsx)(W.a,{label:"Time",tickValues:c,tickFormat:function(e){return new Date(e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(":","")},axisLabelComponent:Object(g.jsx)(P.a,{dy:30})}),Object(g.jsx)(W.a,{dependentAxis:!0,label:"Capacity",axisLabelComponent:Object(g.jsx)(P.a,{dy:-30})}),Object(g.jsx)(M.a,{data:n,x:"date",y:"count",scale:{x:"time",y:"linear"}})]})},J=Object(j.a)((function(e){var t;return{root:(t={},Object(v.a)(t,e.breakpoints.down("xs"),{flexDirection:"column"}),Object(v.a)(t,"padding",e.spacing(2)),Object(v.a)(t,"& .MuiCheckbox-colorPrimary.Mui-checked",{color:"rgb(61, 145, 255)"}),t),formControl:{marginTop:e.spacing(1),width:"100%"},selectButton:{backgroundColor:"rgb(61, 145, 255)"}}})),G=function(){var e=J(),t=["Kent Ridge Swimming Pool","University Town Swimming Pool","Kent Ridge Gym","University Sports Centre Gym","University Town Gym","Wellness Outreach Gym"],n=function(e,t){var n=new Date;return n.setHours(e,t,0,0),n},c=Object(a.useState)(t[0]),s=Object(o.a)(c,2),r=s[0],l=s[1],d=Object(a.useState)([]),j=Object(o.a)(d,2),b=j[0],h=j[1],m=Object(a.useState)([{startDate:n(0,0),endDate:n(0,0),key:"selection"}]),p=Object(o.a)(m,2),f=p[0],O=p[1],x=Object(a.useState)([1,2,3,4,5,6,7]),v=Object(o.a)(x,2),F=v[0],B=v[1],H=Object(a.useState)(""),R=Object(o.a)(H,2),P=R[0],W=R[1],M=function(e){var t=e.target;t.checked?B([].concat(Object(y.a)(F),[parseInt(t.value)])):B(F.filter((function(e){return e!==parseInt(t.value)})))},G=function(e){switch(e.target.innerText){case"SELECT ALL":B([1,2,3,4,5,6,7]);break;case"REMOVE ALL":B([]);break;case"WEEKDAYS":B([2,3,4,5,6]);break;case"WEEKENDS":B([1,7])}};return Object(a.useEffect)((function(){var e=Object(o.a)(f,1)[0],n=e.startDate,a=Object(I.default)(e.endDate,1),c="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","traffic");fetch(c,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({facility:t.indexOf(r),date:{$gte:n,$lte:a},day:F}),credentials:"include"}).then((function(e){return e.json()})).then((function(e){return h(e.map((function(e){return{date:new Date(e.date),count:e.count}})))}))}),[r,f,F]),Object(a.useEffect)((function(){W("".concat(r,"\n").concat(f[0].startDate.toDateString()," to ").concat(f[0].endDate.toDateString()," "))}),[r,f,F]),Object(g.jsxs)(i.a,{display:"flex",className:e.root,children:[Object(g.jsxs)(i.a,{display:"flex",flex:"1 1 0",flexDirection:"column",maxWidth:"370px",className:e.root,children:[Object(g.jsx)(u.a,{variant:"h4",children:"Filters"}),Object(g.jsxs)(i.a,{width:"100%",mt:2,mb:2,children:[Object(g.jsx)(u.a,{variant:"h6",children:"Facility"}),Object(g.jsxs)(k.a,{variant:"outlined",className:e.formControl,children:[Object(g.jsx)(w.a,{id:"facility-label",children:"Select Facility"}),Object(g.jsx)(S.a,{value:r,labelId:"facility-label",id:"facility",onChange:function(e){l(e.target.value)},label:"Select Facility",children:t.map((function(e){return Object(g.jsx)(C.a,{value:e,children:e},e)}))})]})]}),Object(g.jsxs)(i.a,{mt:1,children:[Object(g.jsx)(u.a,{variant:"h6",children:"Date Range"}),Object(g.jsx)(A,{selectedDates:f,setSelectedDates:O})]}),Object(g.jsxs)(k.a,{children:[Object(g.jsx)(u.a,{variant:"h6",children:"Days of week"}),Object(g.jsx)(T.a,{row:!0,children:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((function(e,t){return Object(g.jsx)(D.a,{control:Object(g.jsx)(N.a,{value:t+1,checked:F.includes(t+1),onChange:M,id:e,color:"primary"},e+e),label:e})}))})]}),Object(g.jsx)(L.a,{container:!0,spacing:1,justify:"flex-start",children:["SELECT ALL","REMOVE ALL","WEEKDAYS","WEEKENDS"].map((function(t){return Object(g.jsx)(L.a,{item:!0,xs:6,children:Object(g.jsx)(E.a,{variant:"contained",fullWidth:!0,onClick:G,className:e.selectButton,children:t})})}))})]}),Object(g.jsx)(i.a,{flex:"3 0 0",children:Object(g.jsx)(U,{setTime:n,data:b,chartTitle:P})})]})},Y=n(43),K=n(31),q=n.n(K),V=n(62),_=n(204),z=n(588),$=n(567),Q=n(571),X=n(568),Z=n(573),ee=n(569),te=n(558),ne=n(198),ae=n(557),ce=Object(j.a)((function(e){return{root:{margin:e.spacing(.5)},slot:{display:"none","&[disabled] ~ label":{color:"rgb(170, 170, 170)"},"&[booked='true'] ~ label":{backgroundColor:m.a[200]},"&[booked='true']:checked ~ label":{backgroundColor:ne.a[400]},"&:checked ~ label":{backgroundColor:ne.a[400]}},slotLabel:{display:"inline-block",boxSizing:"border-box",margin:0,padding:"5px 20px",width:"100%",cursor:"pointer"}}})),se=function(e){var t=e.date,n=e.handleChange,a=e.checked,c=e.booked,s=e.slotsLeft,r=ce(),o=Object(ae.a)(t,1),i=t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(":",""),l=(new Date).getTime();return Object(g.jsxs)(te.a,{className:r.root,children:[Object(g.jsx)("input",{type:"checkbox",className:r.slot,id:t,date:t,onChange:n,checked:a,disabled:o<=l,booked:c.toString()}),Object(g.jsx)("label",{className:r.slotLabel,htmlFor:t,children:Object(g.jsx)("strong",{children:i})}),Object(g.jsx)("label",{className:r.slotLabel,htmlFor:t,children:"".concat(s," Left")})]})},re=Object(j.a)((function(e){return{root:{padding:e.spacing(2)},box:{display:"flex",flexDirection:"row",flexWrap:"wrap"}}})),oe=function(e){e.facility;var t=e.assignedDate,n=e.hours,a=e.handleChange,c=e.selectedSlot,s=e.bookedSlots,r=e.slotCount,o=re();return Object(g.jsxs)("div",{className:o.root,children:[Object(g.jsx)(u.a,{variant:"h5",children:t.toDateString()}),Object(g.jsx)(i.a,{className:o.box,children:n.map((function(e){var n=parseInt(e.slice(0,2)),o=parseInt(e.slice(2,4)),i=new Date(t);i.setHours(n,o,0,0);var l=40,u=r.find((function(e){return e.date.getTime()===i.getTime()}));return u&&(l=40-u.count),Object(g.jsx)(se,{date:i,handleChange:a,checked:c.date&&c.date.getTime()===i.getTime(),booked:s.filter((function(e){return e.date.getTime()===i.getTime()})).length>0,slotsLeft:l},i.toLocaleString())}))})]})},ie=n(244),le=n(75),ue=n(589),de=n(566),je=n(199),be=n(197),he=n(572),me=n(202),pe=n(331),fe=n(327),Oe=n.n(fe),ge={"Design Lecture":"DLEC",Laboratory:"LAB",Lecture:"LEC","Packaged Lecture":"PLEC","Packaged Tutorial":"PTUT",Recitation:"REC","Sectional Teaching":"SEC","Seminar-Style Module Class":"SEM",Tutorial:"TUT","Tutorial Type 2":"TUT2","Tutorial Type 3":"TUT3",Workshop:"WS"},xe=Object(me.invert)(ge),ye={"Semester 1":1,"Semester 2":2,"Special Term I":3,"Special Term II":4},ve={Sunday:0,Monday:1,Tuesday:2,Wednesday:3,Thursday:4,Friday:5,Saturday:6},ke=Object(j.a)((function(e){return{root:{padding:e.spacing(2)},container:{width:"100%",height:"100%",padding:0},title:{fontWeight:"600"},timeTableCell:{height:"66px"},timeLabel:{height:"66px",lineHeight:"64px","&:first-child":{height:"33px"},"&:last-child":{height:"33px"}},inputContainer:{display:"flex",marginBottom:e.spacing(2)},timetableButton:{marginRight:e.spacing(2),backgroundColor:h.a[600],"&:hover":{backgroundColor:h.a[700]}},lessonsButton:{marginRight:e.spacing(2),backgroundColor:m.a[400],"&:hover":{backgroundColor:m.a[500]}},inputField:{marginRight:e.spacing(2)},select:{minWidth:200,marginRight:e.spacing(2)}}})),we=function(e){var t=e.style,n=Object(ie.a)(e,["style"]),a=n.data.isLesson?je.a[400]:be.a[400];return Object(g.jsx)(le.a.Appointment,Object(Y.a)(Object(Y.a)({},n),{},{style:Object(Y.a)(Object(Y.a)({},t),{},{backgroundColor:a})}))},Se=function(e){var t=e.data,n=Object(ie.a)(e,["data"]),a=ke();return Object(g.jsx)(le.a.AppointmentContent,Object(Y.a)(Object(Y.a)({},n),{},{data:t,children:Object(g.jsxs)("div",{className:a.container,children:[Object(g.jsx)("div",{className:a.title,children:t.title}),Object(g.jsx)("div",{children:t.lessonType}),Object(g.jsx)("div",{children:t.location})]})}))},Ce=function(e){var t=ke();return Object(g.jsx)(le.d.TimeTableCell,Object(Y.a)(Object(Y.a)({},e),{},{className:t.timeTableCell}))},Te=function(e){var t=ke();return Object(g.jsx)(le.d.TimeScaleLabel,Object(Y.a)(Object(Y.a)({},e),{},{formatDate:function(e){return e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(":","")},className:t.timeLabel}))},De=function(e){var t=ke();return Object(g.jsx)(le.d.TimeScaleTickCell,Object(Y.a)(Object(Y.a)({},e),{},{className:t.timeTableCell}))},Ne=function(e){var t=e.bookedSlots,n=Object(a.useState)(!1),c=Object(o.a)(n,2),s=c[0],r=c[1],l=Object(a.useState)(!0),u=Object(o.a)(l,2),d=u[0],j=u[1],b=Object(a.useState)(0),h=Object(o.a)(b,2),m=h[0],p=h[1],f=Object(a.useState)("https://nusmods.com/timetable/st-i/share?TBA2101=TUT:2,LEC:1"),O=Object(o.a)(f,2),x=O[0],v=O[1],k=Object(a.useState)(!1),w=Object(o.a)(k,2),S=w[0],T=w[1],D=Object(a.useState)([]),N=Object(o.a)(D,2),L=N[0],F=N[1],A=ke(),B=function(){var e=x.match(/sem-[1|2]/),t=x.match(/st-i{2}\/|st-i\//);if(e||t){if(e)return T(!1),parseInt(e[0].slice(4,5));if(t)return T(!1),5===t[0].length?3:4}else T(!0)},H=function(){var e=x.match(/\?\S*/);if(e){T(!1);var t=Oe.a.parse(e[0]);return Object(me.mapValues)(t,R)}T(!0)},R=function(e){var t={};return e?(Object(me.castArray)(e).forEach((function(e){e.split(",").forEach((function(e){var n=e.split(":"),a=Object(o.a)(n,2),c=a[0],s=a[1],r=xe[c];r&&(t[r]=s)}))})),t):t},P=function(e){var t=(e=new Date(e)).getDay(),n=e.getDate()-t;return new Date(e.setDate(n))},W=function(){var e=Object(V.a)(q.a.mark((function e(t,n){var a,c,s,r,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=P(new Date),c=[],s=q.a.mark((function e(){var n,s,l;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(o.a)(i[r],2),s=n[0],l=n[1],e.next=3,fetch("https://api.nusmods.com/v2/2021-2022/modules/".concat(s,".json"),{method:"get"}).then((function(e){return e.json()})).then((function(e){var n=e.semesterData.filter((function(e){return e.semester===t})),r=Object(o.a)(n,1)[0];if(r){var i=Object.keys(l).flatMap((function(e){return r.timetable.filter((function(t){return t.classNo===l[e]&&t.lessonType===e}))}));if(!d){var u=pe.a.academicCalendar.getAcadWeekInfo(new Date),j=ye[u.sem],b=u.num;i=i.filter((function(e){return j===t&&e.weeks.includes(b)}))}var h=i.map((function(e){var t=s,n=parseInt(e.startTime.slice(0,2)),c=parseInt(e.startTime.slice(2,4)),r=parseInt(e.endTime.slice(0,2)),o=parseInt(e.endTime.slice(2,4)),i=Object(I.default)(a,ve[e.day]),l=Object(I.default)(a,ve[e.day]);i.setHours(n,c,0,0),l.setHours(r,o,0,0);return{title:t,startDate:i,endDate:l,lessonType:"".concat(ge[e.lessonType]," [").concat(e.classNo,"]"),location:e.venue,isLesson:!0}}));c=c.concat(h)}else T(!0)}));case 3:case"end":return e.stop()}}),e)})),r=0,i=Object.entries(n);case 4:if(!(r<i.length)){e.next=9;break}return e.delegateYield(s(),"t0",6);case 6:r++,e.next=4;break;case 9:return e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){(function(){var e=Object(V.a)(q.a.mark((function e(){var n,a,c,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=B()){e.next=3;break}return e.abrupt("return");case 3:if(a=H()){e.next=6;break}return e.abrupt("return");case 6:return e.next=8,W(n,a);case 8:return c=e.sent,e.next=11,t=t.map((function(e){var t=new Date(e.date),n=0===t.getMinutes()?Object(ae.a)(t,1):Object(he.a)(Object(ae.a)(t,1),30);return{title:"Facility Booking",startDate:t,endDate:n,location:e.facility,isLesson:!1}}));case 11:s=e.sent,F([].concat(Object(y.a)(c),Object(y.a)(s)));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[x,d,t]);return Object(g.jsxs)(i.a,{className:A.root,children:[Object(g.jsxs)(i.a,{className:A.inputContainer,children:[Object(g.jsx)(E.a,{onClick:function(){r(!s)},variant:"contained",className:A.timetableButton,children:s?"Hide Timetable":"Show Timetable"}),s&&Object(g.jsx)(ue.a,{title:d?"Only show lessons which occur during the current academic week":"Show lessons regardless of academic week",children:Object(g.jsx)(E.a,{onClick:function(){j(!d)},variant:"contained",color:"secondary",className:A.lessonsButton,children:d?"Hide Lessons":"Always Show Lessons"})}),s&&Object(g.jsxs)(de.a,{select:!0,label:"First Day of Week",variant:"outlined",className:A.select,onChange:function(e){return p(e.target.value)},value:m,children:[Object(g.jsx)(C.a,{value:0,children:"Sunday"}),Object(g.jsx)(C.a,{value:1,children:"Monday"})]}),s&&Object(g.jsx)(de.a,{error:S,label:S?"Error":"NUSMods Share Link",helperText:S?"Invalid Link":"",value:x,variant:"outlined",onChange:function(e){return v(e.target.value)},className:A.inputField})]}),s&&Object(g.jsx)(_.a,{children:Object(g.jsxs)(le.c,{firstDayOfWeek:m,data:L,children:[Object(g.jsx)(le.d,{startDayHour:7,endDayHour:22,cellDuration:60,timeTableCellComponent:Ce,timeScaleLabelComponent:Te,timeScaleTickCellComponent:De}),Object(g.jsx)(le.a,{appointmentComponent:we,appointmentContentComponent:Se}),Object(g.jsx)(le.b,{})]})})]})},Le=Object(j.a)((function(e){return{root:{padding:e.spacing(2)},box:{display:"flex",justifyContent:"center"},formControl:{margin:e.spacing(1),width:"50%"},button:{padding:e.spacing(1.5,2),cursor:"pointer",border:0,borderRadius:5,backgroundColor:h.a[600],color:"white","&:hover":{backgroundColor:h.a[800]}},circularProgress:{marginBottom:e.spacing(1.5),color:m.a[200]},paper:{marginLeft:e.spacing(2),marginRight:e.spacing(2),paddingBottom:e.spacing(2)},header:{paddingTop:e.spacing(2)}}})),Ee=[{name:"Kent Ridge Swimming Pool",weekdayHours:["0730","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000"],weekendHours:["0900","1000","1100","1200","1300","1400","1500","1600","1700","1800"]},{name:"University Town Swimming Pool",weekdayHours:["0730","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000"],weekendHours:["0900","1000","1100","1200","1300","1400","1500","1600","1700","1800"]},{name:"Kent Ridge Gym",weekdayHours:["1100","1200","1300","1400","1500","1600","1700","1800","1900"],weekendHours:[]},{name:"University Sports Centre Gym",weekdayHours:["0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000"],weekendHours:["0900","1000","1100","1200","1300","1400","1500","1600","1700","1800"]},{name:"University Town Gym",weekdayHours:["0700","0800","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100"],weekendHours:["0700","0800","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100"]},{name:"Wellness Outreach Gym",weekdayHours:["0700","0800","0900","1000","1100","1200","1300","1400","1500","1600","1700","1800","1900","2000","2100"],weekendHours:[]}],Ie=function(e){var t=e.handleAlert,n=Le(),c=Object(a.useState)(Ee[0]),s=Object(o.a)(c,2),r=s[0],d=s[1],j=Object(a.useState)({}),b=Object(o.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)([]),O=Object(o.a)(p,2),x=O[0],y=O[1],v=Object(a.useState)([]),T=Object(o.a)(v,2),D=T[0],N=T[1],L=Object(a.useState)([]),F=Object(o.a)(L,2),A=F[0],B=F[1],H=Object(a.useState)("Book"),R=Object(o.a)(H,2),P=R[0],W=R[1],M=Object(a.useState)(!1),U=Object(o.a)(M,2),J=U[0],G=U[1],K=Object(a.useState)(),te=Object(o.a)(K,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),se=Object(o.a)(ce,2),re=se[0],ie=se[1],le=Object(f.f)(),ue=new Date,de=ue.getDay();console.log(le.location.state),Object(a.useEffect)((function(){function e(){return(e=Object(V.a)(q.a.mark((function e(){var t,n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","creditsLeft"),ie(!0),e.next=4,fetch(t,{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,ae(a.credits);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var je=function(e){var t=e.target;t.checked?m({date:new Date(t.attributes.date.value)}):m({});var n={date:new Date(t.attributes.date.value)};0!==Object.keys(n).length&&(x.find((function(e){return e.date.getTime()===n.date.getTime()}))?W("Cancel"):W("Book"))},be=function(){var e=Object(V.a)(q.a.mark((function e(){var t,n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","bookedSlots"),e.next=4,fetch(t,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({facility:r.name}),credentials:"include"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,y(a.map((function(e){return{facility:e.facility,date:new Date(e.date)}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),he=function(){var e=Object(V.a)(q.a.mark((function e(){var t,n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","bookedSlots"),e.next=4,fetch(t,{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,N(a.map((function(e){return{facility:e.facility,date:new Date(e.date)}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),me=new Date(ue.getFullYear(),ue.getMonth(),ue.getDate()),pe=function(){var e=Object(V.a)(q.a.mark((function e(){var t,n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","slots"),e.next=4,fetch(t,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({facility:r.name,startDate:me,endDate:Object(I.default)(me,3)}),credentials:"include"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,B(a.map((function(e){return{date:new Date(e._id),count:e.count}}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)(Object(V.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(!0),e.next=3,be();case 3:return e.next=5,he();case 5:return e.next=7,pe();case 7:ie(!1);case 8:case"end":return e.stop()}}),e)}))),[r]);for(var fe=Object(a.useCallback)(function(){var e=Object(V.a)(q.a.mark((function e(n){var a,c,s,o,i;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),m({}),"Cancel"!==P){e.next=28;break}return e.prev=3,a="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","cancel"),ie(!0),e.next=8,fetch(a,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(Y.a)({facility:r.name},h)),credentials:"include"});case 8:return 401===(c=e.sent).status?t("You are unauthorised to cancel the slot. Please contact the website's administrator","error"):403===c.status?t("Unable to cancel slot because it is within the 2 hour cancellation window.","error"):404===c.status&&t("Slot cannot be found. Please contact the website's administrator","error"),e.next=12,c.json();case 12:return e.sent.success&&t("Your slot has been cancelled.","success"),e.next=16,be();case 16:return e.next=18,he();case 18:return e.next=20,pe();case 20:ie(!1),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),console.log(e.t0);case 26:e.next=66;break;case 28:return e.prev=28,s="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000":"https://salty-reaches-24995.herokuapp.com"),ie(!0),e.next=33,fetch("".concat(s,"/updateCredits"),{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"});case 33:return o=e.sent,e.next=36,o.json();case 36:if(!e.sent.success){e.next=53;break}return e.prev=38,e.next=41,fetch("".concat(s,"/book"),{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object(Y.a)({facility:r.name},h)),credentials:"include"});case 41:return i=e.sent,e.next=44,i.json();case 44:e.sent.success?(ae(ne-1),t("Your slot has been booked!","success")):t("Slot has been fully booked.","error"),e.next=51;break;case 48:e.prev=48,e.t1=e.catch(38),console.log(e.t1);case 51:e.next=54;break;case 53:t("You have insufficient credits left for this week.","error");case 54:e.next=59;break;case 56:e.prev=56,e.t2=e.catch(28),console.log(e.t2);case 59:return e.next=61,be();case 61:return e.next=63,he();case 63:return e.next=65,pe();case 65:ie(!1);case 66:case"end":return e.stop()}}),e,null,[[3,23],[28,56],[38,48]])})));return function(t){return e.apply(this,arguments)}}(),[P,t,r.name,h,ne]),Oe=function(){return G(!1)},ge=[],xe=0;xe<3;xe++)ge[xe]=Object(g.jsx)(oe,{facility:r.name,assignedDate:Object(I.default)(ue,xe),hours:(de+xe)%7===0||(de+xe)%7===6?r.weekendHours:r.weekdayHours,handleChange:je,selectedSlot:h,bookedSlots:x,slotCount:A},Object(I.default)(ue,xe).toLocaleDateString());return Object(g.jsxs)("div",{className:n.root,children:[Object(g.jsx)(Ne,{handleAlert:t,bookedSlots:D}),Object(g.jsxs)(_.a,{className:n.paper,children:[Object(g.jsx)(u.a,{variant:"h4",align:"center",className:n.header,children:"Book a Facility"}),Object(g.jsx)(i.a,{className:n.box,children:Object(g.jsxs)(k.a,{variant:"outlined",className:n.formControl,children:[Object(g.jsx)(w.a,{id:"facility-label",children:"Select Facility"}),Object(g.jsx)(S.a,{value:r.name,labelId:"facility-label",id:"facility",onChange:function(e){d(Ee.filter((function(t){return t.name===e.target.value}))[0]),m({})},label:"Select Facility",children:Ee.map((function(e,t){return Object(g.jsx)(C.a,{value:e.name,children:e.name},t)}))})]})}),!re&&Object(g.jsx)(i.a,{display:"flex",mt:2,justifyContent:"center",children:Object(g.jsx)(z.a,{label:Object(g.jsxs)(u.a,{children:[Object(g.jsx)("strong",{children:"Remaining credits this week:"})," ",ne]})})}),re?Object(g.jsxs)(i.a,{display:"flex",flexDirection:"column",alignItems:"center",mt:3,children:[Object(g.jsx)(l.a,{className:n.circularProgress}),Object(g.jsx)(u.a,{variant:"h5",children:"Loading bookings page..."})]}):Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),G(!0)},children:[ge,0!==Object.keys(h).length&&Object(g.jsx)(i.a,{display:"flex",justifyContent:"center",children:Object(g.jsx)("input",{type:"submit",value:P,className:n.button})})]})]}),Object(g.jsxs)($.a,{open:J,onClose:Oe,children:[Object(g.jsx)(Q.a,{children:"Book"===P?"Book selected slot?":"Cancel selected slot?"}),Object(g.jsxs)(X.a,{children:[Object(g.jsx)(Z.a,{children:"Facility: ".concat(r.name)}),Object(g.jsx)(Z.a,{children:"Date: ".concat(h.date&&h.date.toDateString())}),Object(g.jsx)(Z.a,{children:"Hour: ".concat(h.date&&h.date.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(":",""))})]}),Object(g.jsxs)(ee.a,{children:[Object(g.jsx)(E.a,{onClick:Oe,color:"primary",children:"No"}),Object(g.jsx)(E.a,{onClick:function(e){Oe(),fe(e)},color:"primary",children:"Yes"})]})]})]})},Fe=Object(j.a)((function(e){return{}})),Ae=function(e){var t=e.handleAlert,n=e.loggedIn,a=(e.loading,Fe());return Object(g.jsx)("div",{className:a.root,children:n?Object(g.jsx)(i.a,{mt:2,children:Object(g.jsx)(Ie,{handleAlert:t})}):Object(g.jsx)(G,{})})},Be=n(499),He=n(496),Re=Object(j.a)((function(e){return{root:{maxWidth:"350px",display:"flex",flexDirection:"column",border:"1px solid grey",borderRadius:5,padding:e.spacing(4),margin:"0 auto",textAlign:"center",marginTop:e.spacing(8)},formControl:{display:"flex",marginBottom:e.spacing(4)},helperText:{textAlign:"center",marginTop:e.spacing(2)},button:{backgroundColor:h.a[600],"&:hover":{backgroundColor:h.a[800]}},link:{color:"#EF7C00",textDecoration:"none"}}})),Pe=function(e){var t=e.handleAlert,n=(e.loggedIn,e.setLoggedIn),c=Re(),s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],d=r[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1],O=Object(f.f)(),x=function(e){e.preventDefault();var a="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","login");fetch(a,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:h}),credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.success&&(t("Successfully logged in!","success"),n(!0),O.push("/"))})).catch((function(e){t("Failed to login, please try again! :(","error"),d(""),m("")}))};return Object(g.jsxs)(i.a,{className:c.root,children:[Object(g.jsx)(u.a,{variant:"h6",children:"Login"}),Object(g.jsxs)("form",{onSubmit:x,children:[Object(g.jsxs)(k.a,{className:c.formControl,children:[Object(g.jsx)(w.a,{htmlFor:"email",children:"Email"}),Object(g.jsx)(He.a,{id:"email",type:"email",name:"email",value:l,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(g.jsxs)(k.a,{className:c.formControl,children:[Object(g.jsx)(w.a,{htmlFor:"password",children:"Password"}),Object(g.jsx)(He.a,{id:"password",type:"password",name:"password",value:h,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(g.jsx)(E.a,{variant:"contained",type:"submit",onSubmit:x,disableElevation:!0,className:c.button,children:"Login"})]}),Object(g.jsxs)(Be.a,{className:c.helperText,children:["New user? Click"," ",Object(g.jsx)(p.b,{to:"/register",className:c.link,children:"here"})," ","to register now!"]})]})},We=n(574),Me=n(564),Ue=Object(j.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},titleLink:{textDecoration:"none",color:"white"},link:{textDecoration:"none",color:"white"},appBar:{backgroundColor:h.a[700]}}})),Je=function(e){var t=e.loggedIn,n=e.setLoggedIn,c=Ue();return Object(g.jsx)("nav",{className:c.root,children:Object(g.jsx)(We.a,{position:"static",className:c.appBar,children:Object(g.jsxs)(Me.a,{children:[Object(g.jsx)(u.a,{variant:"h6",className:c.title,children:Object(g.jsx)(p.b,{to:"/",className:c.titleLink,children:"NUSFitness"})}),t?Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(E.a,{children:Object(g.jsx)(p.b,{to:"/",className:c.link,children:"Home"})}),Object(g.jsx)(E.a,{children:Object(g.jsx)(p.b,{to:"/dashboard",className:c.link,children:"Dashboard"})}),Object(g.jsx)(E.a,{children:Object(g.jsx)(p.b,{to:"/profile",className:c.link,children:"Profile"})}),Object(g.jsx)(E.a,{children:Object(g.jsx)(p.b,{to:"/",onClick:function(e){e.preventDefault();var t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","logout");fetch(t,{credentials:"include"}).catch((function(e){return console.log(e)})),n(!1)},className:c.link,children:"Logout"})})]}):Object(g.jsxs)(a.Fragment,{children:[Object(g.jsx)(E.a,{children:Object(g.jsx)(p.b,{to:"/login",className:c.link,children:"Login"})}),Object(g.jsx)(E.a,{children:Object(g.jsx)(p.b,{to:"/register",className:c.link,children:"Register"})})]})]})})})},Ge=Object(j.a)((function(e){return{root:{maxWidth:"350px",display:"flex",flexDirection:"column",border:"1px solid grey",borderRadius:5,padding:e.spacing(4),margin:"0 auto",textAlign:"center",marginTop:e.spacing(8)},formControl:{display:"flex",marginBottom:e.spacing(4)},helperText:{textAlign:"center",marginTop:e.spacing(2)},button:{backgroundColor:h.a[600],"&:hover":{backgroundColor:h.a[800]}},link:{color:"#EF7C00",textDecoration:"none"}}})),Ye=function(e){var t=e.handleAlert,n=(e.loggedIn,e.setLoggedIn),c=Ge(),s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],d=r[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),h=b[0],m=b[1],O=Object(f.f)(),x=function(e){if(e.preventDefault(),!l.includes("u.nus.edu"))return t("Please enter a valid NUS email","error"),d(""),void m("");var a="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","register");fetch(a,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l,password:h}),credentials:"include"}).then((function(e){return e.json()})).then((function(e){e._id?(t("Successfully registered! Head to the profile section to sync with telegram!","info",7e3),n(!0),O.push("/")):(t("Failed to register, please try again! :(","error"),d(""),m(""))}))};return Object(g.jsxs)(i.a,{className:c.root,children:[Object(g.jsx)(u.a,{variant:"h6",children:"Register"}),Object(g.jsxs)("form",{onSubmit:x,children:[Object(g.jsxs)(k.a,{className:c.formControl,children:[Object(g.jsx)(w.a,{htmlFor:"email",children:"Email"}),Object(g.jsx)(He.a,{className:c.input,id:"email",type:"email",name:"email",value:l,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(g.jsxs)(k.a,{className:c.formControl,children:[Object(g.jsx)(w.a,{htmlFor:"password",children:"Password"}),Object(g.jsx)(He.a,{id:"password",type:"password",name:"password",value:h,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(g.jsx)(E.a,{variant:"contained",type:"submit",onSubmit:x,disableElevation:!0,className:c.button,children:"Register"})]}),Object(g.jsxs)(Be.a,{className:c.helperText,children:["Already a user? Click"," ",Object(g.jsx)(p.b,{to:"/login",className:c.link,children:"here"})," ","to login now!"]})]})},Ke=n(590),qe=n(575),Ve=n(561),_e=n(565),ze=n(560),$e=n(563),Qe=n(562),Xe=n(329),Ze=n.n(Xe),et=function(){return Object(g.jsx)(Ze.a,{dataOnauth:function(e){var t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","telegram/login");fetch(t,{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.first_name,chatId:e.id}),credentials:"include"}).then((function(e){return e.json()})).then((function(e){e.success||console.log(e)}))},botName:"NUSFitness_Bot"})},tt=Object(j.a)((function(e){return{root:{padding:e.spacing(4)},container:Object(v.a)({},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"inherit"}),tableContainer:{width:"inherit"},circularProgress:{margin:"0 auto",color:m.a[200]},profileBox:{border:"1px solid grey",borderRadius:12},avatar:{width:200,height:200,marginTop:e.spacing(2),marginBottom:e.spacing(1)},info:{marginTop:e.spacing(1),marginBottom:e.spacing(2)},chip:{marginTop:e.spacing(2)},telegramLogin:Object(v.a)({marginTop:e.spacing(2)},e.breakpoints.down("sm"),{marginBottom:e.spacing(2)})}})),nt=function(e){e.handleAlert;var t=e.loggedIn,n=tt(),c=Object(a.useState)([]),s=Object(o.a)(c,2),r=s[0],d=s[1],j=Object(a.useState)(),b=Object(o.a)(j,2),h=b[0],m=b[1],p=Object(a.useState)(),f=Object(o.a)(p,2),O=f[0],x=f[1],y=Object(a.useState)(),v=Object(o.a)(y,2),k=v[0],w=v[1],S=Object(a.useState)({}),C=Object(o.a)(S,2),T=C[0],D=C[1],N=Object(a.useState)(),L=Object(o.a)(N,2),E=L[0],I=L[1],F=Object(a.useMemo)((function(){return h||O||k}),[h,O,k]);return Object(a.useEffect)((function(){var e="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","bookedSlots");m(!0),fetch(e,{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){d(e.map((function(e){return{facility:e.facility,date:new Date(e.date)}}))),m(!1)})).catch((function(e){m(!1),console.log(e)}))}),[]),Object(a.useEffect)((function(){var e="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","profile");w(!0),fetch(e,{method:"get",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()})).then((function(e){D(e),w(!1)})).catch((function(e){w(!1),console.log(e)}))}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(V.a)(q.a.mark((function e(){var t,n,a;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","creditsLeft"),x(!0),e.next=4,fetch(t,{method:"post",headers:{"Content-Type":"application/json"},credentials:"include"});case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,I(a.credits),x(!1);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(g.jsx)("div",{className:n.root,children:t?F?Object(g.jsx)(i.a,{display:"flex",mt:1.5,justifyContent:"center",children:Object(g.jsx)(l.a,{className:n.circularProgress})}):Object(g.jsxs)(i.a,{display:"flex",justifyContent:"center",className:n.container,alignItems:"flex-start",children:[Object(g.jsxs)(i.a,{ml:2,mr:2,flex:3,display:"flex",flexDirection:"column",children:[Object(g.jsxs)(i.a,{display:"flex",alignItems:"center",flexDirection:"column",className:n.profileBox,children:[Object(g.jsx)(Ke.a,{src:"https://robohash.org/".concat(T.email,"?set=set5"),className:n.avatar}),Object(g.jsx)(u.a,{variant:"h6",children:T.email}),Object(g.jsx)(i.a,{className:n.info,display:"flex",flexDirection:"column",alignItems:"center",children:Object(g.jsxs)(u.a,{children:[Object(g.jsx)("strong",{children:"Joined:"})," ",new Date(T.joined).toLocaleDateString()]})})]}),Object(g.jsx)(z.a,{className:n.chip,label:Object(g.jsxs)(u.a,{children:[Object(g.jsx)("strong",{children:"Remaining credits this week:"})," ",E]})}),Object(g.jsx)(i.a,{display:"flex",justifyContent:"center",className:n.telegramLogin,children:Object(g.jsx)(et,{})})]}),Object(g.jsxs)(i.a,{ml:2,mr:2,display:"flex",flexDirection:"column",flex:7,children:[Object(g.jsx)(i.a,{display:"flex",justifyContent:"center",mb:1,children:Object(g.jsx)(u.a,{variant:"h4",children:"My Bookings"})}),Object(g.jsx)(qe.a,{className:n.tableContainer,component:_.a,children:Object(g.jsxs)(Ve.a,{children:[Object(g.jsx)(_e.a,{children:Object(g.jsxs)(ze.a,{children:[Object(g.jsx)($e.a,{children:"Facility"}),Object(g.jsx)($e.a,{align:"right",children:"Date"}),Object(g.jsx)($e.a,{align:"right",children:"Time"})]})}),Object(g.jsx)(Qe.a,{children:!F&&r.map((function(e){return Object(g.jsxs)(ze.a,{children:[Object(g.jsx)($e.a,{component:"th",scope:"row",children:e.facility}),Object(g.jsx)($e.a,{align:"right",children:e.date.toDateString()}),Object(g.jsx)($e.a,{align:"right",children:e.date.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",hour12:!1}).replace(":","")})]},e.facility)}))})]})}),!r.length&&Object(g.jsx)(i.a,{display:"flex",mt:1.5,justifyContent:"center",children:Object(g.jsx)("span",{children:"No bookings found."})})]})]}):Object(g.jsx)(G,{})})},at=Object(d.a)({palette:{primary:{main:h.a[700]}},overrides:{MuiButton:{contained:{backgroundColor:"#337ab7","&:hover":{backgroundColor:"#286090"},color:"white"}},MuiFormLabel:{root:{"&$focused":{color:"#337ab7"}}},MuiInput:{underline:{"&:after":{borderBottom:"2px solid #337ab7"}}}}}),ct=Object(j.a)((function(e){return{circularProgress:{marginBottom:e.spacing(1.5),color:m.a[200]}}})),st=function(){var e=ct(),t=Object(a.useState)(null),n=Object(o.a)(t,2),c=n[0],s=n[1],r=Object(a.useState)(!1),d=Object(o.a)(r,2),j=d[0],h=d[1],m=Object(a.useState)(!1),O=Object(o.a)(m,2),y=O[0],v=O[1],k=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;s({msg:e,type:t}),setTimeout((function(){s(null)}),n)};return Object(a.useEffect)((function(){var e="".concat("local.nusfitness.com"===window.location.hostname?"http://local.nusfitness.com:5000/":"https://salty-reaches-24995.herokuapp.com/","isLoggedIn");v(!0),fetch(e,{credentials:"include"}).then((function(e){return e.json()})).then((function(e){h(e.authenticated),v(!1)})).catch((function(e){console.log(e),h(!1),v(!1)}))}),[]),Object(g.jsx)(g.Fragment,{children:y?Object(g.jsxs)(i.a,{display:"flex",flexDirection:"column",alignItems:"center",mt:3,children:[Object(g.jsx)(l.a,{className:e.circularProgress}),Object(g.jsx)(u.a,{variant:"h5",children:"Loading NUSFitness..."})]}):Object(g.jsx)(b.a,{theme:at,children:Object(g.jsx)(p.a,{basename:"/nusfitness",children:Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)(Je,{loggedIn:j,setLoggedIn:h}),Object(g.jsx)(x,{alert:c}),Object(g.jsxs)(f.c,{children:[Object(g.jsx)(f.a,{exact:!0,path:"/dashboard",children:Object(g.jsx)(G,{})}),Object(g.jsx)(f.a,{exact:!0,path:"/profile",children:Object(g.jsx)(nt,{handleAlert:k,loggedIn:j})}),Object(g.jsx)(f.a,{exact:!0,path:"/register",children:Object(g.jsx)(Ye,{handleAlert:k,loggedIn:j,setLoggedIn:h})}),Object(g.jsx)(f.a,{exact:!0,path:"/login",children:Object(g.jsx)(Pe,{handleAlert:k,loggedIn:j,setLoggedIn:h})}),Object(g.jsx)(f.a,{exact:!0,path:"/",children:Object(g.jsx)(Ae,{handleAlert:k,loggedIn:j,setLoggedIn:h})})]})]})})})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(st,{})}),document.getElementById("root"))}},[[490,1,2]]]);
//# sourceMappingURL=main.441d655d.chunk.js.map