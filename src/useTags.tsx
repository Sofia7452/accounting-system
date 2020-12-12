import {useState} from 'react';
import {createId} from 'lib/createId';
//封装自定义hook，最后return出需要外媒使用的方法和函数
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(
    [
      {id: createId(), name: '衣'},
      {id: createId(), name: '食'},
      {id: createId(), name: '住'},
      {id: createId(), name: '行'},
    ]
  );
  return {
    tags,
    setTags
  };
};

export {useTags};
