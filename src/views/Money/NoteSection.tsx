//⚠️： white-space: nowrap可以让内容不换行
import styled from 'styled-components';
import React, {ChangeEventHandler} from 'react';
import {Input} from '../../components/input';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 14px 16px;
  font-size: 14px;
  
`;
type Props = {
  value: string,
  onChange: (value: string) => void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value;
  const onChange:ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <Wrapper>
      <Input label='备注' type='text'
             placeholder='在这里添加备注'
             value={note} onChange={onChange}
      />
      {/*// 1.受控：过程变化都控制*/}
      {/*// value={note} onChange={e => props.onChange(e.target.value)}*/}
      {/*// 2.非受控：过程变化不关心，关心最后的结果*/}
      {/*// 这里必须用defaultValue*/}
      {/*// ref={refInput} defaultValue={note} onBlur={onBlur}*/}
      {/*// 3.细节注意：React onChange会在输入一个字的时候就触发*/}
      {/*// HTML onchange 在鼠标移走的时候触发，早于onBlur*/}
    </Wrapper>
  );
};
export {NoteSection};