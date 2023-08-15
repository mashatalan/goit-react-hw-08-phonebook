import styled from '@emotion/styled';

export const FormStyled = styled.form`
  padding: 16px 10px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  font-size: 18px;
  border: 1px solid #1664e2;
  border-radius: 8px;
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CustomError = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 3px;
  width: 160px;
  border: 1px solid red;
  border-radius: 4px;
  color: red;
  font-size: 12px;
`;
