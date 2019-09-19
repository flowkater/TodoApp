import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline
} from "react-icons/md";
import styled, { css } from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  /* &:nth-child(even) {
    background: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  } */
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }

  ${props =>
    props.checked &&
    css`
      svg {
        color: #22b8cf;
      }
      .text {
        color: #adb5bd;
        text-decoration: line-through;
      }
    `}
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;

const ContainerVirtualized = styled.div`
  & + & {
    border-top: 1px solid #dee2e6;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;

  return (
    <ContainerVirtualized style={style}>
      <Container>
        <CheckBox checked={checked} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </CheckBox>
        <Remove onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </Remove>
      </Container>
    </ContainerVirtualized>
  );
};

export default React.memo(TodoListItem);
