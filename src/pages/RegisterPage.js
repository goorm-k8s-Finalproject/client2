import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 24px;
  padding: 5px 100px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 100px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #356DE6;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;
//아디 비번 값 받기
//값없으면 disabled
function RegisterPage() {
  return (
    <Container>
      <Input id="id" name="id" placeholder="Email" />
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Input
        id="password2"
        name="password2"
        type="password2"
        placeholder="Confirm Password"
      />
      <Button>Create</Button>
    </Container>
  );
}

export default RegisterPage;