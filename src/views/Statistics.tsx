import Layout from '../components/layout';
import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';

const CategoryWrapper = styled.div`
  background: white;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
  >.note{
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
`;

function Statistics() {
  const {records} = useRecords();
  const {getName} = useTags();
  const [category, setCategory] = useState<'+' | '-'>('-');
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={(category) => setCategory(category)}/>
      </CategoryWrapper>
      <div>
        {records.map((r, index) => {
          return <Item key={index} className='tags'>
            {r.tagIds.map(tagId => <span key={tagId}>{getName(tagId)}</span>)}
            {r.note && <div className='note'>{r.note}</div>}
            <div className='amount'>¥{r.amount}</div>
            {/*ISO 8601 格式变成正常可以显示的格式用 dayjs 这个库 */}
            {/*{day(r.createdAt).format('YYYY年MM月DD日')}*/}
          </Item>;
        })}
      </div>

    </Layout>
  );
}

export default Statistics;