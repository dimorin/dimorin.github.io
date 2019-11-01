(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{209:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("D3.js is a JavaScript library for manipulating documents based on data."),a("br"),t._v("\nD3 helps you bring data to life using HTML, SVG, and CSS.\n"),a("a",{attrs:{href:"https://d3js.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://d3js.org/"),a("OutboundLink")],1)]),t._v(" "),t._m(1),t._m(2),t._m(3),t._v(" "),a("ul",[a("li",[t._v("d3.select")]),t._v(" "),a("li",[t._v("d3.selectAll")]),t._v(" "),a("li",[t._v("selection.attr")]),t._v(" "),a("li",[t._v("selection.data")]),t._v(" "),a("li",[t._v("selection.enter")]),t._v(" "),a("li",[t._v("selection.append")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/zziuni/d3/wiki/API-Reference",target:"_blank",rel:"noopener noreferrer"}},[t._v("더 많은 문법은"),a("OutboundLink")],1),t._v(")")])]),t._v(" "),a("p",[t._v("메서드가 체인으로 연결되어 있을 때, data()메서드를 호출한 다음에는 언제든지 d를 받는 익명 함수를 만들 수 있다.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("GeoJSON 은 지리 정보를 저장할 목적으로 최적화한 JSON 객체의 특정한 형태다."),a("br"),t._v(" "),a("a",{attrs:{href:"https://geojson.org/geojson-spec.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("GeoJSON"),a("OutboundLink")],1),t._v(" 에는 지정학적 공간의 한 지점을 저장할 수 있다(보통은 위도/경도 좌표다)."),a("br"),t._v("\n하지만 선과 다각형 같은 도형, 다른 공간적인 특징도 저장이 가능하다. 가지고 있는 지리 정보가 있다면 GeoJSON으로 파싱함으로써 D3와 최적의 궁합을 맞출 수 있다."),a("br"),t._v("\nGeoJSON에서는 항상 경도(longitude)를 위도(latitude)보다 앞에 적어야 한다."),a("br"),a("br")]),t._v(" "),t._m(9),a("p",[a("a",{attrs:{href:"http://teczno.com/squares",target:"_blank",rel:"noopener noreferrer"}},[t._v("좌표 참고 http://teczno.com/squares"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"http://geojson.xyz/",target:"_blank",rel:"noopener noreferrer"}},[t._v("geojson 참고 http://geojson.xyz/"),a("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("3차원 공간을 2차원 평면에 투영하는 방법을 결정하는 알고리즘")]),t._v(" "),t._m(11),t._m(12)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"d3-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d3-js","aria-hidden":"true"}},[this._v("#")]),this._v(" d3.js")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://d3js.org/d3.v5.min.js"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("86")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("456")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("214")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("52")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nd3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.chart'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selectAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'div'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'width'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" d"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"d3-기본문법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d3-기본문법","aria-hidden":"true"}},[this._v("#")]),this._v(" D3 기본문법")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_1차원-데이터를-이용한-막대-차트"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1차원-데이터를-이용한-막대-차트","aria-hidden":"true"}},[this._v("#")]),this._v(" 1차원 데이터를 이용한 막대 차트")])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"d3.js bar",src:"https://codepen.io/dimorin/embed/xxxPVWO?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/dimorin/pen/xxxPVWO"}},[this._v("d3.js bar")]),this._v(" by sunghee\n  ("),s("a",{attrs:{href:"https://codepen.io/dimorin"}},[this._v("@dimorin")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"_2차원-데이터를-이용한-산포도-scatterplot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2차원-데이터를-이용한-산포도-scatterplot","aria-hidden":"true"}},[this._v("#")]),this._v(" 2차원 데이터를 이용한 산포도(scatterplot)")])},function(){var t=this.$createElement,s=this._self._c||t;return s("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"d3.js 산포도",src:"https://codepen.io/dimorin/embed/KKKyzjP?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[this._v("\n  See the Pen "),s("a",{attrs:{href:"https://codepen.io/dimorin/pen/KKKyzjP"}},[this._v("d3.js 산포도")]),this._v(" by sunghee\n  ("),s("a",{attrs:{href:"https://codepen.io/dimorin"}},[this._v("@dimorin")]),this._v(") on "),s("a",{attrs:{href:"https://codepen.io"}},[this._v("CodePen")]),this._v(".\n")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"geojson"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#geojson","aria-hidden":"true"}},[this._v("#")]),this._v(" GeoJSON")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Feature"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"geometry"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Point"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"coordinates"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("125.6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Dinagat Islands"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"투영법"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#투영법","aria-hidden":"true"}},[this._v("#")]),this._v(" 투영법")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" projection "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("geo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("albersUsa")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("w"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("D3에는 내장된 투영법이 몇 가지 있다."),a("br"),t._v("\n알버스 USA(Albers USA) 투영법은 미국 남서부 아래쪽에 알래스카와 하와이를 넣어 보기 좋게 만든 합성 투영법이다."),a("br"),t._v(" "),a("code",[t._v("d3.geo.path()")]),t._v("의 기본 투영법이 albersUsa이다."),a("br"),t._v("\n투영법의 기본 척도scale은 1000이다."),a("br"),t._v(" "),a("iframe",{staticStyle:{width:"100%"},attrs:{height:"265",scrolling:"no",title:"d3.js geojson",src:"https://codepen.io/dimorin/embed/XWWzKYe?height=265&theme-id=0&default-tab=js,result",frameborder:"no",allowtransparency:"true",allowfullscreen:"true"}},[t._v("\nSee the Pen "),a("a",{attrs:{href:"https://codepen.io/dimorin/pen/XWWzKYe"}},[t._v("d3.js geojson")]),t._v(" by sunghee\n("),a("a",{attrs:{href:"https://codepen.io/dimorin"}},[t._v("@dimorin")]),t._v(") on "),a("a",{attrs:{href:"https://codepen.io"}},[t._v("CodePen")]),t._v(".\n")])])}],!1,null,null,null);s.default=e.exports}}]);