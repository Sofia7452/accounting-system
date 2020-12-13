import styled from 'styled-components';
import React from 'react';

const Label = styled.label`
  display: flex;
  align-items: center;
  >span{margin-right: 16px; white-space: nowrap}
  >input{
    display: block;
    width: 100%;
    height: 44px;
    background: none;
    border: none;
  }
`;
//Props除了接受自定义label属性还接受React.InputHTMLAttributes其他普通的属性
type Props = {
  label: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const {label, children, ...rest} = props;
  return (
    <Label>
      <span>{label}</span>
      <input {...rest}/>
    </Label>
  );
};
export {Input};