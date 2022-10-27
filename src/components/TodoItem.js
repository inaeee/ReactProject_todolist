import React from 'react';
import styled, {css} from 'styled-components';
import {MdDone, MdDelete} from 'react-icons/md'
import { useTodoDispatch } from '../TodoContext';
//각 할 일 항목들을 보여주는 TodoItem 컴포넌트 만들기, react-icons에서 MdDone 과 MdDelete 아이콘을 사용

const Remove = styled.div`
    display:flex;
    align-items:center;
    justify-content:center; //가로 축을 기준으로 좌우에 대한 정렬(center:요소들을 컨테너의 중앙으로 정렬)
    color:#dee2e6;
    font-size:24px;
    cursor:pointer;

    &:hover{ //:hover은 html에서 요소에 마우스를 올렸을 때 반응하게 하는 요소
        color:#ff6b6b;
    }
    //display:none;
`;

//Component Selector 기능 사용, TodoItemBlock 위에 커서가 있을 때 Remove 컴포넌트를 보여주라는 의미
const TodoItemBlock = styled.div`
    display:flex;
    align-items:center;
    padding-top:12px;
    padding-bottom:12px

    &:hover{
        ${Remove}{
            display:initial; //initial:초기값
        }
    }
`;

const CheckCircle = styled.div`
    width:32px;
    height:32px;
    border-radius:16px;
    border:1px solid #ced4da;
    font-size:24px;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right:20px;
    cursor:pointer;

    ${props => props.done && css`border:1px solid #38d9a9; color:#38d9a9;`}
`;

const Text = styled.div`
    flex:1;
    font-size:21px;
    color:#495057;
    ${props => props.done && css`color:#ced4da;`}
`;

function TodoItem({id, done, text}) {
    const dispatch = useTodoDispatch();
    const onToggle = ()=>dispatch({type:'TOGGLE', id});
    const onRemove = ()=>dispatch({type:'REMOVE', id});

    return (
        <TodoItemBlock>
            <CheckCircle done={done} onClick={onToggle}> {done && <MdDone></MdDone>} </CheckCircle>
            <Text done={done}> {text} </Text>
            <Remove onClick={onRemove}>
                <MdDelete></MdDelete>
            </Remove>
        </TodoItemBlock>
    );
}

//React.memo: 다른 항목이 업데이트될 때, 불필요한 리렌더링을 방지하게 되어 성능을 최적화할 수 있게 된다.
export default React.memo(TodoItem);