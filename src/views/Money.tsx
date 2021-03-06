import Layout from '../components/layout';
import React, {useState} from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {NoteSection} from './Money/NoteSection';
import {CategorySection} from './Money/CategorySection';
import {NumberPadSection} from './Money/NumberPadSection';
import {useRecords} from '../hooks/useRecords';
import {NewRecordItem} from 'hooks/useRecords';
//styled(Layout)：styled-components封装组件样式的方法
const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;
const CategoryWapper = styled.div`
  background: #c4c4c4;
`;
const defaultFormData: NewRecordItem = {
  tagIds: [],
  note: '',
  category: '-',
  amount: '0',
};

function Money() {
  const {addRecord} = useRecords();
  const [selected, setSelected] = useState(defaultFormData);
  //Partial<Selected>对象类型中的部分
  const onChange = (obj: Partial<typeof selected>) => setSelected({
    ...selected,
    ...obj
  });
  const submit = () => {
    if (addRecord(selected)) {
      alert('保存成功');
      setSelected(defaultFormData);
    }
  };
  return (
    <MyLayout scrollTop={999}>
      <TagsSection value={selected.tagIds}
                   onChange={tagIds => onChange({tagIds})}/>
      <NoteSection value={selected.note}
                   onChange={note => onChange({note})}/>
      <CategoryWapper>
        <CategorySection value={selected.category} onChange={category => onChange({category})}/>
      </CategoryWapper>
      <NumberPadSection value={selected.amount}
                        onOk={submit}
                        onChange={value => onChange({amount: value})}/>
    </MyLayout>
  );
}

export default Money;