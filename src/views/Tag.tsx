import React from 'react';
import Layout from '../components/layout';
import Icon from '../components/icon';
import {Button} from '../components/Button';
import styled from 'styled-components';
import {Input} from '../components/input';
import {Center} from '../components/Center';
import {Space} from '../components/Space';
import {useTags} from '../useTags';
import {useParams} from 'react-router-dom';

const Topbar = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  line-height: 20px;
  padding: 14px;
  background: white;
`;

const InputWrapper = styled.div`
  background: white;
  padding: 0 16px;
  margin-top: 8px;
`
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
      <InputWrapper>
        <Input type='text' label='编辑标签' placeholder='标签名' value={tag.name}/>
      </InputWrapper>
      <Center>
        <Space/>
        <Space/>
        <Space/>
        <Button>删除标签</Button>
      </Center>

    </Layout>
  );
};
export {Tag};