(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{188:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"디스트럭처링"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#디스트럭처링","aria-hidden":"true"}},[t._v("#")]),t._v(" 디스트럭처링")]),t._v(" "),n("h2",{attrs:{id:"배열-디스트럭처링-array-destructuring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#배열-디스트럭처링-array-destructuring","aria-hidden":"true"}},[t._v("#")]),t._v(" 배열 디스트럭처링 (Array destructuring)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("let  x,  y,  z;  \n[x,  y]  =  [1,  2];  \nconsole.log(x,  y);  // 1 2  \n[x,  y]  =  [1];  \nconsole.log(x,  y);  // 1 undefined  \n[x,  y]  =  [1,  2,  3];  \nconsole.log(x,  y);  // 1 2  \n[x,  ,  z]  =  [1,  2,  3];  \nconsole.log(x,  z);  // 1 3  \n// 기본값  \n[x,  y,  z  =  3]  =  [1,  2];  \nconsole.log(x,  y,  z);  // 1 2 3  \n[x,  y  =  10,  z  =  3]  =  [1,  2];  \nconsole.log(x,  y,  z);  // 1 2 3  \n// spread 연산자  \n[x,  ...y]  =  [1,  2,  3];  \nconsole.log(x,  y);  // 1 [ 2, 3 ]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const  today  =  new  Date();  \nconst  formattedDate  =  today.toISOString().substring(0,  10);  \nconst  [year,  month,  day]  =  formattedDate.split('-');  \nconsole.log([year,  month,  day]);  // [ '2018', '05', '05' ]\n")])])]),n("h2",{attrs:{id:"객체-디스트럭처링-object-destructuring"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#객체-디스트럭처링-object-destructuring","aria-hidden":"true"}},[t._v("#")]),t._v(" 객체 디스트럭처링 (Object destructuring)")]),t._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("// ES6 Destructuring  \nconst  obj  =  {  firstName:  'Ungmo',  lastName:  'Lee'  };  \nconst  {  firstName,  lastName  }  =  obj;  \nconsole.log(firstName,  lastName);  // Ungmo Lee\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const  todos  =  [  \n\t{  id:  1,  content:  'HTML',  completed:  true  },  \n\t{  id:  2,  content:  'CSS',  completed:  false  },  \n\t{  id:  3,  content:  'JS',  completed:  false  }  \n];  \n// todos 배열의 요소인 객체로부터 completed 프로퍼티만을 추출한다.  \nconst  completedTodos  =  todos.filter(({  completed  })  =>  completed);  \nconsole.log(completedTodos);  // [ { id: 1, content: 'HTML', completed: true } ]\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("const  person  =  {  \n\tname:  'Lee',  \n\taddress:  {  \n\t\tzipCode:  '03068',  \n\t\tcity:  'Seoul'  \n\t}  \n};  \nconst  {  address:  {  city  }  }  =  person;  \nconsole.log(city);  // 'Seoul'\n")])])])])}],!1,null,null,null);e.default=a.exports}}]);