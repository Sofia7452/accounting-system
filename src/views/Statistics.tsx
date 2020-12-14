import Layout from '../components/layout';
import React, {ReactNode, useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import styled from 'styled-components';
import {RecordItem, useRecords} from '../hooks/useRecords';
import {useTags} from '../hooks/useTags';
import day from 'dayjs';
import 'core-js';

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
const Header = styled.h3`
  font-size: 12px;
  line-height:20px;
  padding: 10px 16px;
`;

function Statistics() {
  const {records} = useRecords();
  const {getName} = useTags();
  const [category, setCategory] = useState<'+' | '-'>('-');
  const selectedRecords = records.filter(r => r.category === category);
  let hash: { [k: string]: RecordItem[] } = {};//{'2020-04-11':[item,item],'2020-05-11':[item,item]}
  selectedRecords.forEach(r => {
    const key = day(r.createdAt).format('YYYY年MM月DD日');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });
  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) {return 0;} else if (a[0] > b[0]) {return -1;} else return 1;
  });
  return (
    <Layout>
      <CategoryWrapper>
        <CategorySection value={category}
                         onChange={(category) => setCategory(category)}/>
      </CategoryWrapper>
      {/*[date,records] 这里对数组进行析构，优雅且不用起奇怪的名字*/}
      {array.map(([date, records],index) => <div key={index}>
          <Header>
            {date}
          </Header>
          <div>
            {records.map((r, index) => {
              return <Item key={index} className='tags'>
                {
                  r.tagIds
                    .map(tagId => <span key={tagId}>{getName(tagId)}</span>)
                    .reduce((result,span,index,array)=>
                      result.concat(index<array.length-1?[span,'，']:[span])
                      ,[] as ReactNode[])
                }

                {r.note && <div className='note'>{r.note}</div>}
                <div className='amount'>¥{r.amount}</div>
                {/*ISO 8601 格式变成正常可以显示的格式用 dayjs 这个库 */}
                {/*{day(r.createdAt).format('YYYY-MM-DD')}*/}
              </Item>;
            })}
          </div>
        </div>
      )}


    </Layout>
  );
}

export default Statistics;