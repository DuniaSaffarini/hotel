(this.webpackJsonphotelwebsite=this.webpackJsonphotelwebsite||[]).push([[0],{104:function(e,t,s){"use strict";s.r(t);var c=s(1),i=s(2),n=s.n(i),l=s(19),r=s.n(l),a=(s(64),s(65),s(35)),j=s(5),o=s(32),d=(s(66),s(120)),x=s(51),h=s.n(x);s(67);function b(e){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{children:Object(c.jsxs)(d.a,{style:{width:"268px",height:"77px",color:"white",backgroundColor:"#e0b973",fontSize:"28px"},variant:"contained",children:[e.icon&&Object(c.jsx)("i",{className:"icon",children:Object(c.jsx)(h.a,{style:{color:"white",fontSize:"35px"}})}),e.title]})})})}var O=s(52),p=s.n(O);function m(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1];return window.addEventListener("scroll",(function(){!s&&window.pageYOffset>400?n(!0):s&&window.pageYOffset<=400&&n(!1)})),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"text-dim",children:[Object(c.jsx)("p",{style:{fontSize:"51px",marginBottom:"0px"},children:"WELCOME TO"}),Object(c.jsx)("p",{style:{fontSize:"140px",fontFamily:"serif",marginBottom:"0px",marginTop:"0px"},children:"LUXURY"}),Object(c.jsx)("p",{style:{fontSize:"52px",marginBottom:"0px",marginTop:"0px",letterSpacing:"27px",fontFamily:"serif"},children:"HOTELS"}),Object(c.jsxs)("p",{style:{marginBottom:"0px",marginTop:"0px",fontSize:"30px"},children:["Book your stay and enjoy luxury",Object(c.jsx)("br",{}),"redefined at the most affordable rates"]})]}),Object(c.jsx)("div",{style:{marginTop:"100px"},children:Object(c.jsx)(b,{icon:"true",title:"BOOK NOW"})}),Object(c.jsxs)("div",{style:{marginTop:"80px"},children:[Object(c.jsx)("p",{style:{color:"white",fontSize:"27px"},children:" Scroll"}),Object(c.jsx)(p.a,{className:"scrollBottom",onClick:function(){window.scrollTo({top:1200,behavior:"smooth"})},style:{color:"white",fontSize:"72px"}})]}),Object(c.jsx)("div",{})]})}s(73);var u=s.p+"static/media/img4.fcf84253.png",g=s(31);s(74);function f(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{className:"word-title",children:"Testimonials"}),Object(c.jsx)("p",{className:"words",children:'"Calm, Serene, Retro \u2013 What a way to relax and enjoy"'}),Object(c.jsx)("p",{className:"copy-right",children:"Mr. and Mrs. Baxter, UK"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"left-arrow",children:Object(c.jsx)(g.a,{})}),Object(c.jsx)("div",{className:"right-arrow",children:Object(c.jsx)(g.b,{})})]})]})}function v(e){return Object(c.jsxs)("div",{style:{height:"1924px"},children:[Object(c.jsx)("p",{style:{marginTop:"93px",color:"#14274a",fontSize:"40px"},children:"All room types including complementary breakfast"}),Object(c.jsx)(y,{img:"first",title:"Luxury redefined",description:"Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself."}),Object(c.jsx)(y,{img:"second",title:"Leave your worries in the sand",description:"We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean."}),Object(c.jsx)("div",{children:Object(c.jsx)(f,{})})]})}function y(e){return Object(c.jsx)("div",{className:"txt ".concat("first"===e.img?"img1":"img2"),children:Object(c.jsxs)("div",{style:{},children:[Object(c.jsxs)("div",{style:{width:"27%",display:"inline-block",paddingLeft:"50px",borderLeft:"3px solid black",verticalAlign:"top",marginTop:"50px"},children:[Object(c.jsx)("h3",{className:"img-title",children:e.title}),Object(c.jsx)("p",{className:"img-des",children:e.description}),Object(c.jsx)("div",{style:{marginTop:"37px",textAlign:"left",width:"20%"},children:Object(c.jsx)(b,{title:"EXPLORE"})})]}),Object(c.jsx)("div",{style:{display:"inline-block"},children:Object(c.jsx)("img",{style:{width:"85%",height:"30%"},src:u,alt:"img"})})]})})}s(75);var w=s(53),N=s.n(w),T=s(54),S=(s(93),{image:{},loading:!0,error:""}),E=function(e,t){switch(t.type){case"OnSuccess":return{loading:!1,image:t.payload,error:""};case"OnFailure":return{loading:!1,image:{},error:"Something went wrong"};default:return e}};function R(e){var t=e.img;return Object(c.jsx)("div",{children:Object(c.jsx)("figure",{className:"imgfig-cont",children:Object(c.jsxs)("div",{className:"img3",children:[Object(c.jsx)("div",{style:{backgroundColor:"#14274A"},children:Object(c.jsx)("img",{className:"img2-cont",alt:t.alt_description,src:t.urls.raw})}),Object(c.jsx)("figcaption",{className:"imgCap2-cont",children:t.alt_description}),Object(c.jsxs)("div",{className:"img2-d",children:[Object(c.jsxs)("div",{className:"detail",children:[Object(c.jsx)("span",{className:"pluss",children:Object(c.jsx)(T.a,{})}),Object(c.jsx)("div",{className:"room-d",children:" VIEW ROOM DETAILS"})]}),Object(c.jsx)("div",{className:"detail",children:Object(c.jsx)(b,{title:"$".concat(t.downloads.toString().substr(0,3)," Avg/night"),style:{fontSize:"21px"}})})]})]})})})}function A(e){var t=e.img;return Object(c.jsx)("div",{children:Object(c.jsx)("figure",{className:"imgfig-cont",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{className:"img-cont",alt:t.alt_description,src:t.urls.raw}),Object(c.jsx)("figcaption",{className:"imgCap-cont",children:t.alt_description})]})})})}var k=function(e){var t=Object(i.useReducer)(E,S),s=Object(o.a)(t,2),n=s[0],l=s[1],r=e.count,a=e.query;return Object(i.useEffect)((function(){N.a.get("https://api.unsplash.com/photos/random/?count=".concat(r,"&query=").concat(a,"&client_id=rrFO8buP5ewE16RTzo_YGNnzfTtVUMKOhRSHxYwy-Z8")).then((function(e){console.log(e.data),l({type:"OnSuccess",payload:e.data})})).catch((function(e){l({type:"OnFailure"})}))}),[r,a]),Object(c.jsxs)("div",{children:[" ",n.loading?"Loading!! Please wait":n.image.map((function(e){return"hotel"===a?Object(c.jsx)(A,{img:e},e.id):Object(c.jsx)(R,{img:e},e.id)}))]})};s(94);function C(e){return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{style:{marginTop:"90px",marginBottom:"50px"},children:[Object(c.jsx)("div",{className:"title1",children:e.title}),Object(c.jsx)("div",{className:"desc1",children:e.desc})]})})}function L(){return Object(c.jsx)("div",{style:{height:"8385px"},children:Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{title:"FACILITIES",desc:"We want your stay at our lush hotel to be truly unforgettable.\r That is why we give special attention to all of your needs so that we can ensure an experience\r quite uniquw. Luxury hotels offers the perfect setting with stunning views for leisure and our\r modern luxury resort facilities will help you enjoy the best of all."}),Object(c.jsx)("div",{className:"image-container",children:Object(c.jsx)(k,{count:"6",query:"hotel"})}),Object(c.jsx)(f,{})]})})}s(95);function F(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(C,{title:"ROOMS AND RATES",desc:"Each of our bright, light-flooded rooms come with everything you could possibly need for a comfortable stay. And yes, \r comfort isn\u2019t our only objective, we also value good design, sleek contemporary furnishing complemented \r by the rich tones of nature\u2019s palette as visible from our rooms\u2019 sea-view windows and terraces. "}),Object(c.jsx)(k,{count:"3",query:"rooms"}),Object(c.jsx)(f,{})]})}s(96);var z=s(55);function B(){return Object(c.jsxs)("div",{style:{height:"2100px"},children:[Object(c.jsx)("div",{className:"contact-us",children:"CONTACT-US"}),Object(c.jsxs)("div",{style:{marginTop:"390px",marginLeft:"207px"},children:[Object(c.jsx)("div",{className:"contact-title",children:"WE ARE HERE FOR YOU"}),Object(c.jsx)("div",{className:"contact-des",children:"At Luxury Hotels, we take our customers seriously. Do you have any enquiries, compaints or requests, please forward it to our support desk and we will get back to you as soon as possible."}),Object(c.jsxs)("div",{style:{marginTop:"182px"},children:[Object(c.jsxs)("div",{style:{width:"60%",display:"inline-block"},children:[Object(c.jsxs)("div",{className:"ad1",children:["497 Evergreen Rd. Roseville, ",Object(c.jsx)("br",{}),"CA 95673"]}),Object(c.jsxs)("div",{className:"ad2",children:[Object(c.jsxs)("b",{style:{display:"inline-flex",verticalAlign:"super"},children:["View map"," "]}),Object(c.jsxs)("b",{children:[Object(c.jsx)(z.a,{})," "]})]}),Object(c.jsxs)("div",{className:"ad3",children:["Phone: +44 345 678 903",Object(c.jsx)("br",{}),"Email: luxury_hotels@gmail.com"]})]}),Object(c.jsx)("div",{style:{verticalAlign:"top",width:"40%",display:"inline-block"},children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("label",{children:["Name:",Object(c.jsx)("input",{type:"text",name:"name"})]}),Object(c.jsxs)("label",{children:["Email Address:",Object(c.jsx)("input",{type:"text",name:"email"})]}),Object(c.jsxs)("label",{children:["Message",Object(c.jsx)("input",{style:{height:"352px"},type:"text",name:"message"})]}),Object(c.jsx)("input",{type:"submit",className:"submit",value:"Submit"})]})})]})]})]})}s(97);function H(){return Object(c.jsxs)("div",{className:"header-container",children:[Object(c.jsxs)("div",{className:"Logo",children:[Object(c.jsx)("h4",{children:"Luxury "}),Object(c.jsx)("h6",{children:" Hotels"})]}),Object(c.jsx)("div",{className:"navigation-bar",children:Object(c.jsx)("div",{className:"nav-width",children:Object(c.jsx)("ul",{children:Object(c.jsxs)("li",{children:[Object(c.jsx)("a",{href:"/Home",children:"Home "}),Object(c.jsx)("a",{href:"/Facilities",children:"Facilities "}),Object(c.jsx)("a",{href:"/Rooms",children:"Rooms "}),Object(c.jsx)("a",{href:"/Contact",children:"Contact us "})]})})})})]})}s(98);var I=s(22);function U(){return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"footer",children:Object(c.jsx)("div",{className:"footer-tri",children:Object(c.jsx)("table",{className:"footer-cont",children:Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"Group",children:[Object(c.jsx)("p",{className:"lux",children:"LUXURY"}),Object(c.jsx)("p",{className:"hotels",children:"HOTELS"})]}),Object(c.jsxs)("div",{className:"address",children:[Object(c.jsx)("p",{style:{width:"227px"},children:"497 Evergreen Rd. Roseville, CA 95673"}),Object(c.jsx)("p",{style:{width:"98px"},children:" +44 345 678 903"}),Object(c.jsx)("p",{style:{width:"98px"},children:" luxury_hotels@gmail.com"})]})]})}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"sec",children:[Object(c.jsx)("p",{style:{paddingTop:"28px"},children:" About Us"}),Object(c.jsxs)("p",{style:{margin:"40px 0px 40px 0px"},children:[" ","Contact Terms"]}),Object(c.jsx)("p",{children:" Conditions"})]})}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"sec",children:[Object(c.jsxs)("p",{style:{paddingTop:"28px"},children:[" ",Object(c.jsx)("span",{style:{paddingRight:"27px"},children:Object(c.jsx)(I.a,{})}),"Facebook"]}),Object(c.jsxs)("p",{style:{margin:"40px 0px 40px 0px"},children:[" ",Object(c.jsx)("span",{style:{paddingRight:"27px"},children:Object(c.jsx)(I.c,{})})," ","Twitter"]}),Object(c.jsxs)("p",{children:[" ",Object(c.jsxs)("span",{style:{paddingRight:"27px"},children:[Object(c.jsx)(I.b,{})," "]}),"Instagram"]})]})}),Object(c.jsx)("td",{children:Object(c.jsxs)("div",{className:"sec",children:[Object(c.jsx)("p",{style:{paddingTop:"28px"},children:"Subscribe to our newsletter"}),Object(c.jsx)("div",{className:"Email",children:Object(c.jsx)("span",{className:"add",children:" Email Address"})}),Object(c.jsx)("div",{className:"ok",children:Object(c.jsx)("div",{className:"ok2",children:"OK"})})]})})]})})})})})})}var q=function(){var e=window.location.pathname,t="";return t="/Home"===e?"app-cont":"/Facilities"===e?"app-cont2":"/Rooms"===e?"app-cont3":"app-cont4",Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)("div",{className:t,children:[Object(c.jsx)("div",{className:"App-header",children:Object(c.jsx)("header",{children:Object(c.jsx)(H,{})})}),Object(c.jsxs)("div",{children:["/Contact"===e?" ":Object(c.jsx)(m,{}),Object(c.jsx)(a.a,{basename:"/hotel",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/Home",children:Object(c.jsx)(v,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/Facilities",children:Object(c.jsx)(L,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/Rooms",children:Object(c.jsx)(F,{})}),Object(c.jsx)(j.a,{exact:!0,path:"/Contact",children:Object(c.jsx)(B,{})})]})}),Object(c.jsx)(U,{})]})]})})},M=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,121)).then((function(t){var s=t.getCLS,c=t.getFID,i=t.getFCP,n=t.getLCP,l=t.getTTFB;s(e),c(e),i(e),n(e),l(e)}))};r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(q,{})}),document.getElementById("root")),M()},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},73:function(e,t,s){},74:function(e,t,s){},75:function(e,t,s){},93:function(e,t,s){},94:function(e,t,s){},95:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){}},[[104,1,2]]]);
//# sourceMappingURL=main.29d953c0.chunk.js.map