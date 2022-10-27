import React, {useState} from 'react';
import styled, {css} from 'styled-components';
import {MdAdd} from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../TodoContext';
/* 새로운 항목을 등록할 수 있는 컴포넌트
useState를 사용하여 toggle할 수 있는 open값을 관리하며, 이 값이 true 일 때 아이콘을 45도 돌려서 X모양이 보이게 한 후, 버튼 색상을 빨간색을 바꿔준다.
할 일을 입력할 수 있는 폼도 보여준다. */

const CircleButton = styled.button`
    background: #38d9a9;
    &:hover{
        background: #63e6be;
    }
    &:active{
        background: #20c997;
    }

    z-index: 5;
    cursor: pointer;
    width: 80px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    font-size:60px;
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50%);
    color: white;
    border-radius: 50%;
    border: none;
    outline: none;
    displya: flex;
    align-items: center;
    justify-content: center;

    transition: 0.125s all ease-in; //속성을 서서히 변화시킨다
    //all:너비 확장과 높이 확장 모두 transition효과를 얻음. ease-in:천천-보통
    ${props => props.open && css`
        background: #ff6b6b;
        &:hover{
            background: #ff8787;
        }
        &:active{
            background:#fa5252;
        }
        transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertForm = styled.form`
    background: #f8f9fa;
    padding-left: 32px;
    padding-top: 32px;
    padding-right: 32px;
    padding-bottom: 72px;

    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    box-sizing: border-box;
`;

function TodoCreate(props) {
    const [open, setOpen] = useState(false); //open의 초기값: fasle
    const [value, setValue] = useState('');
    const dispatch = useTodoDispatch();
    const nextId = useTodoNextId();

    const onToggle = ()=>setOpen(!open);
    const onChange = (e)=>setValue(e.target.value);
    //새로운 항목을 추가하는 액션을 dispatch한 후, value초기화 및 open값 false로 전환
    const onSubmit = (e)=>{
        e.preventDefault(); //새로고침방지
        dispatch({type:'CREATE', todo:{id:nextId.current, text:value, done:false}});
        setValue('');
        setOpen(false);
        nextId.current += 1;
    };

    return (
        <div>
            {open && (
                <InsertFormPositioner>
                    <InsertForm onSubmit={onSubmit}>
                        <Input autoFocus placeholder="할 일을 입력 후, Enter을 누르세요." onChange={onChange} value={value}></Input>
                    </InsertForm>
                </InsertFormPositioner>
            )}
            <CircleButton onClick={onToggle} open={open}>
                <MdAdd></MdAdd>
            </CircleButton>
        </div>
    );
}

//React.memo: TodoContext에서 관리하고 있는 state가 바뀔 때 TodoCreate의 불필요한 리렌더링 방지
export default React.memo(TodoCreate);