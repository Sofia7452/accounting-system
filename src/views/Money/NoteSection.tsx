//⚠️： white-space: nowrap可以让内容不换行
import styled from 'styled-components';
import React, {useRef} from 'react';

const Wrapper = styled.section`
  background: #f5f5f5;
  padding: 0 16px;
  font-size: 14px;
  >label{
    display: flex;
    align-items: center;
    >span{margin-right: 16px; white-space: nowrap}
    >input{
      display: block;
      width: 100%;
      height: 72px;
      background: none;
      border: none;
    }
  }
`;
type Props = {
  value:string,
  onChange:(value:string)=>void
}
const NoteSection: React.FC<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current) {
      console.log(refInput.current.value);
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <label>
        <span>备注</span>
        <input type='text' placeholder='在这里添加备注'
          // 1.受控：过程变化都控制
          // value={note} onChange={e=>props.onChange(e.target.value)}
          // 2.非受控：过程变化不关心，关心最后的结果
          // 这里必须用defaultValue
               ref={refInput} defaultValue={note} onBlur={onBlur}
          // 3.细节注意：React onChange会在输入一个字的时候就触发
          //  HTML onchange 在鼠标移走的时候触发，早于onBlur
        />
      </label>
    </Wrapper>
  );
};
export {NoteSection};