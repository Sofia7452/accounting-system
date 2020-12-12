import {useState} from 'react';
import {createId} from 'lib/createId';
//封装自定义hook，最后return出需要外媒使用的方法和函数
const defaultTags = [
  {id: createId(), name: '衣'},
  {id: createId(), name: '食'},
  {id: createId(), name: '住'},
  {id: createId(), name: '行'},
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  const findTagIndex = (id: number) => {
    let result = -1;
    for (let i = 0; i < tags.length; i++) {
      if (tags[i].id === id) {
        result = i;
        break;
      }
    }
    return result;
  };
  const updateTag = (id: number, obj: { name: string }) => {
    const index = findTagIndex(id);
    const tagsClone = JSON.parse(JSON.stringify(tags));
    tagsClone.splice(index, 1, {id, name: obj.name});
    setTags(tagsClone);
  };
  //hooks 返回读，写，更新，查找索引
  return {
    tags,
    setTags,
    findTag,
    findTagIndex,
    updateTag
  };
};

export {useTags};
