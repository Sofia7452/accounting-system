import styled from 'styled-components';
import React, {useState} from 'react';

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
  value: string[];
  onChange: (selected:string[])=>void
};
// 函数的所有类型参数都是由<>尖括号包起来的
const TagsSection: React.FC<Props> = (props) => {
  const [tags, setTags] = useState<string[]>(['衣', '食', '住', '行']);
  const selectedTags = props.value
  const onAddTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName) {
      setTags([...tags, tagName]);
    }
  };
  const onToggleTag = (tag: string) => {
    const index = selectedTags.indexOf(tag);
    if (index >= 0) {
      //不能操作原数组，且只能返回新的数组
      props.onChange(selectedTags.filter(t => t !== tag));
    } else {
      props.onChange([...selectedTags, tag]);
    }
  };
  return (
    <Wapper>
      <ol>
        {tags.map(tag =>
          <li key={tag} onClick={() => {onToggleTag(tag);}}
              className={selectedTags.indexOf(tag) >= 0 ? 'selected' : ''}
          >{tag}</li>
        )}
      </ol>
      <button onClick={onAddTag}>新增标签</button>
    </Wapper>
  );
};

export {TagsSection};