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
`;
const Tag: React.FC = () => {
  const {findTag, updateTag} = useTags();
  let {id: idString} = useParams();
  const tag = findTag(parseInt(idString));
  return (
    <Layout>
      <Topbar>
        <Icon name='left'/>
        <span>编辑标签</span>
        <Icon/>
      </Topbar>
      <InputWrapper>
        <Input type='text' label='编辑标签'
               placeholder='标签名' value={tag.name}
               onChange={(e) => {
                 updateTag(tag.id, {name: e.target.value});
               }}
        />
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