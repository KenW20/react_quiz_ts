(this.webpackJsonpreact_quiz_ts=this.webpackJsonpreact_quiz_ts||[]).push([[0],{27:function(e,n,t){"use strict";t.r(n);var r,a,c=t(0),i=t(1),o=t.n(i),s=t(15),l=t.n(s),u=t(6),d=t(7),b=t.n(d),j=t(10),p=t(3),x=t(2);!function(e){e.Any="",e.GeneralKnowledge="9",e.Books="10",e.Film="11",e.Music="12",e.MusicalsAndTheatres="13",e.Television="14",e.VideoGames="15",e.BoardGames="16",e.Nature="17",e.Computers="18",e.Mathematics="19",e.Mythology="20",e.Sports="21",e.Geography="22",e.History="23",e.Politics="24",e.Art="25",e.Celebrities="26",e.Animals="27",e.Vehicles="28",e.Comics="29",e.Gadgets="30",e.JapaneseAnimeAndManga="31",e.CartoonAndAnimations="32"}(r||(r={})),function(e){e.EASY="easy",e.MEDIUM="medium",e.HARD="hard"}(a||(a={}));var f=function(){var e=Object(j.a)(b.a.mark((function e(n,t,r){var a,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://opentdb.com/api.php?amount=".concat(n,"&category=").concat(t,"&difficulty=").concat(r),console.log(a),e.next=4,fetch(a);case 4:return e.next=6,e.sent.json();case 6:return c=e.sent,e.abrupt("return",c.results.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{answers:(n=[].concat(Object(u.a)(e.incorrect_answers),[e.correct_answer]),Object(u.a)(n).sort((function(){return Math.random()-.5})))});var n})));case 8:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}(),h=t(4),O=t(5);function g(){var e=Object(h.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n    border: 3px solid #ffffff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"]);return g=function(){return e},e}function m(){var e=Object(h.a)(["\n  max-width: 1100px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"]);return m=function(){return e},e}var v=O.b.div(m()),y=O.b.div(g(),(function(e){var n=e.correct,t=e.userClicked;return n?"linear-gradient(90deg, #56FFA4, #59BC86)":!n&&t?"linear-gradient(90deg, #FF5656, #C16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),w=function(e){var n=e.question,t=e.answers,r=e.callback,a=e.userAnswer,i=e.questionNr,o=e.totalQuestions;return Object(c.jsxs)(v,{children:[Object(c.jsxs)("p",{className:"number",children:["Question: ",i," / ",o]}),Object(c.jsx)("p",{dangerouslySetInnerHTML:{__html:n}}),Object(c.jsx)("div",{children:t.map((function(e){return Object(c.jsx)(y,{correct:(null===a||void 0===a?void 0:a.correctAnswer)===e,userClicked:(null===a||void 0===a?void 0:a.answer)===e,children:Object(c.jsx)("button",{disabled:!!a,value:e,onClick:r,children:Object(c.jsx)("span",{dangerouslySetInnerHTML:{__html:e}})})},e)}))})]})};function A(){var e=Object(h.a)(["\n  max-width: 1100px;\n  background: #ebfeee;\n  border-radius: 15px;\n  border: 2px solid #0085a3;\n  padding: 30px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.55);\n  text-align: left;\n\n  p {\n    font-size: 1rem;\n  }\n\n  select {\n    font-size: 1rem;\n    background: #ebfeee;\n    border: 1px solid #0085a3;\n  }\n"]);return A=function(){return e},e}var k=O.b.div(A()),C=function(e){var n=e.category,t=e.difficulty,o=e.callback,s=Object(i.useState)({category:n,difficulty:t}),l=Object(p.a)(s,2),u=l[0],d=l[1],b=function(e){var n,t=(n=e.target.value,Object.entries(a).filter((function(e){return e[1]===n}))[0][0]),r=a[t];d(Object(x.a)(Object(x.a)({},u),{},{difficulty:r})),o(Object(x.a)(Object(x.a)({},u),{},{difficulty:r}))};return Object(c.jsx)(k,{children:Object(c.jsxs)("form",{children:[Object(c.jsxs)("p",{className:"number",children:["Category :",Object(c.jsxs)("select",{onChange:function(e){var n,t=(n=e.target.value,Object.entries(r).filter((function(e){return e[1]===n}))[0][0]),a=r[t];d(Object(x.a)(Object(x.a)({},u),{},{category:a})),o(Object(x.a)(Object(x.a)({},u),{},{category:a}))},value:n,children:[Object(c.jsx)("option",{value:r.Any,children:"Any"}),Object(c.jsx)("option",{value:r.GeneralKnowledge,children:"General Knowledge"}),Object(c.jsx)("option",{value:r.Books,children:"Books"}),Object(c.jsx)("option",{value:r.Film,children:"Film"}),Object(c.jsx)("option",{value:r.Music,children:"Music"}),Object(c.jsx)("option",{value:r.MusicalsAndTheatres,children:"Musicals And Theatres"}),Object(c.jsx)("option",{value:r.Television,children:"Television"}),Object(c.jsx)("option",{value:r.VideoGames,children:"Video Games"}),Object(c.jsx)("option",{value:r.BoardGames,children:"Board Games"}),Object(c.jsx)("option",{value:r.Nature,children:"Nature"}),Object(c.jsx)("option",{value:r.Computers,children:"Computers"}),Object(c.jsx)("option",{value:r.Mathematics,children:"Mathematics"}),Object(c.jsx)("option",{value:r.Mythology,children:"Mythology"}),Object(c.jsx)("option",{value:r.Sports,children:"Sports"}),Object(c.jsx)("option",{value:r.Geography,children:"Geography"}),Object(c.jsx)("option",{value:r.History,children:"History"}),Object(c.jsx)("option",{value:r.Politics,children:"Politics"}),Object(c.jsx)("option",{value:r.Art,children:"Art"}),Object(c.jsx)("option",{value:r.Celebrities,children:"Celebrities"}),Object(c.jsx)("option",{value:r.Animals,children:"Animals"}),Object(c.jsx)("option",{value:r.Vehicles,children:"Vehicles"}),Object(c.jsx)("option",{value:r.Comics,children:"Comics"}),Object(c.jsx)("option",{value:r.Gadgets,children:"Gadgets"}),Object(c.jsx)("option",{value:r.JapaneseAnimeAndManga,children:"Japanese Anime And Manga"}),Object(c.jsx)("option",{value:r.CartoonAndAnimations,children:"Cartoon And Animations"})]})]}),Object(c.jsxs)("p",{className:"number",children:["Difficulty :",Object(c.jsxs)("select",{onChange:function(e){return b(e)},value:t,children:[Object(c.jsx)("option",{value:a.EASY,children:"Easy"}),Object(c.jsx)("option",{value:a.MEDIUM,children:"Medium"}),Object(c.jsx)("option",{value:a.HARD,children:"Hard"})]})]})]})})},M=t.p+"static/media/surf.d64245a3.jpg";function S(){var e=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    > p {\n        color: #fff;\n    }\n\n    .score {\n        color: #fff;\n        font-size: 2rem;\n        margin: 0;\n    }\n\n    h1 {\n        font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n        background-image: linear-gradient(270deg, #fff, #87f1ff);\n        background-size: 100%\n        background-clip: text;\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        -moz-background-clip: text;\n        -moz-text-fill-color: transparent;\n        filter: drop-shadow(2px, 2px #0085a3);\n        font-size: 70px;\n        font-weight: 400;\n        text-align: center;\n        margin: 20px;\n    }\n\n    .start, .next {\n        cursor: pointer;\n        background-image: linear-gradient(180deg, #fff, #ffcc91);\n        border: 2px solid #d38558;\n        box-shadow: 0px 5px 10px rgba(0,0,0,0.25);\n        border-radius: 10px;\n        height: 40px;\n        margin: 20px 0;\n        padding: 0 40px;\n    }\n\n    .start {\n        max-width: 200px;\n    }\n\n    .start-region {\n        text-align: center;\n    }\n\n"]);return S=function(){return e},e}function G(){var e=Object(h.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        background-image: url(",");\n        background-size: cover;\n        margin: 0;\n        padding: 0 20px;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        font-family: 'Catarmaran' sans-serif;\n    }\n\n"]);return G=function(){return e},e}var z=Object(O.a)(G(),M),N=O.b.div(S()),_=function(){var e=Object(i.useState)(!1),n=Object(p.a)(e,2),t=n[0],o=n[1],s=Object(i.useState)([]),l=Object(p.a)(s,2),d=l[0],x=l[1],h=Object(i.useState)(0),O=Object(p.a)(h,2),g=O[0],m=O[1],v=Object(i.useState)([]),y=Object(p.a)(v,2),A=y[0],k=y[1],M=Object(i.useState)(0),S=Object(p.a)(M,2),G=S[0],_=S[1],T=Object(i.useState)(!0),q=Object(p.a)(T,2),B=q[0],F=q[1],H=Object(i.useState)({category:r.Computers,difficulty:a.EASY}),E=Object(p.a)(H,2),I=E[0],Q=E[1],V=function(){var e=Object(j.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),F(!1),e.next=4,f(10,I.category,I.difficulty);case 4:n=e.sent,x(n),_(0),k([]),m(0),o(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{}),Object(c.jsxs)(N,{children:[Object(c.jsx)("h1",{children:"Trivia Quiz"}),B||10===A.length?Object(c.jsxs)("div",{className:"start-region",children:[Object(c.jsx)("button",{className:"start",onClick:V,children:"Start"}),Object(c.jsx)(C,{category:I.category,difficulty:I.difficulty,callback:function(e){console.log(e),Q(e)}})]}):null,B?null:Object(c.jsxs)("p",{className:"score",children:["Score: ",G]}),t&&Object(c.jsx)("p",{children:"Loading Questions ..."}),!t&&!B&&Object(c.jsx)(w,{questionNr:g+1,totalQuestions:10,question:d[g].question,answers:d[g].answers,userAnswer:A?A[g]:void 0,callback:function(e){if(!B){var n=e.currentTarget.value,t=d[g].correct_answer===n;t&&_((function(e){return e+1}));var r={question:d[g].question,answer:n,correct:t,correctAnswer:d[g].correct_answer};k((function(e){return[].concat(Object(u.a)(e),[r])}))}}}),B||t||A.length!==g+1||9===g?null:Object(c.jsx)("button",{className:"next",onClick:function(){var e=g+1;10===e?F(!0):m(e)},children:"Next Question"})]})]})};l.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(_,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0e61f936.chunk.js.map