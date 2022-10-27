import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
import TodoItem from './TodoItem';
//여러 개의 할 일 항목을 보여주게 될 TodoList 만들기

const TodoListBlock = styled.div`
    flex:1; //자신이 선택한 영역을 꽉채우게
    padding:20px 32px;
    padding-bottom:48px;
    overflow-x:auto; 
    //overflow 속성은 요소의 박스에 내용이 더 길때, 어떻게 보일지 선택하는 속성/ auto:내용이 넘칠때만 가로 스크롤바표시
    // background:gray;
`;

function TodoList(props) {
    const todos = useTodoState();

    return (
        <TodoListBlock>
            {todos.map( todo=>(
                <TodoItem key={todo.id} id={todo.id} text={todo.text} done={todo.done}></TodoItem>
            ) )}
        </TodoListBlock>
    );
}

export default TodoList;