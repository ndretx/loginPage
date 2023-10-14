import styled from 'styled-components';
import { useState } from "react";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: #4285f4;
`;

export const LoginBox = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  width: 400px;
  text-align: center;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

export const LoginTitle = styled.h1`
  font-size: 24px;
  color: #4285f4;
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LoginButton = styled.button`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;
export const SignUpButton = styled.button`
  flex: 1;
  padding: 10px;
  margin: 5px;
  background-color: #4285f4;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ConfirmButton = styled.button`
  display: none;
  width: 100%;
  padding: 10px;
  margin: 5px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;
