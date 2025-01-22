# TodoList_React

#### 📢 React 일정 관리 프로그램 개발 
🖥️ 개발환경 : React, JavaScript, Visual Studio Code      
📜 React ?     
> 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다.        
> 페이스북에서 개발한 라이브러리로 지속적으로 데이터가 변화하는 대규모 애플리케이션을 구축하는 목표로 개발되었다.          
> Angular, Vue 등의 다른 프레임워크와 달리 React는 오직 View만 담당하는 라이브러리로
> 내장되어 있는 기능이 부족해 third-party 라이브러리(React-Router, Redux)를 함께 사용한다.

<br>

```
[React 특징]

1. Virtual-dom
가상의 DOM(Document Object Model)으로 HTML 문서를 제어할 수 있는 API 트리 자료구조이다.
React가 가상 DOM을 사용하는 이유는 이벤트가 새로 발생할 때마다 실제 DOM과 비교하여 최소한의 변경사항만 반영하기 위함이다.
또한 실제 DOM에는 브라우저가 화면을 표현하는데 필요한 정보가 모두 들어있어 작업하기엔 무거우며 속도가 느리다.
그래서 가상 DOM을 이용해 효율성과 속도를 개선할 수 있다.

2. Component
Component는 재사용이 가능한 UI 구성 단위이다.
코드 재활용성이 증가하고 코드 유지보수가 용이해진다. 
해당 페이지가 어떻게 구성되었는지 파악하기 쉽다.
컴포넌트는 단일 개념이 아니고 또 다른 컴포넌트를 포함할 수 있다 (부모 컴포넌트-자식 컴포넌트)

3. JSX (JavaScript Syntax Extension)
자바스크립트 확장 문법으로 형태는 자바스크립트와 html을 합쳐놓은 형태이다.
```

<br> <br>

1. index.js : 앱의 진입 파일 (import를 통해 index.css 적용)
2. App.js : 앱을 전체적으로 구성한 파일 (index.js에서 App.js 호출, import를 통해 App.css 적용), 컴포넌트 형식으로 구성
3. TodoContext.js : Context API를 사용하면 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리할 수 있다.
특정 함수를 특정 컴포넌트로 전달할 때 편리하다.
> function TodoProvider useReducer를 사용하여 상태를 관리하는 컴포넌트       
> function useTodoState, useTodoDispatch, useTodoNextId 컴포넌트에서 useContext를 직접 사용하는 대신에, useContext를 사용하는 커스텀 Hook를 만들어서 내보내준다.

<br>

#### component
1. TodoCreate.js 새로운 항목을 등록할 수 있는 컴포넌트
2. TodoHead.js 오늘의 날짜, 요일, 남은 할 일 개수 보여줌 
3. TodoItem.js 각 할 일 항목을 보여줌. react-icons에서 MdDone 과 MdDelete 아이콘을 사용 
4. TodoList.js 여러 개의 할 일 항목을 보여줌
5. TodoTemplate.js 중앙에 정렬된 흰색 박스 만들기 

```
React.mome : state가 바뀔 때 불필요한 리렌더링 방지
```
