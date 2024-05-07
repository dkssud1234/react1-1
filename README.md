# 안익수 202030318

## 새로운 내용은 위에 작성
## 추가내용 

## 2024-05-01 강의 내용
### 훅의 규칙
* 첫 번쨰 규칙은 무조건 최상위 레벨에서만 호출해야 한다는 것임.  
* 따라서 반복문이나 조건문 또는 중첩된 함수들 안에서 훅을 호출하면 안 됨.  
* 아 규칙에 따라서 훅운 컴포넌트가 렌더링 될 때마다 같은 순서로 호출되어야 함. 
* 두 번쨰 규칙은 함수형 컴포넌트에서만 훅을 호출해야 한다는 것임
* 따라서 일반 자바스크립트 함수에서 훅을 호출하면 안됨.
* 훅은 함수형 컴포넌트 혹은 직접 만든 커스텀 훅에서만 호출할 수 있음.


### 커스텀 훅 
* 반복되는 로직을 리액트 내장 훅 들을 사용하여 구현한'내가 만든 훅'
* 커스텀 훅은 비즈니스 로직을 모듈화 하고 여러 컴포넌트에서 재사용할 수 있는 추상화된 API를 제공하는 데 사용된다.


### 커스텀 훅 추출하기
* use로 시작하는 훅을 만들고 내부에서 다른 훅을 호출하면 안됨.


## 2024-04-17 강의 내용
* node_modules : 라이브러리 모음 폴더
* public : 이미지 파일과 같은 static 파일 보관함. 빌드 시에 압축되지 않음.
* src : 소스 코드 보관함
* src 폴더 안에 있는 App.js : 메인페이지에 들어갈 HTML을 작성하는 곳




### 훅이란 무엇인가?
* 클래스형 컴포넌트애서는 생성자에서 state를 정의하고 ,setState 함수를 통해 state를 업데이트 함.  
*    예전에 사용하던 함수형 컴포넌트는 별도로 state를 정의하거나 컴포넌트의 셍명주기에 맞춰서 어떤 코드가 실행되도록 할수 없엇음 
*    함수형 컴포넌트에서도 state나 생명주기 함수의 기능을 사용하게 해주기 위해 추가된 기능이 hook임   
 *   HOOK이란 state와 생명주기 기능에 갈고리를 걸어 원하는 시점에 정ㅇ해진 함수를 실행되도록 만든 함수를 의미 
  *  훅의 이름은 모두  use로 시작함  


### useState
* useState는 함수형 컴포넌트에서 state를 사용하기 위한 Hook임  
``` 
const [state, setState] = useState(초기값);
```
### useEffect
* useState와 함께 가장 많이 사용하는 Hook임.
* 컴포넌트가 렌더링 될 때마다 특정 작업을 실행할 수 있도록 하는 Hook.
* useEffect는 component가 mount 됐을 때, component가 unmount 됐을 때, component가 update 됐을 때, 특정 작업을 처리할 수 있다.
* 첫번째 파라미터는 이펙트 함수가 들어가고, 두번째 파라미터로는 의존성 배열이 들어감 
* 즉, 클래스형 컴포넌트에서 사용할 수 있었던 생명주기 메소드를 함수형 컴포넌트에서도 사용할 수 있게 된 것이다.

### useMemo
* useMemo()혹은 Memoizde value를 리턴하는 훅임
* 이전 계산값을 갖고 있기 떄문에 연산량이 많은 작업의 반복을 피할 수 있슴
* 이 훅은 렌더링이 일어나는 동안 실행됨
* 따라서 렌더링이 일어나는 동안 실행돼서는 안될 작업을 넣으면 안됨
* 예를 들면 useEffect에서 실행되어야 할 사이드 이팩트 같은것임
```
const memoizedValue = useMemo(
    ()=> {
        //연산량이 높은 작업을 수행하여 결과를 반환
        return computerExopensiveValue(의존성 변수1, 의존성 변수2)

    },
    [의존성 변수1,의존성 변수2]
)
```

### useCallback
* useCallback()훅은 useMemo()와 유사한 역할을 함
* useMemo 는 특정 결과값을 재사용 할 때 사용하는 반면, useCallback 은 특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용합니다.




