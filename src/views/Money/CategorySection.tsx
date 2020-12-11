import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  >ul{
  display: flex;
  background: #c4c4c4;
    >li{
      width: 50%;
      text-align: center;
      padding: 16px 0;
      position: relative;
      &.selected::after{
        content:'';
        border-bottom: solid 3px #333;
        //1.下划线也可以通过设置高度设置
        //height: 3px;
        //background: #333;
        position:absolute;
        bottom: 0;
        //2.css绝对定位宽度变为0，所以需要手动输入宽度
        width: 100%;
        left: 0;
      }
    }
  }
`;
type Props = {
  value:'+'|'-',
  onChange:(value:'+'|'-')=>void
}
const CategorySection: React.FC<Props> = (props) => {
  const categoryMap = {'-': '支出', '+': '收入'};
  type Keys = keyof (typeof categoryMap)
  const categoryList: Keys[] = ['+', '-'];
  const category = props.value
  return (
    <Wrapper>
      <ul>
        {
          categoryList.map(c => (
            <li className={category === c ? 'selected' : ''}
                onClick={() => props.onChange(c)}
                key={c}
            >{categoryMap[c]}
            </li>
          ))
        }
      </ul>
    </Wrapper>
  );
};

export {CategorySection};