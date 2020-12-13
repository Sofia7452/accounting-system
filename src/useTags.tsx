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
    //获取要更改的tag的下标
    const index = findTagIndex(id);
    //深拷贝tags得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把 tagsClone  的第 index 删掉，换成 {id, name: obj.name}
    tagsClone.splice(index, 1, {id, name: obj.name});
    setTags(tagsClone);
  };
  const deleteTag = (id: number) => {
    //获取要更删的tag的下标
    const index = findTagIndex(id);
    //深拷贝tags得到tagsClone
    const tagsClone = JSON.parse(JSON.stringify(tags));
    //把 tagsClone  的第 index 删掉
    tagsClone.splice(index, 1);
    setTags(tagsClone);
  };
  //hooks 返回读，写，更新，删除，查找索引
  return {
    tags,
    setTags,
    findTag,
    findTagIndex,
    updateTag,
    deleteTag
  };
};

export {useTags};