### userRef
* useRef()훅은 레퍼런스를 사용하기 위한 훅임
* 레퍼런스란 특정 컴포넌트에 접근할 수 있는 객체를 의미함
* useRef() 훅은 바로 이 레퍼런스 객체를 반환
* 레퍼런스 객체에는 .current라는 속성이 있는데, 이것은 현재 참조하고 있는 엘리먼트를 의미
* 즉 , 컴포넌트가 마운트 해제 전까지는 계속 유지된다는 의미
```
const refContainer = uesRef(초깃값)
```
### hook의 규칙
    최상위(at the Top Level)에서만 Hook을 호출해야 합니다
    오직 React 함수 내에서 Hook을 호출해야 합니다
    ESLint 플러그인

## 2024-04-03 강의 내용
### 컴포넌트에 대해 알아보기
1. 컴포넌트 구조라는 것은 작은 컴포넌트가 모여 큰 컴포넌트를 구성하고, 다시 이런 컴포넌트들이 모여서 전체 페이지를 구성한다는 것을 의미함.  
2. 컴포넌트는 재사용이 가능하기 떄문에 전체 코드의 양을 줄일 수 있어 개발 시간과 유지 보수 비용도 줄일 수 있음.  
3. 컴포넌트는 자바스크립트 함ㅅ처럼 입력과 출력이 있다는 면에서는 유사함  
4. 엘리먼트를 필요한 만큼 만들어 사용한다는 면에서는 객체 지향의 개념과 비슷함.  
### props에 대해 알아보기
1. props는 property (속성의) 준말.
2. 이 props가 바로 컴포넌트의 속성임.
3. 컴포넌트애 어떤 속성,props 를 넣느냐에 따라서 속성이 다른 엘리먼트가 출력됨.
4. props는 컴포넌트에 전달 할 다양한 정보를 담고 있는 자바스크립트 객체임.
#### props특징
1. 읽기 전용, 변경할 수 없다는 의미
2. 속성이 다른 엘리먼트를 생성하려면 새로운 props를 컴포넌트에 전달하면 됨.
#### Pure함수 Impure함수
* pure함수는 인수로 받은 정보가 함수 내부에서도 변하지 않는 함수.  
* impure함수는 인수로 받은 정보가 함수 내부에서 변하는 함수.
### 사용법
* JSX에서는 key-value쌍으로 props를 구성함

### 컴포넌트 만들기
1. 컴포넌트 종류
    * 리액트 초기 버전을 사용할 때는 클래스형 컴포넌트 주로 사용
    * 이후 hook이라는 개념이 나오면서 최근에는 함수형 컴포넌트를 주로 사용함
    * 예전에 작성된 코드나 문서들이 클래스형 컴포넌트를 사용하고 있기때문에, 클래스형 컴포넌트와 컴포넌트의 생명주기에 관해서도 공부해 두어야 함.

2. 함수형 컴포넌트
    * Welcome컴포넌트는 props를 받아, 받은 props중 name키의 값을 "안녕," 뒤에 넣어 반환함.  
3. 클래스형 컴포넌트
    * class 키워드 필요
    * Component로 상속을 받아야한다.
    * render() 메소드가 반드시 있어야한다.


4. 컴포넌트 이름짓기  
    * 이름은 항상 대문자로 시작
    * 리액트는 소문자로 시작하는 컴포넌트를 DOM태그로 인식하기 때문
    * 컴포넌트 파일 이름과 컴포넌트 이름은 같게 함

5. 컴포넌트 합성
    *컴포넌트 합성으     

6. state
    1. state란?
        * state는 리액트 컴포넌트의 상태를 의마함.
        * 상태의 의미는 정상인지 비정상인지가 아니라 컴포넌트의 데이터를 의마함.
        * 정확히는 컴포넌트의 변경가능한 데이터를 의미함.
        * State가 변하면 다시 렌더링이 되기 때문에 렌더링과 관련된 값만 state에 포함시켜야 함.
    2. 특징
        * 동일한 컴포넌트 두 군데에서 렌더링하면 각 컴포넌트는 완전히 독립된 state를 갖게 됩니다. 이 중 하나를 변경해도 다른 컴포넌트에는 영향을 미치지 않습니다.
        * state는 변경은 가능하다고 했지만 직접 수정해서는 안됨.
        * state를 변경하고자 할 때는 setstate() 를 사용.  

7. 생명주기에 대해 알아보기
    * 생명주기는 컴포넌트의 생성 시점, 사용 시점, 종료 시점을 나타내는 것이다.
    * constructor가 실행 되면서 컴포넌트가 실행됨.
    * 생성 직후 componentDidMount()함수가 호출됨.
    * 컴포넌트가 소멸하기 전까지 여러 번 랜더링 함.
    * 랜더링은 props,setState(), forceUpdateo()에 의해 상태가 변경되면 이루어짐.
    * 그리고 렌더링이 끝나면 componentDinUpdate()함수가 호출됨.
    * 마지막으로 컴포넌트가 언마운트 되면 compomentWillUnmount()함수가 호출됨.

    
