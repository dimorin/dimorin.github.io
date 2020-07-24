(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{175:function(t,e,r){"use strict";r.r(e);var s=r(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://gmlwjd9405.github.io/2018/09/14/process-vs-thread.html"),r("OutboundLink")],1)])]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v(": 컴퓨터 위에서 운영체제 위에서 연속적으로 실행되고 있는 프로그램을 말한다.\n: 운영체제 위에서 독립적으로 메모리에서 실행되고 있는 프로그램을 말한다.\n: 각각의 프로세스는 저마다 리소스 자원들이 정해져 있다.즉 프로세스마다 할당된 메모리나 데이터들이 지정되어져 있다.")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v(": 프로세스 안에는 프로그램을 위해서 작성된 코드 즉 프로그램을 실행하기 위한 코드가 들어있다.")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v(": 그 코드와 그 프로세스 안에서 함수들이 어떤 순서로 실행되어야 하는지 이 함수가 끝나면 어디로 다시 돌아가야 되는지에 대한 정보를 저장하고 있는 스택이 들어있다.")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v(": 힙은 오브젝트를 생성하거나 데이터를 만들때 그 데이터들이 저장되는 공간이다.\n힙에는 동적으로 할당된 변수들이 저장되는 반면에")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/"),r("OutboundLink")],1)])]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("웹 어플리케이션이 브라우저 위에 올라가는 순간 자바스크립트 엔진이 우리가 작성한 소스 코드를 한 줄 한 줄 해석하고 분석하고 실행하게 된다.\n어떤 구조인가.\njavascript engine\nmemory heap, call stack\n할당된 데이터들이 메모리 힙에 들어간다.\n콜스택은 우리가 함수를 실행하는 순서에 따라서 차곡차곡 쌓아놓는다.")]),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("스택은 LIFO 라고도 불린다. last in first out 하는 자료구조를 가지고 있다.")]),t._v(" "),t._m(14),t._v(" "),r("blockquote",[r("p",[r("a",{attrs:{href:"https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84"),r("OutboundLink")],1)])]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),r("p",[t._v("FIFO ( first in first out )")]),t._v(" "),t._m(17),t._v(" "),r("p",[t._v(": 콜 스택과 태스크 큐를 관찰한다.\n: 이벤트 루프는 프로세스가 동작하는 동안 계속 루프를 돌면서 콜 스택이 비어져 있다면 테스크 큐에 들어 있는 아이를 콜 스택으로 가져와서 자바스크립트 엔진이 수행할 수 있도록 도와준다.")]),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"event-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-loop","aria-hidden":"true"}},[this._v("#")]),this._v(" event loop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"프로세스와-쓰레드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스와-쓰레드","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스와 쓰레드")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"프로세스"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"프로세스-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-code","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스 - code")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"프로세스-stack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-stack","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스 - stack")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"프로세스-heap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-heap","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스 - heap")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"프로세스-data"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#프로세스-data","aria-hidden":"true"}},[this._v("#")]),this._v(" 프로세스 - data")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v(": 데이터에는 전역 변수나 스태틱 변수들이 할당되어진다.\n"),e("br"),this._v("\n그래서 각각의 프로세스는 자기들에게 필요한 코드 그리고 동작하고 있는 순서를 기억하는 스택\n데이터들이 들어있는 힙과 데이터 이런 것들이 각각 들어있다.\n"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"쓰레드"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#쓰레드","aria-hidden":"true"}},[this._v("#")]),this._v(" 쓰레드")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("쓰레드는 한 프로세스 안에서 여러 개가 동작할 수 있는데\n쓰레드는 각각 저마다 해야되는 업무를 배정받는다. 일명 일꾼.\n저마다 필요한 일들을 수행하게 되고 이 쓰레드는 자기들만의 수행해야 되는 함수의 호출을 기억해야 되기 때문에 쓰레드마다 스택이 할당되어져 있다.\n하지만 이 프로세스 안에서 동작하는 일꾼들은 결국은 한 프로그램을 위해서 일해야 되므로\n프로세스에 지정된 코드와 데이터 힙들을 공통적으로 접근해서 공통적으로 업데이트가 가능하다.\n즉 내 프로그램에서 음악을 들으면서 사진을 편집할 수 있는 어플리케이션이 있다면 각각 쓰레드 음악을 재생하는 쓰레드 하나와 사진을 편집할 수 있는 쓰레드\n그리고 다른 쓰레드에서는 이 음악의 데이터를 서버에서부터 받아와서 처리하는 이런 일들을 각각 저마다 할 수 있다.\n그리고 이런 쓰레드는 동시다발적으로 발생할 수 있기 때문에 이 프로세스가 조금 더 효율적으로 일을 할 수 있도록 도움을 준다.\n만약에 프로세스가 하나의 일 밖에 하지 못한다면 음악을 듣는 동안 사진 편집을 할 수가 없다.\n이렇게 쓰레드들이 안에 들어있기 때문에 다양한 일들을 동시에 할 수가 있다.\n여기서 포인트는, 쓰레드는 자신들이 일을 수행할 때 어디에서부터 어디까지 일을 했고 그 다음엔 어디로 가야 되는지 이런 일의 흐름을 기억할 수 있는 고유의 스택이 지정되어져 있지만,\n데이터나 코드나 힙 같은 공통적인 데이터 리소스는 프로세스에 있기 때문에 쓰레드들은 이 프로세스에 공통적으로 할당된 리소스에 동시다발적으로 접속해서 동시다발적으로 업데이트 해야 되서 서로 공유하면서 사용한다.\n그래서 멀티쓰레딩이 조금 어려운 이유는 그리고 멀티 쓰레딩을 잘못하면 공통적으로 업데이트하면서 이 순서가 맞지 않거나 하면 발생할 수 있는 문제가 조금 있다.\n"),e("br"),this._v(" "),e("br"),this._v("\n프로세스는 프로그래밍을 동작하는 최고의 단위이고, 쓰레드는 프로그램 안에서 동시에 여러개가 수행될 수 있는 작은 일꾼 단위이다.\n"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"자바스크립트-런타임-환경-엔진이해-스택개념정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#자바스크립트-런타임-환경-엔진이해-스택개념정리","aria-hidden":"true"}},[this._v("#")]),this._v(" 자바스크립트 런타임 환경(엔진이해, 스택개념정리)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("자바스크립트는 single Threaded 이다.\n"),e("br"),this._v("\n자바스크립트 언어 자체에는 멀티쓰레딩을 할 수 있는 방법은 없지만\n"),e("br"),this._v("\n이 자바스크립트가 동작하고 있는 브라우저 위에는 여러가지 쓰레드가 들어있다.\n그래서 브라우저 즉 웹 APIs 들을 이용하게 되면 멀티쓰레딩이 가능하다.\n자바스크립트가 동작하는 런타임 환경에서 즉 자바스크립트가 동작하고 있는 실행 환경에서는 다양한 방식을 이용해서 조금 멀티쓰레딩 같은 효과를 얻을 수 있다.\n"),e("br"),this._v("\n자바스크립트가 실행되는 이 런타임 환경에서는 즉 자바스크립트가 실행되는 실행 환경 위에서는 이런 멀티쓰레딩 뿐만 아니라 이벤트 루프를 이용해서 조금 더 다양한 동작을 실행할 수 있다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"javascript-engine"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript-engine","aria-hidden":"true"}},[this._v("#")]),this._v(" javascript engine")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"스택"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#스택","aria-hidden":"true"}},[this._v("#")]),this._v(" 스택")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"브라우저-런타임-환경이해-큐-개념-정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#브라우저-런타임-환경이해-큐-개념-정리","aria-hidden":"true"}},[this._v("#")]),this._v(" 브라우저 런타임 환경이해(큐 개념 정리)")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("자바스크립트 런타임 환경애서는 자바스크립트만으로는 할 수 있는 것이 한정적이다."),r("br"),t._v("\n하지만 웹APIs(DOM API, setTimeout, setInterval, fetch, event listener,...)는 할 수 있는 것들이 많다."),r("br"),t._v("\n웹 APIs는 브라우저에서 제공하는 API 이기 때문에 브라우저의 멀티쓰레딩을 이용해서 조금 더 다양한 일들을 동시에 실행할 수 있다.\n"),r("br"),r("br"),t._v("\n자바스크립트 엔진에는 콜 스택이 있고 콜스택은 순서대로 함수들이 실행하는 것을 담고 있다."),r("br"),t._v("\n그럼 이 웹 APIs를 통해서 우리가 등록한 콜백 함수는 어떻게 동작하는가?"),r("br"),t._v("\n어떻게 웹APIs와 자바스크립트 엔진이 서로 일을 하게 되는 건가?"),r("br"),t._v(" "),r("br"),r("br"),t._v("\n예를 들어 setTimeout을 호출했다고 가정하면,\nsetTimeout을 호출하는 순간\nsetTimeout은 콜백에서 지워지고\n웹 API는 타이머를 시작한다."),r("br"),t._v("\n타이머가 실행되고 있는 동안에도 즉 타이머와 자바스크립트 엔진은 병렬적으로 실행이 되고 있다가\n지정된 시간이 끝나면 웹APIs는 태스크 큐에 타이머 끝났어 여기 네가 등록한 콜백이야 이 콜백 자체를 태스크 큐에 집어 넣는다.\n이렇게 지정된 setTimeout이 끝나게 되면, 우리가 setTimeout을 호출할 때 콜백을 등록하잖아요 그 콜백이 태스크 큐에 들어오게 되요."),r("br"),t._v("\n이벤트 루프는 프로세스가 동작하는 동안 계속 루프를 돌면서 콜 스택이 비어져 있다면 테스크 큐에 들어 있는 아이를 콜 스택으로 가져와서 자바스크립트 엔진이 수행할 수 있도록 도와준다.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"queue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#queue","aria-hidden":"true"}},[this._v("#")]),this._v(" queue")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"이벤트-루프"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#이벤트-루프","aria-hidden":"true"}},[this._v("#")]),this._v(" 이벤트 루프")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"정리"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#정리","aria-hidden":"true"}},[this._v("#")]),this._v(" 정리")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v(": 자바스크립트 엔진에는 메모리 힙과 콜스택이 있다."),r("br"),t._v("\n: 콜스택은 함수가 실행되는 과정을 기억하기 위해서 쓰이는 자료구조이다."),r("br"),t._v("\n: 자바스크립트 런타임 환경에는 태스크 큐, 마이크로태스크 큐를 이용해서 비동기적인 처리를 하게 되는데 "),r("br"),t._v("\n: 태스크 큐는 한 번에 하나씩만 가지고 오고 마이크로 태스크 큐는 들어있는 아이들은 모두 다 수행할 때까지 가지고 오게 되고"),r("br"),t._v("\n: 렌더는 이벤트 루프가 주기적으로(매번은 아니지만) 브라우저에게 UI를 업데이트 하기 위해서 자주 들러준다."),r("br"),t._v("\n: 우리가 호출한 리퀘스트 애니메이션 프레임 콜백 큐는 이 업데이트가 일어나기 전에 한번 쭉 순회하면서 코두가 실행이 된다."),r("br"),t._v("\n: 웹 APIs에서 우리가 등록한 콜백을 특정한 이벤트가 발생하게 되면 태스크 큐에 넣어서 이 이벤트 루프라는 아이가 계속 감시하면서 콜스택이 비어져 있을 때 태스크 큐에 있는 아이를 하나씩 콜 스택으로 가져온다."),r("br"),t._v("\n: 콜 스택에서 수행중인 아이는 끝날때까지 보장이된다.")])}],!1,null,null,null);e.default=a.exports}}]);