import React from 'react';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';
import Layout from '../components/layout';
import Icon from '../components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';

const Topbar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;
const Tag: React.FC = () => {
  const {findTag} = useTags();
  let {id} = useParams();
  const tag = findTag(parseInt(id));
  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      {/*<Input label='编辑标签' placeholder='标签名'/>*/}
      <div>
        <label>
          <span>编辑标签</span>
          <input type='text' placeholder='标签名'/>
        </label>
      </div>
      <Button>删除标签</Button>
    </Layout>
  );
};
export {Tag};