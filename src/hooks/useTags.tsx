import {useEffect, useState} from 'react';
import {createId} from 'lib/createId';
import {useUpdate} from './useUpdate';
//同一个页面可以通过useRef记录一个变量的变化处理逻辑
//切换页面几两个不同的页面比较难用useRef，此时选用window.localStorage方法，
//也可以选用子传父，父再传子的方法，那么也可以用 redux 的方法。
// 可以说能用window.localStorage，必然能用redux，就是用了全局的store管理数据。

//封装自定义hook，最后return出需要外媒使用的方法和函数
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>([]);
  useEffect(() => {
    let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]');
    // && window.localStorage.getItem('deleteToZero')!=='true'
    if (localTags.length === 0) {
      localTags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
    }
    setTags(localTags);
  }, []);

  useUpdate(() => {
    window.localStorage.setItem('tags', JSON.stringify(tags));
  }, tags);
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
    setTags(tags.map(tag => tag.id === id ? {id, name: obj.name} : tag));
  };
  const deleteTag = (id: number) => {
    let _tags = tags.filter(tag => tag.id !== id);
    // if (_tags.length === 0) {
    //   window.localStorage.setItem('deleteToZero','true')
    // } else {
    //   window.localStorage.setItem('deleteToZero','false')
    // }
    setTags(_tags);
  };
  const addTag = () => {
    const tagName = window.prompt("新标签的名称为");
    if (tagName !== null && tagName !== '') {
      setTags([...tags, {id: createId(), name: tagName}]);
    }
  };
  const getName = (id: number) => {
    const tag = tags.filter(t => t.id === id)[0];
    return tag ? tag.name : '';
  };

  //hooks 返回读，写，新增，更新，删除，查找索引
  return {
    tags,
    setTags,
    findTag,
    findTagIndex,
    updateTag,
    deleteTag,
    addTag,
    getName
  }
    ;
};

export {useTags};
