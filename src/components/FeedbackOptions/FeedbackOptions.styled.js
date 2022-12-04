import styled from 'styled-components';

export const BtnWraper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;  
`;

export const Btn = styled.button`
  width: 70px;  
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #ebdf02;

  font-size: 12px;
  &:hover {
    background-color: #d1c704;
    scale: 1.1;
`;