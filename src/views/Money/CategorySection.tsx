import styled from 'styled-components';

const CategorySection = styled.section`
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

export {CategorySection}