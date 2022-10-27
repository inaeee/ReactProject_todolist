import React, { createContext, useContext, useReducer, useRef } from 'react';
// Context API를 사용하면 프로젝트 안에서 전역적으로 사용할 수 있는 값을 관리할 수 있다. 특정 함수를 특정 컴포넌트로 전달할 때 편리하다.

const initialTodos = [
    {
        id:1,
        text:"프로젝트 생성하기",
        done:true
    },
    {
        id:2,
        text:"컴포넌트 스타일링하기",
        done:true
    },
    {
        id:3,
        text:"Context 만들기",
        done:false
    },
    {
        id:4,
        text:"기능 구현하기",
        done:false
    }
];

function todoReducer(state, action){
    switch(action.type){
        case 'CREATE':
            return state.concat(action.todo);
        case 'TOGGLE':
            return state.map(todo => todo.id===action.id?{...todo, done:!todo.done}:todo);
        case 'REMOVE':
            return state.filter(todo => todo.id!==action.id);
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

//두개의 Context를 만들어서 따로 넣어준다. dispatch만 필요한 컴포넌트에서 불필요한 렌더링을 방지할 수 있다.
const TodoStateContext = createContext();
const TodoDispatchContext = createContext();
const TodoNextIdContext = createContext();

//useReducer를 사용하여 상태를 관리하는 컴포넌트
export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);
    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

//컴포넌트에서 useContext를 직접 사용하는 대신에, useContext를 사용하는 커스텀 Hook을 만들어서 내보내주기
export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){
        throw new Error("Cannot find TodoProvider");
    }
    return context;
}
/*export default TodoContext; */