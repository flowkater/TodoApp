import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import styled from "styled-components";

const Container = styled.form`
  display: flex;
  background: #495057;
`;

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;

  &::placeholder {
    color: #dee2e6;
  }

  flex: 1;
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: white;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.1s background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(""); // value 값 초기화

      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <Container onSubmit={onSubmit}>
      <Input
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <Button type="submit">
        <MdAdd />
      </Button>
    </Container>
  );
};

export default TodoInsert;
