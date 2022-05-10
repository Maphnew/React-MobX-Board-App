# React-MobX-Board-App

Javascript 상태관리 라이브러리 중 하나인 [MobX](https://ko.mobx.js.org/README.html)를 React와 함께 구성하여 Board App을 만들어 본다. Store를 구성하는 방식을 두 가지로 나누어 구성해 볼 건데, 하나는 객체형, 하나는 class 형이다.

공식 홈페이지에서 설명하는 class 형 store에서는 `observable`, `computed`, `action`을 표시하기 위해 6버전 이전까지 [데코레이터](https://ko.mobx.js.org/enabling-decorators.html)를 사용하도록 권장했지만 버전6 이상에서는 호환성을 위해 `makeObservable`, `makeAutoObservable`을 사용할 것을 권장하고 있다. 6버전이 나온지 2년이 지났지만 인터넷에 떠도는 자료들은 하나같이 데코레이터를 사용하고 있어 참고하여 개발하는데 조금 애를 먹었다. 공식 홈페이지에 [store를 구성하는 방법](https://ko.mobx.js.org/observable-state.html)이 class형, factory function형, 객체형으로 나누어 잘 소개되어 있으니 구글링하는 것 보다 이 자료를 참고하는 게 좋다.

'mobx' 브랜치에는 객체형 store를 구성하였고, 'mobx-class-store'에는 class형 store를 구성하였다.

## 개념 이해하기

[10분만에 알아보는 MobX와 React](https://ko.mobx.js.org/getting-started.html) 문서를 보면서 개념을 이해해 보자.

### 핵심개념

상태(state)는 어플리케이션의 핵심이며, 관리할 때 어려운 점은 '일관되지 않는' 또는 '산재된 지역 변수들과 어울리지 않는' 상태 생성이다. 이를 해결하기 위해 다른 상태관리 솔루션들은 state를 변경 불가하게 만들고 수정하지 못하도록 제한하는 방법을 사용한다. 하지만 그런 방법은 새로운 문제를 발생시키는데, 데이터는 정규화되어야 하며 참조 무결성`referential integrity` 또한 보장할 수 없고, 데이터가 필요한 경우에 클래스와 같은 효과적인 개념을 사용하는 것이 불가능해진다.

MobX는 일관되지 않는 state가 애초에 생성되지 않도록 했다. 애플리케이션 내의 state에서 파생 가능한`can be derived` 모든 것이 자동으로 파생되도록 한다.

개념적으로 MobX는 애플리케이션을 스프레드시트처럼 다룬다.
