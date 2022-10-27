import React from 'react';
import styled from 'styled-components';
//중앙에 정렬된 흰색 박스 만들기

const TodoTemplateBlock = styled.div`
    width:512px;
    height:768px;

    position:relative; //요소자기자신을 기준으로 배치, 추후 하단에 추가 버튼을 위치시키기 위한 설정
    background:white;
    border-radius:16px;
    box-shadow:0 0 8px rgba(0,0,0,0.04);

    margin:0 auto; //페이지 중앙에 나타나도록 설정
    margin-top:96px;
    margin-bottom:32px;
    display:flex; //flex item들이 수평으로 정렬
    flex-direction:column; //세로방향으로 
`;

function TodoTemplate({children}) {
    return (
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
}

export default TodoTemplate;