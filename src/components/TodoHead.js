import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../TodoContext';
//오늘의 날짜, 요일, 남은 할 일 개수를 보여주기

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin:0px;
        font-size:36px;
        color:343a40;
    }
    .day{
        margin-top:4px;
        color:#868e96;
        font-size:21px;
    }
    .tasks-left{
        color:#20c997;
        font-size:18px;
        margin-top:40px;
        font-weight:bold;
    }
`;

function TodoHead(props) {
    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth()+1;
    let todayDate = today.getDate();
    let todayDay = today.getDay();
    if(todayDay===0) todayDay="일요일";
    else if(todayDay===1) todayDay="월요일";
    else if(todayDay===2) todayDay="화요일";
    else if(todayDay===3) todayDay="수요일";
    else if(todayDay===4) todayDay="목요일";
    else if(todayDay===5) todayDay="금요일";
    else todayDay="토요일";

    const todos = useTodoState();
    console.log(todos);
    const undoneTasks = todos.filter(todo => !todo.done);

    return (
        <TodoHeadBlock>
            <h1>{todayYear}년 {todayMonth}월 {todayDate}일</h1>
            <div className="day">{todayDay}</div>
            <div className="tasks-left">할일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    );
}

export default TodoHead;