## 2024-03-27 강의 내용
### JSX의 역할
1. JavaScript를 확장한 문법  
2. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용할 것을 권장함  
3. JSX라고 하면 템플릿 언어가 떠오를 수도 있지만, JavaScript의 모든 기능이 포함되어 있음  
4. 만일 JS작업할 경우 직접 createElement함수를 사용해야 함  

### 장점 
코드가 간결해짐
가독성이 향상
Injection Attack 으로 인해 보안이 강해짐

### JSX 사용법
1. 모든 자바스크립트 문법을 지원함  
2. 자바스크립트 문법에 XML과 HMTL 을 섞어서 사용  
3. 만일 html 과 xml 에 자바스크립트 코드를 사용하고 싶으면 {}를 사용함  
4. 실행 시키기 위해선 라이브러리를 바꿔줘야함  

### 엘리먼트
* 엘리먼트는 리액트 앱을 구성하는 요소  
* 웹사이트 경우는 DOM 엘리먼트이며 HTML요소를 의미함  

### 리액트 엘리먼트와 DOM엘리먼트 차이
리액트 엘리먼트는 Virtual VOM의 형태를 취하고있음  
DOM 엘리먼트는 페이지의 모든 정보를 갖고 있어 무거움  
반면 리액트 엘리먼트는 변화한 부분만 갖고 있어 가벼움  

### 엘리먼트의 생김새
리액트 엘리먼트는 자바스크립트 객체의 형태로 존재  
컴포넌트 속성 및 내부의 모든 children을 포함하는 일반 JS객체  
이 객체는 마음대로 변경할 수 없는 불변성을 갖고 있음  
내부적으로 자바스크립트 객체를 만드는 역할을 하는 함수가 createElement()

### 엘리먼트 특징
가장 큰 특징은 불변성  
즉, 한번 생성된 엘리먼트의 children이나 속성을 바꿀 수 없음  

### 만일 내용이 바뀌면?
이 떄는 컴포넌트를 통해 새로운 엘리먼트를 생성  
그 다음 이전 엘리먼트와 교체를 하는 방법으로 내용을 바꿈  
이렇게 교채허눈 적옵울 하기위해 Virtual DOM을 사용  

### 엘리먼트 렌더링하기
ROOT DOM node  
다음 html코드는 id 값이 root인 div태그로 단순하지만 리액트에 필수로 들어가는 아주 중요한 코드  
```
<div id ="root"></div>

const element = <h1>안녕, 리액트!</h1>;
ReactDOM.render(element,document.getElementById('root'));
```


## 2024-03-20 강의 내용
### react : 사용자 인터페이스를 만들기 위한 자바스크립트 라이브러리 <br>
복잡한 사이트를 쉽고 빠르게 만들고, 관리하기 위해 만들어진 것
다른 표현으로는 SPA를 쉽고 빠르게 만들 수있도록 해주는 도구  

### 장점
빠른 업데이트와 렌더링 속도 : virtual DOM(XML, GTML 문서의 각 항목을 계층으로 표현하여 생성, 변형, 삭제할 수 있도록 돕는 인터페이스)

1. 컴포넌트 기반 구조
리액트의 모든 페이지는 컴포넌트로 구성  
하나의 컴포넌트는 다른 여러개의 컴포넌트의 조합으로 구성  
블록의 조립하는 것처럼 컴포넌트를 조합해서 웹사이트 개발  
2. 재사용성
반복적인 작업을 줄여주기 때문에 생산성을 높여줌   
유지보수가 용이함  
재사용이 가능 하려면 해당 모듈의 의존성이 없어야 함  

3. 든든한 지원군
메타에서 오픈소스 프로젝트로 관리하고 있어 계속 발전  
4. 활발한 지식 공유
5. 모바일 앱 개발가능
리액트 네이티브라는 모바일 환경ui프레임워크를 사용하면 크로스 플랫폼 모바일 앱을 개발할 수 있음  
---
### 단점 
방대한 학습량  
높은 상태 관리 복잡도

### react 파일 생성 
`create-react-app

## 2024-03-13 강의 내용
### GitHub 사용법
깃허브 연동 방법
```
git config --global user.name "example"
git config --global user.email "example@example.com"
```
