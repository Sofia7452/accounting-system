import styled from 'styled-components';
import React from 'react';
import {useTags} from 'useTags';
import {createId} from 'lib/createId';

const Wapper = styled.section`
  background: #ffffff;
  padding: 12px 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  >ol{margin: 0 -12px;
    >li{
      background:#D9D9D9;
      border-radius: 18px;
      display: inline-block;
      padding: 3px 18px;
      font-size: 14px;
      margin:8px 12px;
      &.selected{
        background: #f60;
      }
    }
  }
  >button{
    backgound:none;
    border: none;
    padding:2px 4px;
    border-bottom: 1px solid #333;
    color: #666;
    margin-top: 8px;
  }
`;
type Props = {
  value: number[];
  onChange: (selected: number[]) => void
};
// 函数的所有类型参数都是由<>尖括号包起来的
const TagsSection: React.FC<Props> = (props) => {
  const {tags, setTags} = useTags();
  const selectedTagIds = props.value;
  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName) {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const onToggleTag = (tagId: number) => {
    const index = selectedTagIds.indexOf(tagId);
    if (index >= 0) {
      //不能操作原数组，且只能返回新的数组
      props.onChange(selectedTagIds.filter(t => t !== tagId));
    } else {
      props.onChange([...selectedTagIds, tagId]);
    }
  };
  return (
    <Wapper>
      <ol>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => {onToggleTag(tag.id);}}
              className={selectedTagIds.indexOf(tag.id) >= 0 ? 'selected' : ''}
          >{tag.name}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wapper>
  );
};

export {TagsSection};